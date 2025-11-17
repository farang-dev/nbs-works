'use client'

import Image from 'next/image'
import { PortableText as BasePortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'

const components = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="relative my-8">
          <Image
            src={urlFor(value).width(1200).height(675).fit('crop').url()}
            width={1200}
            height={675}
            alt={value.alt || ' '}
            className="rounded-lg"
            loading="lazy"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-4xl font-bold my-4 text-white">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl font-bold my-4 text-white">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl font-bold my-4 text-white">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 my-4 text-lg text-zinc-400">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }: { value?: { href?: string }; children: React.ReactNode }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noindex nofollow' : ''}
          className="text-blue-400 hover:underline"
        >
          {children}
        </a>
      )
    },
  },
}

export function PortableText({ value }: { value: any }) {
  return <BasePortableText value={value} components={components} />
}
