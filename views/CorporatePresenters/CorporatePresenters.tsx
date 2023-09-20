import { getPresenters } from '@/utils/api/getPresenters';

import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { Slider } from '@/components/Slider';
import { SliderPresentersElement } from '@/components/SliderPresentersElement';
import { Fallback } from '@/components/Fallback';

import data from '@/data/corporateMainPage.json';
import css from './CorporatePresenters.module.css';

export const CorporatePresenters = async () => {
  const { secondary_title } = data;
  const presentersData = await getPresenters();

  return (
    <Section className={`${css.section_decor} bg-primary-dark-200`}>
      <div className="container">
        <Heading
          tag="h2"
          variant="secondary"
          className="relative mb-[78px] mt-[18px]"
        >
          {secondary_title}
        </Heading>
        {presentersData && presentersData.length > 0 ? (
          <Slider
            pagination
            section="presenters"
            element={SliderPresentersElement}
            data={presentersData}
            slideClassName="!h-auto mediaHover:hover:translate transform transition duration-300 ease-out mediaHover:hover:cursor-pointer"
          />
        ) : (
          <Fallback />
        )}
      </div>
    </Section>
  );
};
