'use client';

import { CommentListProps } from '@tsc/commentCommon';
import CommentDelete from './CommentDelete';

import Pagination from './Pagination';
import { useState } from 'react';

const CommentList = ({
  comments,
  tableName,
  onDelete
}: CommentListProps & { tableName: string; onDelete: (id: string) => void }): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
              <div className="text-darkGray flex gap-3">
                <p>{comment.nickname}</p>
                <p>{new Date(comment.created_at).toISOString().slice(0, 19).replace('T', ' ')}</p>
              </div>
              <p className="my-2 text-xl">{comment.comment}</p>
              <CommentDelete commentId={comment.id} tableName={tableName} onDelete={() => onDelete(comment.id)} />
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

// import SwiperPagination from '@components/common/Pagination';
// import { CommentListProps } from '@tsc/commentCommon';

// const CommentList = ({ comments }: CommentListProps): JSX.Element => {
//   const itemsPerPage = 5;
//   return (
//     <div className="mt-4">
//       <SwiperPagination
//         items={comments}
//         itemsPerPage={itemsPerPage}
//         renderItem={(comment) => (
//           <li key={comment.id} className="p-4 bg-[#2E2E2E] text-white rounded-lg shadow-md">
//             <div className="text-darkGray flex gap-3">
//               <p className="text-lg">{comment.user_id}</p>
//               <p className="text-lg">{new Date(comment.created_at).toISOString().slice(0, 19).replace('T', ' ')}</p>
//             </div>
//             <p className="my-2 text-xl">{comment.comment}</p>
//           </li>
//         )}
//       />
//     </div>
//   );
// };

// export default CommentList;
