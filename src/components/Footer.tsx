import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{background:'#1a1a18',color:'rgba(255,255,255,.7)',paddingTop:'4rem',paddingBottom:'2rem'}}>
      <style>{`
        .footer-link{display:block;font-size:14px;margin-bottom:8px;color:rgba(255,255,255,.6);transition:color .2s}
        .footer-link:hover{color:#b8974a}
      `}</style>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 2rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'3rem',marginBottom:'3rem'}}>
          <div>
            <h3 style={{fontFamily:"'Playfair Display',serif",color:'#b8974a',fontSize:22,marginBottom:12}}>MB „Kornema"</h3>
            <p style={{fontSize:14,lineHeight:1.7,maxWidth:260}}>Kapaviečių įrengimas ir priežiūra Vilniaus regione ir aplink 100 km spinduliu.</p>
            <p style={{fontSize:12,marginTop:12,color:'rgba(255,255,255,.4)'}}>Įmonės kodas: 306284749</p>
          </div>
          <div>
            <h4 style={{color:'white',fontSize:13,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:16}}>Paslaugos</h4>
            <Link href="/paslaugos/dengimas-plokstemis" className="footer-link">Dengimas plokštelėmis</Link>
            <Link href="/paslaugos/dekoravimas-skalda" className="footer-link">Dekoravimas skalda</Link>
            <Link href="/paslaugos/kiti-dengimo-budai" className="footer-link">Kiti dengimo būdai</Link>
            <Link href="/paslaugos/kapavietes-prieziura" className="footer-link">Kapaviečių priežiūra</Link>
          </div>
          <div>
            <h4 style={{color:'white',fontSize:13,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:16}}>Kontaktai</h4>
            <p style={{fontSize:14,marginBottom:6}}><a href="mailto:info@kornema.lt" style={{color:'#b8974a'}}>info@kornema.lt</a></p>
            <p style={{fontSize:14,marginBottom:6}}><a href="tel:+37060524243" style={{color:'rgba(255,255,255,.7)'}}>+370 605 24243</a></p>
            <p style={{fontSize:14,marginBottom:6}}><a href="tel:+37060106556" style={{color:'rgba(255,255,255,.7)'}}>+370 601 06556</a></p>
            <p style={{fontSize:14,marginTop:12,color:'rgba(255,255,255,.5)'}}>Fabijoniškių g. 2<br/>Vilnius, LT-07109</p>
          </div>
          <div>
            <h4 style={{color:'white',fontSize:13,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:16}}>Darbo laikas</h4>
            <p style={{fontSize:14,marginBottom:6}}>Ant–Pen: 11:00–16:00</p>
            <p style={{fontSize:13,color:'rgba(255,255,255,.5)',marginBottom:12}}>Šeštadienis–Sekmadienis: Išankstinė registracija</p>
            <p style={{fontSize:13,color:'rgba(255,255,255,.5)'}}>Žiemos metu – pagal susitarimą</p>
          </div>
        </div>
        <div style={{borderTop:'1px solid rgba(255,255,255,.1)',paddingTop:'1.5rem',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:8}}>
          <p style={{fontSize:13,color:'rgba(255,255,255,.4)'}}>© 2026 MB „Kornema". Visos teisės saugomos.</p>
          <p style={{fontSize:13,color:'rgba(255,255,255,.3)'}}>Bankas: Swedbank · LT927300010177178794</p>
        </div>
      </div>
    </footer>
  )
}
