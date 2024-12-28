'use server';

import Image from 'next/image';
import { getMusicalDetailData } from '@utils/serverApi';
import { MusicalDetailData } from '@app/types/MusicalDetail';
import Tabs from './_components/Tabs';
import CommentForm from './_components/CommentForm';
import CommentList from './_components/CommentList';
import CommentSection from './_components/CommentSection';

const MusicalDetailPage = async () => {
  const id = 'PF132236';

  try {
    const performance: MusicalDetailData = await getMusicalDetailData(id);

    return (
      <div className="min-h-screen flex justify-center items-center pt-20">
        <div className="border border-gray-700 w-[1280px] mx-auto p-6 bg-[#121212] text-white rounded-lg">
          {/* 상단 제목과 포스터 */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* 포스터 */}
            <div className="md:w-1/3 flex flex-col items-center">
              <Image
                src={performance.poster}
                alt={`${performance.prfnm} 포스터`}
                width={380}
                height={450}
                className="rounded"
              />
            </div>

            {/* 텍스트 정보 */}
            <div className="md:w-2/3 flex flex-col">
              <h1 className="text-4xl font-bold mb-8 pt-4 border-b border-gray-700 pb-6">{performance.prfnm}</h1>
              <ul className="text-gray-300 mb-4 space-y-4 text-lightGray">
                <li>
                  <strong className="w-[80px] pr-2 inline-block">공연장소</strong> {performance.fcltynm}
                </li>
                <li>
                  <strong className="w-[80px] pr-2 inline-block">공연기간</strong> {performance.prfpdfrom} ~{' '}
                  {performance.prfpdto}
                </li>
                <li>
                  <strong className="w-[80px] pr-2 inline-block">공연시간</strong> {performance.prfruntime}
                </li>
                <li>
                  <strong className="w-[80px] pr-2 inline-block">관람연령</strong> {performance.prfage}
                </li>
                <li>
                  <strong className="w-[80px] pr-2 inline-block">기획제작사</strong> {performance.entrpsnm}
                </li>
                <li>
                  <strong className="w-[80px] pr-2 inline-block">제작사</strong> {performance.entrpsnmP}
                </li>
                <li>
                  <strong className="w-[80px] pr-2 inline-block">기획사</strong> {performance.prfcrew}
                </li>
                <li>
                  <strong className="w-[80px] pr-2 inline-block">캐스팅</strong> {performance.prfcast}
                </li>
              </ul>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-12">
            <Tabs tabs={['공연정보', '관람후기']}>
              {/* 소개 이미지 */}
              <div className="flex flex-col gap-6">
                {performance.styurls.map((url: string, index: number) => (
                  <Image
                    key={index}
                    src={url}
                    alt={`소개 이미지 ${index + 1}`}
                    width={700}
                    height={500}
                    className="rounded"
                  />
                ))}
              </div>

              {/* 관람 후기 */}
              <div>
                {/* <h2 className="text-xl font-semibold mb-4">관람후기</h2> */}
                {/* <h2 className="text-2xl font-semibold border-b border-gray-700 pb-6 mb-6">댓글 등록</h2> */}
                {/* <CommentForm musicalId={id} />
                <CommentList musicalId={id} /> */}
                <CommentSection musicalId={id} />
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-white">오류 발생</h1>
        <p className="text-red-600">{error.message}</p>
      </div>
    );
  }
};

export default MusicalDetailPage;
