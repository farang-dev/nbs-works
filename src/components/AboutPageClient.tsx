'use client'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { MotionDiv } from '@/components/ui/MotionDiv'
import { useLanguage } from '@/contexts/LanguageContext'

const marqueeText = 'Usefulness is Everything   '.repeat(10)

export default function AboutPageClient() {
    const { t } = useLanguage()

    const contentSections = [
        {
            title: t('about.name.title'),
            content: t('about.name.content'),
        },
        {
            title: t('about.philosophy.title'),
            content: t('about.philosophy.content'),
        },
        {
            title: t('about.approach.title'),
            content: t('about.approach.content'),
        },
        {
            title: t('about.vision.title'),
            content: t('about.vision.content'),
        },
    ]

    return (
        <main>
            {/* Hero Section */}
            <Section className="pt-24 sm:pt-32">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <h1 className="text-4xl font-bold tracking-tighter text-primary-text sm:text-5xl md:text-6xl">
                                {t('about.hero.title')}
                            </h1>
                            <p className="mt-6 text-lg text-secondary-text">
                                {t('about.hero.subtitle')}
                            </p>
                        </MotionDiv>
                    </div>
                </Container>
            </Section>

            {/* Content Section */}
            <Section className="py-20 sm:py-28">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-16">
                            {contentSections.map((point, index) => (
                                <MotionDiv
                                    key={point.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <h2 className="text-2xl font-semibold tracking-tight text-primary-text sm:text-3xl">
                                        {point.title}
                                    </h2>
                                    <p className="mt-4 text-secondary-text leading-relaxed">
                                        {point.content}
                                    </p>
                                </MotionDiv>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Closing Section */}
            <Section className="py-8 sm:py-12 bg-accent overflow-hidden">
                <div className="marquee-container">
                    <div className="marquee-content">
                        <h2 className="text-4xl font-bold tracking-tighter text-background sm:text-5xl">
                            {marqueeText}
                        </h2>
                        <h2 className="text-4xl font-bold tracking-tighter text-background sm:text-5xl">
                            {marqueeText}
                        </h2>
                    </div>
                </div>
            </Section>
        </main>
    )
}
