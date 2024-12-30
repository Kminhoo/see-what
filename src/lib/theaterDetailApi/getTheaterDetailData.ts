import { parseStringPromise } from 'xml2js';

import { TheaterDetail } from '@tsc/theaterDetail/theaterDetail';

export const fetchTheaterDetail = async (id: string): Promise<TheaterDetail> => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_SEE_WHAT_API_KEY;

    const theaterDetail = await fetch(`http://www.kopis.or.kr/openApi/restful/prfplc/${id}?service=${apiKey}`);

    if (!theaterDetail.ok) throw new Error(`fetchTheaterDetail api정보를 받아오지 못했습니다`);

    const text = await theaterDetail.text();
    const detailData = await parseStringPromise(text, {
      explicitArray: false,
      trim: true
    });

    const theaterDetailData = detailData.dbs.db;
    return { ...theaterDetailData, name: theaterDetailData.fcltynm };
  } catch (error: any) {
    throw error;
  }
};
