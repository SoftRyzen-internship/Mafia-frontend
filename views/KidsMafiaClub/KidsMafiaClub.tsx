import Image from 'next/image';
import classNames from 'classnames';

import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { KidsMafiaConditions } from '@/components/KidsMafiaConditions';

import { kidsMafiaGallery } from '@/data/kidsMafiaClub';
import data from '@/data/kidsMafia.json';
import s from './KidsMafiaClub.module.css';

export const KidsMafiaClub: React.FC = () => {
  const { title, text, buttons, conditions } = data.kidsMafiaClub;
  return (
    <section
      className={classNames(
        'bg-primary-dark-200 py-20 md:pb-[68px] md:pt-[88px] xxl:py-20',
        s.section,
      )}
    >
      <div className="container">
        <Heading shadow_prop={title} className="mb-6 smOnly:min-h-[72px]">
          {title}
        </Heading>
        <Paragraph className="mb-[156px] sm:max-w-[288px] md:mb-[150px] xl:mb-[117px] xl:max-w-[624px] smOnly:min-h-[288px]">
          {text}
        </Paragraph>

        <ul className="mb-[174px] flex flex-wrap gap-x-6 xl:mb-[105px] xxl:mb-[142px]">
          {kidsMafiaGallery.map(({ src, alt }, index) => (
            <li key={index} className={s.galleryCard}>
              <div
                className="boxShadow-sm mx-auto h-[180px] w-[124px] 
                          md:h-[198px] md:w-full xl:h-[407px] xxl:h-[490px] "
              >
                <Image
                  width={420}
                  height={490}
                  src={src}
                  alt={alt}
                  className="h-full rounded-normal object-cover"
                />
              </div>
            </li>
          ))}
        </ul>

        <KidsMafiaConditions
          conditions={conditions}
          btn={buttons.btnOpenForm}
        />
      </div>
    </section>
  );
};
