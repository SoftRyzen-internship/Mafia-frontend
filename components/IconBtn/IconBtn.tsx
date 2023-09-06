'use client';

import getIconByName from '@/utils/helpers/getIconByName';
import getIconBtnStyles from '@/utils/helpers/getIconBtnStyles';

import { IconBtnProps } from '@/types';

const IconBtn: React.FC<IconBtnProps> = ({
  icon,
  onClick,
  reverse = false,
  classes,
}) => {
  const { iconRef: Icon } = getIconByName(icon);

  const btnStyles: string = getIconBtnStyles(icon, false);
  const iconStyles: string = getIconBtnStyles(icon, true);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${btnStyles} ${classes && classes}`}
      aria-label="icon-button"
    >
      <Icon
        className={`${iconStyles} ${reverse ? 'rotate-180' : ''}`}
        aria-label={`${icon} icon`}
      />
    </button>
  );
};

export default IconBtn;
