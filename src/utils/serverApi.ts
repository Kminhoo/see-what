import { MusicalDetailData } from '@tsc/musicalDetail';
import { KOPIS_BASE_URL } from 'constants/musical/musicalApiUrl';
import { parseStringPromise } from 'xml2js';

export const getMusicalDetailData = async (id: string): Promise<MusicalDetailData> => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!apiKey) {
    throw new Error('API 키가 없습니다.');
  }

  if (!id || typeof id !== 'string') {
    throw new Error('유효하지 않은 공연 ID입니다.');
  }

  try {
    const response = await fetch(`${KOPIS_BASE_URL}/${id}?service=${apiKey}`, {
      method: 'GET',
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`응답값을 가져오는데 문제가 발생하였습니다.: ${response.statusText}`);
    }

    const text = await response.text();
    const data = await parseStringPromise(text);
    console.log('Parsed JSON Data:', JSON.stringify(data));

    const details = data?.dbs?.db?.[0];

    if (!details) {
      throw new Error('API 응답 데이터를 찾을 수 없습니다.');
    }

    // MusicalDetailData에 맞게 데이터 반환
    return {
      mt20id: details.mt20id?.[0] || '',
      prfnm: details.prfnm?.[0] || '',
      prfpdfrom: details.prfpdfrom?.[0] || '',
      prfpdto: details.prfpdto?.[0] || '',
      fcltynm: details.fcltynm?.[0] || '',
      prfstate: details.prfstate?.[0] || '',
      genrenm: details.genrenm?.[0] || '',
      sty: details.sty?.[0] || '',
      poster: details.poster?.[0] || '',
      prfruntime: details.prfruntime?.[0] || '',
      prfage: details.prfage?.[0] || '',
      entrpsnm: details.entrpsnm?.[0] || '',
      entrpsnmP: details.entrpsnmP?.[0] || '',
      prfcrew: details.prfcrew?.[0] || '',
      prfcast: details.prfcast?.[0] || '',
      styurls: details.styurls?.[0]?.styurl || []
    };
  } catch (error: any) {
    throw new Error(`상세정보를 가져오는데 문제가 발생하였습니다.: ${error.message}`);
  }
};
