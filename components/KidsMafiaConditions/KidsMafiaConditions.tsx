import React, { FC } from 'react';
import ClubKidsMafiaCard from '../ClubKidsMafiaCard/ClubKidsMafiaCard';

interface IKidsMafiaCard {
  iconDescr: string;
  subtitle: string;
  text: string;
}

interface KidsMafiaConditionsProps {
  conditions: { title: string; cards: IKidsMafiaCard[] };
  btn: string;
}

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
      <button type="button">{btn}</button>
    </div>
  );
};

export default KidsMafiaConditions;
