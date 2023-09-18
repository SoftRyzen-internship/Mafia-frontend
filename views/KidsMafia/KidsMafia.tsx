import Image from 'next/image';

import React, { FC } from 'react';

import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { KidsMafiaTextList } from '@/components/KidsMafiaTextList';
import { ButtonSecondary } from '@/components/Buttons';
import { SkillsList } from '@/components/SkillsList';
import { BtnWithFormModal } from '@/components/BtnWithFormModal';

import css from './KidsMafia.module.css';
import data from '@/data/kidsMafiaMainPage.json';
import common from '@/data/common.json';

export const KidsMafia: FC = () => {
  return (
    <Section
      className={`relative mx-auto max-w-[1920px] bg-primary-dark-200 ${css.sectionBg}`}
    >
      <div className={`container relative ${css.container}`}>
        <Heading
          shadow={data.title}
          className="mb-[60px] md:mb-[100px] xl:mb-[85px] xxl:mb-[100px]"
        >
          {data.title}
        </Heading>
        <div className="mb-[60px] md:flex md:flex-wrap xl:mb-[88px] xl:h-[368px] xl:flex-col xl:content-between">
          <div
            className={`relative h-[348px] w-full overflow-hidden rounded-normal
                      md:h-[396px] md:w-[288px] md:shrink-0 xl:h-[348px] xl:w-[493px]
                      xxl:w-[568px] smOnly:mb-[60px] ${css.imageBg}`}
          >
            <Image
              src={data.img1.src}
              alt={data.img1.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover object-center"
              priority
            />
          </div>

          <KidsMafiaTextList />
          <ButtonSecondary
            className=" md:mt-8 xl:h-12 xl:w-[301px] xxl:w-[336px] mdOnly:mx-auto"
            buttonsize="large"
            linkto={common.navigationRowLinks[2].href}
          >
            {data.buttonSecondaryText}
          </ButtonSecondary>
        </div>

        <div className="mb-9 md:relative md:mb-8 xl:mb-[68px]">
          <div
            className="relative h-[260px] w-full overflow-hidden rounded-normal
                      md:absolute md:right-0 md:top-0 md:h-[246px] md:w-[236px]
                      xl:h-[352px] xl:w-[394px] xxl:right-[148px] xxl:w-[568px] smOnly:mb-[60px]"
          >
            <Image
              src={data.img2.src}
              alt={data.img2.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover object-center"
              priority
            />
          </div>

          <Heading
            variant="tertiary"
            className="mb-9 md:mb-[60px] md:w-[294px] xl:w-auto"
          >
            {data.subtitle}
          </Heading>
          <SkillsList />
        </div>

        <BtnWithFormModal
          buttonsize="large"
          text={data.buttonPrimaryText}
          btnClassName="md:mx-auto xl:h-12 xl:w-[301px] xxl:w-[336px]"
        />
      </div>
    </Section>
  );
};
