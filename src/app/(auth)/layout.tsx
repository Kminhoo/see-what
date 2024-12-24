const AuthLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="min-h-screen flex flex-col items-center justify-center p-4">{children}</div>;
};

export default AuthLayout;
