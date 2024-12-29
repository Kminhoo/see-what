import Button from './Button';

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
        <div key={index} className='mt-3'>
          <Button
            type="button"
            onClick={() => onPageChange(index + 1)}
            className={`p-2 items-center text-white ${
              currentPage === index + 1 ? 'bg-darkGray' : 'bg-transparent'
            }`}
          >
            {index + 1}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/pagination';

// interface SwiperPaginationProps<T> {
//   items: T[];
//   itemsPerPage: number;
//   renderItem: (item: T, index: number) => JSX.Element;
// }

// const SwiperPagination = <T,>({
//   items,
//   itemsPerPage,
//   renderItem,
// }: SwiperPaginationProps<T>): JSX.Element => {
//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   return (
//     <Swiper
//       pagination={{
//         clickable: true,
//         renderBullet: (index, className) =>
//           `<span class="${className}">${index + 1}</span>`,
//       }}
//       modules={[Pagination]}
//       spaceBetween={10}
//       slidesPerView={1}
//       className=""
//     >
//       {Array.from({ length: totalPages }, (_, pageIndex) => (
//         <SwiperSlide
//           key={pageIndex}
//         >
//           <div className='flex flex-col gap-4 mb-14'>
//             {items
//               .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
//               .map((item, index) => renderItem(item, index))}
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default SwiperPagination;
