import { FC } from 'react';

import classNames from 'classnames';

import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { Slider } from '@/components/Slider';
import { CorporateHeroSlide } from '@/components/CorporateHeroSlide';
// import { SliderCorporateElement } from '@/components/SliderCorporateElement';

import s from './CorporateHero.module.css';

import data from '@/data/corporateHero.json';
import sliderDataCorp from '../../data/corporateParties.json';

export const CorporateHero: FC = () => {
  const { title, text } = data;
  const { swiperData } = sliderDataCorp;

  return (
    <Section className={classNames('relative', s.sectionBg)}>
      <div className="container">
        <Heading shadow={title} className="mb-6">
          {title}
        </Heading>
        <Paragraph className="mb-[60px]">{text}</Paragraph>
        <div className="">
          <Slider
            section="corporate-hero"
            data={swiperData}
            autoplay={true}
            element={CorporateHeroSlide}
            // element={SliderCorporateElement}\
            allowTouchMove={false}
            // centeredSlides={false}
            // slideClassName=''
            className="h-[402px] w-full max-w-[480px]"
          />
        </div>
      </div>
    </Section>
  );
};
