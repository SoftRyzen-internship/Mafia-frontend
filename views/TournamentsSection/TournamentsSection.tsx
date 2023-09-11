'use client';

import React, { FC, useEffect, useState } from 'react';
import { gql } from 'graphql-request';
import classNames from 'classnames';

import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { TournamentBlock } from '@/components/TournamentBlock';

import data from '@/data/tournaments.json';

import s from './TournamentsSection.module.css';

export const GET_TOURNAMENTS = gql`
  query {
    tournaments(sort: "id:asc") {
      data {
        id
        attributes {
          title
          type
          playersInTeam
          description
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

import { request } from 'graphql-request';

const BASE_URL = 'https://mafia-cms.onrender.com/graphql';

export interface ITournament {
  title: string;
  type: string;
  playersInTeam: number;
  description: string;
  image: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
}

export interface ITournamentItem {
  id: string;
  attributes: ITournament;
}

export interface ITournamentsData {
  tournaments: {
    data: ITournamentItem[];
  };
}

export const TournamentsSection: FC = () => {
  const { title, text } = data;
  const [tournaments, setTournaments] = useState<ITournamentItem[] | null>(
    null,
  );

  async function getTournaments(): Promise<void> {
    const data: ITournamentsData = await request(BASE_URL, GET_TOURNAMENTS);
    setTournaments(data.tournaments.data);
  }

  useEffect(() => {
    getTournaments();
  }, []);

  return (
    <section className={classNames('pb-0', s.section)}>
      <div className={classNames('pt-[80px]', s.hero)}>
        <div className="container pb-[78px] md:pb-[60px]">
          <Heading className="mb-6" shadow={title}>
            {title}
          </Heading>
          <Paragraph className="text-base">{text}</Paragraph>
        </div>
      </div>
      {tournaments &&
        tournaments.map(tournament => (
          <TournamentBlock
            key={tournament.id}
            tournament={tournament.attributes}
          />
        ))}
    </section>
  );
};
