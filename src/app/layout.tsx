import { Inter } from 'next/font/google';

import './globals.css';

import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-blackDefault`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
