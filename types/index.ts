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

type SocialMenuVariants = 'fixed' | 'footer' | 'mobile-menu';

export interface SocialsMenuProps {
  variant?: SocialMenuVariants;
  className?: string;
}

export interface SocialButtonProps {
  link: string;
  aria_label: string;
  variant?: SocialMenuVariants;
  children: React.ReactNode;
  className?: string;
}

export interface SocialIconProps {
  icon: string;
  variant?: SocialMenuVariants;
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

export type IconBtnName = 'cross' | 'arrow' | 'scroll';

export interface IconBtnProps {
  icon: IconBtnName;
  reverse?: boolean;
  onClick?: () => void;
  classes?: string;
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

export interface LearnListItemProps {
  title: string;
  desc: string;
}

export interface ContactsProps {
  variant?: 'basic' | 'footer-mob' | 'mob-menu';
}

export interface ClubKidsMafiaCardProps {
  subtitle: string;
  text: string;
  iconDescr: string;
}
interface IKidsMafiaCard {
  iconDescr: string;
  subtitle: string;
  text: string;
}

export interface KidsMafiaConditionsProps {
  conditions: { title: string; cards: IKidsMafiaCard[] };
  btn: string;
}

export interface ScheduleProps {
  className?: string;
}

export interface ScheduleItemProps {
  id: string;
  day: string;
  time_start: string;
  time_end: string;
}
export interface ScheduleDataType {
  schedule: {
    data: {
      attributes: {
        schedules: ScheduleItemProps[];
      };
    };
  };
}
