import Link from 'next/link';

import React, { FC } from 'react';

import { FooterLinkItemProps } from '@/types';

export const FooterLinkItem: FC<FooterLinkItemProps> = ({
  title,
  href,
  internalLink,
  ...other
}) => {
  if (internalLink) {
    return (
      <Link
        href={href}
        {...other}
        className="block text-xs transition-colors duration-300 hover:text-primary-light-900 focus:text-primary-light-500 xl:shadow-xxs"
      >
        {title}
      </Link>
    );
  } else {
    return (
      <a
        rel="noopener noreferrer nofollow"
        target="_blank"
        href={href}
        {...other}
        className="block text-xs transition-colors duration-300 hover:text-primary-light-900 focus:text-primary-light-500 xl:shadow-xxs"
      >
        {title}
      </a>
    );
  }
};
