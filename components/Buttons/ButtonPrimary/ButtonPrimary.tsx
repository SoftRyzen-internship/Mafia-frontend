'use client';

import React from 'react';
import { ButtonPrimaryProps } from '@/types';
import { useWindowWidth } from '@/hooks';
import {
  sizesMobile,
  sizesTablet,
  sizesDesktop,
  sizesLargeDesktop,
} from '../buttonsSizes';
import SvgButtonLoader from '@/public/icons/buttons-loading.svg';

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  buttonsize = 'small',
  disabled = false,
  loading = false,
  children,
  actionHandler = () => console.log('click!'),
}: ButtonPrimaryProps) => {
  const { isScreenMobile, isScreenTablet, isScreenDesktop } = useWindowWidth();

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={actionHandler}
      className="outline-without flex items-center justify-center gap-2 rounded-md bg-grad_100 px-3 font-semibold text-white-light hover:bg-grad_200 focus:border-[2px] focus:border-primary-light-500 active:border-none active:bg-grad_300 active:text-[#C964C2] disabled:bg-gray-disabledBg disabled:bg-none disabled:text-gray-disabledText"
      style={{
        width: isScreenMobile
          ? sizesMobile[buttonsize].width
          : isScreenTablet
          ? sizesTablet[buttonsize].width
          : isScreenDesktop
          ? sizesDesktop[buttonsize].width
          : sizesLargeDesktop[buttonsize].width,
        height: isScreenMobile
          ? sizesMobile[buttonsize].height
          : isScreenTablet
          ? sizesTablet[buttonsize].height
          : isScreenDesktop
          ? sizesDesktop[buttonsize].height
          : sizesLargeDesktop[buttonsize].height,
        fontSize: buttonsize === 'small' ? '12px' : '16px',
        lineHeight: buttonsize === 'small' ? 1.33 : 1.5,
        pointerEvents: loading ? 'none' : 'auto',
      }}
    >
      {children}
      {loading && (
        <SvgButtonLoader className="h-6 w-6 animate-spin" aria-hidden />
      )}
    </button>
  );
};
