import React from 'react';

import SvgArrow from '@/public/icons/swiper-nav-button-arrow.svg';

import { SliderNavigationProps } from '@/types';

export const SliderNavigation: React.FC<SliderNavigationProps> = ({
  handlePrevClick,
  handleNextClick,
}) => {
  return (
    <div className="bottom-0 flex w-full justify-between md:max-w-3xl xl:max-w-7xl xxl:max-w-screen-xxl">
      <button
        type="button"
        className="outline-without flex h-[26px] w-[64px] items-center justify-center rounded-normal border-[2px] border-gray focus:border-white-light mediaHover:hover:border-white-light"
        aria-label="Click to show the previous image"
        onClick={handlePrevClick}
      >
        <SvgArrow className="w-6 rotate-180" />
      </button>
      <button
        type="button"
        className="outline-without flex h-[26px] w-[64px] items-center justify-center rounded-normal border-[2px] border-gray focus:border-white-light mediaHover:hover:border-white-light"
        aria-label="Click to show the next image"
        onClick={handleNextClick}
      >
        <SvgArrow className="w-6" />
      </button>
    </div>
  );
};
