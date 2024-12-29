import Link from 'next/link';
import LoginForm from './_components/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEEWHAT 로그인',
  description: 'SEEWHAT에 안전하고 간편하게 SEEWHAT 로그인 하여 접속하세요.'
};

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-white text-3xl font-bold mb-8">SEEWHAT</h1>
      <LoginForm />
      <div className="flex flex-col items-center space-y-2 text-sm text-darkGray">
        <Link className="hover:text-white" href="sign-up">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
