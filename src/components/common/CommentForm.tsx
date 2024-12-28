'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { CommentFormProps, GenericComment } from '@tsc/commentCommon';

const CommentForm = ({ relatedId, tableName, onCommentAdded }: CommentFormProps): JSX.Element => {
  const [newComment, setNewComment] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error
      } = await supabase.auth.getUser();
      if (error) {
        console.error('사용자 정보를 가져오는 중 오류 발생:', error);
      } else {
        setUser(user);
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

    if (!user) {
      alert('로그인이 필요합니다.');
      return;
    }

    const newCommentData =
      tableName === 'musical_review'
        ? {
            comment: newComment,
            user_id: user.id,
            musical_id: relatedId
          }
        : {
            comment: newComment,
            user_id: user.id,
            theater_id: relatedId
          };

    try {
      const { data, error } = await supabase.from(tableName).insert([newCommentData]).select();

      if (error) {
        console.error('댓글 등록 중 오류 발생:', error);
        alert('댓글 등록 중 오류가 발생했습니다.');
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
      console.error('댓글 등록 중 오류:', error);
      alert('댓글 등록 중 오류가 발생했습니다.');
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
