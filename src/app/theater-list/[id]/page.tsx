import { fetchTheaterDetail } from '@lib/theaterDetailApi/serverApi';
import { ParkingIcon } from '@components/icons/Parking';
import { RestroomIcon } from '@components/icons/Restroom';
import { RestaurantIcon } from '@components/icons/Restaurant';
import { CafeIcon } from '@components/icons/Cafe';
import { WheelchairIcon } from '@components/icons/Wheelchair';
import { ElevatorIcon } from '@components/icons/Elevator';
import { BabyBottle } from '@components/icons/BabyBottle';
import TheaterMap from './_components/TheaterMap';
import CommentForm from '@app/musical-list/[id]/_components/CommentForm';

interface TheaterDetailProps {
  params: { id: string };
}

const TheaterDetailPage = async ({ params }: TheaterDetailProps) => {
  const { id } = params;

  const theaterInfo = await fetchTheaterDetail(id);

  return (
    <>
      <div className="mt-20 text-white  flex flex-col items-center">
        <section className="mt-20 px-4 flex flex-col md:flex-row justify-between gap-10 w-full  max-w-screen-xl mx-auto">
          {/* 공연장 정보 Section */}
          <div className="flex-1">
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
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">편의시설</h3>
              <div className="flex gap-8 p-3">
                {theaterInfo.parkinglot === 'Y' && (
                  <div className="flex flex-col items-center">
                    <ParkingIcon />
                    <span>주차</span>
                  </div>
                )}
                <div className="flex flex-col items-center">
                  <RestroomIcon />
                  <span>화장실</span>
                </div>
                {theaterInfo.restaurant === 'Y' && (
                  <div className="flex flex-col items-center">
                    <RestaurantIcon />
                    <span>식당</span>
                  </div>
                )}
                {theaterInfo.cafe === 'Y' && (
                  <div className="flex flex-col items-center">
                    <CafeIcon />
                    <span>카페</span>
                  </div>
                )}
                {theaterInfo.suyu === 'Y' && (
                  <div className="flex flex-col items-center">
                    <BabyBottle />
                    <span>수유실</span>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">장애시설</h3>
              {theaterInfo.parkbarrier === 'Y' ||
              theaterInfo.restbarrier === 'Y' ||
              theaterInfo.runwbarrier === 'Y' ||
              theaterInfo.elevbarrier === 'Y' ? (
                <div className="flex gap-8 p-3">
                  {theaterInfo.parkbarrier === 'Y' && (
                    <div className="flex flex-col items-center">
                      <ParkingIcon />
                      <span>주차</span>
                    </div>
                  )}
                  {theaterInfo.restbarrier === 'Y' && (
                    <div className="flex flex-col items-center">
                      <RestroomIcon />
                      <span>화장실</span>
                    </div>
                  )}
                  {theaterInfo.runwbarrier === 'Y' && (
                    <div className="flex flex-col items-center">
                      <WheelchairIcon />
                      <span>경사로</span>
                    </div>
                  )}
                  {theaterInfo.elevbarrier === 'Y' && (
                    <div className="flex flex-col items-center">
                      <ElevatorIcon />
                      <span>엘리베이터</span>
                    </div>
                  )}
                </div>
              ) : (
                <span className="text-gray-500 text-xl">장애시설이 없습니다.</span>
              )}
            </div>
          </div>

          {/* 지도 Section */}
          <TheaterMap theaterInfo={theaterInfo} />
        </section>
      </div>
      <hr className="h-px bg-white border-0 my-10 max-w-screen-xl mx-auto" />
      <CommentForm />
    </>
  );
};

export default TheaterDetailPage;
