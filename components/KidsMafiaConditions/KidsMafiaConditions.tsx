import React, { FC } from 'react';
import ClubKidsMafiaCard from '../ClubKidsMafiaCard/ClubKidsMafiaCard';
import { ButtonPrimary } from '../Buttons';
import { KidsMafiaConditionsProps } from '@/types';

const KidsMafiaConditions: FC<KidsMafiaConditionsProps> = ({
  conditions,
  btn,
}) => {
  const { title, cards } = conditions;

  return (
    <div>
      <h3 className="kids-club-subtitle mb-[78px] text-xl font-semibold xl:text-2xl">
        {title}
      </h3>
      <div className="mb-8  flex justify-center gap-6 md:flex-wrap xl:flex-nowrap smOnly:flex-col ">
        {cards.map(({ subtitle, text, iconDescr }, index) => (
          <ClubKidsMafiaCard
            key={index}
            subtitle={subtitle}
            text={text}
            iconDescr={iconDescr}
          />
        ))}
      </div>
      {/* <button type="button">{btn}</button> */}
      <ButtonPrimary className="m-auto smOnly:w-full">{btn}</ButtonPrimary>
    </div>
  );
};

export default KidsMafiaConditions;
