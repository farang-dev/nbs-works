import Link from 'next/link'
import Image from 'next/image'

import { client, urlFor } from '@/lib/sanity.client'
import { postsQuery } from '@/lib/sanity.queries'
import { Post } from '@/lib/types'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery)

  return (
    <main>
      <Section className="pt-24 sm:pt-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Insights & Ideas
            </h1>
            <p className="mt-4 text-lg text-zinc-400">
              Exploring AI, software engineering, and the future of digital
              products.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug}`}>
                <div className="bg-zinc-800/50 rounded-2xl border border-zinc-700/80 overflow-hidden h-full flex flex-col group">
                  <div className="relative w-full h-48">
                    <Image
                      src={urlFor(post.mainImage).width(800).height(400).url()}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-zinc-400 mb-2">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-zinc-400 text-sm flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 text-blue-400 font-semibold text-sm inline-flex items-center">
                      Read More
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}