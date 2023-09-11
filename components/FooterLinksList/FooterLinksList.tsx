import React, { FC } from 'react';

import { FooterLinkItem } from '../FooterLinkItem';
import data from '@/data/footer.json';

export const FooterLinksList: FC = () => {
  return (
    <ul className="flex ">
      {data.footerLinks.map(footerLink => {
        return (
          <li
            key={footerLink.href}
            className="border-r px-[6px] pr-[7px] last:border-r-0 last:pr-[6px]"
          >
            <FooterLinkItem {...footerLink} />
          </li>
        );
      })}
    </ul>
  );
};
