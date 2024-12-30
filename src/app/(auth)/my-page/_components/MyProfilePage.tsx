'use client';

import Image from 'next/image';

import React, { useEffect, useMemo, useRef, useState } from 'react';

import { AuthError, User } from '@supabase/supabase-js';

import Button from '@components/common/Button';

import { createClient } from '@utils/supabase/client';
import { toast } from 'react-toastify';

const MyProfilPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error
      } = await supabase.auth.getUser();
      if (error) {
        console.error('사용자 정보를 가져오는 중 오류 발생:', error.message);
        return;
      }

      setUser(user);

      // 사용자의 닉네임과 프로필 이미지 가져오기
      if (user) {
        const { data, error } = await supabase
          .from('users')
          .select('nickname, profile_image')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('사용자 프로필 정보를 가져오는 중 오류 발생:', error.message);
        } else if (data) {
          setNickname(data.nickname || '');
          setProfileImage(data.profile_image || null);
        }
      }
    };
    fetchUser();
  }, [supabase]);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    if (!user) {
      console.error('사용자가 로그인하지 않았습니다.');
      return;
    }
    try {
      // 닉네임 업데이트
      const { error: nicknameError } = await supabase.from('users').update({ nickname: nickname }).eq('id', user.id); // 실제 사용자 ID로 대체해야 합니다

      if (nicknameError) throw nicknameError;

      // 프로필 이미지 업로드
      if (profileImage) {
        const file = await fetch(profileImage).then((res) => res.blob());
        const fileExt = file.type.split('/')[1];
        const fileName = `${user.id}_${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from('avatars').upload(fileName, file);

        if (uploadError) throw uploadError;

        // 프로필 이미지 URL 업데이트
        const {
          data: { publicUrl }
        } = supabase.storage.from('avatars').getPublicUrl(fileName);

        const { error: updateError } = await supabase
          .from('users')
          .update({ profile_image: publicUrl })
          .eq('id', user.id); // 실제 사용자 ID로 대체해야 합니다

        if (updateError) throw updateError;
      }

      toast.success('프로필이 업데이트되었습니다.');
    } catch (error) {
      if (error instanceof AuthError) {
        console.error('프로필 업데이트 중 오류 발생:', error.message);
      } else {
        console.error('알 수 없는 오류 발생:', error);
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-zinc-100 rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        {/* 프로필 이미지 섹션 */}
        <div className="relative cursor-pointer" onClick={handleImageClick}>
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border border-gray-200 overflow-hidden">
            {profileImage ? (
              <Image src={profileImage} alt="프로필" fill sizes="96px" className="object-cover rounded-full" />
            ) : (
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </div>
          <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
        </div>

        {/* 닉네임 입력 폼 */}
        <div className="w-full space-y-4">
          <input
            type="text"
            placeholder="닉네임을 입력하세요"
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={nickname}
            onChange={handleNicknameChange}
          />
          <Button
            type="button"
            className="w-full bg-buttonBackGround text-white py-2 rounded-md hover:bg-blackDefault transition-colors duration-200"
            onClick={handleSubmit}
          >
            저장
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyProfilPage;
