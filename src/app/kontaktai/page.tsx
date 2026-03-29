import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Kontaktai | Kornema',
  description: 'Susisiekite su Kornema – kapaviečių įrengimas ir priežiūra Vilniuje. Tel: +370 605 24243',
}

export default function KontaktaiPage() {
  return (
    <>
      <div style={{ background: '#1a1a18', paddingTop: 120, paddingBottom: 60, textAlign: 'center' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8974a', marginBottom: 12 }}>MB „Kornema"</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', fontWeight: 400 }}>
          Susisiekite
        </h1>
      </div>

      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem' }}>
          {/* Info */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, marginBottom: 32, color: '#1a1a18' }}>
              Kontaktinė informacija
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {[
                {
                  label: 'El. paštas',
                  content: <a href="mailto:info@kornema.lt" style={{ color: '#b8974a', fontSize: 16 }}>info@kornema.lt</a>,
                },
                {
                  label: 'Telefonai',
                  content: (
                    <div>
                      <a href="tel:+37060524243" style={{ display: 'block', fontSize: 16, marginBottom: 4 }}>+370 605 24243</a>
                      <a href="tel:+37060106556" style={{ display: 'block', fontSize: 16 }}>+370 601 06556</a>
                    </div>
                  ),
                },
                {
                  label: 'Adresas',
                  content: (
                    <div>
                      <p style={{ fontSize: 16 }}>Fabijoniškių g. 2</p>
                      <p style={{ fontSize: 16 }}>Vilnius, LT-07109</p>
                      <a href="https://maps.app.goo.gl/N6nWQM4xLrHYqfa29"
                        target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: 13, color: '#b8974a', marginTop: 8, display: 'inline-block' }}>
                        Atidaryti Google Maps →
                      </a>
                    </div>
                  ),
                },
                {
                  label: 'Darbo laikas',
                  content: (
                    <div style={{ fontSize: 15 }}>
                      <p>Antradienis–Penktadienis: <strong>11:00–16:00</strong></p>
                      <p style={{ marginTop: 4, color: '#6b6b60' }}>Šeštadienis–Sekmadienis–Pirmadienis: išankstinė registracija</p>
                      <p style={{ marginTop: 4, color: '#9a9a8a', fontSize: 13 }}>Žiemos metu – pagal susitarimą</p>
                    </div>
                  ),
                },
                {
                  label: 'Įmonės rekvizitai',
                  content: (
                    <div style={{ fontSize: 14, color: '#6b6b60', lineHeight: 1.8 }}>
                      <p>Įmonės kodas: 306284749</p>
                      <p>Bankas: Swedbank</p>
                      <p>Sąskaita: LT927300010177178794</p>
                    </div>
                  ),
                },
              ].map(item => (
                <div key={item.label}>
                  <p style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9a9a8a', marginBottom: 8 }}>
                    {item.label}
                  </p>
                  {item.content}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, marginBottom: 32, color: '#1a1a18' }}>
              Parašykite mums
            </h2>
            <ContactForm />
          </div>
        </div>
        <style>{`@media(max-width:700px){section>div{grid-template-columns:1fr !important;}}`}</style>
      </section>
    </>
  )
}
