import React from 'react';
import Image from 'next/image';
import s from '../HallFameCard/HallFameCard.module.css';

const HallFameCustomCard = () => {
  return (
    <li className={`perspective-[1000px] relative h-[460px] w-full ${s.card}`}>
      <div
        className={`${s.front} absolute left-0 top-0 flex h-[460px] w-full flex-col items-start justify-evenly rounded-[6px] transition duration-1000`}
      >
        <h3 className="m-auto mt-20 text-base font-semibold leading-7 tracking-normal">
          Тут може бути твоє фото
        </h3>
        <div className="relative flex h-full w-full items-center">
          <Image
            src="/images/hallfame/canbephoto.png"
            alt="Placeholder Image"
            className="m-auto"
            priority={true}
            width={110}
            height={196}
          />
        </div>
      </div>
      <div
        className={`${s.back} absolute left-0 top-0 flex h-[460px] w-full flex-col items-start justify-evenly rounded-[6px] transition duration-1000`}
      >
        <h3 className="m-auto mt-20 text-base font-semibold leading-7 tracking-normal">
          Тут може бути твоє фото
        </h3>

        <div className="relative flex h-full w-full items-center">
          <Image
            src="/images/hallfame/canbephoto.png"
            alt="Placeholder Image"
            className="m-auto"
            width={110}
            height={196}
          />
        </div>
      </div>
    </li>
  );
};

export default HallFameCustomCard;
