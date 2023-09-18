'use client';

import { SliderImage } from '../SliderImage';

import { SliderPresentersElementItemProps } from '@/types';

export const SliderPresentersElement: React.FC<
  SliderPresentersElementItemProps
> = cardInfo => (
  <div
    className="h-full overflow-hidden rounded-normal border-[2px] border-primary-light-600 p-5 
                transition duration-300 ease-out hover:border-primary-light-500 md:p-6 xl:p-8 xxl:p-9"
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
