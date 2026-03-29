import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atlikti darbai | Kornema',
  description: 'Peržiūrėkite Kornema atliktus kapaviečių įrengimo ir priežiūros darbus.',
}

export default function AltiktiDarbaiPage() {
  return (
    <>
      <div style={{ background: '#1a1a18', paddingTop: 120, paddingBottom: 60, textAlign: 'center' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8974a', marginBottom: 12 }}>
          Kornema
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', fontWeight: 400 }}>
          Atlikti darbai
        </h1>
      </div>

      <section style={{ padding: '6rem 2rem', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ color: '#6b6b60', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Galerija šiuo metu pildoma. Apsilankykite mūsų puslapyje vėliau, kad pamatytumėte atliktų darbų nuotraukas.
          </p>
          <p style={{ color: '#4a4a42', marginBottom: 40 }}>
            Tuo tarpu galite peržiūrėti mūsų katalogą arba susisiekti su mumis dėl konsultacijos.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/katalogas" style={{
              border: '1px solid #b8974a', color: '#b8974a', padding: '13px 28px',
              fontSize: 14, letterSpacing: '0.06em', borderRadius: 2,
            }}>Peržiūrėti katalogą</Link>
            <Link href="/kontaktai" style={{
              background: '#b8974a', color: 'white', padding: '13px 28px',
              fontSize: 14, letterSpacing: '0.06em', borderRadius: 2,
            }}>Susisiekti</Link>
          </div>
        </div>
      </section>
    </>
  )
}
