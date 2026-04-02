import { useReveal } from '../hooks/useReveal'
import { openConsultantWA } from '../utils/openWA'
import { Users, Briefcase, Building2, Heart } from 'lucide-react'



const segments = [
  {
    icon: Heart,
    tag: 'Sênior 60+',
    title: 'MedSênior',
    desc: 'Plano especializado para quem tem 60 anos ou mais. Cobertura completa, rede de qualidade e processo de contratação rápido e sem burocracia.',
    highlight: 'Especializado para +60 anos',
    color: 'from-emerald-500 to-emerald-700',
    accent: 'emerald',
    featured: true,
  },
  {
    icon: Briefcase,
    tag: 'Autônomo / MEI (CNPJ)',
    title: 'Plano Empresarial MEI',
    desc: 'Com CNPJ MEI você acessa planos coletivos até 45% mais em conta. Contratação rápida, sem burocracia e sem taxa de adesão.',
    highlight: 'Até 45% mais econômico',
    color: 'from-amber-500 to-amber-700',
    accent: 'amber',
  },
  {
    icon: Building2,
    tag: 'Empresa (PME)',
    title: 'Plano Coletivo Empresarial',
    desc: 'De 2 a 29 vidas. Benefício que atrai e retém talentos, com custo acessível e contratação simples e rápida.',
    highlight: 'De 2 a 29 colaboradores',
    color: 'from-blue-500 to-blue-700',
    accent: 'blue',
  },
  {
    icon: Users,
    tag: 'Família',
    title: 'Plano Familiar',
    desc: 'Proteja sua família com cobertura completa. Comparamos planos que cabem no seu orçamento sem abrir mão da qualidade.',
    highlight: 'Ideal para famílias com crianças',
    color: 'from-rose-500 to-rose-700',
    accent: 'rose',
  },
]

const accentColors = {
  blue:    'bg-blue-50 text-blue-700 border-blue-200',
  amber:   'bg-amber-50 text-amber-700 border-amber-200',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  rose:    'bg-rose-50 text-rose-700 border-rose-200',
}

export default function ForWhom() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-20 bg-white" ref={ref} id="planos">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <span className="inline-block text-amber-600 font-body text-sm font-semibold uppercase tracking-widest mb-3">
            Para quem é
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-900 mb-4">
            O plano certo para{' '}
            <em className="not-italic text-amber-500">cada situação</em>
          </h2>
          <p className="text-gray-500 font-body text-xl max-w-xl mx-auto">
            Não importa o seu perfil — temos especialistas prontos para encontrar a melhor solução para você.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {segments.map((seg, i) => {
            const Icon = seg.icon
            return (
              <div
                key={seg.tag}
                className={`reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''} relative group flex flex-col rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  seg.featured
                    ? 'border-emerald-300 shadow-xl shadow-emerald-100 ring-2 ring-emerald-400/30'
                    : 'border-gray-100 shadow-md'
                }`}
              >
                {/* Gradient header — altura fixa igual para todos os cards */}
                <div className={`relative bg-gradient-to-br ${seg.color} px-6 pb-6 flex flex-col justify-between`} style={{height: '176px', paddingTop: seg.featured ? '2.25rem' : '1.5rem'}}>
                  {seg.featured && (
                    <div className="absolute top-0 left-0 right-0 bg-black/20 text-white text-xs font-body font-semibold text-center py-1.5 uppercase tracking-widest">
                      ⭐ Mais vendido
                    </div>
                  )}
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Icon size={22} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-white/70 text-xs font-body uppercase tracking-widest block mb-1">{seg.tag}</span>
                    <h3 className="text-white font-display text-2xl font-semibold leading-tight">{seg.title}</h3>
                  </div>
                </div>

                {/* Body */}
                <div className="flex-1 flex flex-col px-6 pt-6 pb-6 bg-white">
                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-5 flex-1">
                    {seg.desc}
                  </p>
                  <div className={`inline-flex items-center gap-1.5 text-xs font-body font-semibold px-3 py-2 rounded-full border ${accentColors[seg.accent]} mb-4`}>
                    <span>✓</span> {seg.highlight}
                  </div>
                  <button
                    onClick={() => openConsultantWA()}
                    className={`w-full text-center font-body font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 ${
                      seg.featured
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-200'
                        : 'bg-navy-900 hover:bg-navy-800 text-white'
                    }`}
                  >
                    Quero uma cotação rápida
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
