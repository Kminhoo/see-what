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

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <CommentForm relatedId={relatedId} tableName={tableName} onCommentAdded={handleCommentAdded} />
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentSection;
