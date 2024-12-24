'use server';

import Image from 'next/image';
import { getMusicalDetailData } from '@utils/serverApi';
import { MusicalDetailData } from '@app/types/MusicalDetail';

const MusicalDetailPage = async () => {
  const id = 'PF132236';

  try {
    const performance: MusicalDetailData = await getMusicalDetailData(id);

    return (
      <div className="max-w-screen-lg mx-auto p-6 bg-white">
        {/* 상단 제목 */}
        <h1 className="text-3xl font-bold mb-8">{performance.prfnm}</h1>

        {/* 포스터와 텍스트 정보 */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* 포스터 */}
          <div className="md:w-1/2">
            <Image
              src={performance.poster}
              alt={`${performance.prfnm} 포스터`}
              width={400}
              height={300}
              className="rounded shadow-md"
            />
          </div>
          {/* 텍스트 정보 */}
          <div className="md:w-1/2 flex flex-col space-y-2">
            <p>
              <strong className="font-semibold">공연장소</strong>
            </p>
            <p>{performance.fcltynm}</p>
            <p>
              <strong className="font-semibold">공연기간</strong>
            </p>
            <p>
              {performance.prfpdfrom} ~ {performance.prfpdto}
            </p>
            <p>
              <strong className="font-semibold">공연시간</strong>
            </p>
            <p>{performance.prfruntime}</p>
            <p>
              <strong className="font-semibold">관람연령</strong>
            </p>
            <p>{performance.prfage}</p>
            <p>
              <strong className="font-semibold">캐스팅</strong>
            </p>
            <p>{performance.prfcast}</p>
          </div>
        </div>

        {/* 소개 이미지 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">소개 이미지</h2>
          <div className="flex flex-col gap-6">
            {performance.styurls.map((url: string, index: number) => (
              <Image
                key={index}
                src={url}
                alt={`소개 이미지 ${index + 1}`}
                width={700}
                height={500}
                className="rounded shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">오류 발생</h1>
        <p className="text-red-600">{error.message}</p>
      </div>
    );
  }
};

export default MusicalDetailPage;
