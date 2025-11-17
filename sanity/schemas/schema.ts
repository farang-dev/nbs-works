import { type SchemaTypeDefinition } from 'sanity'
import post from './types/post'
import author from './types/author'
import tag from './types/tag'
import blockContent from './types/blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, tag, blockContent],
}