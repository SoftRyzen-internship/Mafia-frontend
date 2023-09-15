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

export const MafiaSchool: React.FC = () => {
  const {
    title,
    intro,
    invite,
    image,
    imageAlt,
    subtitle,
    description,
    join,
    swiperData,
  } = data;

  const sectionStyles = classNames(
    css.schoolSection,
    'py-[80px] mx-auto relative bg-no-repeat bg-top bg-cover',
  );

  const containerStyles = classNames('container relative', css.container);

  return (
    <Section className={sectionStyles}>
      <div className={containerStyles}>
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

        <Heading
          variant="secondary"
          className="mb-[40px] w-[274px]
          md:absolute md:right-[99px] md:top-[280px] md:mb-0 md:w-auto
          xl:right-[350px] xl:top-[272px] xxl:right-[565px]"
        >
          {subtitle}
        </Heading>

        <LearnList
          className="mb-[60px] md:absolute md:right-[84px] md:top-[418px]
            xl:right-[84px] xl:top-[416px]"
        />

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
          data={swiperData}
        />
      </div>
    </Section>
  );
};
