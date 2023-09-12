import React from 'react';

import { SliderNavButton } from '../SliderNavButton';

import { SliderNavigationProps } from '@/types';

export const SliderNavigation: React.FC<SliderNavigationProps> = ({
  handlePrevClick,
  handleNextClick,
}) => {
  return (
    <div className="bottom-0 mx-auto flex w-full justify-around md:max-w-3xl xl:max-w-7xl xxl:max-w-screen-xxl">
      <SliderNavButton direction="left" actionHandler={handlePrevClick} />
      <SliderNavButton direction="right" actionHandler={handleNextClick} />
    </div>
  );
};
