import { useReveal } from '../hooks/useReveal'

const stats = [
  { value: '22', suffix: ' anos', label: 'de experiência no mercado' },
  { value: '1.500', suffix: '+', label: 'corretores treinados' },
  { value: '230mil', suffix: '', label: 'vidas atendidas/ano' },
  { value: '10', suffix: '+', label: 'operadoras parceiras' },
]

export default function TrustBar() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''}`}
            >
              <div className="mb-2">
                <span className="font-display text-4xl font-bold text-navy-900">
                  {stat.value}
                </span>
                <span className="font-display text-2xl font-bold text-amber-500">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-gray-500 text-sm font-body leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider mt-16" />
    </section>
  )
}
