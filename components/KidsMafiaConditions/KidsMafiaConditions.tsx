import React, { FC } from 'react';
import { ClubKidsMafiaCard } from '../ClubKidsMafiaCard';
import { ButtonPrimary } from '../Buttons';
import { Heading } from '../Heading';
import { KidsMafiaConditionsProps } from '@/types';

export const KidsMafiaConditions: FC<KidsMafiaConditionsProps> = ({
  conditions,
  btn,
}) => {
  const { title, cards } = conditions;

  return (
    <div>
      <Heading
        tag="h3"
        variant="secondary"
        className="kids-club-subtitle mb-[78px] text-xl font-semibold xl:text-2xl"
      >
        {title}
      </Heading>
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
      <ButtonPrimary className="m-auto smOnly:w-full">{btn}</ButtonPrimary>
    </div>
  );
};
