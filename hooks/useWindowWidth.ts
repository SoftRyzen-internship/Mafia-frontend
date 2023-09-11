'use client';

import { useState, useEffect } from 'react';
import {
  LARGE_SCREEN_MOBILE,
  SCREEN_TABLET,
  SCREEN_DESKTOP,
  LARGE_SCREEN_DESKTOP,
} from '@/constants';

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!width) {
      setWidth(window.innerWidth);
    }

    const handleResize = (event: Event): void => {
      if (event.target instanceof Window) {
        setWidth(event.target.innerWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  const isScreenMobile = width! < SCREEN_TABLET;
  const isLargeScreenMobile =
    width! >= LARGE_SCREEN_MOBILE && width! < SCREEN_TABLET;
  const isScreenTablet = width! >= SCREEN_TABLET && width! < SCREEN_DESKTOP;
  const isScreenDesktop =
    width! >= SCREEN_DESKTOP && width! < LARGE_SCREEN_DESKTOP;
  const isLargeScreenDesktop = width! >= LARGE_SCREEN_DESKTOP;

  return {
    width,
    isScreenMobile,
    isLargeScreenMobile,
    isScreenTablet,
    isScreenDesktop,
    isLargeScreenDesktop,
  };
};
