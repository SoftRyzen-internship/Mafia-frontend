import Link from 'next/link';
import React from 'react';

import { Logo } from '@/components/Logo';
import { IconBtn } from '@/components/IconBtn';
import { Heading } from '@/components/Heading';
import { NavigationRow } from '@/components/NavigationRow';
import { Contacts } from '@/components/Contacts';
import { SocialsMenu } from '@/components/SocialsMenu';
import { Paragraph } from '@/components/Parapgaph';

import data from '@/data/footer.json';
import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className="  pb-[24px] pt-[60px]">
      <div className=" container  mb-[60px] ">
        <div className=" relative flex flex-col items-center md:flex-row md:items-start">
          <Logo
            href="/"
            position="footer"
            className="mb-[104px] shrink-0 md:mb-0 md:mr-[48px] xl:mr-[482px] xxl:mr-[654px]"
          />
          <div className=" flex w-full flex-wrap justify-between md:max-h-[208px] md:flex-col">
            <div>
              <Heading tag="h3" variant="tertiary" className="mb-6">
                {data.menuTitle}
              </Heading>
              <NavigationRow position="footer" />
            </div>
            <div className=" ml-auto ">
              <Contacts />
            </div>
            <SocialsMenu className=" ml-auto mr-auto mt-[60px] flex w-full justify-center md:ml-auto md:mr-0 md:mt-[24px] md:w-[192px] md:justify-start" />
          </div>
          <IconBtn icon="scroll" classes="absolute top-0 right-0" />
        </div>
      </div>

      <div className="flex w-full flex-col items-center border-t border-[rgba(115,115,115,0.50)] pt-6 ">
        <Paragraph variant="small" className="mb-4">
          {data.copyright}
        </Paragraph>

        <div className=" h-[16px]">
          <Link
            href="policy"
            className={` border-r pr-[7px] ${css.footerLink}`}
          >
            {data.policy}
          </Link>
          <Link href="rules" className={css.footerLink}>
            {data.rules}
          </Link>
        </div>
      </div>
    </footer>
  );
};
