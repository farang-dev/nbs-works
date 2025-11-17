import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type=="post"]|order(publishedAt desc){
  title, "slug": slug.current, excerpt, publishedAt,
  "author": author-> {name, "slug": slug.current},
  "tags": tags[]-> {title, "slug": slug.current},
  "mainImage": mainImage
}`

export const postBySlugQuery = groq`*[_type=="post" && slug.current==$slug][0]{
  title, "slug": slug.current, excerpt, publishedAt, body,
  "author": author-> {name, "slug": slug.current, avatar},
  "tags": tags[]-> {title, "slug": slug.current},
  "mainImage": mainImage
}`