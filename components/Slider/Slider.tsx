'use client';

import React, { useRef } from 'react';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import cn from 'classnames';

import { SliderImage } from '../SliderImage';
import data from '@/data/common.json';
import SvgArrow from '@/public/icons/swiper-nav-button-arrow.svg';

interface SliderProps {
  isScreenMobile?: boolean;
  isScreenTablet?: boolean;
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({ className = '' }) => {
  const swiperRef = useRef<SwiperCore>();

  const sliderWrapperClass = cn('mx-auto', 'max-w-[480px]', 'px-6', className);

  return (
    <div className={sliderWrapperClass}>
      <Swiper
        id="swiper"
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        loop
        centeredSlides
        slidesPerView={1}
        speed={1000}
        spaceBetween={24}
      >
        {data.schoolSectionSwiperData.map(card => {
          return (
            <SwiperSlide
              key={card.id}
              className="hover:translate mb-11 transform overflow-hidden rounded-normal transition duration-300 ease-out hover:cursor-pointer"
            >
              {({ isActive }) => (
                <>
                  <SliderImage isActive={isActive} card={card} />
                  <p className="mb-4 text-base font-normal text-gray">
                    {card.name}
                  </p>
                  <p className="alias text-xl font-medium text-white-light transition duration-300 ease-out">
                    {card.alias}
                  </p>
                </>
              )}
            </SwiperSlide>
          );
        })}
        <div className="bottom-0 flex w-full justify-between ">
          <button
            type="button"
            className="flex h-[26px] w-[64px] items-center justify-center rounded-normal border-[2px] border-gray hover:border-white-light"
            aria-label="Click to show the previous image"
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
          >
            <SvgArrow className="w-6 rotate-180" />
          </button>
          <button
            type="button"
            className="flex h-[26px] w-[64px] items-center justify-center rounded-normal border-[2px] border-gray hover:border-white-light"
            aria-label="Click to show the next image"
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
          >
            <SvgArrow className="w-6" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};
