'use client';

import { CommentListProps } from '@tsc/commentCommon';
import CommentDelete from './CommentDelete';

const CommentList = ({
  comments,
  tableName,
  onDelete
}: CommentListProps & { tableName: string; onDelete: (id: string) => void }): JSX.Element => {
  return (
    <div className="mt-4">
      <ul className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <li
              key={comment.id}
              className="p-4 bg-[#2E2E2E] text-white rounded-lg shadow-md flex justify-between items-center"
            >
              <p className="mb-2">{comment.comment}</p>
              <CommentDelete commentId={comment.id} tableName={tableName} onDelete={() => onDelete(comment.id)} />
            </li>
          ))
        ) : (
          <p className="text-gray-500">아직 댓글이 없습니다.</p>
        )}
      </ul>
    </div>
  );
};

export default CommentList;
