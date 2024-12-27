import Link from 'next/link';

import SignUpForm from './_components/SignUpForm';

const SignUpPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-white text-3xl font-bold mb-8">SEEWHAT</h1>
        <SignUpForm />
        <div className="flex flex-col items-center space-y-2 text-sm text-darkGray">
          <Link href="/login" className="hover:text-white">
            이미 계정이 있으신가요? Login
          </Link>
          <Link href="/" className="hover:text-white">
            홈페이지로 이동하기 Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
