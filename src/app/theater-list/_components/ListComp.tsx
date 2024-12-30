import Link from 'next/link';
import Image from 'next/image';

import { Theater } from '@data/theater/theaterIdName';

import oldman from '@assets/images/oldman3.jpg';

interface ListCompProps {
  currentTheaterList: Theater[];
}

const ListComp = ({ currentTheaterList }: ListCompProps) => {
  return (
    <div>
      {currentTheaterList.length > 0 ? (
        currentTheaterList.map((theater) => (
          <div key={theater.id} className="border border-white text-white p-5 rounded-md mx-28 my-10 text-xl">
            <Link href={`/theater-list/${theater.id}`}>{theater.name}</Link>
          </div>
        ))
      ) : (
        <Image src={oldman} alt="old man" />
      )}
    </div>
  );
};

export default ListComp;
