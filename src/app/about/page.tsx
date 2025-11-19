import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { MotionDiv } from '@/components/ui/MotionDiv'

const contentSections = [
  {
    title: '私たちの名前',
    content:
      '私たちの社名、Nobius（ノビアス）は二つの言葉の組み合わせから生まれました。一つは、本質だけを追求する誠実な姿勢を示す “No Bullshit”。私たちは、見せかけのトレンドや短期的な成果に惑わされず、常に率直で透明性の高いコミュニケーションを心がけます。もう一つは、価値が永続的に循環し、終わりなく成長し続ける状態を表す “Möbius” の輪。その由来の通り、私たちはクライアントと一体のパートナーとなり、一度きりの納品で終わらない関係性を築き、事業の成長に永続的にコミットし続けます。',
  },
  {
    title: '私たちの哲学',
    content:
      '「それは、本当に役に立つのか？」すべてのプロジェクトは、このシンプルで本質的な問いから始まります。私たちは、ただ美しいだけのデザインや、技術的に高度なだけのプロダクトには真の価値はないと考えます。私たちの価値基準は、それがビジネス上の具体的な課題を解決できるか、そしてユーザーの生活を少しでも豊かにできるか、という点にあります。表面的なきらびやかさではなく、深く根差した「本質的な有用性」こそが、時代を超えて愛され、ビジネスを成長させる優れたデジタル体験の核であると固く信じています。',
  },
  {
    title: '私たちのアプローチ',
    content:
      '私たちのプロセスは「Deconstruct（分解・再定義）」「Build（構築）」「Grow（進化）」の三段階で構成される、ダイナミックなサイクルです。まず、ビジネスモデル、データ、顧客行動を徹底的に「分解」し、思い込みを排除した上で本質的な課題と機会を「再定義」します。次に見出した最もインパクトのある機会を、MVPから本格的なシステムまで、プロトタイピングとテストを繰り返しながら価値ある体験として「構築」します。そして、リリースは新たなスタートラインです。市場からのフィードバックループを高速で回し、サービスを市場と共に「進化」させ、ビジネス成果を継続的に創出します。',
  },
  {
    title: '私たちの目指す姿',
    content:
      '私たちの最終的な目標は、クライアントにとって「なくてはならない戦略的パートナー」になることです。単なる受託・納品という一方的な関係性ではなく、事業の成長と成功の責任を共有するパートナーとして、同じ視点で課題を考え、共に汗を流し、成功を分かち合いたい。言われたものを作るだけのベンダーではありません。あなたのビジネスが次のステージへ向かう、その推進力となり、未来を共に描く。それが私たちの最大の喜びです。',
  },
]

const marqueeText = 'Usefulness is Everything   '.repeat(10)

export default function AboutPage() {
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
                Usefulness is everything
              </h1>
              <p className="mt-6 text-lg text-secondary-text">
                私たちは、本質的なデジタル体験を追求します。
                <br />
                役に立つことは、美しい。それが私たちの信念です。
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
