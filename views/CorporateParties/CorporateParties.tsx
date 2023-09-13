import Image from 'next/image';

import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';

import data from '@/data/corporateMainPage.json';
import css from './CorporateParties.module.css';

export const CorporateParties = () => {
  const { primary_title, secondary_title, image } = data;

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
          <div className="border pt-[100px] text-center xl:w-[466px] smOnly:h-[482px] mdOnly:flex-1">
            Тут може бути ваша форма
          </div>
        </div>

        <Heading
          tag="h3"
          variant="secondary"
          className="relative mb-[42px] md:mb-[76px]"
        >
          {secondary_title}
        </Heading>
        <div className="border text-center"> Тут може бути ваш слайдер</div>
      </div>
    </Section>
  );
};
