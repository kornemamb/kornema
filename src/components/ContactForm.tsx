'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ vardas: '', tel: '', email: '', zinute: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Replace with your form endpoint (e.g. Formspree, Resend, etc.)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSent(true)
  }

  if (sent) return (
    <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 8 }}>Žinutė išsiųsta</h3>
      <p style={{ color: '#6b6b60' }}>Susisieksime su jumis kuo greičiau.</p>
    </div>
  )

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px', fontSize: 15,
    border: '1px solid #ddd', borderRadius: 2, outline: 'none',
    fontFamily: 'inherit', background: 'white', marginTop: 6,
    transition: 'border-color 0.2s',
  }
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 13, fontWeight: 500,
    color: '#6b6b60', letterSpacing: '0.04em',
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label style={labelStyle}>Vardas *</label>
          <input required style={inputStyle} value={form.vardas}
            onChange={e => setForm(f => ({ ...f, vardas: e.target.value }))}
            onFocus={e => e.target.style.borderColor = '#b8974a'}
            onBlur={e => e.target.style.borderColor = '#ddd'}
          />
        </div>
        <div>
          <label style={labelStyle}>Telefono nr.</label>
          <input style={inputStyle} value={form.tel}
            onChange={e => setForm(f => ({ ...f, tel: e.target.value }))}
            onFocus={e => e.target.style.borderColor = '#b8974a'}
            onBlur={e => e.target.style.borderColor = '#ddd'}
          />
        </div>
      </div>
      <div>
        <label style={labelStyle}>El. paštas *</label>
        <input required type="email" style={inputStyle} value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          onFocus={e => e.target.style.borderColor = '#b8974a'}
          onBlur={e => e.target.style.borderColor = '#ddd'}
        />
      </div>
      <div>
        <label style={labelStyle}>Jūsų žinutė *</label>
        <textarea required rows={5} style={{ ...inputStyle, resize: 'vertical', marginTop: 6 }}
          value={form.zinute}
          onChange={e => setForm(f => ({ ...f, zinute: e.target.value }))}
          onFocus={e => e.target.style.borderColor = '#b8974a'}
          onBlur={e => e.target.style.borderColor = '#ddd'}
        />
      </div>
      <button type="submit" disabled={loading} style={{
        background: '#b8974a', color: 'white', border: 'none',
        padding: '14px 32px', fontSize: 14, letterSpacing: '0.08em',
        borderRadius: 2, cursor: loading ? 'not-allowed' : 'pointer',
        opacity: loading ? 0.7 : 1, transition: 'opacity 0.2s, transform 0.1s',
        alignSelf: 'flex-start',
      }}>
        {loading ? 'Siunčiama...' : 'Siųsti žinutę'}
      </button>
    </form>
  )
}
