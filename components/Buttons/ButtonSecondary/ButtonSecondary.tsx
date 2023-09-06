'use client';

import React from 'react';
import Link from 'next/link';
import { useWindowWidth } from '@/hooks';
import {
  sizesMobile,
  sizesTablet,
  sizesDesktop,
  sizesLargeDesktop,
} from '../buttonsSizes';
import SvgButtonLoader from '@/public/icons/buttons-loading.svg';
import SvgArrowRight from '@/public/icons/arrow-right.svg';

interface Props {
  linkto: string;
  buttonsize?: 'medium' | 'large' | undefined;
  loading?: boolean;
  children: string;
}

export const ButtonSecondary: React.FC<Props> = ({
  linkto,
  buttonsize = 'medium',
  loading = false,
  children,
}: Props) => {
  const { isScreenMobile, isScreenTablet, isScreenDesktop } = useWindowWidth();

  return (
    <Link
      href={linkto}
      className="btn-secondary outline-without flex items-center justify-center gap-5 rounded-md border-[2px] border-primary-light-600 bg-body px-3 text-base font-semibold text-white-light hover:border-primary-light-400 hover:bg-[#1C1C1C] focus:border-primary-light-500 active:border-primary-light-400 active:bg-[#1C1C1C] active:text-[#C964C2] disabled:bg-gray-disabledBg disabled:bg-none disabled:text-gray-disabledText"
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
        pointerEvents: loading ? 'none' : 'auto',
      }}
    >
      {children}
      {loading ? (
        <SvgButtonLoader className="h-6 w-6 animate-spin" aria-hidden />
      ) : (
        <SvgArrowRight className="h-6 w-6" aria-hidden />
      )}
    </Link>
  );
};
