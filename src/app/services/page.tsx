'use client'

import Link from 'next/link'
import {
  ArrowRightIcon,
  CodeBracketIcon,
  CpuChipIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { MotionDiv } from '@/components/ui/MotionDiv'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      name: t('services.digitalExperience.name'),
      description: t('home.services.digitalExperience.description'),
      href: '/services/digital-experience',
      icon: RocketLaunchIcon,
    },
    {
      name: t('services.nextgenPerformance.name'),
      description: t('home.services.nextgenPerformance.description'),
      href: '/services/nextgen-performance',
      icon: CodeBracketIcon,
    },
    {
      name: t('services.aiOperationalDesign.name'),
      description: t('home.services.aiOperationalDesign.description'),
      href: '/services/ai-operational-design',
      icon: CpuChipIcon,
    },
    {
      name: t('services.globalExpansion.name'),
      description: t('home.services.globalExpansion.description'),
      href: '/services/global-expansion',
      icon: GlobeAltIcon,
    },
  ]

  const frameworkSteps = [
    {
      name: t('home.framework.deconstruct.title'),
      description: t('home.framework.deconstruct.description'),
    },
    {
      name: t('home.framework.build.title'),
      description: t('home.framework.build.description'),
    },
    {
      name: t('home.framework.grow.title'),
      description: t('home.framework.grow.description'),
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <Section className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-4xl font-bold tracking-tighter text-primary-text sm:text-5xl">
                {t('servicesPage.hero.title')}
              </h1>
              <p className="mt-4 text-lg text-secondary-text">
                {t('servicesPage.hero.subtitle')}
              </p>
            </MotionDiv>
          </div>
        </Container>
      </Section>

      {/* Services List */}
      <Section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {services.map((service, index) => (
                <MotionDiv
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid lg:grid-cols-3 gap-8 items-center"
                >
                  <div className="lg:col-span-1">
                    <service.icon className="h-10 w-10 text-accent mb-4" />
                    <h2 className="text-2xl font-bold text-primary-text">
                      {service.name}
                    </h2>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-secondary-text mb-6 text-lg">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="text-accent font-semibold hover:text-accent/90 transition-colors inline-flex items-center group"
                    >
                      {t('home.services.learnMore')}
                      <ArrowRightIcon className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Framework Section */}
      <Section className="py-16 sm:py-24 bg-white/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl font-bold tracking-tighter text-primary-text sm:text-5xl">
                {t('home.framework.title')}
              </h2>
              <p className="mt-4 text-lg text-secondary-text">
                {t('home.framework.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {frameworkSteps.map((step, index) => (
                <MotionDiv
                  key={step.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="p-8"
                >
                  <h3 className="text-2xl font-semibold text-primary-text mb-3">
                    {step.name}
                  </h3>
                  <p className="text-secondary-text">{step.description}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-primary-text sm:text-4xl">
                {t('servicesPage.cta.title')}
              </h2>
              <p className="mt-4 text-lg text-secondary-text max-w-2xl mx-auto">
                {t('servicesPage.cta.description')}
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="bg-accent text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg"
                >
                  {t('home.hero.cta.contact')}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
