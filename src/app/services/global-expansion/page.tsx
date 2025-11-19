import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { MotionDiv } from '@/components/ui/MotionDiv'

const processSteps = [
  {
    name: 'Deconstruct (再定義)',
    description:
      'ターゲット市場の文化、言語、消費者行動、競合環境を深く分析。文献調査と現地エキスパートへのヒアリングを組み合わせ、表面的な情報だけでは見えない、市場のインサイトを抽出します。日本市場への進出（Inbound）、海外市場への進出（Outbound）の双方に対応し、成功の鍵となる文化的なニュアンスを捉えます。',
  },
  {
    name: 'Build (制作および作業)',
    description:
      '抽出したインサイトに基づき、製品やサービスのローカライゼーション戦略を策定。単なる翻訳ではなく、文化的な文脈に合わせたメッセージング、UI/UXの最適化、決済手段の導入など、現地ユーザーに自然に受け入れられる体験を設計・構築します。各市場の規制や商習慣にも準拠した、スケーラブルなシステムを実装します。',
  },
  {
    name: 'Grow (運用と成長)',
    description:
      '構築したプロダクトと戦略を市場に投入します。現地の主要チャネル（検索エンジン、SNS、広告プラットフォーム）を最大限に活用したGo-To-Market戦略を実行。KPIを設定し、効果測定と改善を繰り返すことで、グローバル市場での持続的な成長を支援します。国境を越えたチームがシームレスに連携できる運用体制の構築もサポートします。',
  },
]

const deliverables = [
  '市場調査・カルチャー分析レポート',
  'ローカライゼーション戦略',
  'グローバルSEO/SEM戦略',
  '多言語ウェブサイト・アプリ構築',
  '海外向けコンテンツマーケティング',
  'Go-to-Market実行支援',
  '現地法規制・商習慣対応コンサルティング',
  'クロスボーダー運用体制構築',
]

const keywords = [
  'Go-To-Market',
  'Localization',
  'Cross-border Commerce',
  'Global Strategy',
]

export default function GlobalExpansionPage() {
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
                Global Expansion
              </h1>
              <p className="mt-6 text-lg text-secondary-text">
                国境を越える、デジタル戦略。
                <br />
                文化と市場を深く理解し、グローバルな成功をデザインします。
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

