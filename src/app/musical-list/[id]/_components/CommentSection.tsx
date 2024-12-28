'use client';

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@utils/supabase/client';
import CommentForm from './CommentForm';
import { MusicalComment } from '@app/types/Comment';

const CommentSection = ({ musicalId }: { musicalId: string }): JSX.Element => {
  const [comments, setComments] = useState<MusicalComment[]>([]);
  const supabase = createClient();

  const fetchComments = useCallback(async () => {
    const { data, error } = await supabase
      .from('musical_review')
      .select('id, comment, user_id, musical_id, created_at')
      .eq('musical_id', musicalId);

    if (error) {
      console.error('댓글 데이터를 가져오는 중 오류 발생:', error);
      setComments([]);
    } else if (data) {
      setComments(data as MusicalComment[]);
    }
  }, [musicalId, supabase]);

  const handleCommentAdded = (newComment: MusicalComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div>
      <CommentForm musicalId={musicalId} onCommentAdded={handleCommentAdded} />
      <div className="mt-4">
        <ul className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <li key={comment.id} className="p-4 bg-[#2E2E2E] text-white rounded-lg shadow-md">
                <p className="mb-2">{comment.comment}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-500">아직 댓글이 없습니다.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;
