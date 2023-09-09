import Link from 'next/link';

import React, { FC } from 'react';

import { FooterLinkItemProps } from '@/types';
import css from './FooterLink.module.css';

export const FooterLinkItem: FC<FooterLinkItemProps> = ({
  title,
  href,
  ...other
}) => {
  return (
    <Link href={href} {...other} className={css.footerLink}>
      {title}
    </Link>
  );
};
