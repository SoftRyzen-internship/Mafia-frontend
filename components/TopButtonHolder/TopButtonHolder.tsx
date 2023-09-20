'use client';

import React, { FC } from 'react';

import { IconBtn } from '../IconBtn';
import { scrollToTop } from '@/utils/helpers/scrollToTop';

export const TopButtonHolder: FC = () => (
  <IconBtn
    icon="scroll"
    classes="absolute top-0 right-0 md:top-[129px] xl:top-0 xl:right-7"
    onClick={() => scrollToTop()}
  />
);
