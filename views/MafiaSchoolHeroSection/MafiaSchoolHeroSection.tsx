import Image from 'next/image';
import { Heading } from '@/components/Heading/Heading';
import { Section } from '@/components/Section/Section';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { MafiaSchoolHeroData } from '@/types/index';
import s from '@/views/MafiaSchoolHeroSection/MafiaSchoolHeroSection.module.css';

import data from '@/data/mafiaschoolhero.json';

const typedData: MafiaSchoolHeroData = data as MafiaSchoolHeroData;

const MafiaSchoolHeroSection = () => {
  return (
    <Section className={`container ${s.mafiaSchoolHero}`}>
      <Heading
        tag="h1"
        variant="main"
        className="mb-[42px] mt-[62px] text-[32px] font-extrabold text-white-light md:mb-[32px] md:mt-[52px] md:text-[40px] md:leading-[56px] xl:mb-[35px] xl:mt-[41px] xl:text-[52px] xl:leading-[80px]"
        shadow={typedData.heading.content}
      >
        {typedData.heading.content}
      </Heading>

      <Paragraph className="mb-[78px] max-w-[272px] text-base font-normal md:max-w-[288px] xl:max-w-[624px] ">
        {typedData.paragraph}
      </Paragraph>

      <Heading
        tag="h2"
        variant="secondary"
        className="mb-[78px] pt-[5px] text-lg font-bold md:ml-[52%] md:pt-[40px] md:font-semibold xl:ml-[51%] xl:pt-[15px] xxl:pt-[65px]"
      >
        {typedData.subtitle.content}
      </Heading>

      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="relative mb-[24px] h-[300px] w-full md:h-[344px] md:w-full xl:h-[476px] xxl:h-[584px]">
          <Image
            src={typedData.images.main.src}
            alt={typedData.images.main.alt}
            className="h-full w-full rounded-md object-cover md:h-[344px] xl:h-[476px] xxl:h-[584px]"
            fill
            sizes="(max-width: 768px) 100vw, 288px"
            priority={true}
          />
        </div>

        <div className="grid h-[384px] w-full grid-cols-2 gap-6 md:h-[160px] md:w-full md:grid-cols-2 ">
          {typedData.images.grid.map((image, index) => (
            <div
              key={index}
              className="relative h-full w-full md:h-[160px] md:w-full xl:h-[226px] xxl:h-[280px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="h-full w-full rounded-md object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 132px"
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default MafiaSchoolHeroSection;
