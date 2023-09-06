import React, { FC } from 'react';
import Image from 'next/image';
import KidsMafiaConditions from '../../components/KidsMafiaConditions/KidsMafiaConditions';
import data from '../../data/kidsMafia.json';
import { kidsMafiaGallery } from '../../data/kidsMafiaClub';

const ClubKidsMafia: FC = () => {
  const { title, text, buttons, conditions } = data.clubKidsMafia;
  return (
    <section className="kids-mafia-club-mob md:kids-mafia-club-tab xl:kids-mafia-club-xl xxl:kids-mafia-club-2xl  py-20">
      <div className="container">
        <h2 className="mb-6 text-[28px] leading-[1.28] md:text-[32px] md:leading-[1.12] xl:text-[42px] xl:leading-[1.24]  smOnly:min-h-[72px]">
          {title}
        </h2>
        <p className="mb-[156px]  text-base sm:max-w-[288px] md:mb-[150px] xl:mb-[117px] xl:max-w-[624px] smOnly:min-h-[288px]">
          {text}
        </p>

        <div className="mb-[174px] flex flex-wrap gap-x-6 xl:mb-[105px] xxl:mb-[142px]">
          {kidsMafiaGallery.map(({ src, alt }, index) => (
            <div key={index} className="club-kids-gallery-card ">
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

export default ClubKidsMafia;
