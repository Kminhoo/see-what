import type { Metadata } from 'next';

import HomeCarousel from '@components/ui/home/HomeCarousel';
import HomeMusicalList from '@components/ui/home/HomeMusicalList';

import { fetchMusicalList } from '@lib/getMusicalLists';

export const metadata: Metadata = {
  title: 'SEEWHAT',
  description: '뮤지컬 팬들을 위한 정보와 리뷰 플랫폼. 공연 및 장소 리뷰를 공유하고 새로운 뮤지컬을 발견하세요."'
};

const HomePage = async () => {
  const data = await fetchMusicalList();

  return (
    <main>
      <HomeCarousel />
      <HomeMusicalList label="지역별 뮤지컬" firstSection={true} />
      {/* <HomeMusicalList label="어린이 뮤지컬" />
      <HomeMusicalList label="지방 뮤지컬" /> */}
    </main>
  );
};

export default HomePage;
