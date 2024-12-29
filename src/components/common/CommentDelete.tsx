'use client';

import { useState, useEffect } from 'react';
import { CommentDeleteProps } from '@tsc/commentCommon';
import { createClient } from '@utils/supabase/client';
import Button from '@components/common/Button';

const supabase = createClient();

const CommentDelete = ({ commentId, commentUserId, tableName, onDelete }: CommentDeleteProps): JSX.Element | null => {
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error.message);
        return;
      }

      const userId = data?.user?.id; // 사용자 객체 가져오기
      if (userId === commentUserId) {
        setIsOwner(true);
      }
    };

    fetchUser();
  }, [commentUserId]);

  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', commentId);

      if (error) {
        alert(`댓글 삭제 중 오류가 발생했습니다. ${error.message}`);
        return;
      }

      alert('댓글이 성공적으로 삭제되었습니다.');
      onDelete(commentId);
    } catch (error) {
      alert(`댓글 삭제 중 오류가 발생했습니다. ${error}`);
    }
  };

  // 내가 쓴 댓글이 아니면 삭제 버튼 숨김
  if (!isOwner) return null;

  return (
    <Button type="button" onClick={handleDelete} className="text-gray-500 hover:underline text-sm">
      삭제
    </Button>
  );
};

export default CommentDelete;
