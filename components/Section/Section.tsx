import React, { FC } from 'react';

import { SectionProps } from '@/types';

export const Section: FC<SectionProps> = ({ children, className }) => {
  return <section className={`pb-20 pt-20 ${className}`}>{children}</section>;
};
