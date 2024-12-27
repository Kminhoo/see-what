'use client';

import Image from 'next/image';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { googleLogin, login } from '@app/(auth)/action';
import googoleLogo from '@assets/images/googleLogo.png';
import { userLoginSchema } from '@lib/schemas/userSchema';

import Button from '@components/common/Button';
import Input from '@components/common/Input';

type LoginFormData = z.infer<typeof userLoginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(userLoginSchema)
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await login(formData);
  };

  const hadleGoogleLogin = () => {
    googleLogin();
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" placeholder="e-mail" {...register('email')} errorMessage={errors.email?.message} />
        <Input
          type="password"
          placeholder="password"
          {...register('password')}
          errorMessage={errors.password?.message}
        />
        <Button
          className="w-full p-3 bg-buttonBackGround text-white rounded-sm hover:bg-zinc-700 transition-colors"
          type="submit"
          label="로그인"
        />

        <Button type="button" onClick={hadleGoogleLogin}>
          <Image
            src={googoleLogo}
            alt="google Login"
            width={30}
            height={30}
            style={{ width: 30, height: 30 }}
            sizes="30px"
          />
        </Button>
      </form>
    </div>
  );
};
export default LoginForm;
