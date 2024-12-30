'use client';

import Image from 'next/image';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { googleLogin, login } from '@lib/actions/auth/action';

import Button from '@components/common/Button';
import AuthInput from '@app/(auth)/_components/AuthInput';

import { userLoginSchema } from '@lib/revalidation/userSchema';

import googleLoginLogo from '@assets/images/googleLoginLogo.png';

type LoginFormData = z.infer<typeof userLoginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(userLoginSchema)
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await login(formData);
  };

  const hadleGoogleLogin = () => {
    const currentUrl: string = window.location.origin;
    googleLogin(currentUrl);
  };

  return (
    <div className="w-[400px] max-w-full space-y-4">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <AuthInput type="email" placeholder="e-mail" {...register('email')} errorMessage={errors.email?.message} />
        <AuthInput
          type="password"
          placeholder="password"
          {...register('password')}
          errorMessage={errors.password?.message}
        />
        <Button
          className="w-full p-3 bg-buttonBackGround text-white rounded-sm hover:bg-zinc-700 transition-colors"
          type="submit"
          label="로그인"
        />
        <div className="flex justify-center mt-4">
          <Button type="button" onClick={hadleGoogleLogin}>
            <Image src={googleLoginLogo} alt="google Login" width={200} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
