import Pagination from '@components/common/Pagination';

import { Theater } from 'constants/theater/theaterIdName';

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

// import SwiperPagination from '@components/common/Pagination';
// import { Theater } from 'constants/theater/theaterIdName';

// interface PagenationProps {
//   items: Theater[];
//   itemsPerPage: number;
// }

// const TheaterListPagination = ({ items, itemsPerPage }: PagenationProps): JSX.Element => {
//   return (
//     <SwiperPagination
//       items={items}
//       itemsPerPage={itemsPerPage}
//       renderItem={(item) => (
//         <div key={item.id} className="p-4  text-white rounded-md">
//           <p>{item.name}</p>
//         </div>
//       )}
//     />
//   );
// };

// export default TheaterListPagination;
