'use client';

import { useEffect } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { useInView } from 'react-intersection-observer';

import MusicalCard from '@components/common/MusicalCard';

import InfiniteLoading from '@app/musical-list/_components/InfiniteLoading';
import InfiniteError from '@app/musical-list/_components/InfiniteError';

import { fetchInfiniteMusicalList } from '@lib/actions/getMusicalLists';

const InfiniteMusicalList = () => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending, isError } = useInfiniteQuery({
    queryKey: ['infiniteMusical'],
    queryFn: ({ pageParam }) => fetchInfiniteMusicalList({ pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
    retry: 3
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isPending)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <InfiniteLoading />
      </div>
    );

  if (isError)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <InfiniteError />
      </div>
    );

  return (
    <section>
      <div className="max-w-[1280px] m-auto py-[100px]">
        <div>
          <h2 className="text-center text-white text-2xl font-medium">전체 뮤지컬 리스트</h2>
          <div className="mt-[100px]">
            <div className="grid grid-cols-4 gap-4">
              {data.pages.map((page) =>
                page.items.map((musical) => (
                  <MusicalCard
                    key={musical.mt20id}
                    id={musical.mt20id}
                    poster={musical.poster}
                    title={musical.prfnm}
                    startDate={musical.prfpdfrom}
                    endDate={musical.prfpdto}
                    place={musical.fcltynm}
                    awards={musical.awards}
                  />
                ))
              )}
            </div>
            <div ref={ref}>
              {isFetchingNextPage ? (
                <div className="mt-[50px] text-white flex items-center justify-center">
                  <InfiniteLoading />
                </div>
              ) : hasNextPage ? (
                <div className="mt-[50px] text-white flex items-center justify-center">
                  <InfiniteLoading />
                </div>
              ) : (
                <div className="text-white text-center mt-[50px] text-lg">뮤지컬 검색 결과가 없습니다.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteMusicalList;
