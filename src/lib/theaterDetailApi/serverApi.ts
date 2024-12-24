import { parseStringPromise } from 'xml2js';
import { theaterName } from '@tsc/theaterDetail/theaterName';
import { theaterId } from '@tsc/theaterDetail/theaterId';

// export const fetchTheaterNameList = async (): Promise<theaterName[]> => {
//   const musicalInfo = await fetch(
//     `http://www.kopis.or.kr/openApi/restful/pblprfr?service=df0e793f1d47463c9ab5f574c949d9c9&prfstate=02&stdate=20241201&eddate=20261231&cpage=1&rows=100&shcate=GGGA`
//   );
//   if (!musicalInfo.ok || !musicalInfo) throw new Error('버전정보를 가져오지 못했습니다');

//   const text = await musicalInfo.text();
//   const musicalData = await parseStringPromise(text, {
//     explicitArray: false,
//     trim: true
//   });

//   const newData = Object.values(musicalData.dbs.db);
//   const facilityNames = newData.map((item) => item.fcltynm).sort((a, b) => a.localeCompare(b, 'ko'));
//   // console.log(facilityNames);

//   return facilityNames;
// };

// export const fetchTheaterIdList = async (): Promise<theaterId[]> => {
//   const musicalNameList = await fetchTheaterNameList();
//   // console.log('???', musicalName);

//   // Promise.all로 병렬적 api 요청
//   const results = await Promise.all(
//     musicalNameList.map(async (name) => {
//       const musicalInfo = await fetch(
//         `http://www.kopis.or.kr/openApi/restful/prfplc?service=df0e793f1d47463c9ab5f574c949d9c9&cpage=1&rows=100&shprfnmfct=${name}`
//       );
//       if (!musicalInfo.ok || !musicalInfo) throw new Error('fetchTheaterIdList api를 가져오지 못했습니다');

//       const text = await musicalInfo.text();
//       const musicalData = await parseStringPromise(text, {
//         explicitArray: false,
//         trim: true
//       });
//       const { fcltynm, mt10id } = musicalData.dbs.db;
//       console.log({ fcltynm, mt10id });
//       return { fcltynm, mt10id };
//     })
//   );

//   return results;
// };

// export const fetchTheaterDetailList = async (): Promise<theaterDetail[]> => {
//   const theaterDetail = await fetch(
//     `http://www.kopis.or.kr/openApi/restful/prfplc/FC000028?service=df0e793f1d47463c9ab5f574c949d9c9`
//   );
//   if (!theaterDetail.ok || !theaterDetail) throw new Error(`fetchTheaterDetailList api정보를 받아오지 못했습니다`);

//   const text = await theaterDetail.text();
//   const detailData = await parseStringPromise(text, {
//     explicitArray: false,
//     trim: true
//   });

//   // console.log('detailData', detailData.dbs.db);
//   return detailData.dbs.db;
// };
