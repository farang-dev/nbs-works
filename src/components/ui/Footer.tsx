'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useLanguage } from '@/contexts/LanguageContext'

const navLinks = [
  { titleKey: 'nav.about', href: '/about' },
  { titleKey: 'nav.services', href: '/services' },
  { titleKey: 'nav.blog', href: '/blog' },
  { titleKey: 'nav.contact', href: '/contact' },
]

const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: FaTwitter,
  },
  {
    name: 'GitHub',
    href: '#',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: FaLinkedin,
  },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-neutral-border bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="mb-16 sm:mb-24 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-primary-text mb-6">
            <span className="text-accent">{t('footer.tagline')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary-text max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('footer.description')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary-text rounded-full hover:bg-primary-text/90 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {t('nav.contact')}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-neutral-border pt-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-primary-text">
              Nobius
            </Link>
            <p className="mt-4 text-secondary-text text-sm max-w-xs">
              {t('footer.company.description')}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary-text tracking-wider uppercase mb-4">{t('footer.sitemap')}</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-text hover:text-accent transition-colors"
                  >
                    {t(link.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary-text tracking-wider uppercase mb-4">{t('footer.social')}</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center text-secondary-text hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon className="h-5 w-5 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-secondary-text text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            {/* Add privacy policy etc if needed later */}
          </div>
        </div>
      </div>
    </footer>
  )
}
