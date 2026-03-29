import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patarimai | Kornema',
  description: 'Naudingi patarimai apie kapaviečių įrengimą ir priežiūrą.',
}

const patarimai = [
  {
    nr: '01',
    title: 'Kapaviečių įrengimas',
    content: `Kapavietės įrengimas prasideda nuo užsakovo vizijos su galimybėmis suderinimo. Suderinus visas detales apie būsimą kapavietę, paruošiamas kapavietės sutvarkymo projektas. Suderinus projektą su kapinių administracija, pradedame darbus.

Rekomenduojame iš anksto pasitarti su mūsų specialistais dėl medžiagų pasirinkimo – tai padeda išvengti klaidų ir užtikrina ilgaamžišką rezultatą.`,
  },
  {
    nr: '02',
    title: 'Medžiagų pasirinkimas',
    content: `Renkantis medžiagas kapavietei svarbu atsižvelgti į klimato sąlygas, estetinius pageidavimus ir biudžetą. Granito plokštelės yra patikimiausias ir ilgaamžiškiausias pasirinkimas – jos atsparios šalčiui ir drėgmei.

Skalda – populiarus ir ekonomiškas sprendimas, suteikiantis natūralų ir tvarkingą vaizdą. Siūlome įvairių spalvų ir frakcijų skaldą.`,
  },
  {
    nr: '03',
    title: 'Kapaviečių priežiūra',
    content: `Reguliari priežiūra užtikrina, kad kapavietė visada atrodytų tvarkingai. Rekomenduojame bent du kartus per metus – pavasarį ir rudenį – atlikti kapavietės apžiūrą ir būtinus darbus.

Mūsų priežiūros paslaugos apima piktžolių šalinimą, valyimą, žvyro papildymą ir kitų smulkių darbų atlikimą pagal poreikį.`,
  },
  {
    nr: '04',
    title: 'Projekto koordinavimas',
    content: `Pradedant kapavietės įrengimo projektą, būtina gauti leidimą iš kapinių administracijos. Kornema specialistai padeda koordinuoti visus reikiamus dokumentus ir darbus, todėl jums nereikia rūpintis biurokratiniais reikalais.

Visą projektą vykdome nuo konsultacijos iki galutinio rezultato – jūsų dalyvavimas yra minimalus.`,
  },
]

export default function PatariaiPage() {
  return (
    <>
      <div style={{ background: '#1a1a18', paddingTop: 120, paddingBottom: 60, textAlign: 'center' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8974a', marginBottom: 12 }}>
          Kornema
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', fontWeight: 400 }}>
          Patarimai
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 16, fontSize: 16 }}>
          Naudingi patarimai, padėsiantys suplanuoti ir prižiūrėti kapavietę
        </p>
      </div>

      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {patarimai.map(p => (
              <article key={p.nr} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '2rem', alignItems: 'start' }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 36,
                  color: '#e8e0d0', fontWeight: 500, lineHeight: 1,
                }}>{p.nr}</div>
                <div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 16, color: '#1a1a18' }}>
                    {p.title}
                  </h2>
                  {p.content.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color: '#4a4a42', lineHeight: 1.85, marginBottom: 12 }}>{para}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: '5rem', textAlign: 'center', padding: '3rem', background: '#f5f0e8', borderRadius: 2 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 12, color: '#1a1a18' }}>
              Turite klausimų?
            </h3>
            <p style={{ color: '#6b6b60', marginBottom: 24 }}>Mūsų specialistai mielai patars ir atsakys į visus klausimus.</p>
            <Link href="/kontaktai" style={{
              background: '#b8974a', color: 'white', padding: '13px 32px',
              fontSize: 14, letterSpacing: '0.08em', borderRadius: 2, display: 'inline-block',
            }}>Susisiekti</Link>
          </div>
        </div>
      </section>
    </>
  )
}
