import classNames from 'classnames';

import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { MafiaSchoolImage } from '@/components/MafiaSchoolImage';
import { LearnList } from '@/components/LearnList';

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
    'md:absolute md:top-[280px] md:left-0 md:text-right',
  );

  return (
    <Section className={sectionStyles}>
      <div className="container relative">
        <Heading variant="primary" shadow={title} className="mb-6">
          {title}
        </Heading>

        <Paragraph className="mb-6 md:w-[339px]">{intro}</Paragraph>
        <Paragraph className="mb-[60px] md:mb-[218px] md:w-[339px]">
          {invite}
        </Paragraph>

        <MafiaSchoolImage image={image} alt={imageAlt} />

        <div className={bgGradient}>
          <Heading variant="secondary" className="w-[274px] md:w-auto">
            {subtitle}
          </Heading>
        </div>

        <LearnList className="mb-[60px] md:absolute md:right-[84px] md:top-[418px]" />

        <Paragraph className="mb-6 md:w-[280px]">{description}</Paragraph>
        <Paragraph className="mb-[19px] md:w-[280px]">{join}</Paragraph>
      </div>
    </Section>
  );
};
