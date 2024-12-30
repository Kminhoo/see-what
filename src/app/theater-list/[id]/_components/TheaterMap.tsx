'use client';

import { Map, MapMarker } from 'react-kakao-maps-sdk';

import useKakaoLoader from '@hooks/theater-detail/useKakaoLoader';

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
        <Map
          id="map"
          center={{
            lat: theaterInfo.la,
            lng: theaterInfo.lo
          }}
          style={{
            width: '100%',
            height: '350px'
          }}
          level={3}
        >
          <MapMarker
            position={{
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
