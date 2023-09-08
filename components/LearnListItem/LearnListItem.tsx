import React, { FC } from 'react';

import { Heading } from '../Heading';
import { Paragraph } from '../Parapgaph';
import { LearnListItemProps } from '@/types';
import css from './LearnListItem.module.css';

export const LearnListItem: FC<LearnListItemProps> = ({ title, desc }) => {
  return (
    <div className={css.underline}>
      <Heading tag="h3" variant="tertiary" className="mb-5">
        {title}
      </Heading>
      <Paragraph className="xxl:max-w-[221px]">{desc}</Paragraph>
    </div>
  );
};
