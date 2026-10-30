import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: 'smgc19iu',
  dataset: 'production',
  apiVersion: '2026-10-23',
  useCdn: true,
});