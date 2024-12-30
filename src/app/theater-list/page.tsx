import type { Metadata } from 'next';

import TheaterListComp from '@app/theater-list/_components/TheaterListComp';

export const metadata: Metadata = {
  title: '공연장 정보',
  description: '현재 뮤지컬을을 하고 있는 공연장 정보를 확인하실 수 있습니다.'
};

const TheaterListPage = () => {
  return <TheaterListComp />;
};

export default TheaterListPage;
