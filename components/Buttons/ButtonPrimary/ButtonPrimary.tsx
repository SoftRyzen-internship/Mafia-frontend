'use client';

import React from 'react';
import cn from 'classnames';

import { ButtonPrimaryProps } from '@/types';
import { useWindowWidth } from '@/hooks';
import SvgButtonLoader from '@/public/icons/buttons-loading.svg';

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  buttonsize = 'medium',
  disabled = false,
  loading = false,
  className = '',
  children,
  actionHandler = () => console.log('click!'),
}: ButtonPrimaryProps) => {
  const {
    isScreenMobile,
    isScreenTablet,
    isScreenDesktop,
    isLargeScreenDesktop,
  } = useWindowWidth();

  const primaryBtnClass = cn(
    {
      'pointer-events-none': loading,
      'text-xs leading-[1.33] w-[88px] h-8 md:w-[88px] md:h-10 xl:w-[148px] xl:h-10':
        buttonsize === 'small',

      'w-[200px] h-12': buttonsize === 'medium' && isScreenMobile,
      'w-full h-12': buttonsize === 'large' && isScreenMobile,

      'w-[236px] h-12': buttonsize === 'medium' && isScreenTablet,
      'w-[288px] h-14': buttonsize === 'large' && isScreenTablet,

      'w-[301px] h-12':
        buttonsize === 'medium' && isScreenDesktop && !isLargeScreenDesktop,

      'w-[336px] h-12': buttonsize === 'medium' && isLargeScreenDesktop,

      'text-base leading-[1.5]': buttonsize !== 'small',
    },
    'outline-without flex items-center justify-center gap-2 rounded-md bg-grad_100 px-3 font-semibold text-white-light',
    'hover:bg-grad_200 focus:border-[2px] focus:border-primary-light-500 active:border-none active:bg-grad_300',
    'active:text-primary-light-900 disabled:bg-gray-dark disabled:bg-none disabled:text-gray-medium',
    className,
  );

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={actionHandler}
      className={primaryBtnClass}
    >
      {children}
      {loading && (
        <SvgButtonLoader className="h-6 w-6 animate-spin" aria-hidden />
      )}
    </button>
  );
};
