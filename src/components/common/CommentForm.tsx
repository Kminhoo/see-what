'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { CommentFormProps, GenericComment, UserData } from '@tsc/commentCommon';

const CommentForm = ({ relatedId, tableName, onCommentAdded }: CommentFormProps): JSX.Element => {
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
    <form onSubmit={handleSubmit} className="flex items-start gap-4 p-4 bg-[#1E1E1E] rounded-lg">
      <textarea
        className="flex-grow h-24 p-3 text-white bg-[#121212] border border-gray-700 rounded-lg resize-none"
        placeholder="댓글을 입력해주세요."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        type="submit"
        className="px-10 py-2 bg-buttonBackGround text-white font-semibold rounded-lg h-24 flex items-center justify-center"
      >
        등록
      </button>
    </form>
  );
};

export default CommentForm;
