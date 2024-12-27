import { createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

export const updateSession = async (request: NextRequest) => {
  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers
      }
    });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
            response = NextResponse.next({
              request
            });
            cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
          }
        }
      }
    );

    const {
      data: { user }
    } = await supabase.auth.getUser();

    // // 로그인한 유저가 없고 사용자의 요청 url이 /login으로 시작하지 않고 사용자의 요청 url이 /sign-up로 시작하지 않으면
    if (!user && !request.nextUrl.pathname.startsWith('/login') && !request.nextUrl.pathname.startsWith('/sign-up')) {
      // no user, potentially respond by redirecting the user to the login page
      const url = request.nextUrl.clone();
      // 강제로 로그인 페이지로 이동시킨다.
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }

    // 현재 로그인 상태이면서 경로가 /login 또는 /sign-up 인 경우 홈화면으로 리다이렉트
    if (user && request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(request.nextUrl.origin);
    }

    return response;
  } catch (e) {
    console.error('Middleware error:', e);

    return NextResponse.next({
      request: {
        headers: request.headers
      }
    });
  }
};
