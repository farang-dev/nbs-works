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
            <h1 className="text-4xl font-bold tracking-tighter text-primary-text sm:text-5xl">
              Insights & Ideas
            </h1>
            <p className="mt-4 text-lg text-secondary-text">
              AI、ソフトウェアエンジニアリング、そしてデジタルプロダクトの未来を探求します。
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts
              .filter((post) => post.slug) // Ensure post has a slug
              .map((post) => (
                <Link key={post._id} href={`/blog/${post.slug}`}>
                  <div className="bg-white/5 rounded-2xl border border-neutral-border overflow-hidden h-full flex flex-col group hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                    <div className="relative w-full h-48">
                      {post.mainImage ? (
                        <Image
                          src={urlFor(post.mainImage)
                            .width(800)
                            .height(400)
                            .url()}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-neutral-100 dark:bg-white/10"></div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-sm text-secondary-text mb-2">
                        {new Date(post.publishedAt).toLocaleDateString(
                          'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )}
                      </p>
                      <h2 className="text-lg font-semibold text-primary-text mb-3 group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-secondary-text text-sm flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 text-accent font-semibold text-sm inline-flex items-center">
                        記事を読む
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