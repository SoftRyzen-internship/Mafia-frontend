'use client';
import classNames from 'classnames';

import React, { FC } from 'react';
import { usePathname } from 'next/navigation';

import { NavigationRowLink } from '../NavigationRowLink';
import data from '@/data/common.json';
import { NavigationRowProps } from '@/types';

export const NavigationRow: FC<NavigationRowProps> = ({
  position = 'header',
  className,
  onClick,
}) => {
  const currentPath = usePathname();
  const NavigationRowClasses = classNames('flex', {
    'flex-col gap-7 xl:hidden': position === 'mobile-menu',
    'gap-20 notXl:hidden': position === 'header',
    'flex-col gap-6 md:gap-5': position === 'footer',
  });

  return (
    <ul className={`${NavigationRowClasses} ${className}`}>
      {data.navigationRowLinks.map(({ title, href }, idx) => {
        const navLinkItemClasses = classNames({
          'after:block after:mt-1 after:h-[2px] after:w-full after:bg-grad_100':
            currentPath === href && position === 'header',
        });

        return (
          <li key={idx} className={navLinkItemClasses}>
            <NavigationRowLink
              currentPath={currentPath}
              href={href}
              title={title}
              position={position}
              onClick={onClick}
            />
          </li>
        );
      })}
    </ul>
  );
};
