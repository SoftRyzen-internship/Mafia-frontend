import { PriceCardProps } from '@/types';

import data from '@/data/pricingSectionData.json';

export const PricePackNotes: React.FC<PriceCardProps> = ({ rate }) => {
  const { extraPlayerPrice, maxPlayersInTeam } = rate;
  const {
    currency,
    notes: { extra, maxPlayers },
  } = data.priceCard;

  return (
    <ul
      className="mt-6 flex flex-col gap-3 text-base font-normal leading-6 text-gray 
            md:w-[185px] xl:w-auto"
    >
      <li>
        {extra}
        {extraPlayerPrice} {currency}
      </li>
      <li>
        {maxPlayers.description}
        {maxPlayersInTeam} {maxPlayers.players}
      </li>
    </ul>
  );
};
