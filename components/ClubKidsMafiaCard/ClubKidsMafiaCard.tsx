import React, { FC } from 'react';

import { ClubKidsMafiaCardProps } from '@/types';

import IconText from '@/public/icons/kidsMafia/text.svg';
import IconRule from '@/public/icons/kidsMafia/rule.svg';
import IconBehavior from '@/public/icons/kidsMafia/behavior.svg';
import IconWallet from '@/public/icons/kidsMafia/wallet.svg';

export const ClubKidsMafiaCard: FC<ClubKidsMafiaCardProps> = ({
  subtitle,
  text,
  iconDescr,
}) => {
  return (
    <div className="mdOnly:base-[236px] min-h-[232px] rounded-md border border-solid border-primary-light-1200 bg-primary-dark-400 p-6 md:p-5 xl:min-h-[208px] xl:basis-1/4 mdOnly:max-w-[236px]">
      <div className="mb-3">
        {iconDescr === 'text' && <IconText width={32} height={32} />}
        {iconDescr === 'rule' && <IconRule width={32} height={32} />}
        {iconDescr === 'behavior' && <IconBehavior width={32} height={32} />}
        {iconDescr === 'wallet' && <IconWallet width={32} height={32} />}
      </div>
      <h4 className="mb-4 text-xl font-medium">{subtitle}</h4>
      <p className="text-base smOnly:max-w-[287px]">{text}</p>
    </div>
  );
};
