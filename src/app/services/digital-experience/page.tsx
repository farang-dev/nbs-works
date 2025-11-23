'use client'

import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { MotionDiv } from '@/components/ui/MotionDiv'
import { useLanguage } from '@/contexts/LanguageContext'

export default function DigitalExperiencePage() {
  const { t } = useLanguage()

  const processSteps = [
    {
      name: t('digitalExperience.process.deconstruct.title'),
      description: t('digitalExperience.process.deconstruct.description'),
    },
    {
      name: t('digitalExperience.process.build.title'),
      description: t('digitalExperience.process.build.description'),
    },
    {
      name: t('digitalExperience.process.grow.title'),
      description: t('digitalExperience.process.grow.description'),
    },
  ]

  const deliverables = [
    t('digitalExperience.deliverables.1'),
    t('digitalExperience.deliverables.2'),
    t('digitalExperience.deliverables.3'),
    t('digitalExperience.deliverables.4'),
    t('digitalExperience.deliverables.5'),
    t('digitalExperience.deliverables.6'),
    t('digitalExperience.deliverables.7'),
    t('digitalExperience.deliverables.8'),
  ]

  const keywords = [
    t('digitalExperience.keywords.1'),
    t('digitalExperience.keywords.2'),
    t('digitalExperience.keywords.3'),
    t('digitalExperience.keywords.4'),
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
                {t('services.digitalExperience.name')}
              </h1>
              <p className="mt-6 text-lg text-secondary-text">
                {t('digitalExperience.hero.subtitle')}
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

