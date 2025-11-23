'use client'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { MotionDiv } from '@/components/ui/MotionDiv'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactPage() {
  const { t, language } = useLanguage()

  // Define all services with ordering
  const allInterestAreas = [
    {
      name: t('services.digitalExperience.name'),
      order: { ja: 1, en: 1 },
    },
    {
      name: t('services.globalExpansion.name'),
      order: { ja: 4, en: 2 },
    },
    {
      name: t('services.nextgenPerformance.name'),
      order: { ja: 2, en: 3 },
    },
    {
      name: t('services.aiOperationalDesign.name'),
      order: { ja: 3, en: 4 },
    },
  ]

  // Sort based on current language
  const interestAreas = [...allInterestAreas].sort((a, b) => a.order[language] - b.order[language])

  return (
    <main>
      {/* Hero Section */}
      <Section className="pt-24 sm:pt-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-4xl font-bold tracking-tighter text-primary-text sm:text-5xl">
                {t('contact.hero.title')}
              </h1>
              <p className="mt-4 text-lg text-secondary-text">
                {t('contact.hero.subtitle')}
              </p>
            </MotionDiv>
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <p className="text-secondary-text text-lg">
                  {t('contact.intro')}
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company-name"
                      className="block text-sm font-medium leading-6 text-primary-text"
                    >
                      {t('contact.form.companyName')}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="company-name"
                        id="company-name"
                        className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-primary-text shadow-sm ring-1 ring-inset ring-neutral-border focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-person"
                      className="block text-sm font-medium leading-6 text-primary-text"
                    >
                      {t('contact.form.contactPerson')}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="contact-person"
                        id="contact-person"
                        autoComplete="name"
                        className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-primary-text shadow-sm ring-1 ring-inset ring-neutral-border focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-primary-text"
                  >
                    {t('contact.form.email')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-primary-text shadow-sm ring-1 ring-inset ring-neutral-border focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium leading-6 text-primary-text"
                  >
                    {t('contact.form.interestAreas')}
                  </label>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {interestAreas.map((area) => (
                      <div key={area.name} className="flex items-center">
                        <input
                          id={`interest-${area.name}`}
                          name="interest"
                          type="checkbox"
                          className="h-4 w-4 rounded border-neutral-border text-accent focus:ring-accent"
                        />
                        <label
                          htmlFor={`interest-${area.name}`}
                          className="ml-3 block text-sm text-secondary-text"
                        >
                          {area.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="summary"
                    className="block text-sm font-medium leading-6 text-primary-text"
                  >
                    {t('contact.form.summary')}
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="summary"
                      id="summary"
                      rows={4}
                      className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-primary-text shadow-sm ring-1 ring-inset ring-neutral-border focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="start-date"
                    className="block text-sm font-medium leading-6 text-primary-text"
                  >
                    {t('contact.form.startDate')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="start-date"
                      id="start-date"
                      className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-primary-text shadow-sm ring-1 ring-inset ring-neutral-border focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-accent text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg"
                  >
                    {t('contact.form.submit')}
                  </button>
                </div>
              </form>
            </MotionDiv>
          </div>
        </Container>
      </Section>
    </main>
  )
}