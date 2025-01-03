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

    if (!user && request.nextUrl.pathname.startsWith('/my-page')) {
      return NextResponse.redirect(request.nextUrl.origin);
    }

    // 현재 로그인 상태이면서 경로가 /login 경우 홈화면으로 리다이렉트
    if (user && request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(request.nextUrl.origin);
    }

    // 현재 로그인 상태이면서 경로가 /sign-up 인 경우 홈화면으로 리다이렉트
    if (user && request.nextUrl.pathname.startsWith('/sign-up')) {
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
