import { HTMLAttributes } from 'react';

export interface LogoProps {
  href: string;
  position: 'header' | 'footer' | 'mobile-menu';
  className?: string;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingElementProps {
  className?: string;
  shadow?: string;
  rest?: HTMLAttributes<HTMLHeadingElement>;
}

export interface HeadingComponentProps extends HeadingElementProps {
  tag?: HeadingTag;
  children: React.ReactNode;
}

export interface ParagraphProps {
  content: string;
  className?: string;
}

export interface ButtonPrimaryProps {
  buttonsize?: 'small' | 'medium' | 'large' | undefined;
  disabled?: boolean;
  loading?: boolean;
  children: string;
  actionHandler?: () => void;
}

export interface ButtonSecondaryProps {
  linkto: string;
  buttonsize?: 'medium' | 'large' | undefined;
  loading?: boolean;
  children: string;
}
