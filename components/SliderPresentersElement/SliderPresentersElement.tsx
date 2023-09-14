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
      className="overflow-hidden rounded-normal border-[2px] border-primary-light-600 p-5 transition duration-300 ease-out hover:border-primary-light-500 md:p-6 xl:p-8 xxl:p-9"
    >
      <SliderImage
        src={cardInfo.attributes.img.data.attributes.url}
        alt={cardInfo.attributes.name}
        className="mb-5 aspect-[0.86] 
        md:mb-6 md:aspect-[0.92] md:w-full
        xl:mb-9 xl:aspect-[0.97] xl:w-[325px]
        xxl:aspect-[1.04] xxl:w-full"
        imageClassName="h-max md:object-top md:-mt-5 xxl:mt-0"
      />
      <p className="mb-3 text-xl font-medium text-white-light md:mb-5 xl:mb-6">
        {cardInfo.attributes.name}
      </p>

      <p className="text-base font-normal text-white-light">
        {cardInfo.attributes.description}
      </p>
    </div>
  );
};
