'use client';

import { CommentDeleteProps } from '@tsc/commentCommon';
import { createClient } from '@utils/supabase/client';
import Button from './Button';

const supabase = createClient();

const CommentDelete = ({ commentId, tableName, onDelete }: CommentDeleteProps): JSX.Element => {
  const handleDelete = async () => {
    try {
      const { error } = await supabase.from(tableName).delete().eq('id', commentId);

      if (error) {
        alert(`댓글 삭제 중 오류가 발생했습니다. ${error}`);
        return;
      }

      alert('댓글이 성공적으로 삭제되었습니다.');
      onDelete(commentId);
    } catch (error) {
      alert(`댓글 삭제 중 오류가 발생했습니다. ${error}`);
    }
  };

  return (
    <Button type="button" onClick={handleDelete} className="text-gray-500 text-sm">
      삭제
    </Button>
  );
};

export default CommentDelete;
