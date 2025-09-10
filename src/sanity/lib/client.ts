// sanity/lib/client.ts
import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});


export const urlFor = (source: any) => createImageUrlBuilder(client).image(source);
