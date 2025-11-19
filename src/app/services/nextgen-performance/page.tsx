import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { MotionDiv } from '@/components/ui/MotionDiv'

const processSteps = [
  {
    name: 'Deconstruct (再定義)',
    description:
      '検索キーワードの背後にある顧客の意図（インテント）を深く洞察し、市場の需要と競合の戦略をマッピングします。分断されがちなSEO、広告、SNSのデータを統合的に分析し、顧客が情報を探し始めてから購買に至るまでの全体像を可視化。データに基づき、最も投資対効果の高いチャネルとコンテンツ領域を特定します。',
  },
  {
    name: 'Build (制作および作業)',
    description:
      '特定した機会を最大化するための、統合的なパフォーマンスマーケティング戦略を構築します。オーガニック検索からの流入を最大化するSEO戦略、ターゲット顧客に的確にリーチする広告ポートフォリオ、そしてエンゲージメントを高めるコンテンツエコシステムを設計。各施策が連携し、1+1が3以上になるような相乗効果を生み出す仕組みを作ります。',
  },
  {
    name: 'Grow (運用と成長)',
    description:
      'ダッシュボードで主要KPIを常時監視し、日次・週次でのパフォーマンスレビューを通じて、迅速な軌道修正を行います。さらに、生成AIを活用して、広告クリエイティブやブログ記事、SNS投稿などを高速で大量に生成・テスト。データに基づいた改善サイクルを加速させ、常に最適なメッセージを最適なタイミングで届けることで、持続的な成果向上を実現します。',
  },
]

const deliverables = [
  '市場・競合分析レポート',
  'キーワード・インテントマッピング',
  '統合マーケティング戦略',
  'SEO戦略・コンテンツプラン',
  '広告アカウント構造設計',
  'パフォーマンスモニタリングダッシュボード',
  '生成AIクリエイティブ制作',
  'グロースハック（A/Bテスト）実行',
]

const keywords = [
  'GEO/SEO',
  'Advertising Structure',
  'Performance Optimization',
  'Generative AI Creative',
]

export default function NextGenPerformancePage() {
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
                NextGen Performance
              </h1>
              <p className="mt-6 text-lg text-secondary-text">
                生成AI時代の成果設計。検索、広告、コンテンツを、ひとつの構造へ。
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

