import '@/styles/globals.css';

import React from 'react';
import { Montserrat, Raleway } from 'next/font/google';

import { Metadata } from 'next';
import { meta } from '@/data/metadata';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
const raleway = Raleway({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-raleway',
});

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${montserrat.variable} ${raleway.variable}`}>
        {/* TODO: this component should include all shared components. Put header, footer and social media icons or whatever you need to this component in appropriate places around children */}
        <div>THIS IS LAYOUT</div>
        {children}
      </body>
    </html>
  );
}
