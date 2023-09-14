import { FC } from 'react';

import classNames from 'classnames';

import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { Slider } from '@/components/Slider';
import { SliderCorporateElement } from '@/components/SliderCorporateElement';

import s from './CorporateHero.module.css';

import data from '@/data/corporateHero.json';
import sliderDataCorp from '../../data/corporateParties.json';

export const CorporateHero: FC = () => {
  const { title, text } = data;
  const { swiperData } = sliderDataCorp;

  return (
    <Section className={classNames('relative ', s.sectionBg)}>
      <div className="container">
        <Heading shadow={title} className="mb-6">
          {title}
        </Heading>
        <Paragraph className="mb-[60px]  md:max-w-[312px] xl:max-w-[624px]">
          {text}
        </Paragraph>
        <Slider
          section="corporate"
          data={swiperData}
          autoplay={true}
          element={SliderCorporateElement}
          allowTouchMove={false}
        />
      </div>
    </Section>
  );
};
