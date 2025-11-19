import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { MotionDiv } from '@/components/ui/MotionDiv'

const processSteps = [
  {
    name: 'Deconstruct (再定義)',
    description:
      '定性的・定量的なアプローチを組み合わせ、ビジネスの現状を徹底的に可視化します。ユーザーインタビューやアンケート調査から顧客の深層心理を、データ解析から行動パターンを読み解きます。このプロセスを通じて、単なる「問題点」ではなく、事業成長の最も大きな「機会」がどこに眠っているかを明らかにします。',
  },
  {
    name: 'Build (制作および作業)',
    description:
      '発見した機会を具体的な形に変えていきます。カスタマージャーニーマップやサービスブループリントを用いて理想の体験を定義し、IA（情報アーキテクチャ）とUX（ユーザー体験）を設計。その後、プロトタイピングとユーザーテストを高速で繰り返し、UI（ユーザーインターフェース）を洗練させます。見た目の美しさだけでなく、「使いやすさ」と「ビジネス成果」を両立する設計を追求します。',
  },
  {
    name: 'Grow (運用と成長)',
    description:
      'リリースはゴールではなく、新たなスタートです。設定したKPIをリアルタイムで計測し、ユーザーの行動データを分析。A/Bテストやコンテンツの最適化を通じて、継続的な改善サイクルを回します。また、クライアントチームが自走できるよう、運用体制の構築やトレーニングも支援。ビジネスが市場と共に成長し続けるための仕組みを築きます。',
  },
]

const deliverables = [
  'UXリサーチ・データ分析レポート',
  'ペルソナ・カスタマージャーニーマップ',
  'サービスブループリント',
  '情報アーキテクチャ（IA）設計',
  'ワイヤーフレーム・プロトタイプ',
  'UIデザインシステム',
  'ブランド・デザインガイドライン',
  'ウェブサイト・アプリケーション実装',
]

const keywords = [
  'User Experience',
  'Brand Strategy',
  'Structural Design',
  'System Delivery',
]

export default function DigitalExperiencePage() {
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
                Digital Experience
              </h1>
              <p className="mt-6 text-lg text-secondary-text">
                ブランドと体験を構造から設計する。
                <br />
                それは、単なるウェブサイトではなく、組織が信頼を築くための仕組みづくりです。
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
                Key Deliverables (主な納品物)
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
                Keywords
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

