import Button from '@components/common/Button';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) => {
  const totalPage = Math.ceil(totalItems / itemsPerPage);

  if (totalPage <= 1) return null;

  return (
    <div className="flex justify-center gap-3 mb-10">
      {Array.from({ length: totalPage }, (_, index) => (
        <div key={index} className="mt-3">
          <Button
            type="button"
            onClick={() => onPageChange(index + 1)}
            className={`p-2 items-center text-white ${currentPage === index + 1 ? 'bg-darkGray' : 'bg-transparent'}`}
          >
            {index + 1}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
