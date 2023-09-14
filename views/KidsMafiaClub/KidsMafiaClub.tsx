import React, { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { KidsMafiaConditions } from '@/components/KidsMafiaConditions';
import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import data from '@/data/kidsMafia.json';
import { kidsMafiaGallery } from '@/data/kidsMafiaClub';
import s from './KidsMafiaClub.module.css';

export const KidsMafiaClub: FC = () => {
  const { title, text, buttons, conditions } = data.kidsMafiaClub;
  return (
    <section
      className={classNames(
        'py-20 md:pb-[68px] md:pt-[88px] xxl:py-20',
        s.section,
      )}
    >
      <div className="container">
        <Heading shadow={title} className="mb-6 smOnly:min-h-[72px]">
          {title}
        </Heading>
        <Paragraph className="mb-[156px] sm:max-w-[288px] md:mb-[150px] xl:mb-[117px] xl:max-w-[624px] smOnly:min-h-[288px]">
          {text}
        </Paragraph>

        <div className="mb-[174px] flex flex-wrap gap-x-6 xl:mb-[105px] xxl:mb-[142px]">
          {kidsMafiaGallery.map(({ src, alt }, index) => (
            <div
              key={index}
              className={classNames('boxShadow-sm', s.galleryCard)}
            >
              <Image src={src} alt={alt} className="h-full object-cover" />
            </div>
          ))}
        </div>
        <KidsMafiaConditions
          conditions={conditions}
          btn={buttons.btnOpenForm}
        />
      </div>
    </section>
  );
};
