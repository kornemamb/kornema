'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const paslaugos = [
  { href: '/paslaugos/dengimas-plokstemis', label: 'Dengimas plokštelėmis' },
  { href: '/paslaugos/dekoravimas-skalda', label: 'Dekoravimas skalda' },
  { href: '/paslaugos/kiti-dengimo-budai', label: 'Kiti dengimo būdai' },
  { href: '/paslaugos/kapavietes-prieziura', label: 'Kapaviečių priežiūra' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [paslaugosOpen, setPaslaugosOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(26,26,24,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      transition: 'background 0.3s, backdrop-filter 0.3s',
      borderBottom: scrolled ? '1px solid rgba(184,151,74,0.2)' : 'none',
    }}>
      <nav style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 2rem',
        height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image
            src="https://www.kornema.lt/_next/image?url=%2Fkornema-logo.webp&w=1200&q=75"
            alt="Kornema logotipas"
            width={140}
            height={40}
            style={{ objectFit: 'contain', height: 40, width: 'auto' }}
          />
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {[
            { href: '/', label: 'Pagrindinis' },
            { href: '/apie-mus', label: 'Apie mus' },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{
              color: 'rgba(255,255,255,0.85)', fontSize: 14, letterSpacing: '0.04em',
              fontWeight: 400, transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#b8974a')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
            >{link.label}</Link>
          ))}

          {/* Paslaugos dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setPaslaugosOpen(true)}
            onMouseLeave={() => setPaslaugosOpen(false)}
          >
            <button style={{
              color: 'rgba(255,255,255,0.85)', fontSize: 14, letterSpacing: '0.04em',
              fontWeight: 400, background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 4,
            }}>
              Paslaugos <span style={{ fontSize: 10, opacity: 0.7 }}>▾</span>
            </button>
            {paslaugosOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                marginTop: 8, background: '#1a1a18', border: '1px solid rgba(184,151,74,0.25)',
                borderRadius: 4, padding: '8px 0', minWidth: 240,
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}>
                {paslaugos.map(p => (
                  <Link key={p.href} href={p.href} style={{
                    display: 'block', padding: '10px 20px', color: 'rgba(255,255,255,0.8)',
                    fontSize: 14, transition: 'color 0.2s, background 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#b8974a'; e.currentTarget.style.background = 'rgba(184,151,74,0.08)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; e.currentTarget.style.background = 'transparent' }}
                  >{p.label}</Link>
                ))}
              </div>
            )}
          </div>

          {[
            { href: '/katalogas', label: 'Katalogas' },
            { href: '/patarimai', label: 'Patarimai' },
            { href: '/atliktu-darbu-galerija', label: 'Atlikti darbai' },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{
              color: 'rgba(255,255,255,0.85)', fontSize: 14, letterSpacing: '0.04em',
              fontWeight: 400, transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#b8974a')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
            >{link.label}</Link>
          ))}

          <Link href="/kontaktai" style={{
            color: '#b8974a', border: '1px solid rgba(184,151,74,0.6)',
            padding: '8px 20px', borderRadius: 2, fontSize: 13,
            letterSpacing: '0.06em', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#b8974a'; e.currentTarget.style.color = '#1a1a18' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#b8974a' }}
          >Kontaktai</Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', flexDirection: 'column', gap: 5, padding: 4, background: 'none', border: 'none',
        }} className="hamburger" aria-label="Atidaryti meniu">
          {[0,1,2].map(i => (
            <span key={i} style={{ width: 24, height: 1.5, background: 'white', display: 'block' }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: '#1a1a18', borderTop: '1px solid rgba(184,151,74,0.2)',
          padding: '1.5rem 2rem 2rem',
        }}>
          {[
            { href: '/', label: 'Pagrindinis' },
            { href: '/apie-mus', label: 'Apie mus' },
            ...paslaugos,
            { href: '/katalogas', label: 'Katalogas' },
            { href: '/patarimai', label: 'Patarimai' },
            { href: '/atliktu-darbu-galerija', label: 'Atlikti darbai' },
            { href: '/kontaktai', label: 'Kontaktai' },
          ].map(link => (
            <Link key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '12px 0', color: 'rgba(255,255,255,0.85)',
                fontSize: 15, borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >{link.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
