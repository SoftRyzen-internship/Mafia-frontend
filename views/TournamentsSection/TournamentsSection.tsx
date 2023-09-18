import React, { FC } from 'react';

import classNames from 'classnames';

import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { TournamentBlock } from '@/components/TournamentBlock';
import { Fallback } from '@/components/Fallback';

import { getTournaments } from '@/utils/getTournaments';

import data from '@/data/tournaments.json';
import { ITournamentItem } from '@/types';

import s from './TournamentsSection.module.css';

export const TournamentsSection: FC = async () => {
  const { title, text } = data;
  let tournaments: ITournamentItem[] | null;

  try {
    tournaments = await getTournaments();
  } catch (error) {
    tournaments = null;
  }

  return (
    <section className=" pb-0 ">
      <div className={classNames('bg-primary-dark-200', s.section)}>
        <div
          className={classNames(
            'pt-[80px]',
            tournaments && 'bg-primary-dark-200',
          )}
        >
          <div className="container pb-[78px] xl:pb-[60px]">
            <Heading className="mb-6 font-semibold" shadow={title}>
              {title}
            </Heading>
            <Paragraph className="text-base mdOnly:w-[288px]">{text}</Paragraph>
          </div>
        </div>
        {tournaments &&
          tournaments.map((tournament, index) => (
            <TournamentBlock
              key={tournament.id}
              tournament={tournament.attributes}
              priorityImg={!!index}
            />
          ))}
        {!tournaments && (
          <div className="px-[1.5rem] pb-20 md:px-[5.25rem]">
            <Fallback />
          </div>
        )}
      </div>
    </section>
  );
};
