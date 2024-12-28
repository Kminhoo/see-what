'use client';

import { useState } from 'react';

import Pagenation from '@app/theater-list/_components/Pagenation';
import SearchComp from '@app/theater-list/_components/SearchComp';
import ListComp from '@app/theater-list/_components/ListComp';

import { MOCK_DATA } from 'constants/theater/theaterIdName';

const TheaterListComp = () => {
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
      {/* 검색기능 */}
      <SearchComp searchTheater={searchTheater} setSearchTheater={setSearchTheater} />

      {/* 공연장 리스트 */}
      <ListComp currentTheaterList={currentTheaterList} />
      
      {/* 페이지네이션 */}
      <Pagenation
        filteredTheater={filteredTheater}
        itemsPerPage={itemsPerPage}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </div>
  );
};

export default TheaterListComp;
