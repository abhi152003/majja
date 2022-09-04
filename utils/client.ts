import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'v3h8beem',
  dataset: 'production',
  apiVersion: '2022-08-31',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
