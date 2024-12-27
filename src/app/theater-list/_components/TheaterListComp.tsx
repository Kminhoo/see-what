'use client';

import Button from '@components/common/Button';
import SearchIcon from '@components/icons/Search';
import { MOCK_DATA } from 'constants/theater/theaterIdName';
import Link from 'next/link';
import { useState } from 'react';

export default function TheaterListComp() {
  const [searchTheater, setSearchTheater] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredTheater = MOCK_DATA.filter((theater) => theater.name?.includes(searchTheater));
  const totalPage = Math.ceil(filteredTheater.length / itemsPerPage);

  const currentTheaterList = filteredTheater.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mt-20 top-0 z-10 p-4 flex justify-center gap-3 items-center ">
        <SearchIcon />
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          value={searchTheater}
          onChange={(e) => setSearchTheater(e.target.value)}
          className="p-1 border-b-2 w-[500px] border-white bg-transparent text-white focus:outline-none focus:border-darkGray"
        />
      </div>

      <div>
        {currentTheaterList.length > 0 ? (
          currentTheaterList.map((theater) => (
            <div key={theater.id} className="border border-white text-white p-5 rounded-md mx-28 my-10 text-xl">
              <Link href={`/theater-list/${theater.id}`}>{theater.name}</Link>
            </div>
          ))
        ) : (
          <p className="text-white text-center h-[calc(100vh-20rem)] mt-20">검색 결과가 없습니다.</p>
        )}
      </div>

      {filteredTheater.length > itemsPerPage && (
        <div className="flex justify-center gap-3 mb-10">
          {Array.from({ length: totalPage }, (_, index) => (
            <Button
              type="button"
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-2 py-1 items-center text-white ${
                currentPage === index + 1 ? 'bg-darkGray' : 'bg-transparent'
              }`}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
