import Image from 'next/image';
import Link from 'next/link';

import { Musical } from '@tsc/musicalList';

interface MusicalCardProps {
  id: Musical['mt20id'];
  poster: Musical['poster'];
  title: Musical['prfnm'];
  startDate: Musical['prfpdfrom'];
  endDate: Musical['prfpdto'];
  place: Musical['fcltynm'];
  awards: Musical['awards'];
}

const MusicalCard = ({ id, poster, title, startDate, endDate, place, awards }: MusicalCardProps) => {
  return (
    <Link
      href={`/musical-list/${id}`}
      className="block relative max-w-[300px] h-[400px] w-full rounded-md shadow-md overflow-hidden group"
    >
      <Image fill objectFit="cover" src={poster} alt="뮤지컬 이미지" className="w-full h-full" />
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {awards &&
          (typeof awards === 'string' ? (
            <div>{awards}</div>
          ) : (
            <ul className="absolute top-5 left-3">
              {awards.map((award, index) => (
                <li key={index} className="text-[13px] break-keep">
                  {award}
                </li>
              ))}
            </ul>
          ))}
        <div className="absolute bottom-5 left-3 text-white">
          <h3 className="break-keep font-medium text-lg mb-3">{title}</h3>
          <p className="text-sm break-keep">{place}</p>
          <p className="text-sm break-keep">
            {startDate} - {endDate}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MusicalCard;
