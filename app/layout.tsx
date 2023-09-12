import '@/styles/globals.css';

import React from 'react';
import { Metadata } from 'next';
import { Montserrat, Raleway } from 'next/font/google';
import meta from '@/data/metadata';

import { Header } from '@/views/Header';
import { Footer } from '@/views/Footer';
// import { SocialsMenu } from '@/components/SocialsMenu';
import { KidsMafia } from '@/components/KidsMafia';

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

// Shared metadata for all pages
export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${montserrat.variable} ${raleway.variable}`}>
        <Header />
        {children}
        {/* <SocialsMenu /> */}
        <div id="modal" />
        <KidsMafia />
        <Footer />
      </body>
    </html>
  );
}
