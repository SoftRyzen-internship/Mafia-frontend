import { FC } from 'react';
import classNames from 'classnames';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { Slider } from '@/components/Slider';
import { SliderCorporateElement } from '@/components/SliderCorporateElement';
import data from '@/data/corporateHero.json';
import sliderDataCorp from '@/data/corporateParties.json';

import s from './CorporateHero.module.css';

export const CorporateHero: FC = () => {
  const { title, text } = data;
  const { swiperData } = sliderDataCorp;

  return (
    <Section className={classNames('relative bg-transparent', s.sectionBg)}>
      <div className="container">
        <Heading
          shadow_prop={title}
          variant="primary"
          className="mb-6  font-semibold"
        >
          {title}
        </Heading>
        <Paragraph className="mb-[60px]  md:max-w-[312px] xl:max-w-[624px]">
          {text}
        </Paragraph>
      </div>
      <Slider
        section="corporate"
        data={swiperData}
        autoplay={true}
        element={SliderCorporateElement}
        allowTouchMove={false}
        className="!w-[100vw] !max-w-[1920px]"
        slideClassName=" md:!w-auto"
      />
    </Section>
  );
};
