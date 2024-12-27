import Link from 'next/link';

import UserInfo from '@components/layout/UserInfo';

import createClient from '@utils/supabase/server';

const Header = async () => {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1280px] w-full m-auto flex items-center justify-between  p-4 text-white font-light">
        <h2 className="cursor-pointer text-2xl">
          <Link href="/">SEEWHAT</Link>
        </h2>
        <nav className="flex items-center gap-4">
          <Link href="/musical-list" className="text-[#bfbfbf] transition-colors hover:text-white">
            Musical List
          </Link>
          <Link href="/theater-list" className="text-[#bfbfbf] transition-colors hover:text-white">
            Theater Review
          </Link>
          {user && user.id ? (
            <>
              <UserInfo />
            </>
          ) : (
            <>
              <Link href="/login" className="text-[#bfbfbf] transition-colors hover:text-white">
                Login
              </Link>
              <Link href="/sign-up" className="text-[#bfbfbf] transition-colors hover:text-white">
                SignUp
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
