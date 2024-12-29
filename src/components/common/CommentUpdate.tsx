'use server';

import { GenericComment } from '@tsc/commentCommon';
import { createClient } from '@utils/supabase/client';

const CommentUpdate = async (
  tableName: 'musical_review' | 'theater_review',
  updatedComment: Pick<GenericComment, 'id' | 'comment'> & { theater_id?: string }
): Promise<GenericComment> => {
  const supabase = createClient();

  // 테이블별 업데이트 데이터 타입 정의
  const updateData =
    tableName === 'musical_review'
      ? { comment: updatedComment.comment } // musical_review에 대한 데이터
      : { comment: updatedComment.comment, theater_id: updatedComment.theater_id! }; // theater_review에 대한 데이터

  const { data, error } = await supabase
    .from(tableName)
    .update(updateData)
    .eq('id', updatedComment.id)
    .select()
    .single();

  if (error) {
    console.error('Supabase Update Error:', error);
    throw new Error('댓글 수정 중 오류가 발생했습니다.');
  }

  // GenericComment 타입에 맞게 데이터 조작
  const formattedData: GenericComment = {
    ...data,
    related_id: tableName === 'musical_review' ? data.musical_id : data.theater_id, // 관련 ID 추가
    nickname: data.nickname || '닉네임 없음' // nickname이 없을 경우 기본값 제공
  };

  return formattedData;
};

export default CommentUpdate;
