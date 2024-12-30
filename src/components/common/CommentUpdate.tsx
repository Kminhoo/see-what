'use client';

import { useState, useEffect } from 'react';

import Button from '@components/common/Button';
import CommentInput from '@components/common/CommentInput';

import { createClient } from '@utils/supabase/client';
import updateComment from '@lib/actions/comment/updateComment';

import { CommentUpdateProps } from '@tsc/common/commentCommon';

const supabase = createClient();

const CommentUpdate = ({
  commentId,
  initialValue,
  tableName,
  commentUserId,
  nickname,
  onUpdate,
  onCancel
}: CommentUpdateProps) => {
  const [newComment, setNewComment] = useState<string>(initialValue);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error.message);
        return;
      }

      const userId = data?.user?.id;
      if (userId === commentUserId) {
        setIsOwner(true);
      }
    };

    fetchUser();
  }, [commentUserId]);

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

  if (!isOwner) return null;

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
