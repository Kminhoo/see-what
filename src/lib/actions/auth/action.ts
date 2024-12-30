'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { userLoginSchema } from '@lib/revalidation/userSchema';

import createClient from '@utils/supabase/server';

// 회원가입
export const signup = async (formData: FormData) => {
  const supabase = createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  };

  const { data: userData, error } = await supabase.auth.signUp(data);

  // 여기서 auth.users에 id, email 데이터 -> pubilc.users
  const pubilcUserData = {
    id: userData.user?.id,
    email: userData.user?.email,
    nickname: formData.get('nickname') as string
  };

  await supabase.from('users').insert(pubilcUserData);

  if (error) {
    console.log(error);
    redirect('/error');
  }

  revalidatePath('/login', 'layout');
  redirect('/login');
};

// 로그인
export const login = async (formData: FormData) => {
  const supabase = createClient();

  const result = userLoginSchema.safeParse({
    email: formData.get('email') as string,
    password: formData.get('password') as string
  });

  if (!result.success) {
    throw new Error(JSON.stringify(result.error.flatten().fieldErrors));
  }

  const { email, password } = result.data;
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath('/', 'layout');
  redirect('/');
};

// 구글 로그인 및 회원가입
export const googleLogin = async (currentUrl: string) => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${currentUrl}/api/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent'
      }
    }
  });
  if (error) {
    console.error('Google 로그인 오류:', error);
    return { error: error.message };
  }
  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
};

// 로그아웃
export const logout = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();

  redirect('/');
};
