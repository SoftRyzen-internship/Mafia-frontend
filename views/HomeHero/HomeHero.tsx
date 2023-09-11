import classNames from 'classnames';

import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { HomeHeroImage } from '@/components/HomeHeroImage';
import { Schedule } from '@/components/Schedule';
import { ButtonPrimary } from '@/components/Buttons';

import data from '@/data/homeHero.json';

import css from './HomeHero.module.css';

export const HomeHero = () => {
  const { title, description, images, subtitle, button } = data;

  const sectionStyles = classNames(
    'pt-[52px] bg-no-repeat bg-center bg-cover',
    css.hero,
  );

  return (
    <section className={sectionStyles}>
      <div className="container py-[40px]">
        <Heading tag="h1" variant="main" className="mb-3">
          {title}
        </Heading>

        <Paragraph className="mb-[26px] text-lg font-light leading-[28px]">
          {description}
        </Paragraph>

        <HomeHeroImage images={images} alt={title} />

        <Heading tag="h2" variant="tertiary" className="pb-[30px]">
          {subtitle}
        </Heading>
        <Schedule className="pb-5" />

        <ButtonPrimary className="w-full">{button}</ButtonPrimary>
      </div>
    </section>
  );
};
