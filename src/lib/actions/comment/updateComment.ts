'use server';

import { createClient } from '@utils/supabase/client';
import { GenericComment } from '@tsc/common/commentCommon';

const updateComment = async (
  tableName: 'musical_review' | 'theater_review',
  updatedComment: Pick<GenericComment, 'id' | 'comment' | 'nickname'> & {
    musical_id?: string;
    theater_id?: string;
  }
): Promise<GenericComment> => {
  const supabase = createClient();

  const updateData =
    tableName === 'musical_review'
      ? {
          comment: updatedComment.comment,
          nickname: updatedComment.nickname,
          musical_id: updatedComment.musical_id || ''
        }
      : {
          comment: updatedComment.comment,
          nickname: updatedComment.nickname,
          theater_id: updatedComment.theater_id || ''
        };

  const { data, error } = await supabase
    .from(tableName)
    .update(updateData)
    .eq('id', updatedComment.id)
    .select()
    .single();

  if (error) {
    console.error('댓글 업데이트 중 오류 발생:', error);
    throw new Error('댓글 업데이트 중 오류가 발생했습니다.');
  }

  return data as GenericComment;
};

export default updateComment;
