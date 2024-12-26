'use server';

import { parseStringPromise } from 'xml2js';

import { Musical } from '@tsc/musicalList';

export const fetchMusicalList = async (): Promise<Musical[]> => {
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

    return data.dbs.db;
  } catch (error: any) {
    throw Error(error);
  }
};

export const fetchAwardMusicalList = async (): Promise<Musical[]> => {
  try {
    const response = await fetch(
      'http://kopis.or.kr/openApi/restful/prfawad?service=28d71fcaa7744cb2b1b0afa728760a7d&stdate=20241201&eddate=20241230&cpage=1&rows=100&shcate=GGGA'
    );

    if (!response.ok) {
      throw new Error('에러 발생');
    }

    const text = await response.text();
    const data = await parseStringPromise(text, {
      explicitArray: false,
      trim: true
    });

    const musicals = data.dbs.db.map((musical: Musical) => ({
      ...musical,
      //awards 항목에서 br태그 분리
      awards:
        typeof musical.awards === 'string'
          ? musical.awards?.includes('<br>')
            ? musical.awards.split('<br>')
            : [musical.awards]
          : musical.awards
    }));

    return musicals;
  } catch (error: any) {
    throw Error(error);
  }
};

export const fetchChildMusical = async (): Promise<Musical[]> => {
  try {
    const response = await fetch(
      'http://kopis.or.kr/openApi/restful/pblprfr?service=28d71fcaa7744cb2b1b0afa728760a7d&stdate=20241201&eddate=20241230&cpage=1&rows=100&shcate=GGGA&kidstate=Y'
    );

    if (!response.ok) {
      throw new Error('에러 발생');
    }

    const text = await response.text();
    const data = await parseStringPromise(text, {
      explicitArray: false,
      trim: true
    });

    return data.dbs.db;
  } catch (error: any) {
    throw Error(error);
  }
};
