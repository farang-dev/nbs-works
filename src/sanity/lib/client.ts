import { createClient, SanityClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const originalFetch = client.fetch.bind(client)

client.fetch = <R, P extends Record<string, unknown>>(query: string, params?: P, ...args: any[]): Promise<R> => {
  console.log('--- SANITY FETCH ---')
  console.log('QUERY:', query)
  console.log('PARAMS:', params)
  if (query.includes('$slug') && (!params || typeof (params as any).slug === 'undefined')) {
    console.error('ERROR: $slug parameter is missing or undefined in a query that requires it.')
    console.trace()
  }
  return originalFetch(query, params as any, ...args) as Promise<R>
}

