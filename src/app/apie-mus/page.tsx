import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apie mus | Kornema',
  description: 'Sužinokite apie Kornema – kapaviečių įrengimo ir priežiūros įmonę Vilniuje.',
}

export default function ApieMusPage() {
  return (
    <>
      {/* Page header */}
      <div style={{ background: '#1a1a18', paddingTop: 120, paddingBottom: 60, textAlign: 'center' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8974a', marginBottom: 12 }}>Kornema</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', fontWeight: 400 }}>
          Apie mus
        </h1>
      </div>

      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, marginBottom: 24, color: '#1a1a18' }}>
              Kapaviečių įrengimas su širdimi
            </h2>
            <p style={{ color: '#4a4a42', lineHeight: 1.85, marginBottom: 16 }}>
              Kai netenkame artimo žmogaus, natūralu, kad norime išsaugoti jo atminimą ir pasirūpinti jo amžinojo poilsio vieta. Būtent dėl šio noro ir pagarbos gimė Kornema – įmonė, kuri su meile ir atsakomybe rūpinasi kapaviečių įrengimu bei priežiūra Vilniaus regione ir aplink 100 km spinduliu.
            </p>
            <p style={{ color: '#4a4a42', lineHeight: 1.85, marginBottom: 16 }}>
              Mūsų tikslas – kad kiekviena kapavietė atrodytų tvarkingai, jaukiai ir oriai, o jums nereikėtų dėl to jaudintis.
            </p>
            <p style={{ color: '#4a4a42', lineHeight: 1.85, marginBottom: 32 }}>
              Dirbame taip, tarsi rūpintumėmės savo artimųjų kapais – su pagarba, kantrybe ir dėmesiu kiekvienai detalei.
            </p>

            <blockquote style={{
              borderLeft: '2px solid #b8974a', paddingLeft: 20,
              fontFamily: "'Playfair Display', serif", fontSize: 18,
              color: '#4a4a42', fontStyle: 'italic', lineHeight: 1.6,
            }}>
              „Mes randame gyvenime tai, ką patys jam suteikiame."
              <cite style={{ display: 'block', fontSize: 13, fontStyle: 'normal', marginTop: 8, color: '#9a9a8a' }}>— R. V. Emersonas</cite>
            </blockquote>
          </div>

          <div>
            <div style={{ position: 'relative', height: 450, borderRadius: 2, overflow: 'hidden', marginBottom: 24 }}>
              <Image
                src="https://www.kornema.lt/_next/image?url=%2Ftitulinis%2Fkornema-pastatas.webp&w=3840&q=75"
                alt="Kornema pastatas"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div style={{ background: '#f5f0e8', padding: '1.5rem', borderRadius: 2 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, marginBottom: 16, color: '#1a1a18' }}>
                MB „Kornema"
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, color: '#6b6b60' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Įmonės kodas</span><span style={{ color: '#1a1a18' }}>306284749</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Bankas</span><span style={{ color: '#1a1a18' }}>Swedbank</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Sąskaita</span><span style={{ color: '#1a1a18', fontSize: 12 }}>LT927300010177178794</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Adresas</span><span style={{ color: '#1a1a18' }}>Fabijoniškių g. 2, Vilnius</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:700px){section>div{grid-template-columns:1fr !important;}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ background: '#f5f0e8', padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, marginBottom: 16, color: '#1a1a18' }}>
          Norite sužinoti daugiau?
        </h2>
        <p style={{ color: '#6b6b60', marginBottom: 32 }}>Susisiekite su mumis ir atsakysime į visus klausimus.</p>
        <Link href="/kontaktai" style={{
          background: '#b8974a', color: 'white', padding: '14px 36px',
          fontSize: 14, letterSpacing: '0.08em', borderRadius: 2, display: 'inline-block',
        }}>Susisiekti</Link>
      </section>
    </>
  )
}
