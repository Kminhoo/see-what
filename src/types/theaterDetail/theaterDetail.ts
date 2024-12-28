export interface TheaterDetail {
  fcltynm: string; // 공연장이름 name
  mt10id: string; // 공연장 id
  telno: string; // 전화번호 telephone
  relateurl: string; //홈페이지 주소 hompage_url
  adres: string; //주소 adress
  la: number; // 위도 lat
  lo: number; // 경도 lot
  restaurant: 'Y' | 'N'; // 레스토랑 여부 restaurant
  cafe: 'Y' | 'N'; // 카페 여부 cafe
  store: 'Y' | 'N'; // 상점 여부 store
  suyu: 'Y' | 'N'; // 수유실 여부 suyu
  parkbarrier: 'Y' | 'N'; // 주차 장애물 여부 park_barrier
  restbarrier: 'Y' | 'N'; // 휴식 공간 장애물 여부 rest_barrier
  runwbarrier: 'Y' | 'N'; // 경사로 장애물 여부 runw_barrier
  elevbarrier: 'Y' | 'N'; // 엘리베이터 장애물 여부  elev_barrier
  parkinglot: 'Y' | 'N'; // 주차장 여부 parking
  name: string;
}
