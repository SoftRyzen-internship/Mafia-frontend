import React from 'react';
import Image from 'next/image';
import s from './HallFameCard.module.css';
import IconCup from '@/public/images/hallFame/iconcupfirst.svg';

//TODO: insert interface to types file and export in this file
interface HallFameCup {
  title: string;
}

interface HallFameCardProps {
  name: string;
  description: string;
  cupstitle: string;
  cups: HallFameCup[];
  image: {
    src: string;
    alt: string;
  };
}

const HallFameCard: React.FC<HallFameCardProps> = ({
  name,
  description,
  cupstitle,
  cups,
  image,
}) => {
  return (
    <li
      className={` relative h-[460px] w-full hover:shadow-[0px_0px_14px_0px_rgba(159,127,199,0.11)] focus:shadow-[0px_0px_14px_0px_rgba(159,127,199,0.11)] ${s.card}`}
    >
      <div
        className={`${s.front} absolute left-0 top-0 flex h-[460px] w-full flex-col items-start justify-evenly rounded-[6px] transition duration-1000`}
      >
        <div className="relative h-full w-full">
          <Image
            src={image.src}
            alt={image.alt}
            className="h-full w-full rounded-md object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            priority={true}
          />
        </div>
      </div>
      <div
        className={`${s.back} absolute left-0 top-0 flex h-[460px] w-full flex-col items-start justify-evenly rounded-[6px] font-raleway transition duration-1000`}
      >
        <h2 className="mx-auto my-0 mb-2 px-0 py-2 text-center font-raleway text-xl font-semibold xl:pb-0 xl:pt-9">
          {name}
        </h2>
        <div
          className="px-5 text-left font-raleway text-base font-normal leading-6 tracking-normal"
          dangerouslySetInnerHTML={{
            __html: description.replace(/\n/g, '<br />'),
          }}
        />

        <div className="mt-4">
          <h3 className="text-center text-lg font-semibold">{cupstitle}</h3>
          <ul className="xl: flex list-none flex-row p-3 xl:p-10">
            {cups.map((cup, index) => (
              <li
                key={index}
                className="flex flex-col items-center gap-5 text-center"
              >
                {' '}
                <IconCup className="text-790E8D h-12 w-12" />
                <p>{cup.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default HallFameCard;
