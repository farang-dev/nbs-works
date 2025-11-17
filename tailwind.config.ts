import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#F8FAFC',
        'primary-text': '#0F172A',
        'secondary-text': '#475569',
        accent: '#00C49A',
        'neutral-border': '#E2E8F0',
      },
      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.secondary-text'),
            '--tw-prose-headings': theme('colors.primary-text'),
            '--tw-prose-lead': theme('colors.secondary-text'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.primary-text'),
            '--tw-prose-counters': theme('colors.secondary-text'),
            '--tw-prose-bullets': theme('colors.neutral-border'),
            '--tw-prose-hr': theme('colors.neutral-border'),
            '--tw-prose-quotes': theme('colors.primary-text'),
            '--tw-prose-quote-borders': theme('colors.accent'),
            '--tw-prose-captions': theme('colors.secondary-text'),
            '--tw-prose-code': theme('colors.primary-text'),
            '--tw-prose-pre-code': theme('colors.secondary-text'),
            '--tw-prose-pre-bg': theme('colors.background'),
            '--tw-prose-th-borders': theme('colors.neutral-border'),
            '--tw-prose-td-borders': theme('colors.neutral-border'),
          },
        },
      }),
    },
  },
  plugins: [typography],
}
export default config