import { createClient, SanityClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

const baseClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// Wrap the client to add logging
export const client: SanityClient = {
  ...baseClient,
  fetch: <R, P extends Record<string, unknown>>(query: string, params?: P): Promise<R> => {
    console.log('--- SANITY FETCH ---')
    console.log('QUERY:', query)
    console.log('PARAMS:', params)
    if (query.includes('$slug') && (!params || typeof params.slug === 'undefined')) {
      console.error('ERROR: $slug parameter is missing or undefined in a query that requires it.')
      console.trace()
    }
    return baseClient.fetch<R, P>(query, params)
  },
}

