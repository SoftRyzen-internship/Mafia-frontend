import Image from 'next/image';
import { Heading } from '@/components/Heading/Heading';
import { Section } from '@/components/Section/Section';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { MafiaSchoolHeroData } from '@/types/index';
import s from '@/components/MafiaSchoolHero/MafiaSchoolHero.module.css';

import data from '@/data/mafiaschoolhero.json';

const typedData: MafiaSchoolHeroData = data as MafiaSchoolHeroData;

const MafiaSchoolHero = () => {
  return (
    <Section className={`container pt-8 md:pt-4 xl:pt-32 ${s.mafiaSchoolHero}`}>
      {typedData.sections.map((section, index) => {
        switch (section.type) {
          case 'heading':
            return (
              <Heading
                key={index}
                tag="h1"
                variant={section.variant}
                className="mb-[24px] text-[32px] font-extrabold text-white-light md:text-[40px] md:leading-[56px] xl:text-[52px] xl:leading-[80px]"
                shadow={section.content}
              >
                {section.content}
              </Heading>
            );
          case 'subtitle':
            return (
              <Heading
                key={index}
                tag="h2"
                variant="secondary"
                className="mb-[78px] text-lg font-bold md:ml-[52%] md:font-semibold xl:ml-[51%]"
              >
                {section.content}
              </Heading>
            );
          case 'paragraph':
            return (
              <Paragraph
                key={index}
                className="mb-[78px] text-base font-normal md:pr-[62%] xl:pr-[49%] xxl:pr-[60%]"
              >
                {section.content}
              </Paragraph>
            );
          default:
            return null;
        }
      })}

      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        {typedData.sections.map((section, index) => {
          switch (section.type) {
            case 'image-main':
              return (
                <div
                  key={index}
                  className="relative mb-[24px] h-[300px] w-full md:h-[344px] md:w-full"
                >
                  {section.src && section.alt ? (
                    <Image
                      src={section.src}
                      alt={section.alt}
                      className="h-full w-full rounded-md object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 288px"
                      priority={true}
                    />
                  ) : null}
                </div>
              );
            case 'image-grid':
              return (
                <div
                  key={index}
                  className="grid h-[384px] w-full grid-cols-2 gap-6 md:h-[160px] md:w-full md:grid-cols-2"
                >
                  {section.images
                    ? section.images.map((image, imgIndex) =>
                        image.src && image.alt ? (
                          <div
                            key={imgIndex}
                            className="relative h-full w-full md:h-[160px] md:w-full"
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
                        ) : null,
                      )
                    : null}
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </Section>
  );
};

export default MafiaSchoolHero;
