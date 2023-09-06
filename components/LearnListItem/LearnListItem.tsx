import React, { FC } from 'react';

import Heading from '@/components/Heading/Heading';
import { LearnListItemProps } from '@/types';

const LearnListItem: FC<LearnListItemProps> = ({ title, desc }) => {
  return (
    <div className="after:mt-6 after:block after:h-[2px] after:w-full  after:bg-grad_500">
      <Heading tag="h3" variant="tertiary" className="mb-5">
        {title}
      </Heading>
      <p className=" font-raleway text-base text-white-light xxl:max-w-[221px] ">
        {desc}
      </p>
    </div>
  );
};

export default LearnListItem;
