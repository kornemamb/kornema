import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a18', color: 'rgba(255,255,255,0.7)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem', marginBottom: '3rem',
        }}>
          {/* Branding */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#b8974a', fontSize: 22, marginBottom: 12 }}>
              MB „Kornema"
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 260 }}>
              Kapaviečių įrengimas ir priežiūra Vilniaus regione ir aplink 100 km spinduliu.
            </p>
            <p style={{ fontSize: 12, marginTop: 12, color: 'rgba(255,255,255,0.4)' }}>
              Įmonės kodas: 306284749
            </p>
          </div>

          {/* Nuorodos */}
          <div>
            <h4 style={{ color: 'white', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              Paslaugos
            </h4>
            {[
              { href: '/paslaugos/dengimas-plokstemis', label: 'Dengimas plokštelėmis' },
              { href: '/paslaugos/dekoravimas-skalda', label: 'Dekoravimas skalda' },
              { href: '/paslaugos/kiti-dengimo-budai', label: 'Kiti dengimo būdai' },
              { href: '/paslaugos/kapavietes-prieziura', label: 'Kapaviečių priežiūra' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                display: 'block', fontSize: 14, marginBottom: 8,
                color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#b8974a'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >{l.label}</Link>
            ))}
          </div>

          {/* Kontaktai */}
          <div>
            <h4 style={{ color: 'white', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              Kontaktai
            </h4>
            <p style={{ fontSize: 14, marginBottom: 6 }}>
              <a href="mailto:info@kornema.lt" style={{ color: '#b8974a' }}>info@kornema.lt</a>
            </p>
            <p style={{ fontSize: 14, marginBottom: 6 }}>
              <a href="tel:+37060524243" style={{ color: 'rgba(255,255,255,0.7)' }}>+370 605 24243</a>
            </p>
            <p style={{ fontSize: 14, marginBottom: 6 }}>
              <a href="tel:+37060106556" style={{ color: 'rgba(255,255,255,0.7)' }}>+370 601 06556</a>
            </p>
            <p style={{ fontSize: 14, marginTop: 12, color: 'rgba(255,255,255,0.5)' }}>
              Fabijoniškių g. 2<br />Vilnius, LT-07109
            </p>
          </div>

          {/* Darbo laikas */}
          <div>
            <h4 style={{ color: 'white', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              Darbo laikas
            </h4>
            <p style={{ fontSize: 14, marginBottom: 6 }}>Ant–Pen: 11:00–16:00</p>
            <p style={{ fontSize: 14, marginBottom: 6 }}>Šeštadienis–Sekmadienis:</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>Išankstinė registracija</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Žiemos metu – pagal susitarimą</p>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 8,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
            © 2026 MB „Kornema". Visos teisės saugomos.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            Bankas: Swedbank · LT927300010177178794
          </p>
        </div>
      </div>
    </footer>
  )
}
