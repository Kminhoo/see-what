'use server';

import { parseStringPromise } from 'xml2js';

export const fetchMusicalList = async () => {
  try {
    const response = await fetch(
      'http://kopis.or.kr/openApi/restful/pblprfr?service=28d71fcaa7744cb2b1b0afa728760a7d&stdate=20241201&eddate=20241230&cpage=1&rows=100&shcate=GGGA'
    );

    if (!response.ok) {
      throw new Error('에러 발생');
    }

    const text = await response.text();
    const data = await parseStringPromise(text, {
      explicitArray: false,
      trim: true
    });

    return data;
  } catch (error: any) {
    throw Error(error);
  }
};
