import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

const paslaugos = [
  {
    href: '/paslaugos/dengimas-plokstemis',
    img: 'https://www.kornema.lt/_next/image?url=%2Ftitulinis%2Fdengimas-plokstemis.jpg&w=1200&q=75',
    title: 'Dengimas plokštelėmis',
    desc: 'Ilgaamžis ir estetiškas sprendimas kapavietės paviršiui.',
  },
  {
    href: '/paslaugos/dekoravimas-skalda',
    img: 'https://www.kornema.lt/_next/image?url=%2Ftitulinis%2Fdekoravimas-skalda.jpg&w=1200&q=75',
    title: 'Dekoravimas skalda',
    desc: 'Įvairių spalvų ir frakcijų skalda suteikia išskirtinį vaizdą.',
  },
  {
    href: '/paslaugos/kiti-dengimo-budai',
    img: 'https://www.kornema.lt/_next/image?url=%2Ftitulinis%2Fkiti-dengimo-budai.jpg&w=1200&q=75',
    title: 'Kiti dengimo būdai',
    desc: 'Akmens plytelės, skaldytos granito trinkelės ir kt.',
  },
  {
    href: '/paslaugos/kapavietes-prieziura',
    img: 'https://www.kornema.lt/_next/image?url=%2Ftitulinis%2Fkapavieciu-tvarkymas.jpg&w=1200&q=75',
    title: 'Kapaviečių priežiūra',
    desc: 'Reguliari priežiūra ir aplinkos tvarkymas ištisus metus.',
  },
]

const katalogasNuotraukos = [
  'https://www.kornema.lt/titulinis/carousel/katalogas-vienas.jpg',
  'https://www.kornema.lt/titulinis/carousel/katalogas-du.jpg',
  'https://www.kornema.lt/titulinis/carousel/katalogas-trys.jpg',
  'https://www.kornema.lt/titulinis/carousel/katalogas-keturi.jpg',
  'https://www.kornema.lt/titulinis/carousel/katalogas-penki.jpg',
  'https://www.kornema.lt/titulinis/carousel/katalogas-sesi.jpg',
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden' }}>
        <video
          autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="https://videos.pexels.com/video-files/1542008/1542008-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,10,8,0.55) 0%, rgba(10,10,8,0.4) 50%, rgba(10,10,8,0.7) 100%)',
        }} />
        <div style={{
          position: 'relative', zIndex: 1, height: '100%',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 2rem', color: 'white',
        }}>
          <p style={{
            fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#b8974a', marginBottom: 20,
          }}>MB „Kornema"</p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 400, lineHeight: 1.15, marginBottom: 20, maxWidth: 700,
          }}>
            Kapaviečių įrengimas ir priežiūra
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', maxWidth: 480, marginBottom: 40, lineHeight: 1.7 }}>
            Su meile ir atsakomybe rūpinamės jūsų artimųjų amžinojo poilsio vietomis Vilniaus regione.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#paslaugos" style={{
              background: '#b8974a', color: 'white', padding: '14px 32px',
              fontSize: 14, letterSpacing: '0.08em', borderRadius: 2,
              transition: 'background 0.2s',
            }}>Mūsų paslaugos</a>
            <Link href="/kontaktai" style={{
              border: '1px solid rgba(255,255,255,0.5)', color: 'white',
              padding: '14px 32px', fontSize: 14, letterSpacing: '0.08em', borderRadius: 2,
              transition: 'border-color 0.2s',
            }}>Susisiekite</Link>
          </div>
        </div>

        {/* Adresas */}
        <div style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.5)', fontSize: 13, letterSpacing: '0.06em', zIndex: 1,
        }}>
          Fabijoniškių g. 2, Vilnius
        </div>
      </section>

      {/* APIE MUS */}
      <section style={{ background: '#f5f0e8', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8974a', marginBottom: 12 }}>
              Apie mus
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: 24, color: '#1a1a18' }}>
              Rūpinamės su pagarba ir dėmesiu
            </h2>
            <p style={{ color: '#4a4a42', lineHeight: 1.85, marginBottom: 16 }}>
              Kai netenkame artimo žmogaus, natūralu norėti išsaugoti jo atminimą. Kornema gimė iš pagarbos ir rūpesčio – įmonė, kuri profesionaliai įrengia ir prižiūri kapavietės Vilniaus regione ir aplink 100 km spinduliu.
            </p>
            <p style={{ color: '#4a4a42', lineHeight: 1.85, marginBottom: 32 }}>
              Dirbame taip, tarsi rūpintumėmės savo artimųjų kapais – su kantrybe ir dėmesiu kiekvienai detalei.
            </p>
            <blockquote style={{
              borderLeft: '2px solid #b8974a', paddingLeft: 20,
              fontFamily: "'Playfair Display', serif", fontSize: 17,
              color: '#4a4a42', fontStyle: 'italic', lineHeight: 1.6,
            }}>
              „Mes randame gyvenime tai, ką patys jam suteikiame."
              <cite style={{ display: 'block', fontSize: 13, fontStyle: 'normal', marginTop: 8, color: '#9a9a8a' }}>— R. V. Emersonas</cite>
            </blockquote>
          </div>
          <div style={{ position: 'relative', height: 400 }}>
            <Image
              src="https://www.kornema.lt/_next/image?url=%2Ftitulinis%2Fkornema-pastatas.webp&w=3840&q=75"
              alt="Kornema pastatas"
              fill
              style={{ objectFit: 'cover', borderRadius: 2 }}
            />
          </div>
        </div>

        <style>{`
          @media (max-width: 700px) {
            section > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* PASLAUGOS */}
      <section id="paslaugos" style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8974a', marginBottom: 12 }}>
              Ką siūlome
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#1a1a18' }}>
              Mūsų paslaugos
            </h2>
            <p style={{ color: '#6b6b60', marginTop: 12, maxWidth: 500, margin: '12px auto 0' }}>
              Siūlome visapusiškas kapaviečių įrengimo ir priežiūros paslaugas
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {paslaugos.map(p => (
              <Link key={p.href} href={p.href} style={{
                display: 'block', background: '#f5f0e8', borderRadius: 2,
                overflow: 'hidden', transition: 'transform 0.25s',
                textDecoration: 'none', color: 'inherit',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div style={{ position: 'relative', height: 220 }}>
                  <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, marginBottom: 8, color: '#1a1a18' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#6b6b60', lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                  <span style={{ fontSize: 13, color: '#b8974a', letterSpacing: '0.06em' }}>Sužinoti daugiau →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KATALOGAS */}
      <section style={{ padding: '6rem 2rem', background: '#1a1a18' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8974a', marginBottom: 12 }}>
              Katalogas
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'white' }}>
              Mūsų gaminiai ir medžiagos
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
            {katalogasNuotraukos.map((src, i) => (
              <div key={i} style={{ position: 'relative', aspectRatio: '1', borderRadius: 2, overflow: 'hidden' }}>
                <Image src={src} alt={`Katalogas ${i + 1}`} fill style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/katalogas" style={{
              border: '1px solid rgba(184,151,74,0.6)', color: '#b8974a',
              padding: '13px 32px', fontSize: 14, letterSpacing: '0.08em',
              borderRadius: 2, display: 'inline-block',
            }}>Visas katalogas →</Link>
          </div>
        </div>
      </section>

      {/* PATARIMAI */}
      <section style={{ padding: '6rem 2rem', background: '#f5f0e8' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8974a', marginBottom: 12 }}>
            Patarimai
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: 20, color: '#1a1a18' }}>
            Naudingi patarimai
          </h2>
          <p style={{ color: '#4a4a42', lineHeight: 1.85, marginBottom: 12 }}>
            Kapavietės įrengimas prasideda nuo užsakovo vizijos su galimybėmis suderinimo. Suderinus visas detales apie būsimą kapavietę, paruošiamas kapavietės sutvarkymo projektas.
          </p>
          <Link href="/patarimai" style={{
            display: 'inline-block', marginTop: 24,
            color: '#b8974a', fontSize: 14, letterSpacing: '0.06em',
          }}>Skaityti daugiau →</Link>
        </div>
      </section>

      {/* KONTAKTAI */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8974a', marginBottom: 12 }}>
              Susisiekite
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: 24, color: '#1a1a18' }}>
              Turite klausimų?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, color: '#4a4a42' }}>
              <div>
                <p style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9a9a8a', marginBottom: 4 }}>El. paštas</p>
                <a href="mailto:info@kornema.lt" style={{ color: '#b8974a', fontSize: 15 }}>info@kornema.lt</a>
              </div>
              <div>
                <p style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9a9a8a', marginBottom: 4 }}>Telefonai</p>
                <a href="tel:+37060524243" style={{ display: 'block', fontSize: 15 }}>+370 605 24243</a>
                <a href="tel:+37060106556" style={{ display: 'block', fontSize: 15 }}>+370 601 06556</a>
              </div>
              <div>
                <p style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9a9a8a', marginBottom: 4 }}>Adresas</p>
                <p style={{ fontSize: 15 }}>Fabijoniškių g. 2, Vilnius</p>
              </div>
              <div>
                <p style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9a9a8a', marginBottom: 4 }}>Darbo laikas</p>
                <p style={{ fontSize: 14 }}>Ant–Pen: 11:00–16:00</p>
                <p style={{ fontSize: 14, color: '#9a9a8a' }}>Šeštadienis–Pirmadienis: išankstinė registracija</p>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
        <style>{`
          @media (max-width: 700px) {
            section > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  )
}
