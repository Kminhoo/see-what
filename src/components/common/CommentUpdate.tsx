'use client';

import { useState } from 'react';
import CommentInput from './CommentInput';
import Button from './Button';
import updateComment from '@utils/comment/updateComment';
import { CommentUpdateProps } from '@tsc/commentCommon';

const CommentUpdate = ({
  commentId,
  initialValue,
  tableName,
  nickname,
  onUpdate,
  onCancel
}: CommentUpdateProps): JSX.Element => {
  const [newComment, setNewComment] = useState<string>(initialValue);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const updatedComment = await updateComment(tableName, {
        id: commentId,
        comment: newComment,
        nickname
      });
      onUpdate({ id: commentId, comment: updatedComment.comment });
      onCancel();
    } catch (error) {
      alert('댓글 수정 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  return (
    <div>
      <CommentInput
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        onSubmit={handleSubmit}
        buttonText={'수정'}
      />
      <Button type="button" className="text-sm text-gray-500 mt-2" onClick={onCancel}>
        취소
      </Button>
    </div>
  );
};

export default CommentUpdate;
