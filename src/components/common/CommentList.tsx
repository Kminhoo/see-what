'use client';

import { CommentListProps } from '@tsc/commentCommon';
import CommentDelete from './CommentDelete';
import CommentUpdate from './CommentUpdate';
import Pagination from './Pagination';
import { useState } from 'react';
import Button from './Button';

const CommentList = ({
  comments,
  tableName,
  onDelete
}: CommentListProps & { tableName: string; onDelete: (id: string) => void }): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState<string | null>(null);
  const itemsPerPage = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCommentUpdated = (updatedComment: { id: string; comment: string }) => {
    comments = comments.map((comment) =>
      comment.id === updatedComment.id ? { ...comment, comment: updatedComment.comment } : comment
    );
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedComments = comments.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mt-4">
      <ul className="space-y-4">
        {paginatedComments.length > 0 ? (
          paginatedComments.map((comment) => (
            <li key={comment.id} className="p-4 bg-[#2E2E2E] text-white rounded-lg shadow-md">

              {editingId === comment.id ? (
                <CommentUpdate
                  commentId={comment.id}
                  initialValue={comment.comment}
                  tableName={tableName}
                  nickname={comment.nickname}
                  onUpdate={handleCommentUpdated}
                  onCancel={() => setEditingId(null)}
                />
              ) : (
                <>
                  <div className="text-darkGray flex gap-3">
                    <p>{comment.nickname}</p>
                    <p>{new Date(comment.created_at).toISOString().slice(0, 19).replace('T', ' ')}</p>
                  </div>
                  <p className="my-2 text-xl">{comment.comment}</p>
                  <div className="flex gap-2">
                    <Button type="button" className="text-sm text-gray-500" onClick={() => setEditingId(comment.id)}>
                      수정
                    </Button>
                    <CommentDelete commentId={comment.id} tableName={tableName} onDelete={() => onDelete(comment.id)} commentUserId={comment.user_id}/>
                  </div>
                </>
              )}
            </li>
          ))
        ) : (
          <p className="text-lightGray">아직 댓글이 없습니다.</p>
        )}
      </ul>

      <Pagination
        totalItems={comments.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};


export default CommentList;
