import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Katalogas | Kornema',
  description: 'Susipažinkite su mūsų kapaviečių įrengimo gaminių ir medžiagų asortimentu.',
}

const nuotraukos = [
  { src: 'https://www.kornema.lt/titulinis/carousel/katalogas-vienas.jpg', alt: 'Katalogas 1' },
  { src: 'https://www.kornema.lt/titulinis/carousel/katalogas-du.jpg', alt: 'Katalogas 2' },
  { src: 'https://www.kornema.lt/titulinis/carousel/katalogas-trys.jpg', alt: 'Katalogas 3' },
  { src: 'https://www.kornema.lt/titulinis/carousel/katalogas-keturi.jpg', alt: 'Katalogas 4' },
  { src: 'https://www.kornema.lt/titulinis/carousel/katalogas-penki.jpg', alt: 'Katalogas 5' },
  { src: 'https://www.kornema.lt/titulinis/carousel/katalogas-sesi.jpg', alt: 'Katalogas 6' },
]

export default function KatalogoPage() {
  return (
    <>
      <div style={{ background: '#1a1a18', paddingTop: 120, paddingBottom: 60, textAlign: 'center' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8974a', marginBottom: 12 }}>
          Kornema
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', fontWeight: 400 }}>
          Katalogas
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 16, fontSize: 16 }}>
          Susipažinkite su mūsų gaminių ir medžiagų asortimentu
        </p>
      </div>

      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 16,
          }}>
            {nuotraukos.map((n, i) => (
              <div key={i} style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 2, overflow: 'hidden' }}>
                <Image src={n.src} alt={n.alt} fill style={{ objectFit: 'cover', transition: 'transform 0.4s' }} />
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '3rem', color: '#6b6b60', fontSize: 15 }}>
            Norėdami sužinoti daugiau apie konkrečias medžiagas ar gaminius,{' '}
            <a href="/kontaktai" style={{ color: '#b8974a' }}>susisiekite su mumis</a>.
          </p>
        </div>
      </section>
    </>
  )
}
