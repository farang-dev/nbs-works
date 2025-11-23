'use client'

import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { MotionDiv } from '@/components/ui/MotionDiv'
import { useLanguage } from '@/contexts/LanguageContext'

export default function NextGenPerformancePage() {
  const { t } = useLanguage()

  const processSteps = [
    {
      name: t('digitalExperience.process.deconstruct.title'),
      description: t('nextgenPerformance.process.deconstruct.description'),
    },
    {
      name: t('digitalExperience.process.build.title'),
      description: t('nextgenPerformance.process.build.description'),
    },
    {
      name: t('digitalExperience.process.grow.title'),
      description: t('nextgenPerformance.process.grow.description'),
    },
  ]

  const deliverables = [
    t('nextgenPerformance.deliverables.1'),
    t('nextgenPerformance.deliverables.2'),
    t('nextgenPerformance.deliverables.3'),
    t('nextgenPerformance.deliverables.4'),
    t('nextgenPerformance.deliverables.5'),
    t('nextgenPerformance.deliverables.6'),
    t('nextgenPerformance.deliverables.7'),
    t('nextgenPerformance.deliverables.8'),
  ]

  const keywords = [
    t('nextgenPerformance.keywords.1'),
    t('nextgenPerformance.keywords.2'),
    t('nextgenPerformance.keywords.3'),
    t('nextgenPerformance.keywords.4'),
  ]

  return (
    <main>
      {/* Hero Section */}
      <Section className="pt-24 sm:pt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-4xl font-bold tracking-tighter text-primary-text sm:text-5xl">
                {t('services.nextgenPerformance.name')}
              </h1>
              <p className="mt-6 text-lg text-secondary-text">
                {t('nextgenPerformance.hero.subtitle')}
              </p>
            </MotionDiv>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <MotionDiv
                  key={step.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-primary-text sm:text-3xl border-b border-neutral-border pb-4">
                    {step.name}
                  </h2>
                  <p className="mt-4 text-secondary-text leading-relaxed">
                    {step.description}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Deliverables Section */}
      <Section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-primary-text sm:text-4xl mb-12">
                {t('digitalExperience.deliverables.title')}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
                {deliverables.map((item, index) => (
                  <MotionDiv
                    key={item}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-text">{item}</span>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          </div>
        </Container>
      </Section>

      {/* Keywords Section */}
      <Section className="py-20 sm:py-28 bg-white/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-primary-text mb-8">
                {t('digitalExperience.keywords.title')}
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {keywords.map((keyword, index) => (
                  <MotionDiv
                    key={keyword}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                    className="bg-background border border-neutral-border rounded-full px-6 py-2"
                  >
                    <span className="font-medium text-primary-text">
                      {keyword}
                    </span>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          </div>
        </Container>
      </Section>
    </main>
  )
}
