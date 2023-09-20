import Image from 'next/image';
import { Heading } from '@/components/Heading/Heading';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { MafiaSchoolHeroData } from '@/types/index';
import s from '@/views/MafiaSchoolHeroSection/MafiaSchoolHeroSection.module.css';

import data from '@/data/mafiaschoolhero.json';

const typedData: MafiaSchoolHeroData = data as MafiaSchoolHeroData;

export const MafiaSchoolHeroSection = () => {
  return (
    <section className={`bg-primary-dark-200 ${s.section}`}>
      <div className="container py-[80px] ">
        <Heading
          tag="h1"
          variant="main"
          className="mb-[42px] text-[32px] font-extrabold text-white-light md:mb-[32px] md:text-[40px] md:leading-[56px] xl:mb-[35px] xl:text-[52px] xl:leading-[80px]"
          shadow_prop={typedData.heading.content}
        >
          {typedData.heading.content}
        </Heading>

        <Paragraph className="mb-[78px] max-w-[272px] text-base font-normal md:max-w-[288px] xl:mb-[76px] xl:max-w-[624px] ">
          {typedData.paragraph}
        </Paragraph>

        <Heading
          tag="h2"
          variant="secondary"
          className={`mb-[78px] text-lg font-bold md:ml-[52%] md:font-semibold xl:ml-[51%]`}
        >
          {typedData.subtitle.content}
        </Heading>

        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="relative h-[300px] w-full md:h-[344px] md:w-full xl:h-[476px] xxl:h-[584px]">
            <Image
              src={typedData.images.main.src}
              alt={typedData.images.main.alt}
              className="h-full w-full rounded-md object-cover md:h-[344px] xl:h-[476px] xxl:h-[584px]"
              fill
              sizes="(max-width: 768px) 100vw, 288px"
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
      </div>
    </section>
  );
};
