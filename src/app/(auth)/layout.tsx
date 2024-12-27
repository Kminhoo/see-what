import Image from 'next/image';
import authBackground from '@assets/images/authBackgroud.jpg';

const AuthLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      <Image src={authBackground} alt="Auth background" fill style={{ objectFit: 'cover' }} />
      <div className="z-10 relative">{children}</div>
    </div>
  );
};

export default AuthLayout;

import React from 'react';
