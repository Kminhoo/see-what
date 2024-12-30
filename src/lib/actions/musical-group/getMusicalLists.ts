'use server';

import { parseStringPromise } from 'xml2js';

import { Musical } from '@tsc/home/musicalList';

import { getDateRange } from '@utils/getDateRange';

export const fetchMusicalList = async (startDate: string, endDate: string): Promise<Musical[]> => {
  try {
    const response = await fetch(
      `http://kopis.or.kr/openApi/restful/pblprfr?service=${process.env.NEXT_PUBLIC_API_KEY}&stdate=${startDate}&eddate=${endDate}&cpage=1&rows=100&shcate=GGGA`
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
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error(String(error));
  }
};

export const fetchAwardMusicalList = async (startDate: string, endDate: string): Promise<Musical[]> => {
  try {
    const response = await fetch(
      `http://kopis.or.kr/openApi/restful/prfawad?service=${process.env.NEXT_PUBLIC_API_KEY}&stdate=${startDate}&eddate=${endDate}&cpage=1&rows=100&shcate=GGGA`
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
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error(String(error));
  }
};

export const fetchChildMusical = async (startDate: string, endDate: string): Promise<Musical[]> => {
  try {
    const response = await fetch(
      `http://kopis.or.kr/openApi/restful/pblprfr?service=${process.env.NEXT_PUBLIC_API_KEY}&stdate=${startDate}&eddate=${endDate}&cpage=1&rows=100&shcate=GGGA&kidstate=Y`
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
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error(String(error));
  }
};

interface FetchInfiniteMusicalListPromise {
  items: Musical[];
  nextPage: number | undefined;
}

export const fetchInfiniteMusicalList = async ({
  pageParam = 1
}: {
  pageParam: number;
}): Promise<FetchInfiniteMusicalListPromise> => {
  const { startDate, endDate } = getDateRange();

  try {
    const response = await fetch(
      `http://kopis.or.kr/openApi/restful/pblprfr?service=${process.env.NEXT_PUBLIC_API_KEY}&stdate=${startDate}&eddate=${endDate}&cpage=${pageParam}&rows=32&shcate=GGGA`
    );

    if (!response.ok) {
      throw new Error('에러 발생');
    }

    const text = await response.text();
    const data = await parseStringPromise(text, {
      explicitArray: false,
      trim: true
    });

    return {
      items: data.dbs.db,
      nextPage: data.dbs.db.length === 32 ? (pageParam += 1) : undefined
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error(String(error));
  }
};
