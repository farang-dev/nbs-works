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
import { MotionDiv } from '@/components/ui/MotionDiv'
import Container from '@/components/ui/Container'
import HeroAnimation from '@/components/HeroAnimation'
import { useLanguage } from '@/contexts/LanguageContext'

const marqueeText = 'Usefulness is Everything   '.repeat(10)

export default function HomePageClient() {
    const { t } = useLanguage()

    const services = [
        {
            name: t('services.digitalExperience.name'),
            description: t('home.services.digitalExperience.description'),
            href: '/services/digital-experience',
            icon: RocketLaunchIcon,
            tags: t('home.services.digitalExperience.tags').split(', '),
        },
        {
            name: t('services.nextgenPerformance.name'),
            description: t('home.services.nextgenPerformance.description'),
            href: '/services/nextgen-performance',
            icon: CodeBracketIcon,
            tags: t('home.services.nextgenPerformance.tags').split(', '),
        },
        {
            name: t('services.aiOperationalDesign.name'),
            description: t('home.services.aiOperationalDesign.description'),
            href: '/services/ai-operational-design',
            icon: CpuChipIcon,
            tags: t('home.services.aiOperationalDesign.tags').split(', '),
        },
        {
            name: t('services.globalExpansion.name'),
            description: t('home.services.globalExpansion.description'),
            href: '/services/global-expansion',
            icon: GlobeAltIcon,
            tags: t('home.services.globalExpansion.tags').split(', '),
        },
    ]

    const philosophyItems = [
        {
            title: t('home.philosophy.essence.title'),
            text: t('home.philosophy.essence.text'),
        },
        {
            title: t('home.philosophy.circulation.title'),
            text: t('home.philosophy.circulation.text'),
        },
        {
            title: t('home.philosophy.usefulness.title'),
            text: t('home.philosophy.usefulness.text'),
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
            <Section className="bg-background pt-32 pb-20 sm:pt-40 sm:pb-32 relative overflow-hidden">
                <HeroAnimation />
                <Container className="relative z-10">
                    <MotionDiv
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary-text mb-8 leading-tight">
                            {t('home.hero.title')}
                        </h1>
                        <p className="text-lg md:text-xl text-secondary-text max-w-3xl mx-auto mb-12 leading-relaxed">
                            {t('home.hero.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/contact"
                                className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
                            >
                                {t('home.hero.cta.contact')}
                            </Link>
                            <Link
                                href="/services"
                                className="border border-neutral-border text-primary-text px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/5 hover:border-primary-text transition-all duration-300"
                            >
                                {t('home.hero.cta.services')}
                            </Link>
                        </div>
                    </MotionDiv>
                </Container>
            </Section>

            {/* 4 Domains Section */}
            <Section id="services">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <MotionDiv
                                key={service.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                                className="bg-white/5 rounded-2xl border border-neutral-border p-8 flex flex-col group hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                            >
                                <div className="flex-shrink-0">
                                    <service.icon className="h-10 w-10 text-accent mb-6" />
                                    <h3 className="text-xl font-bold text-primary-text mb-4">
                                        {service.name}
                                    </h3>
                                </div>
                                <p className="text-secondary-text mb-8 flex-grow leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium text-secondary-text bg-neutral-100 dark:bg-white/10 px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href={service.href}
                                    className="text-accent font-semibold hover:text-accent/80 transition-colors inline-flex items-center mt-auto"
                                >
                                    {t('home.services.learnMore')}
                                    <ArrowRightIcon className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </MotionDiv>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Philosophy Section */}
            <Section>
                <Container>
                    <MotionDiv
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl font-bold tracking-tighter text-primary-text sm:text-5xl mb-6">
                            {t('home.philosophy.title')}
                        </h2>
                        <p className="text-lg text-secondary-text max-w-3xl mx-auto leading-relaxed">
                            {t('home.philosophy.subtitle')}
                        </p>
                    </MotionDiv>
                    <div className="grid md:grid-cols-3 gap-12 text-left">
                        {philosophyItems.map((item, index) => (
                            <MotionDiv
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: 'easeOut',
                                }}
                            >
                                <h3 className="text-2xl font-bold text-primary-text mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-secondary-text leading-relaxed">{item.text}</p>
                            </MotionDiv>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <Link
                            href="/about"
                            className="text-accent font-semibold hover:text-accent/80 transition-colors inline-flex items-center group text-lg"
                        >
                            {t('home.philosophy.learnMore')}
                            <ArrowRightIcon className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </Container>
            </Section>

            {/* Framework Section */}
            <Section className="bg-zinc-50 dark:bg-white/5">
                <Container>
                    <MotionDiv
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl font-bold tracking-tighter text-primary-text sm:text-5xl mb-6">
                            {t('home.framework.title')}
                        </h2>
                        <p className="text-lg text-secondary-text max-w-3xl mx-auto leading-relaxed">
                            {t('home.framework.subtitle')}
                        </p>
                    </MotionDiv>
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        {frameworkSteps.map((step, index) => (
                            <MotionDiv
                                key={step.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: 'easeOut',
                                }}
                                className="p-8 rounded-2xl bg-background border border-neutral-border shadow-sm"
                            >
                                <h3 className="text-2xl font-bold text-primary-text mb-4">
                                    {step.name}
                                </h3>
                                <p className="text-secondary-text leading-relaxed">{step.description}</p>
                            </MotionDiv>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Closing Section */}
            <Section className="py-12 sm:py-20 bg-accent overflow-hidden">
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
