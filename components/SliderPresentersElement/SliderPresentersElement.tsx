'use client';

import React, { useEffect } from 'react';

import { SliderImage } from '../SliderImage';

import { SliderPresentersElementItemProps } from '@/types';

export const SliderPresentersElement: React.FC<
  SliderPresentersElementItemProps
> = cardInfo => {
  useEffect(() => {
    const presentersElement = document.getElementById('presenters');
    const swiperElement = presentersElement?.closest('#swiper');
    const pagination = swiperElement?.querySelector('.swiper-pagination');

    pagination?.classList.add('presenters-section');
  }, []);

  return (
    <div
      id="presenters"
      className="h-full overflow-hidden rounded-normal border-[2px] border-primary-light-600 p-5 
                transition duration-300 ease-out hover:border-primary-light-500 md:p-6 xl:p-8 xxl:p-9"
    >
      <SliderImage
        src={cardInfo.attributes.img.data.attributes.url}
        alt={cardInfo.attributes.name}
        className="mb-5 aspect-[86/100] 
        md:mb-6 md:aspect-[92/100] md:w-full
        xl:mb-9 xl:aspect-[97/100] xl:w-[325px]
        xxl:aspect-[104/100] xxl:w-full"
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
