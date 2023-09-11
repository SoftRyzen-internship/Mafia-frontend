import React from 'react';
import Image from 'next/image';

import { Paragraph } from '@/components/Paragraph';
import { HallFameCardProps } from '@/types/index';
import cupsData from '@/data/hallFameData.json';

import IconFirst from '@/public/images/hallfame/iconcupfirst.svg';
import IconSecond from '@/public/images/hallfame/iconcuptwo.svg';
import IconThird from '@/public/images/hallfame/iconcupthree.svg';
import IconStar from '@/public/images/hallfame/iconcupstar.svg';
import s from '@/components/HallFameCard/HallFameCard.module.css';

const HallFameCard: React.FC<HallFameCardProps> = ({ attributes, cups }) => {
  if (!attributes) {
    return null;
  }
  const { title, description, img } = attributes;

  const iconsMap = {
    first: IconFirst,
    second: IconSecond,
    third: IconThird,
    star: IconStar,
  };

  return (
    <li className={`relative h-[460px] w-full ${s.card}`}>
      <div
        className={`${s.front} absolute left-0 top-0 flex h-[460px] w-full flex-col items-start justify-evenly rounded-[6px] transition duration-1000 hover:shadow-lg focus:shadow-lg`}
      >
        <div className="relative h-full w-full">
          <Image
            src={img.data.attributes.url}
            alt={img.data.attributes.alternativeText}
            className="h-full w-full rounded-md object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            priority={true}
          />
        </div>
      </div>
      <div
        className={`${s.back} absolute left-0 top-0 flex h-[460px] w-full flex-col items-start justify-evenly rounded-[6px] font-raleway transition duration-1000 hover:shadow-lg focus:shadow-lg`}
      >
        <h2 className="mx-auto my-0 mb-2 px-0 py-2 text-center font-raleway text-xl font-semibold xl:pb-0 xl:pt-9">
          {title}
        </h2>
        <div
          className="mb-4 px-5 text-left font-raleway text-sm font-normal tracking-normal md:text-base"
          dangerouslySetInnerHTML={{
            __html: description.replace(/\n/g, '<br />'),
          }}
        />

        <div className="mx-auto my-0 ">
          <h3 className="mb-2 text-center text-lg font-semibold">
            {cupsData.cupstitle}
          </h3>
          <ul className="flex list-none flex-row text-sm font-semibold md:text-base xl:p-10">
            {cups?.map((cup, index) => {
              const Icon = iconsMap[cup.place_number];
              return (
                <li
                  key={index}
                  className="flex max-w-fit flex-col items-center px-[5px] text-center  md:max-w-fit md:gap-5 md:p-3 md:text-base"
                >
                  {Icon && <Icon className="h-10 w-10" />}
                  <Paragraph className="overflow-wrap break-words text-[10px] md:text-[16px]">
                    {cup.competition_name}
                  </Paragraph>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default HallFameCard;
