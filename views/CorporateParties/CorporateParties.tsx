import Image from 'next/image';

import { getPresenters } from '@/utils/api/getPresenters';

import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { FormWithPopUp } from '@/components/FormWithPopUp';
import { Fallback } from '@/components/Fallback';
import { Slider } from '@/components/Slider';
import { SliderPresentersElement } from '@/components/SliderPresentersElement';
import { ButtonSecondary } from '@/components/Buttons';

import data from '@/data/corporateMainPage.json';
import common from '@/data/common.json';
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
              className="h-full w-full object-cover object-center xl:h-auto xl:-translate-y-[264px] xl:object-top xxl:-translate-y-[396px]"
              src={image.src}
              alt={image.alt}
              width={272}
              height={315}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="xl:w-[390px] xxl:w-[420px] smOnly:h-[482px] mdOnly:flex-1">
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
            slideClassName="!h-auto mediaHover:hover:translate transform transition duration-300 ease-out mediaHover:hover:cursor-pointer"
          />
        ) : (
          <Fallback />
        )}

        <ButtonSecondary
          linkto={common.navigationRowLinks[1].href}
          buttonsize="large"
          className="mt-9 md:mx-auto md:mt-8 xl:h-12 xl:w-[301px] xxl:w-[336px]"
        >
          {data.buttonSecondaryText}
        </ButtonSecondary>
      </div>
    </Section>
  );
};
