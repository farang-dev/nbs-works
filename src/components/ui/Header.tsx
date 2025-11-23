'use client'

import { Fragment, useState, useEffect } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { clsx } from 'clsx'
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  const serviceLinks = [
    {
      name: t('services.digitalExperience.name'),
      href: '/services/digital-experience',
      description: t('services.digitalExperience.description'),
    },
    {
      name: t('services.nextgenPerformance.name'),
      href: '/services/nextgen-performance',
      description: t('services.nextgenPerformance.description'),
    },
    {
      name: t('services.aiOperationalDesign.name'),
      href: '/services/ai-operational-design',
      description: t('services.aiOperationalDesign.description'),
    },
    {
      name: t('services.globalExpansion.name'),
      href: '/services/global-expansion',
      description: t('services.globalExpansion.description'),
    },
  ]

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm border-b border-neutral-border'
          : 'bg-transparent',
      )}
    >
      <nav
        className="mx-auto max-w-7xl flex items-center justify-between py-6 px-6 sm:px-8 lg:px-12"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold tracking-tighter text-primary-text">
              Nobius
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-text"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10 items-center">
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-secondary-text hover:text-primary-text transition-colors"
          >
            {t('nav.about')}
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-secondary-text hover:text-primary-text transition-colors outline-none">
              {t('nav.services')}
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
            </Transition>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-background border border-neutral-border shadow-lg ring-1 ring-white/10">
                <div className="p-4">
                  {serviceLinks.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white/5"
                    >
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-primary-text"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-secondary-text">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            href="/blog"
            className="text-sm font-semibold leading-6 text-secondary-text hover:text-primary-text transition-colors"
          >
            {t('nav.blog')}
          </Link>
          <LanguageSwitcher />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="rounded-md bg-primary-text text-background px-5 py-2 text-sm font-semibold shadow-sm hover:bg-primary-text/90 transition-all duration-200"
          >
            {t('nav.contact')}
          </Link>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold tracking-tighter text-primary-text">
                Nobius
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-primary-text"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-border/50">
              <div className="space-y-2 py-6">
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-text hover:bg-neutral-border/50"
                >
                  {t('nav.about')}
                </Link>
                <p className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-text">
                  {t('nav.services')}
                </p>
                <div className="pl-4">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary-text hover:bg-neutral-border/50"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-text hover:bg-neutral-border/50"
                >
                  {t('nav.blog')}
                </Link>
                <div className="-mx-3 px-3 py-2">
                  <LanguageSwitcher />
                </div>
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg bg-primary-text px-3 py-2.5 text-center text-base font-semibold leading-7 text-background hover:bg-primary-text/90"
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
