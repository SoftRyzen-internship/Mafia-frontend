'use client';

import React from 'react';
import cn from 'classnames';

import { ButtonPrimaryProps } from '@/types';
import SvgButtonLoader from '@/public/icons/buttons-loading.svg';

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  buttonsize = 'medium',
  disabled = false,
  loading = false,
  className = '',
  children,
  actionHandler,
}: ButtonPrimaryProps) => {
  const primaryBtnClass = cn(
    {
      'pointer-events-none': loading,
      'text-xs leading-[1.33] w-[88px] h-8 md:w-[88px] md:h-10 xl:w-[148px] xl:h-10':
        buttonsize === 'small',

      'text-base leading-[1.5] w-[200px] h-12 md:w-[236px] md:h-12 xl:w-[301px] xl:h-12 xxl:w-[336px] xxl:h-12':
        buttonsize === 'medium',

      'text-base leading-[1.5] w-full h-12 md:w-[288px] md:h-14':
        buttonsize === 'large',
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
