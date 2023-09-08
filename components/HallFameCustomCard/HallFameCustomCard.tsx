import React from 'react';
import Image from 'next/image';

import s from '@/components/HallFameCard/HallFameCard.module.css';
import customCardData from '@/data/customCardData.json';

const HallFameCustomCard = () => {
  return (
    <li className={`relative h-[460px] w-full ${s.card}`}>
      <div className="absolute left-0 top-0 flex h-[460px] w-full flex-col items-start justify-evenly rounded-[6px] bg-black-dark transition duration-1000">
        <h3 className="m-auto mt-20 text-base font-semibold leading-7 tracking-normal">
          {customCardData.title}
        </h3>
        <div className="relative flex h-full w-full items-center">
          <Image
            src={customCardData.src}
            alt={customCardData.alt}
            className="m-auto"
            priority={true}
            width={110}
            height={196}
          />
        </div>
      </div>
    </li>
  );
};

export default HallFameCustomCard;
