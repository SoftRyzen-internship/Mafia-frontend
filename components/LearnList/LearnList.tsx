import React, { FC } from 'react';
import mainContent from '@/data/mainPage.json';
import { LearnListProps } from '@/types';

const LearnList: FC<LearnListProps> = ({ className }) => {
  return (
    <ul
      className={`grid gap-6 md:w-[288px] xl:flex xl:w-[596px] xl:flex-wrap xxl:w-[864px]  ${className}`}
    >
      {mainContent.learnList.map(({ title, desc }, idx) => {
        return (
          <li
            key={idx}
            className=" rounded bg-primary-dark-400 p-6 xl:w-[286px] xl:px-8 xxl:w-[420px] xxl:px-11"
          >
            <div className="after:mt-6 after:block after:h-[2px] after:w-full  after:bg-grad_500">
              <h3 className=" mb-5 font-raleway text-xl font-medium text-white-light ">
                {title}
              </h3>

              <p className=" font-raleway text-base text-white-light xxl:max-w-[221px] ">
                {desc}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default LearnList;
