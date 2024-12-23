'use client';

const SignUpForm = () => {
  const handleSinup = () => {};
  return (
    <div className="w-full max-w-md space-y-4">
      <form className="space-y-4" onSubmit={handleSinup}>
        <input
          className="w-full p-3 bg-zinc-900 text-white rounded-sm border border-zinc-800 focus:outline-none focus:border-zinc-700"
          type="email"
          placeholder="e-mail"
        />
        <input
          className="w-full p-3 bg-zinc-900 text-white rounded-sm border border-zinc-800 focus:outline-none focus:border-zinc-700"
          type="password"
          placeholder="password"
        />
        <input
          className="w-full p-3 bg-zinc-900 text-white rounded-sm border border-zinc-800 focus:outline-none focus:border-zinc-700"
          type="password"
          placeholder="confirm password"
        />
        <input
          className="w-full p-3 bg-zinc-900 text-white rounded-sm border border-zinc-800 focus:outline-none focus:border-zinc-700"
          type="text"
          placeholder="nickname"
        />
        <button
          className="w-full p-3 bg-zinc-800 text-white rounded-sm hover:bg-zinc-700 transition-colors"
          type="submit"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
