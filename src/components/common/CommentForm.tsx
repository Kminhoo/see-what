'use client';

import { useState, useEffect } from 'react';

import { User } from '@supabase/supabase-js';

import CommentInput from '@components/common/CommentInput';

import { createClient } from '@utils/supabase/client';

import { CommentFormProps, GenericComment, UserData } from '@tsc/common/commentCommon';

const CommentForm = ({ relatedId, tableName, onCommentAdded }: CommentFormProps) => {
  const [newComment, setNewComment] = useState<string>('');
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error: authError
      } = await supabase.auth.getUser();

      if (authError) {
        console.error('로그인 유저 정보를 가져오는 중 오류 발생:', authError);
        return;
      }

      setAuthUser(user);

      if (user) {
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single();

        if (userError) {
          console.error('users 테이블에서 유저 정보를 가져오는 중 오류 발생:', userError);
        } else {
          setUserData(userData);
        }
      }
    };

    fetchUser();
  }, [supabase]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newComment.trim()) {
      alert('댓글을 입력해주세요.');
      return;
    }

    if (!authUser) {
      alert('로그인이 필요합니다.');
      return;
    }
    const nickname = userData?.nickname || '닉네임 없음';

    const newCommentData =
      tableName === 'musical_review'
        ? {
            comment: newComment,
            user_id: authUser.id,
            nickname,
            musical_id: relatedId
          }
        : {
            comment: newComment,
            user_id: authUser.id,
            nickname,
            theater_id: relatedId
          };

    try {
      const { data, error } = await supabase.from(tableName).insert([newCommentData]).select();

      if (error) {
        alert(`댓글 등록 중 오류가 발생했습니다: ${error.message}`);
        return;
      }

      if (data && data.length > 0) {
        const newCommentWithRelatedId = {
          ...data[0],
          related_id: relatedId
        };
        setNewComment('');
        onCommentAdded(newCommentWithRelatedId as GenericComment);
        alert('댓글이 성공적으로 등록되었습니다.');
      }
    } catch (error) {
      alert(`댓글 등록 중 오류가 발생했습니다: ${error}`);
    }
  };

  return (
    <CommentInput
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      onSubmit={handleSubmit}
      buttonText="등록"
    />
  );
};

export default CommentForm;
