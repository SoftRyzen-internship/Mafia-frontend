'use client';

import { FC } from 'react';

import getIconByName from '@/utils/helpers/getIconByName';
import getIconBtnStyles from '@/utils/helpers/getIconBtnStyles';

import { IconBtnProps } from '@/types';

export const IconBtn: FC<IconBtnProps> = ({
  icon,
  onClick,
  reverse = false,
  classes,
}) => {
  const { iconRef: Icon, iconFunction, iconLabel } = getIconByName(icon);

  const btnStyles: string = getIconBtnStyles(icon, false);
  const iconStyles: string = getIconBtnStyles(icon, true);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${btnStyles} ${classes && classes}`}
      aria-label={iconFunction}
    >
      <Icon
        className={`${iconStyles} ${reverse ? 'rotate-180' : ''}`}
        aria-label={iconLabel}
      />
    </button>
  );
};
