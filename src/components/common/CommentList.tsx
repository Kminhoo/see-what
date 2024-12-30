'use client';

import { useState, useEffect } from 'react';

import Button from '@components/common/Button';
import CommentDelete from '@components/common/CommentDelete';
import CommentUpdate from '@components/common/CommentUpdate';
import Pagination from '@components/common/Pagination';

import { createClient } from '@utils/supabase/client';
import { CommentListProps } from '@tsc/common/commentCommon';

const supabase = createClient();

const CommentList = ({
  comments: initialComments,
  tableName,
  onDelete,
  onUpdate
}: CommentListProps & {
  tableName: string;
  onDelete: (id: string) => void;
  onUpdate: (updatedComment: { id: string; comment: string }) => void;
}) => {
  const [comments, setComments] = useState(initialComments);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error.message);
        return;
      }
      setCurrentUserId(data?.user?.id || null);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    setComments(initialComments);
  }, [initialComments]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
                  commentUserId={comment.user_id}
                  nickname={comment.nickname}
                  onUpdate={(updatedComment) => {
                    setComments((prev) =>
                      prev.map((item) =>
                        item.id === updatedComment.id ? { ...item, comment: updatedComment.comment } : item
                      )
                    );
                    onUpdate(updatedComment);
                    setEditingId(null);
                  }}
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
                    {currentUserId === comment.user_id && (
                      <Button type="button" className="text-sm text-gray-500" onClick={() => setEditingId(comment.id)}>
                        수정
                      </Button>
                    )}
                    <CommentDelete
                      commentId={comment.id}
                      tableName={tableName}
                      onDelete={(id) => {
                        setComments((prev) => prev.filter((comment) => comment.id !== id));
                        onDelete(id);
                      }}
                      commentUserId={comment.user_id}
                    />
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
