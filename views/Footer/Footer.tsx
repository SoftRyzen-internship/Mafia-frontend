import React, { FC } from 'react';

import { Logo } from '@/components/Logo';
import { TopButtonHolder } from '@/components/TopButtonHolder';
import { Heading } from '@/components/Heading';
import { NavigationRow } from '@/components/NavigationRow';
import { Contacts } from '@/components/Contacts';
import { SocialsMenu } from '@/components/SocialsMenu';
import { Paragraph } from '@/components/Parapgaph';
import { FooterLinksList } from '@/components/FooterLinksList';
import { FooterLinkItem } from '@/components/FooterLinkItem';

import data from '@/data/footer.json';
import css from './Footer.module.css';

export const Footer: FC = () => {
  return (
    <footer className="pb-6 pt-[60px]">
      <div className="container mb-[60px]">
        <div className={css.logoWrapper}>
          <Logo href="/" position="footer" className={css.logo} />
          <div className={css.menuWrapper}>
            <div>
              <Heading tag="h3" variant="tertiary" className="mb-6">
                {data.menuTitle}
              </Heading>
              <NavigationRow position="footer" />
            </div>

            <Contacts />
            <SocialsMenu className={css.socialsMenu} />
          </div>
          <TopButtonHolder />
        </div>
      </div>

      <div className={css.footerLinksWrapper}>
        <Paragraph variant="small" className="mb-4 flex xl:mb-0">
          <span className="mr-1">{data.copyright}</span>
          <FooterLinkItem
            href={data.creator.href}
            title={data.creator.title}
            rel="noopener noreferrer nofollow"
            target="_blank"
          />
        </Paragraph>
        <FooterLinksList />
      </div>
    </footer>
  );
};
