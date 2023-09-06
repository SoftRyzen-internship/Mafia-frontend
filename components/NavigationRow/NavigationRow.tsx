'use client';
import classNames from 'classnames';

import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import data from '@/data/common.json';
import { NavigationRowProps } from '@/types';

const NavigationRow: FC<NavigationRowProps> = ({
  position = 'header',
  className,
}) => {
  const currentPath = usePathname();
  const NavigationRowClasses = classNames('flex', {
    'flex-col gap-7 xl:hidden': position === 'mobile-menu',
    'ml-16 gap-20 xxl:gap-40 notXl:hidden': position === 'header',
  });

  return (
    <ul className={`${NavigationRowClasses} ${className}`}>
      {data.navigationRowLinks.map(({ title, href }, idx) => {
        const navLinkItemClasses = classNames({
          'after:block after:mt-1 after:h-[2px] after:w-full after:bg-grad_100':
            currentPath === href && position === 'header',
        });

        const navLinkClasses = classNames(
          'font-raleway text-base hover:text-[#C964C2] focus:text-primary-light-500 transition-colors duration-300 ',
          {
            'text-primary-light-500':
              currentPath === href && position === 'mobile-menu',
            'text-white-light ':
              currentPath !== href && position === 'mobile-menu',
            'text-white-light  ': position === 'header',
          },
        );

        return (
          <li key={idx} className={navLinkItemClasses}>
            <Link href={href} className={navLinkClasses}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationRow;
