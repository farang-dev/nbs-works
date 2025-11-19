import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { MotionDiv } from '@/components/ui/MotionDiv'

const processSteps = [
  {
    name: 'Deconstruct (再定義)',
    description:
      '現場の担当者へのヒアリングや業務日誌の分析を通じて、既存のワークフローを細胞レベルまで分解します。どこに非効率が存在し、どこにナレッジが属人化しているのかを特定。その上で、どの業務をAIで自動化・支援すれば、最も生産性が向上し、従業員の創造性を解放できるかを見極めます。',
  },
  {
    name: 'Build (制作および作業)',
    description:
      'AIと人間が協働する、新しい業務プロセスを設計します。具体的なタスク手順を定めたSOP（標準作業手順書）を作成し、AIツールの選定・導入から、プロンプトエンジニアリング、RAG（Retrieval-Augmented Generation）システムの構築までを実行。人が判断と創造に集中し、AIが反復作業と情報収集を担う、理想的な分業体制を構築します。',
  },
  {
    name: 'Grow (運用と成長)',
    description:
      '新しい働き方を組織に根付かせるための、実践的なトレーニングプログラムを提供します。ツールの使い方だけでなく、AIを使いこなすための思考法やカルチャー変革までをサポート。導入後も、利用状況のモニタリングと定期的な改善提案を行い、組織全体が自律的にAIを活用し、進化し続けられる状態を目指します。',
  },
]

const deliverables = [
  '業務プロセスマッピング',
  'AI導入効果（ROI）試算',
  'AI-SOP（標準作業手順書）',
  'カスタムAIチャットボット開発',
  'RAGシステム構築',
  'ナレッジマネジメントシステム設計',
  'プロンプトエンジニアリングガイド',
  '導入・定着化トレーニング',
]

const keywords = [
  'AI Workflow',
  'SOP Design',
  'Knowledge Management',
  'Team Enablement',
]

export default function AiOperationalDesignPage() {
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
                AI Operational Design
              </h1>
              <p className="mt-6 text-lg text-secondary-text">
                チームが動く仕組みを、AIで再構築する。
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

