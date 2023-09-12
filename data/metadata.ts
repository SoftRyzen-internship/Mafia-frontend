import { Metadata } from 'next';
import data from '@/data/shared-metadata.json';

const { metadata, twitter, openGraph } = data;

const meta: Metadata = {
  title: metadata.title,
  description: metadata.description,
  // TODO: change to deploy url in JSONs
  metadataBase: new URL(metadata.base),
  keywords: metadata.keywords,
  twitter: twitter,
  openGraph: openGraph,
  icons: {
    icon: '/images/common/favicon.ico',
    apple: '/images/common/apple-touch-icon.png',
  },
};

export default meta;
