import React, { FC } from 'react';

import { Paragraph } from '../Paragraph';
import data from '@/data/kidsMafiaMainPage.json';

export const KidsMafiaTextList: FC = () => {
  return (
    <ul className="grid shrink gap-6 xl:mr-[23px] xl:w-[465px] xxl:mr-[220px] xxl:w-[496px] smOnly:mb-9 mdOnly:ml-[22px] mdOnly:w-[290px]">
      {data.text.map((text, idx) => (
        <li key={idx}>
          <Paragraph>{text}</Paragraph>
        </li>
      ))}
    </ul>
  );
};
