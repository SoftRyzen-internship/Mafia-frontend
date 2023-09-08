import React, { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Heading from '../Heading/Heading';
import Paragraph from '../Parapgaph/Paragraph';

import s from './TournamentBlock.module.css';

interface TournamentBlockProps {
  tournament: {
    imgUrl: any;
    title: string;
    type: string;
    playersInTeam: number;
    description: string;
  };
}

export const TournamentBlock: FC<TournamentBlockProps> = ({ tournament }) => {
  const { title, type, playersInTeam, description, imgUrl } = tournament;

  return (
    <div className={classNames('pb-20 pt-[96px]', s.tournamentBlock)}>
      <div
        className={classNames(
          'container md:flex md:items-center md:gap-6 xl:items-stretch',
          s.tournamentContainer,
        )}
      >
        <div className="xl:w-[516px] smOnly:mb-[60px]">
          <Heading
            tag="h3"
            variant="secondary"
            className={classNames('mb-[34px] xl:mb-8', s.title)}
          >
            {title}
          </Heading>
          <Paragraph variant="lg" className="mb-4">
            {type}
          </Paragraph>
          <Paragraph className="mb-6 text-base text-gray md:mb-[46px] xl:mb-[50px]">
            {playersInTeam} особи в команді
          </Paragraph>
          <Paragraph>{description}</Paragraph>
        </div>
        <div className="xxl-min-w-[716px] md:min-w-[236px] md:basis-[236px] xl:min-h-full xl:min-w-[493px] xl:basis-[493px] xxl:basis-[716px]">
          <Image
            src={imgUrl}
            alt={title}
            height={236}
            className="w-full object-cover md:h-[285px] xl:h-full"
          />
        </div>
      </div>
    </div>
  );
};

// function parseDescription() {}
