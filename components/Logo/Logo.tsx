import classNames from 'classnames';

import React, { FC } from 'react';
import Link from 'next/link';

import LogoImg from '@/public/images/common/logo.svg';
import { LogoProps } from '@/types';

const Logo: FC<LogoProps> = ({
  href = '/',
  className,
  position = 'header',
}) => {
  const logoClasses = classNames('inline-block', {
    'h-[41px] w-14 md:h-[47px] md:w-[65px] xl:h-[58px] xl:w-20 xxl:h-[74px] xxl:w-[103px]':
      position === 'header',
    'h-[102px] w-[140px] md:h-[74px] md:w-[102px] xl:h-[102px] xl:w-[140px] xxl:h-[137px] xxl:w-[188px]':
      position === 'footer',
    ' h-[42px] w-[57px] xl:hidden': position === 'mobile-menu',
  });
  return (
    <Link href={href} className={` ${logoClasses}  ${className}`}>
      <LogoImg />
    </Link>
  );
};

export default Logo;
