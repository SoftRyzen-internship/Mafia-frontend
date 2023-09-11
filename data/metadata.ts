import { Metadata } from "next";
import {metadata, twitter, openGraph} from '@/data/shared-metadata.json';

// console.log(metadata);

export const meta: Metadata = {
  title: metadata.title,
  description: metadata.description,
  // TODO: change to deploy url in JSONs
  metadataBase: new URL(metadata.base),
  keywords: metadata.keywords,
  twitter,
  openGraph,
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/apple-touch-icon.png',
  },
};
