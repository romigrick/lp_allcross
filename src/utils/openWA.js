import { getNextConsultant, buildWhatsAppURL } from './roundRobin'
import { saveLead } from './saveLead'

// Dados usados quando o clique vem de um botão (sem formulário)
const BUTTON_FORM = {
  name: 'Botão',
  phone: '',
  city: '',
  planType: '',
  pessoas: '',
  tipoPessoa: '',
  message: '',
}

export async function openConsultantWA(formData = null) {
  // 1. Próximo consultor (round-robin global)
  const consultant = await getNextConsultant()

  // 2. Dados: formulário preenchido ou clique de botão
  const data = formData || BUTTON_FORM

  // 3. Salva sempre — botões salvam com nome "Botão" para identificar na planilha
  saveLead(data, consultant)

  // 4. Abre WhatsApp
  const url = buildWhatsAppURL(consultant, data)
  window.open(url, '_blank', 'noopener,noreferrer')
}
