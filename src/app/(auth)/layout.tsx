const AuthLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* 로고 */}
      {children}
    </div>
  );
};

export default AuthLayout;
