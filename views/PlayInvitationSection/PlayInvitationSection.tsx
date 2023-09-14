import Image from 'next/image';

import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { FormWithPopUp } from '@/components/FormWithPopUp';

import data from '@/data/corporateInviteGame.json';
import s from '@/views/PlayInvitationSection/PlayInvitationSection.module.css';

export const PlayInvitationSection = () => {
  const { primary_title, image } = data;

  return (
    <Section className={s.bg_img}>
      <div className="container pb-[32px] pt-[62px] md:pb-[112px] md:pt-[52px]">
        <Heading
          shadow={primary_title}
          className="mb-[62px] md:mb-[60px] md:hidden smOnly:w-[280px]"
        >
          {primary_title}
        </Heading>
        <div className="flex flex-col md:flex-row md:gap-[24px] xl:gap-[127px] xxl:gap-[320px]">
          <div
            className="relative order-1 mb-[62px] h-[315px] w-full overflow-hidden
                     rounded-normal md:order-1 md:h-[518px] md:w-[288px] xl:h-[570px] xl:w-[493px] xxl:w-[716px]"
          >
            <Image
              className="object-cover"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          <div className="order-3 text-center md:order-2 xl:w-[466px] smOnly:h-[482px] mdOnly:flex-1">
            <Heading
              shadow={primary_title}
              className="mb-[24px] hidden md:mb-[116px] md:block xl:mb-[67px] smOnly:w-[280px]"
            >
              {primary_title}
            </Heading>
            <div className="xl:w-[466px] smOnly:h-[500px] mdOnly:flex-1">
              <FormWithPopUp />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
