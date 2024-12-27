'use client';

import { createClient } from '@utils/supabase/client';
import { useState } from 'react';
import { User } from '@supabase/supabase-js';

const CommentForm: React.FC = () => {
  const [comment, setComment] = useState<string>('');
  const supabase = createClient();

  const handleSubmit = async (): Promise<void> => {
    if (!comment.trim()) {
      alert('댓글을 입력해주세요.');
      return;
    }

    try {
      const {
        data: { user },
        error: userError
      }: { data: { user: User | null }; error: Error | null } = await supabase.auth.getUser();

      if (userError) throw userError;
      if (!user) {
        alert('로그인이 필요합니다.');
        return;
      }

      const { error: insertError } = await supabase.from('musical_review').insert([
        {
          comment,
          user_id: user.id
        }
      ]);

      if (insertError) throw insertError;

      alert('댓글이 성공적으로 등록되었습니다.');
      setComment('');
    } catch (error) {
      console.error('댓글 등록 중 오류:', error);
      alert('댓글 등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="flex items-start gap-4 p-4 bg-[#1E1E1E] rounded-lg max-w-screen-xl mx-auto">
      {/* 댓글 입력 영역 */}
      <textarea
        className="flex-grow h-24 p-3 text-white bg-[#121212] border border-gray-700 rounded-lg resize-none"
        placeholder="댓글을 입력해주세요."
        value={comment}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
      ></textarea>

      <button
        className="px-10 py-2 bg-buttonBackGround text-white font-semibold rounded-lg h-24 flex items-center justify-center"
        onClick={handleSubmit}
      >
        등 록
      </button>
    </div>
  );
};

export default CommentForm;
