import React, { FC } from 'react';

import classNames from 'classnames';

import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { TournamentBlock } from '@/components/TournamentBlock';

import { getTournaments } from '@/utils/getTournaments';

import data from '@/data/tournaments.json';

import s from './TournamentsSection.module.css';

export const TournamentsSection: FC = async () => {
  const { title, text } = data;

  const tournaments = await getTournaments();

  return (
    <section className="pb-0 pt-[53px] md:pt-[75px] xl:pt-[82px] xxl:pt-[98px]">
      <div className={classNames(s.section)}>
        <div className={classNames('pt-[80px]', s.hero)}>
          <div className="container pb-[78px] xl:pb-[60px]">
            <Heading className="mb-6" shadow={title}>
              {title}
            </Heading>
            <Paragraph className="text-base mdOnly:w-[288px]">{text}</Paragraph>
          </div>
        </div>
        {tournaments &&
          tournaments.map(tournament => (
            <TournamentBlock
              key={tournament.id}
              tournament={tournament.attributes}
            />
          ))}
      </div>
    </section>
  );
};
