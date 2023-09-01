import '@/styles/globals.css';

import React from 'react';
import { Montserrat, Raleway } from 'next/font/google';

import data from '@/data/common.json';

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

export const metadata = {
  title: ` ${data.title}`,
  description: `${data.description}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${montserrat.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}
