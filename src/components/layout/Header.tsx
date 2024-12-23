'use client';

import Link from 'next/link';

import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <div className="max-w-[1280px] w-full m-auto flex items-center justify-between  p-4 text-white font-light">
        <div className="cursor-pointer text-2xl" onClick={() => router.push('/')}>
          SEEWHAT
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/musical-list" className="text-[#bfbfbf] transition-colors hover:text-white">
            Musical List
          </Link>
          <Link href="/theater-list" className="text-[#bfbfbf] transition-colors hover:text-white">
            Theater Review
          </Link>
          <Link href="/login" className="text-[#bfbfbf] transition-colors hover:text-white">
            Login
          </Link>
          <Link href="/sign-up" className="text-[#bfbfbf] transition-colors hover:text-white">
            SignUp
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
