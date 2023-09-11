import classNames from 'classnames';

import React, { FC } from 'react';

import Heart from '@/public/icons/heart.svg';
import Head from '@/public/icons/head.svg';
import Brain from '@/public/icons/brain.svg';
import Ear from '@/public/icons/ear.svg';
import { SkillsListItemProps } from '@/types';

export const SkillsListItem: FC<SkillsListItemProps> = ({ text, icon }) => {
  const iconStyles = classNames(
    'w-8 h-8 mr-2 inline-block shrink-0 md:mr-[14px] xl:mr-4',
  );

  return (
    <div className="flex items-center rounded-md bg-body py-[14px] pl-4 shadow-diff md:block md:pl-2 md:pr-10 xl:w-full xl:pl-6 xl:pr-[18px]">
      {icon === 'heart' && <Heart className={iconStyles} />}
      {icon === 'head' && <Head className={iconStyles} />}
      {icon === 'brain' && <Brain className={iconStyles} />}
      {icon === 'ear' && <Ear className={iconStyles} />}
      <span>{text}</span>
    </div>
  );
};
