import Image from 'next/image'
import Link from 'next/link'

interface ServicePageProps {
  title: string
  subtitle: string
  heroImg: string
  paragraphs: string[]
  privalumai?: string[]
  relatedServices?: { href: string; label: string }[]
}

export default function ServicePage({ title, subtitle, heroImg, paragraphs, privalumai, relatedServices }: ServicePageProps) {
  return (
    <>
      <style>{`
        .related-link{border:1px solid rgba(184,151,74,.4);color:#b8974a;padding:10px 20px;border-radius:2px;font-size:14px;transition:all .2s;display:inline-block}
        .related-link:hover{background:#b8974a;color:white}
        .btn-gold{background:#b8974a;color:white;padding:13px 32px;font-size:14px;letter-spacing:.08em;border-radius:2px;display:inline-block;transition:background .2s}
        .btn-gold:hover{background:#a07a30}
      `}</style>
      <div style={{position:'relative',height:420,overflow:'hidden'}}>
        <Image src={heroImg} alt={title} fill style={{objectFit:'cover'}} priority/>
        <div style={{position:'absolute',inset:0,background:'rgba(10,10,8,.55)'}}/>
        <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'0 2rem',paddingTop:72}}>
          <p style={{fontSize:12,letterSpacing:'.2em',textTransform:'uppercase',color:'#b8974a',marginBottom:12}}>Paslaugos</p>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,4vw,3rem)',color:'white',fontWeight:400,marginBottom:12}}>{title}</h1>
          <p style={{color:'rgba(255,255,255,.75)',fontSize:17,maxWidth:500}}>{subtitle}</p>
        </div>
      </div>

      <section style={{padding:'5rem 2rem',background:'white'}}>
        <div style={{maxWidth:800,margin:'0 auto'}}>
          <div style={{display:'flex',flexDirection:'column',gap:16,marginBottom:48}}>
            {paragraphs.map((p,i) => <p key={i} style={{color:'#4a4a42',lineHeight:1.85,fontSize:16}}>{p}</p>)}
          </div>

          {privalumai && privalumai.length > 0 && (
            <div style={{background:'#f5f0e8',padding:'2rem',borderRadius:2,marginBottom:48}}>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:20,marginBottom:20,color:'#1a1a18'}}>Privalumai</h2>
              <ul style={{listStyle:'none',padding:0,display:'flex',flexDirection:'column',gap:10}}>
                {privalumai.map((item,i) => (
                  <li key={i} style={{display:'flex',gap:12,alignItems:'flex-start',color:'#4a4a42',fontSize:15}}>
                    <span style={{color:'#b8974a',fontSize:18,lineHeight:1.5,flexShrink:0}}>—</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div style={{borderTop:'1px solid #e8e0d0',paddingTop:32,display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16}}>
            <Link href="/kontaktai" className="btn-gold">Užsakyti paslaugą</Link>
            <a href="tel:+37060524243" style={{color:'#b8974a',fontSize:15}}>+370 605 24243</a>
          </div>
        </div>
      </section>

      {relatedServices && (
        <section style={{padding:'4rem 2rem',background:'#f5f0e8'}}>
          <div style={{maxWidth:800,margin:'0 auto'}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:22,marginBottom:24,color:'#1a1a18'}}>Kitos paslaugos</h2>
            <div style={{display:'flex',flexWrap:'wrap',gap:12}}>
              {relatedServices.map(s => <Link key={s.href} href={s.href} className="related-link">{s.label}</Link>)}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
