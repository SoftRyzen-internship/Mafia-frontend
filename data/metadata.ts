import { Metadata } from 'next';
import { metadata, twitter, openGraph } from '@/data/shared-metadata.json';

export const meta: Metadata = {
  title: metadata.title,
  description: metadata.description,
  // TODO: change to deploy url in JSONs
  metadataBase: new URL(metadata.base),
  keywords: metadata.keywords,
  twitter,
  openGraph,
  icons: {
    icon: '/images/common/favicon.ico',
    apple: '/images/common/apple-touch-icon.png',
  },
};
