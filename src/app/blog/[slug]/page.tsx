import Image from 'next/image'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { postBySlugQuery, postsQuery } from '@/lib/sanity.queries'
import { Post } from '@/lib/types'
import Container from '@/components/ui/Container'
import { PortableText } from '@/components/ui/PortableText'
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  if (!params.slug) {
    return {}
  }
  const post: Post = await client.fetch(postBySlugQuery, { slug: params.slug })
  if (!post) {
    notFound()
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      url: `/blog/${post.slug}`,
      images: post.mainImage
        ? [
          {
            url: urlFor(post.mainImage).width(1200).height(630).fit('crop').url(),
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ]
        : [],
    },
  }
}

export default async function PostPage({ params }: Props) {
  if (!params.slug) {
    notFound()
  }
  console.log('--- PostPage PARAMS ---', params);
  const post: Post = await client.fetch(postBySlugQuery, { slug: params.slug })

  if (!post) {
    notFound()
  }

  return (
    <main>
      <Container>
        <article className="max-w-3xl mx-auto py-20 sm:py-28">
          <header className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter text-primary-text sm:text-4xl md:text-5xl mb-4">
              {post.title}
            </h1>
            <div className="text-sm text-secondary-text">
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="mx-2">&middot;</span>
              <span>by {post.author.name}</span>
            </div>
          </header>

          {post.mainImage && (
            <div className="relative w-full h-64 sm:h-96 mb-12">
              <Image
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.title}
                fill
                className="object-cover rounded-2xl border border-neutral-border"
                priority
              />
            </div>
          )}

          <div className="prose max-w-none">
            <PortableText value={post.body} />
          </div>
        </article>
      </Container>
    </main>
  )
}

export async function generateStaticParams() {
  const posts: Post[] = await client.fetch(postsQuery)
  return posts
    .filter((post) => post.slug) // Ensure post has a slug
    .map((post) => ({
      slug: post.slug,
    }))
}