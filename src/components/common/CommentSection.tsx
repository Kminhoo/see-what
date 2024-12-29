'use client';

import { useEffect, useState } from 'react';
import { fetchComments } from '@utils/comment/fetchComments';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { CommentSectionProps, GenericComment } from '@tsc/commentCommon';

const CommentSection = ({ relatedId, tableName }: CommentSectionProps): JSX.Element => {
  const [comments, setComments] = useState<GenericComment[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const data = await fetchComments(relatedId, tableName);
        setComments(data);
      } catch (err: any) {
        setError(err.message || '댓글을 가져오는 중 오류가 발생했습니다.');
      }
    };

    loadComments();
  }, [relatedId, tableName]);

  const handleCommentAdded = (newComment: GenericComment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  const handleCommentDeleted = (deletedId: string) => {
    setComments((prev) => prev.filter((comment) => comment.id !== deletedId));
  };

  const handleCommentUpdated = (updatedComment: { id: string; comment: string }) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === updatedComment.id
          ? { ...comment, comment: updatedComment.comment } // 수정된 댓글 업데이트
          : comment
      )
    );
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <CommentForm relatedId={relatedId} tableName={tableName} onCommentAdded={handleCommentAdded} />
      <CommentList
        comments={comments}
        tableName={tableName}
        onDelete={handleCommentDeleted}
        onUpdate={handleCommentUpdated}
      />
    </div>
  );
};

export default CommentSection;
