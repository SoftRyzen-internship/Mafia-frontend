import Image from 'next/image';

import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { FormWithPopUp } from '@/components/FormWithPopUp';

import data from '@/data/corporateInviteGame.json';
import s from '@/views/CorporateInviteGame/CorporateInviteGame.module.css';

export const CorporateInviteGame = () => {
  const { primary_title, image } = data;

  return (
    <Section className="bg-primary-dark-200 pb-[112px]">
      <div className={`${s.bgcontainer} container`}>
        <Heading
          tag="h2"
          variant="primary"
          shadow_prop={primary_title}
          className="mb-[44px] text-start md:hidden smOnly:w-[280px]"
        >
          {primary_title}
        </Heading>
        <div className="flex flex-col md:flex-row md:gap-[24px] xl:gap-[127px] xxl:gap-[320px]">
          <div
            className="relative order-1 mb-[60px] h-[315px] w-full overflow-hidden rounded-normal
                     md:order-1 md:mb-0 md:h-[518px] md:w-[288px] xl:h-[570px] xl:w-[493px] xxl:w-[716px]"
          >
            <Image
              className="h-[315px] object-cover object-left md:h-[518px] md:object-center xl:h-[570px] xl:object-left"
              src={image.src}
              alt={image.alt}
              width={716}
              height={570}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          <div className="z-0 order-3 md:order-2 xl:w-[466px] smOnly:h-[482px] mdOnly:flex-1">
            <Heading
              tag="h2"
              variant="primary"
              shadow_prop={primary_title}
              className="hidden text-start md:mb-[55px] md:block xl:mb-[30px] smOnly:w-[280px]"
            >
              {primary_title}
            </Heading>
            <div className="md:w-[288px] xl:w-[493px] smOnly:h-[500px] mdOnly:flex-1">
              <FormWithPopUp />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
