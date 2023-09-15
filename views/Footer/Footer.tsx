import React, { FC } from 'react';

import { Logo } from '@/components/Logo';
import { TopButtonHolder } from '@/components/TopButtonHolder';
import { Heading } from '@/components/Heading';
import { NavigationRow } from '@/components/NavigationRow';
import { Contacts } from '@/components/Contacts';
import { SocialsMenu } from '@/components/SocialsMenu';
import { Paragraph } from '@/components/Paragraph';
import { FooterLinksList } from '@/components/FooterLinksList';
import { FooterLinkItem } from '@/components/FooterLinkItem';

import data from '@/data/footer.json';
import css from './Footer.module.css';

export const Footer: FC = () => {
  return (
    <footer className="pb-6 pt-[60px]">
      <div className="container mb-[60px]">
        <div className="relative flex flex-col items-center  md:flex-row md:items-start md:pl-[6px] xl:pl-0 xxl:pl-[46px]">
          <Logo
            href="/"
            position="footer"
            className={`relative mt-1 shrink-0 md:mr-12 md:mt-[14px] xl:mr-[478px] xl:mt-[17px] xxl:mr-[654px] xxl:mt-0 smOnly:mb-[104px] ${css.logo}`}
          />
          <div className="flex w-full flex-wrap md:mr-[44px] md:h-[208px] md:flex-col md:content-between xl:mr-[94px] xxl:mr-[228px] smOnly:justify-between">
            <div>
              <Heading tag="h3" variant="tertiary" className="mb-6">
                {data.menuTitle}
              </Heading>
              <NavigationRow position="footer" />
            </div>

            <Contacts />
            <SocialsMenu className="mt-[60px] w-full md:mt-[24px] md:w-[195px] smOnly:justify-center" />
          </div>
          <TopButtonHolder />
        </div>
      </div>

      <div className="border-t border-gray-light">
        <div className="flex flex-col items-center  pt-6 xl:container xl:flex-row xl:items-center xl:justify-between">
          <Paragraph variant="small" className="mb-4 flex xl:mb-0">
            <span className="mr-1">&copy; {data.copyright}</span>
            <FooterLinkItem
              href={data.creator.href}
              title={data.creator.title}
              internalLink={data.creator.internalLink}
            />
          </Paragraph>
          <FooterLinksList />
        </div>
      </div>
    </footer>
  );
};
