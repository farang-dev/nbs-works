import { ja } from './ja'
import { en } from './en'

export type TranslationKey = keyof typeof ja

export const translations = {
    ja,
    en,
}

export type Language = keyof typeof translations
