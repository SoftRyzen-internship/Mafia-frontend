import { HTMLAttributes } from 'react';

export interface LogoProps {
  href: string;
  position: 'header' | 'footer' | 'mobile-menu';
  className?: string;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4';

type HeadingVariant = 'main' | 'primary' | 'secondary' | 'tertiary';

export interface HeadingElementProps {
  className?: string;
  shadow?: string;
  rest?: HTMLAttributes<HTMLHeadingElement>;
}

export interface HeadingComponentProps extends HeadingElementProps {
  tag?: HeadingTag;
  variant?: HeadingVariant;
  children: React.ReactNode;
}

type ParagraphVariant = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export interface ParagraphProps {
  children: React.ReactNode;
  variant?: ParagraphVariant;
  className?: string;
}

export interface NavigationRowProps {
  position: 'header' | 'mobile-menu';
  className?: string;
}
