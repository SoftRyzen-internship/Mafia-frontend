import classNames from 'classnames';

import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { HomeHeroImage } from '@/components/HomeHeroImage';
import { Schedule } from '@/components/Schedule';
import { ButtonPrimary } from '@/components/Buttons';

import data from '@/data/homeHero.json';

import css from './HomeHero.module.css';

export const HomeHero: React.FC = () => {
  const { title, description, image, subtitle, button } = data;

  const sectionStyles = classNames(
    'mx-auto bg-no-repeat bg-top bg-cover',
    css.hero,
  );

  const subtitleStyles = classNames(
    'relative mb-[30px] md:mb-[34px] xl:mb-8 xxl:mb-[40px]',
    css.schedule,
  );

  return (
    <section className={sectionStyles}>
      <div className="container relative py-[40px] md:py-[80px] xxl:py-[120px]">
        <Heading tag="h1" variant="main" className="mb-3 md:mb-5 xl:mb-6">
          {title}
        </Heading>

        <Paragraph
          className="mb-[26px] text-lg font-light leading-[28px]
            md:mb-9 md:w-[332px] md:text-xl
            xl:mb-[192px] xl:w-[600px] xl:text-2xl xl:leading-8
            xxl:mb-[334px] xxl:w-[608px]"
        >
          {description}
        </Paragraph>

        <HomeHeroImage image={image} alt={title} />

        <Heading tag="h2" variant="tertiary" className={subtitleStyles}>
          {subtitle}
        </Heading>
        <Schedule className="mb-5 md:mb-6" />

        <ButtonPrimary className="w-full xxl:w-[417px]">{button}</ButtonPrimary>
      </div>
    </section>
  );
};
