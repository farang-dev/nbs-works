'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'ja' | 'en'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('ja')
    const [isInitialized, setIsInitialized] = useState(false)

    // Detect browser language on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language | null

        if (savedLanguage) {
            setLanguageState(savedLanguage)
        } else {
            // Detect browser language
            const browserLang = navigator.language.toLowerCase()
            const detectedLang: Language = browserLang.startsWith('ja') ? 'ja' : 'en'
            setLanguageState(detectedLang)
            localStorage.setItem('language', detectedLang)
        }

        setIsInitialized(true)
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('language', lang)
    }

    const t = (key: string): string => {
        const translations = language === 'ja'
            ? require('@/locales/ja').ja
            : require('@/locales/en').en

        // Support for dynamic replacements like {year}
        let translation = translations[key as keyof typeof translations] || key

        // Replace {year} with current year
        if (typeof translation === 'string' && translation.includes('{year}')) {
            translation = translation.replace('{year}', new Date().getFullYear().toString())
        }

        return translation
    }

    // Don't render children until language is initialized to prevent flash
    if (!isInitialized) {
        return null
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
