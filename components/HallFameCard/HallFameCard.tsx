'use client';
import React, { useCallback } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Paragraph } from '@/components/Paragraph';
import { useWindowWidth } from '@/hooks';
import hallFameData from '@/data/hallFameData.json';
import iconsMap from '@/data/hallFameCardIconMap';

import { HallFameCardProps } from '@/types/index';

import s from '@/components/HallFameCard/HallFameCard.module.css';

export const HallFameCard: React.FC<HallFameCardProps> = ({
  attributes,
  cups,
  id,
  idActive,
  setIdActive,
}) => {
  const { isScreenDesktop, isLargeScreenDesktop } = useWindowWidth();

  const onClickCard = useCallback(() => {
    if (isScreenDesktop || isLargeScreenDesktop) return;

    if (id === idActive) {
      setIdActive(null);
    } else {
      setIdActive(id);
    }
  }, [id, idActive, isScreenDesktop, isLargeScreenDesktop, setIdActive]);

  if (!attributes) {
    return null;
  }
  const { title, description, img } = attributes;

  const cardClass = classNames({
    [s.active]: id === idActive,
    '': id != idActive,
  });

  return (
    <li
      className={classNames('relative h-[460px] w-full', s.card, cardClass)}
      onClick={onClickCard}
      tabIndex={0}
    >
      <div
        className={`${s.front} absolute left-0 top-0 flex h-[460px] w-full flex-col items-start justify-evenly rounded-[6px] transition duration-1000 hover:shadow-lg focus:shadow-lg`}
      >
        <div className="relative h-full w-full">
          <Image
            src={img.data.attributes.url}
            alt={
              img.data.attributes.alternativeText ||
              hallFameData.alternativeText
            }
            className="h-full w-full rounded-md object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>
      <div
        className={`${s.back} absolute left-0 top-0 flex h-[460px] w-full flex-col items-start justify-evenly rounded-[6px] font-raleway transition duration-1000 `}
      >
        <h2 className="mx-auto my-0 mb-2 px-0 py-2 text-center font-raleway text-xl font-semibold xl:pb-0 xl:pt-9">
          {title}
        </h2>
        <div className="mb-4 px-5 text-left font-raleway text-sm font-normal tracking-normal md:text-base">
          {description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < description.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>

        <div className="my-0  ">
          <h3 className="mb-2  text-center text-lg font-semibold xl:mb-[12px] xxl:mb-[11px]">
            {hallFameData.cupstitle}
          </h3>

          <ul className="grid grid-cols-3 gap-x-4 px-3 text-sm font-semibold md:text-base xl:px-[23px] xxl:px-8">
            {cups?.map((cup, index) => {
              const Icon = iconsMap[cup.place_number];
              return (
                <li
                  key={index}
                  className="flex flex-col items-center px-[5px] text-center md:text-base"
                >
                  {Icon && (
                    <Icon
                      className="mb-[24px] h-10 w-10 xl:mb-[16px] xxl:mb-[15px]"
                      width={10}
                      height={10}
                    />
                  )}
                  <Paragraph className="overflow-wrap max-w-[100%] break-words text-[12px] md:text-[16px] ">
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
