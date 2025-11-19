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

const services = [
  {
    name: 'Digital Experience',
    description:
      'ユーザーの心に響く、記憶に残るブランド体験を創造します。表面的なデザインだけでなく、ビジネスの目的とユーザーの体験を深く結びつけ、一貫した設計を行うことで、顧客との間に揺るぎない信頼関係を築き上げます。',
    href: '/services/digital-experience',
    icon: RocketLaunchIcon,
    tags: ['UX', 'Brand', 'Strategy', 'Delivery'],
  },
  {
    name: 'NextGen Performance',
    description:
      '生成AIを活用し、次世代のマーケティング成果を追求します。分断されがちな検索（GEO/SEO）、広告、コンテンツ制作を一つのエコシステムとして統合。データに基づいたインサイトで、持続的な成長をドライブします。',
    href: '/services/nextgen-performance',
    icon: CodeBracketIcon,
    tags: ['GEO', 'SEO', 'Generative AI', 'Performance'],
  },
  {
    name: 'AI Operational Design',
    description:
      'AIを組織の力に変える、業務プロセスの再設計を行います。日々のワークフローにAIをシームレスに組み込み、ナレッジマネジメントを最適化。チームの生産性を飛躍的に向上させ、創造的な業務に集中できる環境を実現します。',
    href: '/services/ai-operational-design',
    icon: CpuChipIcon,
    tags: ['AI Ops', 'Workflow', 'SOP', 'Knowledge Design'],
  },
  {
    name: 'Global Expansion',
    description:
      'グローバル企業の日本市場への進出、また日本企業の海外展開を、現地の文化や市場に根ざしたデジタル戦略で支援します。',
    href: '/services/global-expansion',
    icon: GlobeAltIcon,
    tags: ['GTM', 'Localization', 'Cross-border', 'Strategy'],
  },
]

const philosophyItems = [
  {
    title: '本質を追求する',
    text: '"No Bullshit"の精神で、見せかけのトレンドに惑わされず、ビジネスの核心に貢献する価値のみを追求します。',
  },
  {
    title: '価値を循環させる',
    text: '"Möbius"の輪のように、一度きりの納品で終わらない関係を築きます。クライアントと一体のパートナーとして、事業の成長に永続的にコミットします。',
  },
  {
    title: '有用性をすべてに',
    text: 'ビジネスの課題を解決し、ユーザーの生活を豊かにする「本質的な有用性」こそが、優れたデジタル体験の核であると信じています。',
  },
]

const frameworkSteps = [
  {
    name: '1. Deconstruct (分解・再定義する)',
    description:
      'サービス、データ、ユーザー行動、ビジネスモデルを徹底的に分解・分析し、事業成長のボトルネックとなっている本質的な課題と、最もインパクトのある改善機会を特定します。',
  },
  {
    name: '2. Build (構築する)',
    description:
      '特定した課題に対する最適な解決策を、MVP（Minimum Viable Product）から本格的なシステムまで、アジャイルに構築します。プロトタイピングとユーザーテストを繰り返し、本当に価値ある機能だけを洗練させ、細部にまでこだわった品質で実装します。',
  },
  {
    name: '3. Grow (進化させる)',
    description:
      'リリースは新たなスタートラインです。構築したプロダクトやサービスを市場に展開し、リアルなユーザー行動を計測。データに基づいた改善サイクルを高速で回し、プロダクトが市場と共に進化し、ビジネス成果が継続的に成長する仕組みを確立します。',
  },
]

const marqueeText = 'Usefulness is Everything   '.repeat(10)

import HeroAnimation from '@/components/HeroAnimation'

// ... existing imports ...

import Container from '@/components/ui/Container'

// ... existing imports ...

export default async function Home() {
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
              Web UX and Brand Design <br className="hidden md:block" /> in AI Era
            </h1>
            <p className="text-lg md:text-xl text-secondary-text max-w-3xl mx-auto mb-12 leading-relaxed">
              AI時代のウェブ体験とブランドデザインを再定義します。データと感性を融合させ、心に残るブランドを構築し、ビジネスの成長を加速させます。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
              >
                まずは相談する
              </Link>
              <Link
                href="/services"
                className="border border-neutral-border text-primary-text px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/5 hover:border-primary-text transition-all duration-300"
              >
                サービスを見る
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
                  詳しく見る
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
              Our Philosophy
            </h2>
            <p className="text-lg text-secondary-text max-w-3xl mx-auto leading-relaxed">
              「それは、本当に役に立つのか？」すべてのプロジェクトは、この問いから始まります。私たちは、ただ美しいだけのデザインや、技術的に高度なだけのプロダクトには価値がないと考えます。
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
              私たちの信念について
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
              The Framework
            </h2>
            <p className="text-lg text-secondary-text max-w-3xl mx-auto leading-relaxed">
              発見し、形にし、進化させる。私たちのプロセスは、不確実性を具体的な成果に変えるための設計図です。
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
            <h2 className="text-6xl font-bold tracking-tighter text-background sm:text-8xl opacity-90">
              {marqueeText}
            </h2>
            <h2 className="text-6xl font-bold tracking-tighter text-background sm:text-8xl opacity-90">
              {marqueeText}
            </h2>
          </div>
        </div>
      </Section>
    </main>
  )
}

