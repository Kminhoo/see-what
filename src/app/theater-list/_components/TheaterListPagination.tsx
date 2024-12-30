import Pagination from '@components/common/Pagination';

import { Theater } from '@data/theater/theaterIdName';

interface TheaterListPaginationProps {
  filteredTheater: Theater[];
  itemsPerPage: number;
  totalPage: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const TheaterListPagination = ({
  filteredTheater,
  itemsPerPage,
  handlePageChange,
  currentPage,
  totalPage
}: TheaterListPaginationProps) => {
  return (
    <div>
      <Pagination
        totalItems={filteredTheater.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TheaterListPagination;
