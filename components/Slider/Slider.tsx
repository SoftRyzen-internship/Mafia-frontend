'use client';

import React, { useState, useEffect, useRef } from 'react';

import cn from 'classnames';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { SliderProps, PresenterItemProps } from '@/types';
import { getPresenters } from '@/utils/helpers/getPresenters';
import schoolData from '@/data/schoolSection.json';
import corporateData from '@/data/corporateParties.json';
import {
  SCREEN_MOBILE,
  SCREEN_TABLET,
  SCREEN_DESKTOP,
  LARGE_SCREEN_DESKTOP,
} from '@/constants';

import { SliderImage } from '../SliderImage';
import { SliderNavigation } from '../SliderNavigation';

export const Slider: React.FC<SliderProps> = ({
  section,
  pagination = false,
  autoplay,
  className = '',
}) => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const [presentersData, setPresentersData] = useState<PresenterItemProps[]>();

  const swiperRef = useRef<SwiperCore>();

  const swiperClass = cn(
    { 'max-w-sm absolute': section === 'presenters' },
    'mx-auto, max-w-[432px] md:absolute md:max-w-3xl xl:max-w-7xl xxl:max-w-screen-xxl',
    className,
  );

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    const getPresentersData = async () => {
      try {
        const data = await getPresenters();
        setPresentersData(data);
      } catch (error) {
        console.error('Error fetching presenters data: ', error);
      }
    };

    getPresentersData();
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
      breakpoints={{
        [SCREEN_MOBILE]: { slidesPerView: 1 },
        [SCREEN_TABLET]: { slidesPerView: 4, loopedSlides: 3 },
        [SCREEN_DESKTOP]: {
          slidesPerView: 5,
          loopedSlides: 3,
        },
        [LARGE_SCREEN_DESKTOP]: {
          slidesPerView: 4,
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
      speed={1000}
      spaceBetween={24}
      className={swiperClass}
    >
      {section === 'school' &&
        schoolData.swiperData.map(card => {
          return (
            <SwiperSlide
              key={card.id}
              className="mediaHover:hover:translate transform overflow-hidden rounded-normal transition duration-300 ease-out mediaHover:hover:cursor-pointer"
            >
              <SliderImage card={card} section={section} />
              <p className="mb-4 text-base font-normal text-gray">
                {card.name}
              </p>
              <p className="alias text-xl font-medium text-white-light transition duration-300 ease-out">
                {card.alias}
              </p>
            </SwiperSlide>
          );
        })}

      {section === 'school' && (
        <SliderNavigation
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      )}

      {section === 'presenters' &&
        presentersData?.map((card, idx) => {
          return (
            <SwiperSlide key={idx}>
              <SliderImage card={card} section={section} />
            </SwiperSlide>
          );
        })}

      {section === 'corporate' &&
        corporateData.swiperData.map(card => {
          return (
            <SwiperSlide key={card.id}>
              <SliderImage card={card} section={section} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  ) : null;
};
