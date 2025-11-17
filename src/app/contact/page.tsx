'use client'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { MotionDiv } from '@/components/ui/MotionDiv'

const interestAreas = [
  'Digital Experience',
  'NextGen Performance',
  'AI Operational Design',
]

export default function ContactPage() {
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
                Let’s start with a clear view.
              </h1>
              <p className="mt-4 text-lg text-secondary-text">
                まずは、課題を正確に捉えることから始めましょう。
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
                  どのようなご相談でも構いません。まずは現状の課題と目標についてお聞かせください。
                  <br />
                  Nobiusでは、常に現状を正しく理解することから始めます。
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company-name"
                      className="block text-sm font-medium leading-6 text-primary-text"
                    >
                      会社名
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
                      担当者名
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
                    連絡先（メールアドレス）
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
                    興味のある領域（複数選択可）
                  </label>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {interestAreas.map((area) => (
                      <div key={area} className="flex items-center">
                        <input
                          id={`interest-${area}`}
                          name="interest"
                          type="checkbox"
                          className="h-4 w-4 rounded border-neutral-border text-accent focus:ring-accent"
                        />
                        <label
                          htmlFor={`interest-${area}`}
                          className="ml-3 block text-sm text-secondary-text"
                        >
                          {area}
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
                    課題の要約
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
                    希望開始時期
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
                    送信する
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