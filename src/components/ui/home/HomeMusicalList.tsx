'use client';

import Link from 'next/link';

import { useCallback, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import MusicalCard from '@components/common/MusicalCard';
import Button from '@components/common/Button';
import { NextArrow, PrevArrow } from '@components/icons/Arrows';

import { Musical } from '@tsc/musicalList';

interface HomeMusicalListProps {
  label: string;
  firstSection?: boolean;
  data: Musical[];
}

const HomeMusicalList = ({ label, firstSection = false, data }: HomeMusicalListProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  return (
    <section className="text-white">
      <div className={`max-w-[1280px] m-auto ${firstSection ? `pt-[150px] pb-[100px]` : `py-[100px]`}`}>
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg mb-5">{label}</h3>
            {firstSection && (
              <Link href="/musical-list" className="text-sm text-[#bfbfbf] transition-colors hover:text-white">
                뮤지컬 전체보기
              </Link>
            )}
          </div>
          <div className="relative text-white">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              loop={true}
              pagination={{
                clickable: true
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {data.map((item: Musical) => (
                <SwiperSlide key={item.mt20id}>
                  <MusicalCard
                    id={item.mt20id}
                    poster={item.poster}
                    title={item.prfnm}
                    startDate={item.prfpdfrom}
                    endDate={item.prfpdto}
                    place={item.fcltynm}
                    awards={item?.awards}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute w-[1380px] z-50 flex justify-between top-[50%] transform translate-y-[-50%] left-[50%] translate-x-[-50%]  px-4">
              <Button
                type="button"
                className="w-[50px] h-[50px] bg-white/50 hover:bg-white/80 text-black rounded-[50%] border-none outline-none flex items-center justify-center"
                onClick={handlePrev}
              >
                <PrevArrow />
              </Button>
              <Button
                type="button"
                className="w-[50px] h-[50px] bg-white/50 hover:bg-white/80 text-black rounded-[50%] border-none outline-none flex items-center justify-center"
                onClick={handleNext}
              >
                <NextArrow />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMusicalList;
