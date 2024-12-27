import { Metadata } from 'next';

import InfiniteMusicalList from '@components/ui/musical-list/InfiniteMusicalList';

export const metadata: Metadata = {
  title: 'SEEWHAT 뮤지컬 리스트',
  description: '현재 날짜부터 한달동안 상영중인 혹은 상영예정인 뮤지컬들의 리스트를 보여드립니다.'
};

export const revalidate = 86400;

const MusicalListPage = () => {
  return (
    <main>
      <InfiniteMusicalList />
    </main>
  );
};

export default MusicalListPage;
