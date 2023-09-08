'use client';

import React, { useState, useEffect, useRef } from 'react';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { SliderImage } from '../SliderImage';
import data from '@/data/schoolSection.json';
import {
  SCREEN_MOBILE,
  SCREEN_TABLET,
  SCREEN_DESKTOP,
  LARGE_SCREEN_DESKTOP,
} from '@/constants';
import SvgArrow from '@/public/icons/swiper-nav-button-arrow.svg';

interface SliderProps {
  isScreenMobile?: boolean;
  isScreenTablet?: boolean;
  device?: 'mobile' | 'tablet' | 'desktop' | 'large-desktop';
  pagination?: boolean;
  autoplay?: boolean;
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({
  pagination = false,
  autoplay,
  className = '',
}) => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const swiperRef = useRef<SwiperCore>();

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
  }, [isFirstRender]);

  return !isFirstRender ? (
    <Swiper
      id="swiper"
      breakpoints={{
        [SCREEN_MOBILE]: { slidesPerView: 1, initialSlide: 0 },
        [SCREEN_TABLET]: { slidesPerView: 4, initialSlide: 4, loopedSlides: 3 },
        [SCREEN_DESKTOP]: {
          slidesPerView: 5,
          initialSlide: 1,
          loopedSlides: 3,
        },
        [LARGE_SCREEN_DESKTOP]: {
          slidesPerView: 4,
          initialSlide: 1,
          loopedSlides: 3,
        },
      }}
      autoplay={
        autoplay
          ? {
              delay: 2000,
              disableOnInteraction: false,
            }
          : false
      }
      onBeforeInit={swiper => {
        swiperRef.current = swiper;
      }}
      modules={[Autoplay, Navigation, Pagination]}
      pagination={
        pagination
          ? {
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }
          : false
      }
      loop
      centeredSlides
      speed={300}
      spaceBetween={24}
      className={`mx-auto, max-w-[432px] md:max-w-[768px] xl:max-w-[1280px] xxl:max-w-[1752px] ${className}`}
    >
      {data.swiperData.map(card => {
        return (
          <SwiperSlide
            key={card.id}
            className="mediaHover:translate xl:right-[118px]mediaHover:cursor-pointer mb-11 transform overflow-hidden rounded-normal transition duration-300 ease-out xl:right-[118px] xxl:right-[221px]"
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
          className="flex h-[26px] w-[64px] items-center justify-center rounded-normal border-[2px] border-gray focus:border-white-light mediaHover:border-white-light"
          aria-label="Click to show the previous image"
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        >
          <SvgArrow className="w-6 rotate-180" />
        </button>
        <button
          type="button"
          className="flex h-[26px] w-[64px] items-center justify-center rounded-normal border-[2px] border-gray focus:border-white-light mediaHover:border-white-light"
          aria-label="Click to show the next image"
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <SvgArrow className="w-6" />
        </button>
      </div>
    </Swiper>
  ) : null;
};
