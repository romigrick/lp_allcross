/**
 * saveLead — salva o lead na tabela `leads` do Supabase
 * Falha silenciosamente para nunca bloquear a conversão.
 */

const SUPABASE_URL      = 'https://esmkhhpmrdvgmsfwszuq.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzbWtoaHBtcmR2Z21zZndzenVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0Mzc2NDEsImV4cCI6MjA4OTAxMzY0MX0.V0_Fu7_PhrNYT2mYNwaSljwd4CcQfk2gvNqFpoC9XeI'

const LEADS_URL = `${SUPABASE_URL}/rest/v1/leads`

const HEADERS = {
  'apikey':        SUPABASE_ANON_KEY,
  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type':  'application/json',
  'Prefer':        'return=minimal',
}

const PLAN_LABELS = {
  individual:  'Individual',
  familiar:    'Familiar',
  mei:         'Empresarial — MEI',
  empresarial: 'Empresarial — PME',
  senior:      'MedSênior (60+)',
}

export async function saveLead(formData, consultant) {
  try {
    const payload = {
      nome:               formData.name       || null,
      whatsapp:           formData.phone      || null,
      cidade:             formData.city       || null,
      tipo_plano:         PLAN_LABELS[formData.planType] || formData.planType || null,
      quantidade_pessoas: formData.pessoas    || null,
      tipo_pessoa:        formData.tipoPessoa || null,
      observacoes:        formData.message    || null,
      consultor:          consultant.name,
      consultor_telefone: consultant.phone,
      origem:             'Landing Page',
    }

    await fetch(LEADS_URL, {
      method:  'POST',
      headers: HEADERS,
      body:    JSON.stringify(payload),
    })
  } catch (err) {
    console.warn('[AllCross] Falha ao salvar lead:', err)
  }
}
