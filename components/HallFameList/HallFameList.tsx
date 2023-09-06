import React from 'react';
import HallFameCard from '../HallFameCard/HallFameCard';
import HallFameCustomCard from '../HallFameCustomCard/HallFameCustomCard';
import hallFameData from '@/data/hallFameData.json';
import s from './HallFameList.module.css';

const HallFameList: React.FC = () => {
  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  let customCardData;
  const shuffledData = shuffleArray([...hallFameData, customCardData]);

  return (
    <div
      className={`${s.hallFameListContainer} shadow-sm rounded-lg bg-cover bg-center p-5`}
    >
      <h1 className="mb-[-10px] text-[32px] font-extrabold text-[rgba(243,243,243,0.06)] md:mb-[-30px] md:px-[84px] md:text-[40px] md:leading-[56px] xl:mb-[-40px] xl:px-[112px] xl:text-[52px] xl:leading-[80px]">
        Зал слави
      </h1>

      <h2 className="pb-6 text-[28px] font-semibold leading-9 md:px-[84px] md:text-[32px] md:font-semibold md:leading-[36px] xl:px-[112px] xl:text-[42px] xl:font-semibold xl:leading-[52px]">
        Зал слави
      </h2>

      <ul className="grid h-full w-full grid-cols-1 gap-6 md:grid-cols-2 md:px-[84px] xl:grid-cols-3 xl:px-[112px] xxl:grid-cols-4">
        {shuffledData.map((data, index) => {
          if (data === customCardData) {
            return <HallFameCustomCard key={index} />;
          }
          return <HallFameCard key={index} {...data} />;
        })}
      </ul>
    </div>
  );
};

export default HallFameList;
