'use client';

import { fetchMusicalList } from '@lib/getMusicalLists';
import Link from 'next/link';
import { useEffect } from 'react';

interface HomeMusicalListProps {
  label: string;
  firstSection?: boolean;
}

const HomeMusicalList = ({ label, firstSection }: HomeMusicalListProps) => {
  useEffect(() => {
    fetchMusicalList().then((res) => console.log(res));
  }, []);
  return (
    <section className="text-white">
      <div>
        {firstSection && (
          <div>
            <Link href="/musical-list">뮤지컬 전체보기</Link>
          </div>
        )}
        <div>
          <h3>{label}</h3>
          <div className="text-white"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeMusicalList;
