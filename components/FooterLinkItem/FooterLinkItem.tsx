import Link from 'next/link';

import React, { FC } from 'react';

import { FooterLinkProps } from '@/types';
import css from './FooterLink.module.css';

export const FooterLinkItem: FC<FooterLinkProps> = ({ title, href }) => {
  return (
    <Link href={href} className={` ${css.footerLink}`}>
      {title}
    </Link>
  );
};
