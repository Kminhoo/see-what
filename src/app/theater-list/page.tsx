import { MOCK_DATA } from 'constants/theater/theaterIdName';
import Link from 'next/link';

const TheaterListPage = () => {
  return (
    <>
      <div className="mt-32">
        {MOCK_DATA?.map((data) => {
          return (
            <div key={data.id} className="border border-white text-white p-5 rounded-md mx-28 my-10 text-xl">
              <Link href={`/theater-list/${data.id}`}>{data.name}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TheaterListPage;
