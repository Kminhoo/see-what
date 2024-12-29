import { TheaterDetail } from '@tsc/theaterDetail/theaterDetail';

interface TheaterInfoProps {
  theaterInfo: TheaterDetail;
}

const TheaterInfoDetail = ({ theaterInfo }: TheaterInfoProps) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">{theaterInfo.fcltynm}</h1>
      <div className="text-xl flex flex-col gap-4 mb-8">
        <p>전화번호 | {theaterInfo.telno}</p>
        <p>주소 | {theaterInfo.adres}</p>
        <p>
          홈페이지 |{' '}
          <span title={theaterInfo.relateurl ? theaterInfo.relateurl : '홈페이지가 없습니다'}>
            {theaterInfo.relateurl && theaterInfo.relateurl.trim() ? (
              <a href={theaterInfo.relateurl} target="_blank">
                {theaterInfo.relateurl}
              </a>
            ) : (
              <span className="text-gray-500">홈페이지가 없습니다</span>
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TheaterInfoDetail;
