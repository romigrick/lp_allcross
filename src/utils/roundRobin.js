/**
 * Round-robin de consultores AllCross — powered by Supabase
 *
 * O índice global fica em uma única linha na tabela `round_robin` no Supabase.
 * Qualquer visitante, em qualquer dispositivo, avança o mesmo contador.
 *
 * Fallback: se o Supabase estiver fora do ar, cai para localStorage
 * para não travar a conversão.
 */

// ─── Credenciais Supabase ────────────────────────────────────────────────────
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const CONSULTANTS = [
  { name: 'Suellen Correa',  phone: '5541998460353' },
  { name: 'Rosi Carcereri',  phone: '5541984336373' },
  { name: 'Genésio',         phone: '5514997220322' },
  { name: 'Katia',           phone: '5541998314803' },
  { name: 'Valéria',         phone: '5541991878697' },
  { name: 'Paul',            phone: '5541999868856' },
  { name: 'Marlete',         phone: '5541998890812' },
  { name: 'José Luiz',       phone: '5541997606843' },
]

const TOTAL = CONSULTANTS.length
const TABLE_URL = `${SUPABASE_URL}/rest/v1/round_robin?id=eq.1`
const HEADERS = {
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation',
}

// ── Fallback local (caso Supabase falhe) ─────────────────────────────────────
const LS_KEY = 'allcross_fb_index'

function localNext() {
  let idx = 0
  try {
    idx = parseInt(localStorage.getItem(LS_KEY) || '0', 10)
    if (isNaN(idx) || idx < 0 || idx >= TOTAL) idx = 0
    localStorage.setItem(LS_KEY, String((idx + 1) % TOTAL))
  } catch { /* modo privado extremo */ }
  return CONSULTANTS[idx]
}

// ── Supabase: lê índice atual e tenta incrementar atomicamente ───────────────
async function supabaseNext() {
  // 1. Lê registro atual
  const res = await fetch(TABLE_URL, {
    headers: { ...HEADERS, 'Accept': 'application/json' },
  })
  if (!res.ok) throw new Error('read failed')

  const [row] = await res.json()
  const current = typeof row?.current_index === 'number' ? row.current_index : 0
  const next = (current + 1) % TOTAL

  // 2. Atualiza para o próximo (se outro visitante ganhou a corrida, tudo bem —
  //    a sobrescrita é aceitável num volume pequeno de leads)
  await fetch(TABLE_URL, {
    method: 'PATCH',
    headers: HEADERS,
    body: JSON.stringify({ current_index: next }),
  })

  return CONSULTANTS[current]
}

/**
 * Retorna o consultor da vez e avança o contador global.
 * Sempre resolve — nunca lança exceção para o chamador.
 */
export async function getNextConsultant() {
  try {
    return await supabaseNext()
  } catch {
    console.warn('[AllCross] Supabase indisponível — usando fallback local')
    return localNext()
  }
}

// ── Monta URL do WhatsApp ────────────────────────────────────────────────────
export function buildWhatsAppURL(consultant, formData = {}) {

  const isButton = !formData.name || formData.name.trim() === '' || formData.name === 'Botão'

  // --- MENSAGEM PARA BOTÃO ---
  if (isButton) {
    const msg = `Olá! Vi a página da AllCross e gostaria de receber uma cotação de plano de saúde.`
    return `https://wa.me/${consultant.phone}?text=${encodeURIComponent(msg)}`
  }

  // --- MENSAGEM PARA FORMULÁRIO ---
  const planLabels = {
    individual:  'Plano Individual',
    familiar:    'Plano Familiar',
    mei:         'Plano Empresarial — MEI (CNPJ)',
    empresarial: 'Plano Empresarial — PME (2 a 29 vidas)',
    senior:      'Plano MedSênior (60+ anos)',
  }

  const plano      = planLabels[formData.planType] || 'Plano de saúde'
  const pessoas    = formData.pessoas    ? `*Nº de pessoas:* ${formData.pessoas}` : null
  const tipoPessoa = formData.tipoPessoa ? `*Pessoa:* ${formData.tipoPessoa}` : null
  const cidade     = formData.city       ? `*Cidade:* ${formData.city}` : null
  const obs        = formData.message    ? `*Observações:* ${formData.message}` : null

  const lines = [
    `Olá! Meu nome é *${formData.name}*.`,
    `Gostaria de receber uma cotação do *${plano}*.`,
    ``,
    cidade,
    pessoas,
    tipoPessoa,
    obs,
    ``,
    `Fico no aguardo! 😊`,
  ].filter(Boolean).join('\n')

  return `https://wa.me/${consultant.phone}?text=${encodeURIComponent(lines)}`
}