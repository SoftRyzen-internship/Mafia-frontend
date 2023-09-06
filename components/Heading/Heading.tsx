import { FC, createElement } from 'react';
import classnames from 'classnames';

import { HeadingComponentProps, HeadingElementProps } from '@/types';

const Heading: FC<HeadingComponentProps> = ({
  tag = 'h1',
  children,
  className = '',
  shadow = '',
  ...rest
}) => {
  const headingClass = classnames(className, {
    shadow: shadow !== '',
  });

  const getHeadingProps = () => {
    const props: HeadingElementProps = { className: headingClass, ...rest };
    if (shadow) props.shadow = shadow;
    return props;
  };

  return createElement(tag, getHeadingProps(), children);
};

export default Heading;
