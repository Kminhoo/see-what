'use client';

import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@lib/kakaoMap/useKakaoLoader';
import { TheaterDetail } from '@tsc/theaterDetail/theaterDetail';

interface TheaterInfoProps {
  theaterInfo: TheaterDetail;
}

const TheaterMap = ({ theaterInfo }: TheaterInfoProps) => {
  useKakaoLoader();

  return (
    <div className="flex-1">
      <h3 className="text-2xl font-semibold mb-4">지도</h3>
      <div className="w-full h-100 flex items-center justify-center">
        <Map // 지도를 표시할 Container
          id="map"
          center={{
            // 지도의 중심좌표
            lat: theaterInfo.la,
            lng: theaterInfo.lo
          }}
          style={{
            // 지도의 크기
            width: '100%',
            height: '350px'
          }}
          level={3} // 지도의 확대 레벨
        >
          <MapMarker // 마커를 생성합니다
            position={{
              // 마커가 표시될 위치입니다
              lat: theaterInfo.la,
              lng: theaterInfo.lo
            }}
          />
        </Map>
      </div>
    </div>
  );
};

export default TheaterMap;
