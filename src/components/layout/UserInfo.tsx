'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useEffect, useState } from 'react';

import User from '@components/icons/User';

import { logout } from '@lib/actions/auth/action';

const UserInfo = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  const pathName = useParams();

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  const logoutWithUser = async () => {
    await logout();
  };

  useEffect(() => {
    setDisplayMenu(false);
  }, [pathName]);

  return (
    <div className="user-menu relative">
      <User className="w-[35px] h-[35px] cursor-pointer" onClick={toggleMenu} />
      <div
        className={`
        absolute right-0 mt-2 w-30 
        transition-all duration-300 ease-in-out
        ${displayMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
      `}
      >
        <ul className="bg-white rounded-md shadow-lg overflow-hidden">
          <li
            className={`
              px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800
              transition-all duration-300 ease-in-out
              ${displayMenu ? 'translate-x-0' : '-translate-x-4 opacity-0'}
            `}
            style={{ transitionDelay: '50ms' }}
          >
            <Link href="/my-page">Profile</Link>
          </li>
          <li
            className={`
              px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800
              transition-all duration-300 ease-in-out
              ${displayMenu ? 'translate-x-0' : '-translate-x-4 opacity-0'}
            `}
            style={{ transitionDelay: '100ms' }}
            onClick={logoutWithUser}
          >
            SignOut
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
