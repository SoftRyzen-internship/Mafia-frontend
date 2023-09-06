import { HTMLAttributes } from 'react';

export interface LogoProps {
  href: string;
  position: 'header' | 'footer' | 'mobile-menu';
  className?: string;
}

type HeadingTag = 'h1' | 'h2' | 'h3';

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

type ParagraphVariant = 'normal' | 'large' | 'small';

export interface ParagraphProps {
  children: React.ReactNode;
  variant?: ParagraphVariant;
  className?: string;
}

export interface NavigationRowProps {
  position: 'header' | 'footer' | 'mobile-menu';
  className?: string;
}

export type SocialContact = {
  name: string;
  link: string;
  icon: string;
};

export interface SocialIconProps {
  icon: string;
  styles: string;
}

export interface SocialButtonProps {
  social: SocialContact;
  btnClassName?: string;
  iconClassName?: string;
}

export interface SocialsListProps {
  className?: string;
}

export interface ButtonPrimaryProps {
  buttonsize?: 'small' | 'medium' | 'large' | undefined;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children: string;
  actionHandler?: () => void;
}

export interface ButtonSecondaryProps {
  linkto: string;
  buttonsize?: 'medium' | 'large' | undefined;
  loading?: boolean;
  className?: string;
  children: string;
}

export interface LearnListProps {
  className?: string;
}

export interface NavigationRowLinkProps {
  currentPath: string;
  href: string;
  position: string;
  title: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}
