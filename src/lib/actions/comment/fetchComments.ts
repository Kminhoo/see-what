'use server';

import { GenericComment } from '@tsc/common/commentCommon';

export const fetchComments = async (
  relatedId: string,
  tableName: 'musical_review' | 'theater_review'
): Promise<GenericComment[]> => {
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('Supabase 환경 변수가 설정되지 않았습니다.');
  }

  // 커럼 이름 결정하기 위한 변수
  const fieldName = tableName === 'musical_review' ? 'musical_id' : 'theater_id';

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/${tableName}?${fieldName}=eq.${relatedId}&order=created_at.desc`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        apikey: `${SUPABASE_ANON_KEY}`
      },
      cache: 'no-store'
    }
  );

  if (!response.ok) {
    const errorDetails = await response.text();
    throw new Error(`댓글 데이터를 가져오는 중 오류가 발생했습니다: ${response.statusText} - ${errorDetails}`);
  }

  const comments = await response.json();
  return comments as GenericComment[];
};
