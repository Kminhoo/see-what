import { Inter } from 'next/font/google';

import './globals.css';

import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import Providers from '@components/provider/TQProvider';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} bg-blackDefault`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ReactQueryDevtools />
        </Providers>
      </body>
    </html>
  );
}
