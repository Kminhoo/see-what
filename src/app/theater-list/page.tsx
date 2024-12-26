"use client"

import { MOCK_DATA } from 'constants/theater/theaterIdName';
import Link from 'next/link';
import { useState } from 'react';

const TheaterListPage = () => {
  const [searchTheater, setSearchTheater] = useState('');

  const filteredTheater = MOCK_DATA.filter((theater) => theater.name?.includes(searchTheater))

  return (
    <>
    <div className="mt-20 top-0 z-10 p-4 flex justify-center">
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          value={searchTheater}
          onChange={(e) => setSearchTheater(e.target.value)}
          className="p-1 border-b-2 w-[500px] border-white bg-transparent text-white focus:outline-none focus:border-darkGray"
        />
      </div>
    
    <div>
    {filteredTheater.length > 0 ? (
      filteredTheater.map((theater) => (
        <div key={theater.id} className="border border-white text-white p-5 rounded-md mx-28 my-10 text-xl">
              <Link href={`/theater-list/${theater.id}`}>{theater.name}</Link>
            </div>
      ))
    ) : (
      <p className='text-white text-center h-[calc(100vh-20rem)] mt-20'>검색 결과가 없습니다.</p>
    )}
    </div>
    </>
  );
};

export default TheaterListPage;
