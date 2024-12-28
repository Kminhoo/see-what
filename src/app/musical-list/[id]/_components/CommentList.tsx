import { MusicalComment } from '@app/types/Comment';
import { CommentFormProps } from '@app/types/MusicalDetail';
import { fetchComments } from '@utils/comment/fetchComments';

const CommentList = async ({ musicalId }: { musicalId: string }): Promise<JSX.Element> => {
  try {
    const comments: MusicalComment[] = await fetchComments(musicalId);

    return (
      <div className="mt-4">
        <ul className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment: MusicalComment) => (
              <li key={comment.id} className="p-4 bg-[#2E2E2E] text-white rounded-lg shadow-md">
                <p className="mb-2">{comment.comment}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-500">아직 댓글이 없습니다.</p>
          )}
        </ul>
      </div>
    );
  } catch (error: any) {
    return <p className="text-red-500">{error.message}</p>;
  }
};

export default CommentList;
