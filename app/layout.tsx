import '@/styles/globals.css';

import React from 'react';
import { Metadata } from 'next';
import { Montserrat, Raleway } from 'next/font/google';

import { Footer } from '@/views/Footer';
import meta from '@/data/shared-metadata.json';

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

export const metadata: Metadata = {
  title: meta.metadata.title,
  description: meta.metadata.description,
  // TODO: change to deploy url in JSON
  metadataBase: new URL(meta.metadata.metadataBase),
  keywords: meta.metadata.keywords,
  twitter: {
    title: 'Mafia Club Odessa - поринь у світ спортивної мафії',
    card: 'summary_large_image',
    images: [
      {
        url: meta.twitter.images[0].url,
        width: 1200,
        height: 630,
        alt: 'Одеса мафія клуб',
      },
    ],
    description: 'Mafia Club Odessa - поринь у світ спортивної мафії',
  },
  openGraph: {
    images: [
      {
        url: '/images/ogp-image-small.jpg',
        width: 800,
        height: 600,
        alt: 'Одеса мафія клуб',
      },
    ],
    type: 'website',
    title: 'Mafia Club Odessa',
  },
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/apple-touch-icon.png',
  },
};

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
        <Footer />
      </body>
    </html>
  );
}
