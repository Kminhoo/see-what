import { Dispatch, SetStateAction } from 'react';

import SearchIcon from '@components/icons/Search';

interface SearchCompProps {
    searchTheater: string;
    setSearchTheater: Dispatch<SetStateAction<string>>;
}

const SearchComp = ({ setSearchTheater, searchTheater } : SearchCompProps) => {
  return (
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
  );
};

export default SearchComp;
