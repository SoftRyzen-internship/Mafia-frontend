import classNames from 'classnames';

import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { MafiaSchoolImage } from '@/components/MafiaSchoolImage';
import { LearnList } from '@/components/LearnList';
import { Slider } from '@/components/Slider';
import { SliderSchoolElement } from '@/components/SliderSchoolElement';

import data from '@/data/schoolSection.json';

import css from './MafiaSchool.module.css';

export const MafiaSchool = () => {
  const { title, intro, invite, image, imageAlt, subtitle, description, join } =
    data;

  const sectionStyles = classNames(
    css.schoolSection,
    'py-[80px] mx-auto bg-no-repeat bg-top bg-cover',
  );

  const bgGradient = classNames(
    css.gradient,
    'mb-[40px]',
    'md:mb-0 md:absolute md:top-[280px] md:left-0 md:text-right',
    'xl:top-[256px]',
  );

  return (
    <Section className={sectionStyles}>
      <div className="container relative">
        <Heading variant="primary" shadow={title} className="mb-6">
          {title}
        </Heading>

        <Paragraph className="mb-6 md:w-[339px] xl:w-[340px]">
          {intro}
        </Paragraph>
        <Paragraph className="mb-[60px] md:mb-[218px] md:w-[339px] xl:mb-[220px] xl:w-[465px]">
          {invite}
        </Paragraph>

        <MafiaSchoolImage image={image} alt={imageAlt} />

        <div className={bgGradient}>
          <Heading variant="secondary" className="w-[274px] md:w-auto">
            {subtitle}
          </Heading>
        </div>

        <LearnList className="mb-[60px] md:absolute md:right-[84px] md:top-[418px] xl:right-8 xl:top-[416px]" />

        <Paragraph className="mb-6 md:w-[280px] xl:w-[597px]">
          {description}
        </Paragraph>
        <Paragraph className="mb-[48px] md:w-[280px] xl:w-[597px]">
          {join}
        </Paragraph>

        <Slider
          section="school"
          navigation
          pagination
          element={SliderSchoolElement}
          data={data.swiperData}
        />
      </div>
    </Section>
  );
};
