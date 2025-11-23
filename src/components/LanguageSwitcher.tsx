'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { clsx } from 'clsx'

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-neutral-border">
            <button
                onClick={() => setLanguage('ja')}
                className={clsx(
                    'px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200',
                    language === 'ja'
                        ? 'bg-accent text-white shadow-sm'
                        : 'text-secondary-text hover:text-primary-text'
                )}
                aria-label="Switch to Japanese"
            >
                日本語
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={clsx(
                    'px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200',
                    language === 'en'
                        ? 'bg-accent text-white shadow-sm'
                        : 'text-secondary-text hover:text-primary-text'
                )}
                aria-label="Switch to English"
            >
                EN
            </button>
        </div>
    )
}
