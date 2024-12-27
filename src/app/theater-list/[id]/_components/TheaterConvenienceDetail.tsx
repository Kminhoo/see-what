import { BabyBottle } from '@components/icons/BabyBottle';
import { CafeIcon } from '@components/icons/Cafe';
import { ElevatorIcon } from '@components/icons/Elevator';
import { ParkingIcon } from '@components/icons/Parking';
import { RestaurantIcon } from '@components/icons/Restaurant';
import { RestroomIcon } from '@components/icons/Restroom';
import { WheelchairIcon } from '@components/icons/Wheelchair';
import { TheaterDetail } from '@tsc/theaterDetail/theaterDetail';
import wheelchairRamp from '@assets/images/wheelchairRamp.png';
import Image from 'next/image';

interface TheaterConvenienceProps {
  theaterInfo: TheaterDetail;
}

export default function TheaterConvenienceDetail({ theaterInfo }: TheaterConvenienceProps) {
  return (
    <>
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
                <WheelchairIcon />
                <span>화장실</span>
              </div>
            )}
            {theaterInfo.runwbarrier === 'Y' && (
              <div className="flex flex-col items-center">
                <Image src={wheelchairRamp} alt="wheelchair ramp" className="w-[50px] h-[50px]" />
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
    </>
  );
}
