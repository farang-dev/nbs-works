# Internationalization (i18n) Implementation

This project now supports both Japanese (日本語) and English languages with automatic browser language detection.

## Features

- **Automatic Language Detection**: Detects user's browser language on first visit
- **Language Persistence**: Saves language preference in localStorage
- **Language Switcher**: Toggle between Japanese and English in the header
- **Full Translation Coverage**: All pages and components are translated

## How It Works

### Language Context
The `LanguageContext` (`src/contexts/LanguageContext.tsx`) provides:
- Browser language detection on initial load
- Language state management
- Translation function `t(key)`
- localStorage persistence

### Translation Files
Located in `src/locales/`:
- `ja.ts` - Japanese translations
- `en.ts` - English translations
- `index.ts` - Type definitions and exports

### Using Translations in Components

```tsx
'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export function MyComponent() {
  const { t } = useLanguage()
  
  return (
    <div>
      <h1>{t('home.hero.title')}</h1>
      <p>{t('home.hero.subtitle')}</p>
    </div>
  )
}
```

### Language Switcher
The `LanguageSwitcher` component is included in:
- Desktop navigation (Header)
- Mobile menu

## Adding New Translations

1. Add the key-value pair to both `src/locales/ja.ts` and `src/locales/en.ts`
2. Use the translation key with `t('your.new.key')` in your component

Example:
```typescript
// In ja.ts
export const ja = {
  // ... existing translations
  'newSection.title': '新しいセクション',
}

// In en.ts
export const en = {
  // ... existing translations
  'newSection.title': 'New Section',
}
```

## Supported Pages

All major pages are fully translated:
- Home page (`/`)
- About page (`/about`)
- Header navigation
- Footer

## Browser Language Detection

The system detects the browser language using `navigator.language`:
- If browser language starts with 'ja' → Japanese
- Otherwise → English
- User can manually switch languages anytime
- Preference is saved in localStorage

## Technical Details

- **Framework**: Next.js 14 (App Router)
- **State Management**: React Context API
- **Storage**: localStorage for persistence
- **Default Language**: Japanese (ja)
