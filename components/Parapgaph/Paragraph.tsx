import React, { FC } from 'react';
import classNames from 'classnames';

import { ParagraphProps } from '@/types';

const Paragraph: FC<ParagraphProps> = ({
  children,
  variant = 'md',
  className = '',
}) => {
  const paragraphClass = classNames(
    {
      'text-[12px] leading-[16px] ': variant === 'xs',
      'text-[14px] leading-[20px] md:text-[12px] md:leading-[16px]':
        variant === 'sm',
      '': variant === 'md',
      'text-[20px] font-medium leading-[28px]': variant === 'lg',
      'text-[18px] font-light leading-[28px] md:text-[20px] xl:text-[24px] xl:leading-[32px]':
        variant === 'xl',
    },
    className,
  );
  return <p className={paragraphClass}>{children}</p>;
};

export default Paragraph;
