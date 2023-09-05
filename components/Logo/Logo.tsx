import React, { FC } from 'react';
import Link from 'next/link';

import LogoImg from '@/public/images/common/logo.svg';
import { LogoProps } from '@/types';

const Logo: FC<LogoProps> = ({
  href = '/',
  customStyles,
  position = 'header',
}) => {
  return (
    <Link
      href={href}
      className={` inline-block ${
        position === 'header' &&
        'h-[41px] w-14 md:h-[47px] md:w-[65px] xl:h-[58px] xl:w-20 xxl:h-[74px] xxl:w-[103px]'
      } ${
        position === 'footer' &&
        ' h-[102px] w-[140px] md:h-[74px] md:w-[102px] xl:h-[102px] xl:w-[140px] xxl:h-[137px] xxl:w-[188px] '
      } ${
        position === 'mobile' && ' h-[42px] w-[57px] xl:hidden'
      }  ${customStyles}`}
    >
      <LogoImg />
    </Link>
  );
};

export default Logo;
