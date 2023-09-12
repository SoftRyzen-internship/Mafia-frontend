import React from 'react';

import cn from 'classnames';

import SvgArrow from '@/public/icons/swiper-nav-button-arrow.svg';

export interface SliderNavButtonProps {
  direction: 'left' | 'right';
  actionHandler: () => void;
}

export const SliderNavButton: React.FC<SliderNavButtonProps> = ({
  direction,
  actionHandler,
}) => {
  const arrowClass = cn({ 'rotate-180': direction === 'left' }, 'w-6');

  return (
    <button
      type="button"
      className="outline-without flex h-[26px] w-[64px] items-center justify-center rounded-normal border-[2px] border-gray focus:border-white-light mediaHover:hover:border-white-light"
      aria-label="Click to show the previous image"
      onClick={actionHandler}
    >
      <SvgArrow className={arrowClass} />
    </button>
  );
};
