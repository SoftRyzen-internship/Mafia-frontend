'use client';

import React, { useState, useEffect } from 'react';

import { SliderPresentersElementItemProps } from '@/types';
import { useWindowWidth } from '@/hooks';
import { SliderImage } from '../SliderImage';

export const SliderPresentersElement: React.FC<
  SliderPresentersElementItemProps
> = cardInfo => {
  const [swiperWrapperHeight, setSwiperWrapperHeight] = useState<number>();

  const { isScreenDesktop } = useWindowWidth();

  useEffect(() => {
    const pagination = document.querySelector('.swiper-pagination');
    pagination?.classList.add('presenters-section');

    const swiperWrapper = document.querySelector(
      '.swiper-wrapper',
    ) as HTMLElement | null;

    if (swiperWrapper) {
      isScreenDesktop &&
        swiperWrapper.childElementCount < 4 &&
        pagination?.classList.add('hidden');
      swiperWrapper.childElementCount;
      setSwiperWrapperHeight(swiperWrapper.offsetHeight);
    }
  }, [isScreenDesktop]);

  return (
    <div
      style={{ height: swiperWrapperHeight }}
      className="overflow-hidden rounded-normal border-[2px] border-primary-light-600 p-5 transition duration-300 ease-out hover:border-primary-light-500"
    >
      <SliderImage
        src={cardInfo.attributes.img.data.attributes.url}
        alt={cardInfo.attributes.name}
        className="mb-5 aspect-[0.86] 
        md:aspect-[0.92] md:w-full
        xl:aspect-[0.97] xl:w-[325px]
        xxl:aspect-[1.04] xxl:w-[496px]"
        imageClassName="h-auto md:-mt-5"
      />
      <p className="mb-3 text-xl font-medium text-white-light">
        {cardInfo.attributes.name}
      </p>

      <p className="text-base font-normal text-white-light">
        {cardInfo.attributes.description}
      </p>
    </div>
  );
};
