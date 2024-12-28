import { fetchComments } from '@utils/comment/fetchComments';
import { MusicalComment } from '@app/types/Comment';

const CommentList = async ({ musicalId }: { musicalId: string }): Promise<JSX.Element> => {
  const comments: MusicalComment[] = await fetchComments(musicalId);

  if (!comments || comments.length === 0) {
    throw new Error('댓글 데이터를 가져오지 못했습니다.');
  }

  return (
    <div className="mt-4">
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="p-4 bg-[#2E2E2E] text-white rounded-lg shadow-md">
            <p className="mb-2">{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
