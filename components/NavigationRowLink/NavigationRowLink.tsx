import classNames from 'classnames';

import React, { FC } from 'react';
import Link from 'next/link';

import { NavigationRowLinkProps } from '@/types';

export const NavigationRowLink: FC<NavigationRowLinkProps> = ({
  currentPath,
  href,
  position,
  title,
  onClick,
}) => {
  const navLinkClasses = classNames(
    ' block font-raleway text-base hover:text-primary-light-900 focus:text-primary-light-500 transition-colors duration-300 ',
    {
      'text-primary-light-500':
        currentPath === href && position === 'mobile-menu',
      'text-white-light': currentPath !== href && position === 'mobile-menu',
      'text-white-light ': position === 'header' || position === 'footer',
      'text-sm md:text-base': position === 'footer',
    },
  );

  return (
    <Link href={href} className={navLinkClasses}>
      <span onClick={onClick}>{title}</span>
    </Link>
  );
};
