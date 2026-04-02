import { useReveal } from '../hooks/useReveal'
import { MessageSquare, Search, FileCheck, ThumbsUp } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Fale com nosso especialista',
    desc: 'Entre em contato pelo WhatsApp ou preencha o formulário. Sem burocracia, sem compromisso.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Comparamos até 10 operadoras',
    desc: 'Analisamos rede credenciada, cobertura e preço para encontrar o melhor custo-benefício para você.',
  },
  {
    icon: FileCheck,
    number: '03',
    title: 'Receba sua cotação personalizada',
    desc: 'Você recebe um comparativo detalhado com as melhores opções. Tudo explicado de forma clara.',
  },
  {
    icon: ThumbsUp,
    number: '04',
    title: 'Decida com segurança',
    desc: 'Escolha o plano ideal com a orientação de quem entende do mercado há mais de 22 anos.',
  },
]

export default function HowItWorks() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-20 bg-gray-50" ref={ref} id="como-funciona">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <span className="inline-block text-[#B8923A] font-body text-sm font-semibold uppercase tracking-widest mb-3">
            Como funciona
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-900 mb-4">
            Rápido, sem burocracia:{' '}
            <em className="not-italic text-[#C9A84C]">em minutos</em>
          </h2>
          <p className="text-gray-500 font-body text-lg max-w-xl mx-auto">
            Um processo simples, transparente e sem surpresas. Você toma a melhor decisão com todas as informações na mão.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className={`reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''} flex flex-col items-center text-center`}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-navy-gradient flex items-center justify-center shadow-xl shadow-navy-900/20">
                      <Icon size={26} className="text-[#C9A84C]" strokeWidth={1.5} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#C9A84C] text-white text-xs font-body font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy-900 mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
