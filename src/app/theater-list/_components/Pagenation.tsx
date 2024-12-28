import Button from '@components/common/Button';

import { Theater } from 'constants/theater/theaterIdName';

interface PagenationProps {
  filteredTheater: Theater[];
  itemsPerPage: number;
  totalPage: number;
  currentPage: number;
  handlePageChange: (page: number) => void
}

const Pagenation = ({ filteredTheater, itemsPerPage, handlePageChange, currentPage, totalPage }: PagenationProps) => {
  return (
    <div>
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
};

export default Pagenation;
