import type { Metadata } from 'next';

import HomeCarousel from '@components/ui/home/HomeCarousel';
import HomeMusicalList from '@components/ui/home/HomeMusicalList';

import { fetchAwardMusicalList, fetchChildMusical, fetchMusicalList } from '@lib/actions/getMusicalLists';

import { Musical } from '@tsc/musicalList';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { format } from 'date-fns';

export const metadata: Metadata = {
  title: 'SEEWHAT',
  description: '뮤지컬 팬들을 위한 정보와 리뷰 플랫폼. 공연 및 장소 리뷰를 공유하고 새로운 뮤지컬을 발견하세요."'
};

const HomePage = async () => {
  const [musical, awardMusical, childMusical] = await Promise.all([
    fetchMusicalList(),
    fetchAwardMusicalList(),
    fetchChildMusical()
  ]);

  const date = new Date();
  const startDate = format(date, 'yyyyMMdd');
  const endDate = new Date().setDate(date.getDate() + 30);
  const endFormatDate = format(endDate, 'yyyyMMdd');

  console.log('startDate', startDate);
  console.log('endFormatDate', endFormatDate);

  const allMusical: Musical[] = musical.filter((_, index) => index < 31);
  const seoulMusical: Musical[] = musical.filter((item) => item.area?.includes('서울'));
  const regionMusical: Musical[] = musical.filter((item) => !item.area?.includes('서울'));

  return (
    <main>
      <HomeCarousel />
      <HomeMusicalList label="현재 상영 중인 뮤지컬" firstSection={true} data={allMusical} />
      <HomeMusicalList label="어린이 뮤지컬" data={childMusical} />
      <HomeMusicalList label="수상작 뮤지컬" data={awardMusical} />
      <HomeMusicalList label="수도권 상영 뮤지컬" data={seoulMusical} />
      <HomeMusicalList label="지방권 상영 뮤지컬" data={regionMusical} />
    </main>
  );
};

export default HomePage;
