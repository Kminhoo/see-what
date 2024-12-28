'use server';

import { createClient } from '@utils/supabase/client';
import { MusicalComment } from '@app/types/Comment';

export const fetchComments = async (musicalId: string): Promise<MusicalComment[]> => {
  const supabase = createClient();

  const { data: comments, error } = await supabase.from('musical_review').select().eq('musical_id', musicalId);

  if (error) {
    console.error('댓글 데이터를 가져오는 중 오류 발생:', error);
    throw new Error('댓글 데이터를 가져오는 중 오류가 발생했습니다.');
  }

  return (comments || []) as MusicalComment[];
};
