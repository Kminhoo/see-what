'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import type { Swiper as SwiperType } from 'swiper';

import Button from '@components/common/Button';
import { PrevArrow, NextArrow } from '@components/icons/Arrows';

import man from '@assets/images/man.jpg';
import hide from '@assets/images/hide.jpg';
import boots from '@assets/images/boots.jpg';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRef, useCallback } from 'react';

const HomeCarousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  return (
    <section>
      <div className="w-full h-[100vh]">
        <div className="relative">
          <Swiper
            slidesPerView={1}
            effect={'fade'}
            pagination={{
              clickable: true
            }}
            loop={true}
            autoplay={{
              delay: 2000
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="w-full h-[100vh]"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <Image src={man} alt="musical smiling man" className="w-full h-full object-cover object-bottom" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={hide} alt="musical jekyll And Hide" className="w-full h-full object-cover object-bottom" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={boots} alt="musical Kingky Boots" className="w-full h-full object-cover object-bottom" />
            </SwiperSlide>
          </Swiper>

          <div className="absolute z-50 flex justify-between w-full top-1/2 transform -translate-y-1/2 px-4">
            <Button
              className="w-[50px] h-[50px] bg-white/50 hover:bg-white/80 text-black rounded-[50%] border-none outline-none flex items-center justify-center"
              onClick={handlePrev}
            >
              <PrevArrow />
            </Button>
            <Button
              className="w-[50px] h-[50px] bg-white/50 hover:bg-white/80 text-black rounded-[50%] border-none outline-none flex items-center justify-center"
              onClick={handleNext}
            >
              <NextArrow />
            </Button>
          </div>

          <div className="z-50 text-white absolute bottom-[10%] max-w-[1280px] w-full left-[50%] translate-x-[-50%]">
            <h2 className="text-[100px] font-medium text-shadow-lg">SEEWHAT</h2>
            <p className="text-3xl font-medium text-shadow-lg">See What I Wanna See</p>
            <p className="text-3xl font-medium mt-3 text-shadow-lg">모든 극은 보는 사람에 따라 다르다</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCarousel;