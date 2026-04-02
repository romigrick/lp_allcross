import { useReveal } from '../hooks/useReveal'
import { Clock, Users2, ShieldCheck, BarChart3, Award, Phone } from 'lucide-react'

const diffs = [
  {
    icon: BarChart3,
    title: 'Comparamos até 10 operadoras',
    desc: 'Você recebe um comparativo personalizado com rede, cobertura e preço lado a lado. Toma a decisão com clareza.',
  },
  {
    icon: Clock,
    title: 'Retorno em até 1 hora',
    desc: 'Nossos especialistas têm agilidade para atender você enquanto a decisão ainda é relevante.',
  },
  {
    icon: Users2,
    title: '1.500+ corretores especializados',
    desc: 'Uma rede nacional de profissionais treinados e capacitados. O especialista certo para o seu perfil.',
  },
  {
    icon: ShieldCheck,
    title: '22 anos de experiência',
    desc: 'Mais de duas décadas no mercado de saúde suplementar. Solidez, credibilidade e conhecimento acumulado.',
  },
  {
    icon: Award,
    title: 'Parceiro certificado SUSEP',
    desc: 'Operamos com total conformidade regulatória. Segurança e transparência em cada negociação.',
  },
  {
    icon: Phone,
    title: 'Atendimento híbrido',
    desc: 'Presencial em Curitiba ou online para todo o Brasil. Você escolhe como quer ser atendido.',
  },
]

export default function Differentials() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-20 bg-gray-50" ref={ref} id="diferenciais">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <span className="inline-block text-[#B8923A] font-body text-sm font-semibold uppercase tracking-widest mb-3">
            Por que a AllCross
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-900 mb-4">
            A escolha de quem quer{' '}
            <em className="not-italic text-[#C9A84C]">segurança de verdade</em>
          </h2>
          <p className="text-gray-500 font-body text-lg max-w-xl mx-auto">
            Não somos uma corretora qualquer. Somos um parceiro estratégico que analisa, compara e encontra o melhor custo-benefício para você.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diffs.map((d, i) => {
            const Icon = d.icon
            return (
              <div
                key={d.title}
                className={`reveal reveal-delay-${(i % 3) + 1} ${visible ? 'visible' : ''} bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 group-hover:bg-navy-gradient flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-navy-700 group-hover:text-[#C9A84C] transition-colors duration-300"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-2 leading-snug">
                  {d.title}
                </h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">
                  {d.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
