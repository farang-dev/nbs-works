import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() }),
    defineField({ name: 'author', type: 'reference', to: [{ type: 'author' }] }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'reference', to: [{ type: 'tag' }] }] }),
    defineField({ name: 'excerpt', type: 'text' }),
    defineField({ name: 'mainImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({ name: 'body', title: 'Body', type: 'blockContent' }),
  ],
  preview: { select: { title: 'title', media: 'mainImage' } }
})