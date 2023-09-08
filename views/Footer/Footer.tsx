import React from 'react';

import { Logo } from '@/components/Logo';
import { IconBtn } from '@/components/IconBtn';
import { Heading } from '@/components/Heading';
import { NavigationRow } from '@/components/NavigationRow';
import { Contacts } from '@/components/Contacts';
import { SocialsMenu } from '@/components/SocialsMenu';

import data from '@/data/footer.json';

export const Footer = () => {
  return (
    <footer className=" pb-[24px] pt-[60px]">
      <div className=" container">
        <div className=" relative mb-[104px] flex w-full items-start justify-center">
          <Logo href="/" position="footer" className="" />
          <IconBtn icon="scroll" classes="absolute top-0 right-0" />
        </div>
        <div className="mb-[60px] flex w-full justify-between">
          <div>
            <Heading tag="h3" variant="tertiary" className="mb-6">
              {data.menuTitle}
            </Heading>
            <NavigationRow position="footer" />
          </div>
          <div>
            <Contacts />
          </div>
        </div>
        <SocialsMenu />
      </div>
    </footer>
  );
};
