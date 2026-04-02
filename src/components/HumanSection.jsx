import { useReveal } from '../hooks/useReveal'
import { openConsultantWA } from '../utils/openWA'
import { Quote } from 'lucide-react'

// Unsplash images — pessoas reais em contextos familiares/profissionais brasileiros
const stories = [
  {
    img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80&fit=crop&crop=faces',
    alt: 'Família feliz',
    name: 'Família com filhos pequenos',
    tag: 'Plano Familiar',
    tagColor: 'bg-blue-100 text-blue-700',
    quote: 'Finalmente encontrei um plano que cobre pediatra e pronto-socorro sem coparticipação. Em 30 minutos já tinha a cotação na mão.',
    detail: 'Cobertura completa · Sem coparticipação',
  },
  {
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80&fit=crop&crop=faces',
    alt: 'Empresário MEI',
    name: 'MEI / Autônomo',
    tag: 'Plano MEI',
    tagColor: 'bg-amber-100 text-amber-700',
    quote: 'Abri meu CNPJ MEI e não sabia que isso me dava acesso a um plano coletivo. Pago menos do que imaginava.',
    detail: '45% mais econômico que plano PF',
  },
  {
    img: 'https://img.freepik.com/premium-photo/old-couple-sit-bench-kiss_795871-24610.jpg',
    alt: 'Idoso sorridente',
    name: 'MedSênior 60+',
    tag: 'MedSênior',
    tagColor: 'bg-emerald-100 text-emerald-700',
    quote: 'Achei que plano de saúde para minha idade seria inviável. O especialista me apresentou o MedSênior e cabia no meu orçamento.',
    detail: 'Especializado para 60+ anos',
  },
]

export default function HumanSection() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <span className="inline-block text-[#B8923A] font-body text-sm font-semibold uppercase tracking-widest mb-3">
            Quem a AllCross protege
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-900 mb-4">
            Pessoas reais,{' '}
            <em className="not-italic text-gradient-gold">decisões certas</em>
          </h2>
          <p className="text-gray-500 font-body text-xl max-w-xl mx-auto">
            Cada perfil tem o plano ideal. Veja como ajudamos quem é como você.
          </p>
        </div>

        {/* Stories grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stories.map((s, i) => (
            <div
              key={s.name}
              className={`reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''} group flex flex-col rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 border border-gray-100`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-navy-950/10 to-transparent" />
                <span className={`absolute bottom-4 left-4 text-xs font-body font-semibold px-3 py-1.5 rounded-full ${s.tagColor}`}>
                  {s.tag}
                </span>
              </div>

              {/* Quote body */}
              <div className="flex-1 flex flex-col p-6 bg-white">
                <Quote size={28} className="text-[#C9A84C]/40 mb-3 flex-shrink-0" />
                <p className="text-gray-700 font-body text-base leading-relaxed italic flex-1 mb-4">
                  "{s.quote}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-navy-800 font-body font-semibold text-sm">{s.name}</span>
                  <span className="text-gray-400 font-body text-xs">{s.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip — full width, immersive */}
        <div
          className={`reveal reveal-delay-3 ${visible ? 'visible' : ''} relative rounded-3xl overflow-hidden`}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80&fit=crop"
              alt="Família saudável"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/30" />
          </div>

          {/* Content */}
          <div className="relative px-8 sm:px-14 py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-left">
              <p className="text-[#E8C97A] font-body text-sm font-semibold uppercase tracking-widest mb-3">
                Sua vez
              </p>
              <h3 className="font-display text-3xl sm:text-4xl text-white font-bold leading-tight mb-3">
                Qual é o seu perfil?
              </h3>
              <p className="text-white/60 font-body text-lg max-w-md">
                Em minutos você descobre o plano certo — sem burocracia, sem compromisso.
              </p>
            </div>
            <button
              onClick={() => openConsultantWA()}
              className="flex-shrink-0 inline-flex items-center gap-3 bg-[#C9A84C] hover:bg-[#DDB96A] text-white font-body font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-200 shadow-2xl hover:-translate-y-0.5"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero minha cotação
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
