'use client';

import { useState } from 'react';

import Button from '@components/common/Button';
import CommentInput from '@components/common/CommentInput';

import updateComment from '@lib/actions/comment/updateComment';

import { CommentUpdateProps } from '@tsc/common/commentCommon';
import { toast } from 'react-toastify';

const CommentUpdate = ({ commentId, initialValue, tableName, nickname, onUpdate, onCancel }: CommentUpdateProps) => {
  const [newComment, setNewComment] = useState<string>(initialValue);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const updatedComment = await updateComment(tableName, {
        id: commentId,
        comment: newComment,
        nickname
      });
      toast.success('댓글이 성공적으로 수정되었습니다.');
      onUpdate({ id: commentId, comment: updatedComment.comment });
      onCancel();
    } catch (error) {
      toast.error('댓글 수정 중 오류가 발생했습니다.');
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
