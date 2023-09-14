import Image from 'next/image';

import { getPresenters } from '@/utils/api/getPresenters';

import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { FormWithPopUp } from '@/components/FormWithPopUp';
import { Fallback } from '@/components/Fallback';
import { Slider } from '@/components/Slider';
import { SliderPresentersElement } from '@/components/SliderPresentersElement';

import data from '@/data/corporateMainPage.json';
import css from './CorporateParties.module.css';

export const CorporateParties = async () => {
  const { primary_title, secondary_title, image } = data;
  const presentersData = await getPresenters();

  return (
    <Section className={css.bg_img}>
      <div className="container">
        <Heading
          shadow={primary_title}
          className="mb-[24px] md:mb-[60px] smOnly:w-[280px]"
        >
          {primary_title}
        </Heading>
        <div
          className="mb-[78px] flex flex-col gap-[60px] 
                    md:flex-row md:gap-[24px] xl:gap-[127px] xxl:gap-[320px]"
        >
          <div
            className="relative h-[315px] w-full overflow-hidden rounded-normal 
                    md:h-[490px] md:w-[288px] xl:h-[459px] xl:w-[596px] xxl:w-[716px]"
          >
            <Image
              className="object-cover object-center"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          <div className="xl:w-[466px] smOnly:h-[482px] mdOnly:flex-1">
            <FormWithPopUp />
          </div>
        </div>

        <Heading
          tag="h3"
          variant="secondary"
          className="relative mb-[42px] md:mb-[76px]"
        >
          {secondary_title}
        </Heading>
        {presentersData && presentersData.length > 0 ? (
          <Slider
            pagination
            section="presenters"
            element={SliderPresentersElement}
            data={presentersData}
            slideClassName="!h-auto"
          />
        ) : (
          <Fallback />
        )}
      </div>
    </Section>
  );
};
