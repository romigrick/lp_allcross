import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Os planos têm coparticipação?',
    a: `Existem três modelos disponíveis:\n\n• **Sem coparticipação:** Você paga apenas a mensalidade mensal, sem custo adicional em consultas ou exames. Ideal para quem usa o plano com frequência.\n\n• **Coparticipação parcial:** Mensalidade menor, com participação financeira somente em algumas terapias como fonoaudiologia, nutrição, fisioterapia e psicologia.\n\n• **Coparticipação completa:** Além das terapias, há participação em consultas e exames, com valores definidos pela operadora. Mensalidade mais reduzida.\n\nNa cotação personalizada analisamos qual modelo faz mais sentido para o seu perfil e frequência de uso.`,
  },
  {
    q: 'Posso contratar plano empresarial com CNPJ MEI?',
    a: `Sim! Os planos empresariais podem ser contratados com CNPJ MEI e costumam ficar até 45% mais baratos que planos individuais ou por adesão.\n\nCondições gerais:\n• MEI precisa ter pelo menos 6 meses de abertura\n• Empresas LTDA podem contratar desde a criação ou após ~60 dias (varia por operadora)\n\nÉ uma das melhores estratégias para autônomos conseguirem cobertura de qualidade com preço competitivo.`,
  },
  {
    q: 'Os planos têm carência para usar?',
    a: `Sim, os planos possuem prazos de carência definidos pela operadora e regulamentados pela ANS. No entanto, em muitos casos é possível reduzir ou até eliminar as carências — especialmente para quem já possui um plano ativo ou está migrando de operadora.\n\nNa cotação verificamos sua situação específica e apresentamos as operadoras com as melhores condições de carência para o seu caso.`,
  },
  {
    q: 'Qual é a rede credenciada dos planos?',
    a: `A rede varia conforme a operadora e o plano escolhido. Cada operadora possui hospitais, clínicas, laboratórios e médicos específicos credenciados em sua rede.\n\nDurante a cotação, verificamos se os hospitais e profissionais da sua preferência estão disponíveis na rede de cada operadora — isso é parte fundamental da análise que fazemos para você.`,
  },
  {
    q: 'Qual operadora é a melhor?',
    a: `Não existe uma única operadora ideal para todos. A melhor escolha depende de:\n\n• Rede de atendimento disponível na sua região\n• Hospitais e médicos de sua preferência\n• Cobertura adequada ao seu perfil de uso\n• Valor que se encaixa no seu orçamento\n\nPor isso comparamos até 10 operadoras simultaneamente — para que você tenha uma visão completa e tome uma decisão racional, com segurança.`,
  },
]

function FaqItem({ faq, isOpen, onToggle }) {
  const formatAnswer = (text) => {
    return text.split('\n').map((line, i) => {
      if (!line.trim()) return <br key={i} />
      if (line.startsWith('•')) {
        const content = line.slice(1).trim()
        const parts = content.split(/\*\*(.*?)\*\*/g)
        return (
          <p key={i} className="flex gap-2 text-gray-600 text-sm leading-relaxed mb-1">
            <span className="text-[#C9A84C] font-bold mt-0.5 flex-shrink-0">•</span>
            <span>{parts.map((p, j) => j % 2 === 1 ? <strong key={j} className="text-navy-800 font-semibold">{p}</strong> : p)}</span>
          </p>
        )
      }
      const parts = line.split(/\*\*(.*?)\*\*/g)
      return (
        <p key={i} className="text-gray-600 text-sm leading-relaxed mb-2">
          {parts.map((p, j) => j % 2 === 1 ? <strong key={j} className="text-navy-800 font-semibold">{p}</strong> : p)}
        </p>
      )
    })
  }

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-body font-semibold text-navy-900 text-base leading-snug">
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          className={`text-[#C9A84C] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}
      >
        <div className="px-6 pb-6 pt-0 bg-white border-t border-gray-100">
          <div className="pt-4">
            {formatAnswer(faq.a)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { ref, visible } = useReveal()
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section className="py-20 bg-white" ref={ref} id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}>
          <span className="inline-block text-[#B8923A] font-body text-sm font-semibold uppercase tracking-widest mb-3">
            Dúvidas frequentes
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-900 mb-4">
            Perguntas antes de{' '}
            <em className="not-italic text-[#C9A84C]">contratar</em>
          </h2>
          <p className="text-gray-500 font-body text-lg">
            Respondemos as principais dúvidas para você tomar uma decisão com segurança.
          </p>
        </div>

        <div className={`space-y-3 reveal reveal-delay-2 ${visible ? 'visible' : ''}`}>
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
