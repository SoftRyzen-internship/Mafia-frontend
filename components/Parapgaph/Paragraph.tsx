import React, { FC } from 'react';
import classNames from 'classnames';

import { ParagraphProps } from '@/types';

const Paragraph: FC<ParagraphProps> = ({
  children,
  variant = 'normal',
  className = '',
}) => {
  const paragraphClass = classNames(
    {
      '': variant === 'normal', // almost all text
      'text-[20px] font-medium leading-[28px]': variant === 'large', // 'subtitle' in figma
      'text-[12px] leading-[16px] ': variant === 'small',
    },
    className,
  );
  return <p className={paragraphClass}>{children}</p>;
};

export default Paragraph;
