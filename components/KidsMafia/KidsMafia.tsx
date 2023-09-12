import Image from 'next/image';

import React, { FC } from 'react';

import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { ButtonSecondary } from '@/components/Buttons';
import { SkillsList } from '../SkillsList';
import { ButtonPrimary } from '@/components/Buttons';

import data from '@/data/kidsMafiaMainPage.json';

export const KidsMafia: FC = () => {
  return (
    <Section className="container">
      <Heading shadow={data.title} className="mb-[60px] md:mb-[100px]">
        {data.title}
      </Heading>

      <div className="mb-9 items-start gap-[22px] md:mb-8 md:flex">
        <div className=" relative mb-[60px] h-[315px] w-full overflow-hidden rounded-md md:h-[396px] md:w-[288px] md:shrink-0">
          <Image
            src={data.img1.src}
            alt={data.img1.alt}
            fill
            className="object-cover object-left-top"
            priority
          />
        </div>

        <ul className=" grid gap-6 ">
          {data.text.map((text, idx) => (
            <li key={idx}>
              <Paragraph>{text}</Paragraph>
            </li>
          ))}
        </ul>
      </div>
      <ButtonSecondary
        className="mb-[60px] md:mx-auto xl:h-12 xl:w-[301px] xxl:w-[336px] "
        buttonsize="large"
        linkto=""
      >
        {data.buttonSecondaryText}
      </ButtonSecondary>

      <div className="mb-9 md:relative">
        <div className=" relative h-[260px] w-full overflow-hidden rounded-md md:absolute md:right-0 md:top-[60px] md:h-[246px] md:w-[236px] smOnly:mb-[60px]">
          <Image
            src={data.img2.src}
            alt={data.img2.alt}
            fill
            className="object-cover object-left-top"
            priority
          />
        </div>

        <Heading variant="tertiary" className="mb-[36px] md:mb-[60px]">
          {data.subtitle}
        </Heading>
        <SkillsList />
      </div>

      <ButtonPrimary
        buttonsize="large"
        className="md:mx-auto xl:h-12 xl:w-[301px] xxl:w-[336px]"
      >
        {data.buttonPrimaryText}
      </ButtonPrimary>
    </Section>
  );
};
