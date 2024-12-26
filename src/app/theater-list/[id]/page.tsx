import { CafeIcon } from '@components/icons/Cafe';
import { ParkingIcon } from '@components/icons/Parking';
import { RestaurantIcon } from '@components/icons/Restaurant';
import { RestroomIcon } from '@components/icons/Restroom';
import SearchIcon from '@components/icons/Search';

const TheaterDetailPage = () => {
  return (
    <>
      <div className="mt-20 text-white  flex flex-col items-center">
        <section className="mt-20 px-4 flex flex-col md:flex-row justify-between gap-10 w-full  max-w-screen-xl mx-auto">
          {/* 공연장 정보 Section */}
          <div className="flex-1">
            <div>
              <h1 className="text-4xl font-bold mb-10">충무 아트센터</h1>
              <div className="text-xl flex flex-col gap-4 mb-8">
                <p>전화번호 | 02-2230-6600</p>
                <p>주소 | 서울시 중구 퇴계로 387</p>
                <p>
                  홈페이지 |{' '}
                  <a href="http://www.caci.or.kr" className="underline text-blue-400">
                    http://www.caci.or.kr
                  </a>
                </p>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">편의시설</h3>
              <div className="flex gap-8 p-3">
                <div className="flex flex-col items-center">
                  <ParkingIcon />
                  <span>주차</span>
                </div>
                <div className="flex flex-col items-center">
                  <RestroomIcon />
                  <span>화장실</span>
                </div>
                <div className="flex flex-col items-center">
                  <RestaurantIcon />
                  <span>식당</span>
                </div>
                <div className="flex flex-col items-center">
                  <CafeIcon />
                  <span>카페</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">장애시설</h3>
              <div className="flex gap-8 p-3">
                <div className="flex flex-col items-center">
                  <ParkingIcon />
                  <span>주차</span>
                </div>
                <div className="flex flex-col items-center">
                  <RestroomIcon />
                  <span>화장실</span>
                </div>
                {/* <div className="flex flex-col items-center">
                <WheelchairIcon />
                <span>경사로</span>
              </div>
              <div className="flex flex-col items-center">
                <ElevatorIcon  />
                <span>엘리베이터</span>
              </div> */}
              </div>
            </div>
          </div>

          {/* 지도 Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">지도</h3>
            <div className="w-full h-96 bg-gray-700 flex items-center justify-center">
              <span className="text-lg">지도 영역</span>
            </div>
          </div>
        </section>
      </div>
      <hr className="h-px bg-white border-0 my-10 max-w-screen-xl mx-auto" />
    </>
  );
};

export default TheaterDetailPage;
