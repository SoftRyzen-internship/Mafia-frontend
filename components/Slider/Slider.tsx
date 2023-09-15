'use client';

import React, { useState, useEffect, useRef } from 'react';

import cn from 'classnames';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { SliderProps } from '@/types';
import { getSliderBreakpointsOptions } from '@/utils';
import { SliderNavigation } from '../SliderNavigation';

export const Slider: React.FC<SliderProps> = ({
  section,
  pagination = false,
  navigation = false,
  autoplay,
  data,
  element: Element,
  allowTouchMove,
  className = '',
  slideClassName = '',
}) => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const Component = (props: any) => {
    return <Element {...props} />;
  };

  const swiperRef = useRef<SwiperCore>();

  const swiperClass = cn(
    // { 'max-w-sm absolute': section === 'corporate' },
    'font-raleway mx-auto, max-w-[432px] md:max-w-3xl xl:max-w-7xl xxl:max-w-screen-xxl',
    className,
  );

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
  }, [isFirstRender]);

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  return !isFirstRender ? (
    <Swiper
      id="swiper"
      breakpoints={getSliderBreakpointsOptions(section)}
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
      speed={1000}
      spaceBetween={24}
      allowTouchMove={allowTouchMove}
      className={swiperClass}
    >
      {data?.map((cardInfo: any, idx: number) => {
        return (
          <SwiperSlide
            key={idx}
            className={`overflow-hidden rounded-normal ${slideClassName}`}
          >
            <Component {...cardInfo} />
          </SwiperSlide>
        );
      })}

      {navigation && (
        <SliderNavigation
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      )}
    </Swiper>
  ) : null;
};
