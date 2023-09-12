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
    <Section>
      <div className="container">
        <Heading
          shadow={data.title}
          className="mb-[60px] md:mb-[100px] xl:mb-[85px]"
        >
          {data.title}
        </Heading>

        <div className="mb-[60px] md:flex md:flex-wrap xl:mb-[88px] xl:h-[368px] xl:flex-col">
          <div className="relative h-[315px] w-full overflow-hidden rounded-md md:h-[396px] md:w-[288px] md:shrink-0 xl:h-[348px] xl:w-[493px] smOnly:mb-[60px]">
            <Image
              src={data.img1.src}
              alt={data.img1.alt}
              fill
              className="object-cover object-left-top"
              priority
            />
          </div>

          <ul className="grid shrink gap-6 xl:mr-[23px] xl:w-[465px] smOnly:mb-9 mdOnly:ml-[22px] mdOnly:w-[290px]">
            {data.text.map((text, idx) => (
              <li key={idx}>
                <Paragraph>{text}</Paragraph>
              </li>
            ))}
          </ul>
          <ButtonSecondary
            className=" md:mt-8 xl:h-12 xl:w-[301px] xxl:w-[336px] mdOnly:mx-auto"
            buttonsize="large"
            linkto=""
          >
            {data.buttonSecondaryText}
          </ButtonSecondary>
        </div>

        <div className="mb-9 md:relative md:mb-8 xl:mb-[68px]">
          <div className="relative h-[260px] w-full overflow-hidden rounded-md md:absolute md:right-0 md:top-0 md:h-[246px] md:w-[236px] xl:h-[352px] xl:w-[493px] smOnly:mb-[60px]">
            <Image
              src={data.img2.src}
              alt={data.img2.alt}
              fill
              className="object-cover object-left-top"
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

        <ButtonPrimary
          buttonsize="large"
          className="md:mx-auto xl:h-12 xl:w-[301px] xxl:w-[336px]"
        >
          {data.buttonPrimaryText}
        </ButtonPrimary>
      </div>
    </Section>
  );
};

// <Section>
//   <div className="container">

//     <div className=" xl:items-start">
//       <div className="  ">
//         <Image
//           src={data.img1.src}
//           alt={data.img1.alt}
//           fill
//           className="object-cover object-left-top"
//           priority
//         />
//       </div>

//       <ul className="    ">
//         {data.text.map((text, idx) => (
//           <li key={idx}>
//             <Paragraph>{text}</Paragraph>
//           </li>
//         ))}
//       </ul>

//     </div>

//   </div>
// </Section>;
