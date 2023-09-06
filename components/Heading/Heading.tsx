import { FC, createElement } from 'react';
import classnames from 'classnames';

import { HeadingComponentProps, HeadingElementProps } from '@/types';

const Heading: FC<HeadingComponentProps> = ({
  tag = 'h2',
  variant = 'primary',
  children,
  className = '',
  shadow = '',
  ...rest
}) => {
  const headingClass = classnames(
    {
      'text-[32px] font-semibold leading-[36px] md:text-[40px] md:leading-[56px] xl:text-[52px] xl:leading-[80px]':
        variant === 'main',
      'text-[28px] font-semibold leading-[36px] md:text-[32px] md:leading-[36px] xl:text-[42px] xl:leading-[52px]':
        variant === 'primary',
      'text-[20px] font-semibold leading-[28px] xl:text-[24px] xl:leading-[32px]':
        variant === 'secondary',
      'text-[20px] font-medium leading-[28px]': variant === 'tertiary',
      shadow: shadow !== '',
    },
    className,
  );

  const getHeadingProps = () => {
    const props: HeadingElementProps = { className: headingClass, ...rest };
    if (shadow) props.shadow = shadow;
    return props;
  };

  return createElement(tag, getHeadingProps(), children);
};

export default Heading;
