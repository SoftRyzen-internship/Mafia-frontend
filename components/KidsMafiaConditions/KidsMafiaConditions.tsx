import { Heading } from '@/components/Heading';
import { ClubKidsMafiaCard } from '@/components/ClubKidsMafiaCard';
import { BtnWithFormModal } from '@/components/BtnWithFormModal';

import { KidsMafiaConditionsProps } from '@/types';

export const KidsMafiaConditions: React.FC<KidsMafiaConditionsProps> = ({
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
      <BtnWithFormModal
        btnClassName="m-auto smOnly:w-full"
        buttonsize="medium"
        text={btn}
      />
    </div>
  );
};
