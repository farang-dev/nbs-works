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

const services = [
  {
    name: 'Digital Experience',
    description:
      'ユーザーの心に響く、記憶に残るブランド体験を創造します。表面的なデザインだけでなく、ビジネスの目的とユーザーの体験を深く結びつけ、一貫した設計を行うことで、顧客との間に揺るぎない信頼関係を築き上げます。',
    href: '/services/digital-experience',
    icon: RocketLaunchIcon,
  },
  {
    name: 'NextGen Performance',
    description:
      '生成AIを活用し、次世代のマーケティング成果を追求します。分断されがちな検索（GEO/SEO）、広告、コンテンツ制作を一つのエコシステムとして統合。データに基づいたインサイトで、持続的な成長をドライブします。',
    href: '/services/nextgen-performance',
    icon: CodeBracketIcon,
  },
  {
    name: 'AI Operational Design',
    description:
      'AIを組織の力に変える、業務プロセスの再設計を行います。日々のワークフローにAIをシームレスに組み込み、ナレッジマネジメントを最適化。チームの生産性を飛躍的に向上させ、創造的な業務に集中できる環境を実現します。',
    href: '/services/ai-operational-design',
    icon: CpuChipIcon,
  },
  {
    name: 'Global Expansion',
    description:
      'グローバル企業の日本市場への進出、また日本企業の海外展開を、現地の文化や市場に根ざしたデジタル戦略で支援します。',
    href: '/services/global-expansion',
    icon: GlobeAltIcon,
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

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl font-bold tracking-tighter text-primary-text sm:text-5xl">
              AI時代のマーケティング戦略を、共にデザインする
            </h1>
            <p className="mt-4 text-lg text-secondary-text">
              私たちは、企業の成長を加速させるための4つのコアサービスを提供します。
              <br />
              各サービスは「発見・構築・進化」のフレームワークに基づき、具体的な成果を構築します。
            </p>
          </MotionDiv>
        </div>
      </Section>

      {/* Services List */}
      <Section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4">
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
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* Framework Section */}
      <Section className="py-16 sm:py-24 bg-white/5">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tighter text-primary-text sm:text-5xl">
              The Framework
            </h2>
            <p className="mt-4 text-lg text-secondary-text">
              発見し、形にし、進化させる。私たちのプロセスは、不確実性を具体的な成果に変えるための設計図です。
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
      </Section>

      {/* CTA Section */}
      <Section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-text sm:text-4xl">
              課題を、機会へ
            </h2>
            <p className="mt-4 text-lg text-secondary-text max-w-2xl mx-auto">
              私たちの専門知識が、貴社のユニークな課題解決にどう役立つか、ぜひ一度お話ししませんか。
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="bg-accent text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg"
              >
                まずは相談する
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
