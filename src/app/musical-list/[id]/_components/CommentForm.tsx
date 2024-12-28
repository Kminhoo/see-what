import { createClient } from '@utils/supabase/client';
import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { MusicalComment } from '@app/types/Comment';
import { CommentFormProps, InsertComment } from '@app/types/MusicalDetail';

const CommentForm = ({ musicalId, onCommentAdded }: CommentFormProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [newComment, setNewComment] = useState<string>('');
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error: userError
      } = await supabase.auth.getUser();

      if (userError) {
        console.error('사용자 정보를 가져오는 중 오류 발생:', userError);
      } else {
        setUser(user);
      }
    };

    fetchUser();
  }, [supabase.auth]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!newComment.trim()) {
      alert('댓글을 입력해주세요.');
      return;
    }

    if (!user) {
      alert('로그인이 필요합니다.');
      return;
    }

    try {
      const { data, error: insertError } = await supabase
        .from('musical_review')
        .insert<InsertComment>([
          {
            comment: newComment,
            user_id: user.id,
            musical_id: musicalId
          }
        ])
        .select(); // 인서트 후에 데이터 반환 받아서 콜백으로 보내주기 위함

      if (insertError) {
        alert(`댓글 등록 중 오류가 발생했습니다: ${insertError.message}`);
        return;
      }

      if (data && data.length > 0) {
        alert('댓글이 성공적으로 등록되었습니다.');
        setNewComment('');
        onCommentAdded(data[0] as MusicalComment);
      } else {
        alert('댓글 등록은 성공했지만 반환된 데이터가 없습니다.');
      }
    } catch (error) {
      alert(`댓글 등록 중 오류: ${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-start gap-4 p-4 bg-[#1E1E1E] rounded-lg">
      <textarea
        className="flex-grow h-24 p-3 text-white bg-[#121212] border border-gray-700 rounded-lg resize-none"
        placeholder="댓글을 입력해주세요."
        value={newComment}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewComment(e.target.value)}
      ></textarea>

      <button
        type="submit"
        className="px-10 py-2 bg-buttonBackGround text-white font-semibold rounded-lg h-24 flex items-center justify-center"
      >
        등 록
      </button>
    </form>
  );
};

export default CommentForm;
