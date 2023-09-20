'use client';

import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { ButtonSecondaryProps } from '@/types';
import SvgButtonLoader from '@/public/icons/buttons-loading.svg';
import SvgArrowRight from '@/public/icons/arrow-right.svg';
import css from './ButtonSecondary.module.css';

export const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  linkto,
  buttonsize = 'medium',
  loading = false,
  className = '',
  children,
}: ButtonSecondaryProps) => {
  const secondaryBtnClass = cn(
    {
      'pointer-events-none': loading,

      'w-[200px] h-12 md:w-[236px] md:h-12 xl:w-[301px] xl:h-12 xxl:w-[336px] xxl:h-12':
        buttonsize === 'medium',

      'w-full h-12 md:w-[288px] md:h-14': buttonsize === 'large',
    },
    'outline-without flex items-center justify-center gap-5 rounded-md border-[2px] border-primary-light-600 bg-body',
    'px-3 text-base font-semibold text-white-light hover:border-primary-light-400 hover:bg-black-medium focus:border-primary-light-500',
    'active:border-primary-light-400 active:bg-black-medium active:text-primary-light-900 disabled:bg-gray-dark disabled:bg-none disabled:text-gray-medium',
    'transition-all duration-300',
    css['btn-secondary'],
    className,
  );

  return (
    <Link href={linkto} className={secondaryBtnClass}>
      {children}
      {loading ? (
        <SvgButtonLoader className="h-6 w-6 animate-spin" aria-hidden />
      ) : (
        <SvgArrowRight className="h-6 w-6" aria-hidden />
      )}
    </Link>
  );
};
