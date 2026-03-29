import ServicePage from '@/components/ServicePage'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Kiti dengimo būdai | Kornema',
  description: 'Dengimas akmens plytelėmis, skaldytomis granito trinkelėmis ar betoninėmis trinkelėmis.',
}
export default function Page() {
  return (
    <ServicePage
      title="Kiti dengimo būdai"
      subtitle="Akmens ir akmens masės plytelės, granito ir betoninės trinkelės"
      heroImg="https://www.kornema.lt/_next/image?url=%2Ftitulinis%2Fkiti-dengimo-budai.jpg&w=1200&q=75"
      paragraphs={[
        'Be klasikinių plokštelių ir skalda, siūlome ir kitus populiarius kapavietės dengimo sprendimus, kurie suteikia unikalų ir tvarkingą vaizdą.',
        'Akmens masės plytelės – puikus kompromisas tarp kainos ir kokybės. Jos atsparios oro sąlygoms ir paprastos priežiūros.',
        'Skaldytos granito trinkelės suteikia rustikinį, natūralų vaizdą, o betoninės trinkelės – tvirtą ir ilgaamžišką pagrindą.',
      ]}
      privalumai={[
        'Įvairios tekstūros ir faktūros',
        'Tinkamas skirtingiems estetiniams poreikiams',
        'Atsparumas klimato sąlygoms',
        'Galimybė derinti skirtingus dengimo būdus',
        'Patvarus ir ilgaamžis rezultatas',
      ]}
      relatedServices={[
        { href: '/paslaugos/dengimas-plokstemis', label: 'Dengimas plokštelėmis' },
        { href: '/paslaugos/dekoravimas-skalda', label: 'Dekoravimas skalda' },
        { href: '/paslaugos/kapavietes-prieziura', label: 'Kapaviečių priežiūra' },
      ]}
    />
  )
}
