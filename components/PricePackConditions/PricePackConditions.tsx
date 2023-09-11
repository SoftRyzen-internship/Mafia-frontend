import classNames from 'classnames';

import { PriceCardProps } from '@/types';

import data from '@/data/pricingSectionData.json';

import css from './PricePackConditions.module.css';

export const PricePackConditions: React.FC<PriceCardProps> = ({ rate }) => {
  const { presenters, duration, playersInTeam } = rate;
  const { hosts, players, gameDuration } = data.priceCard;

  const conditionStyles = classNames(
    css.condition,
    'relative pl-[38px] xl:pl-[48px]',
  );

  return (
    <ul
      className="mt-[54px] flex flex-col gap-5 text-[20px] font-medium leading-[28px]
            xl:mt-[50px]"
    >
      <li className={conditionStyles}>
        {presenters} {presenters === 1 ? hosts.singular : hosts.plural}
      </li>
      <li className={conditionStyles}>
        {playersInTeam} {players}
      </li>
      <li className={conditionStyles}>
        {gameDuration.description}
        {duration} {gameDuration.time}
      </li>
    </ul>
  );
};
