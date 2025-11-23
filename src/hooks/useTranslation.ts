'use client'

import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Custom hook to use translations in client components
 * Returns the translation function
 */
export function useTranslation() {
    const { t } = useLanguage()
    return { t }
}
