import classNames from 'classnames';

import React, { FC } from 'react';

import { SkillsListItem } from '../SkillsListItem';
import data from '@/data/kidsMafiaMainPage.json';
import { SkillsListProps } from '@/types';

export const SkillsList: FC<SkillsListProps> = ({ className }) => {
  return (
    <ul
      className={`flex flex-col gap-6 md:w-[496px] xl:w-[699px] xl:flex-row xl:flex-wrap xxl:w-[864px] ${className}`}
    >
      {data.skills.map((skill, idx) => {
        const skillItemStyles = classNames(
          'md:flex xl:min-w-[286px] xl:last:ml-[207px] xl:even:grow xxl:min-w-[272px]',
          {
            'xl:ml-[103px] xl:w-[390px] xxl:ml-[148px] xxl:w-[420px]':
              data.skills.length - 2 === idx,
            'xxl:w-[420px] xxl:even:grow-0': idx === 1,
          },
        );

        return (
          <li key={idx} className={skillItemStyles}>
            <SkillsListItem {...skill} idx={idx} />
          </li>
        );
      })}
    </ul>
  );
};
