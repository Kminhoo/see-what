import type { Metadata } from 'next';

import HomeCarousel from '@components/ui/home/HomeCarousel';
import HomeMusicalList from '@components/ui/home/HomeMusicalList';

import { fetchAwardMusicalList, fetchChildMusical, fetchMusicalList } from '@lib/actions/getMusicalLists';

import { getDateRange } from '@utils/getDateRange';

import { Musical } from '@tsc/musicalList';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const metadata: Metadata = {
  title: 'SEEWHAT',
  description: '뮤지컬 팬들을 위한 정보와 리뷰 플랫폼. 공연 및 장소 리뷰를 공유하고 새로운 뮤지컬을 발견하세요.'
};

export const revalidate = 86400;

const HomePage = async () => {
  const { startDate, endDate } = getDateRange();

  const [musical, awardMusical, childMusical] = await Promise.all([
    fetchMusicalList(startDate, endDate),
    fetchAwardMusicalList(startDate, endDate),
    fetchChildMusical(startDate, endDate)
  ]);

  const allMusical: Musical[] = musical.filter((_, index) => index < 31);
  const seoulMusical: Musical[] = musical.filter((item) => item.area?.includes('서울'));
  const regionMusical: Musical[] = musical.filter((item) => !item.area?.includes('서울'));

  return (
    <main>
      <HomeCarousel />
      <HomeMusicalList label="현재 상영 및 상영 예정 중인 뮤지컬" firstSection={true} data={allMusical} />
      <HomeMusicalList label="어린이 뮤지컬" data={childMusical} />
      <HomeMusicalList label="수상작 뮤지컬" data={awardMusical} />
      <HomeMusicalList label="서울지역 상영 뮤지컬" data={seoulMusical} />
      <HomeMusicalList label="서울 외 지역 상영 뮤지컬" data={regionMusical} />
    </main>
  );
};

export default HomePage;
