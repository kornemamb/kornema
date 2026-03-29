import ServicePage from '@/components/ServicePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dengimas plokštelėmis | Kornema',
  description: 'Ilgaamžis ir estetiškas kapavietės dengimas granito, akmens ar porceliano plokštelėmis.',
}

export default function DengimасPlokstemisPage() {
  return (
    <ServicePage
      title="Dengimas plokštelėmis"
      subtitle="Ilgaamžis ir estetiškas sprendimas kapavietės paviršiui"
      heroImg="https://www.kornema.lt/_next/image?url=%2Ftitulinis%2Fdengimas-plokstemis.jpg&w=1200&q=75"
      paragraphs={[
        'Kapavietės dengimas plokštelėmis yra vienas populiariausių ir ilgaamžiškiausių sprendimų. Šis metodas ne tik suteikia estetišką vaizdą, bet ir apsaugo kapavietę nuo piktžolių, drėgmės ir mechaninių pažeidimų.',
        'Naudojame aukštos kokybės granito, porceliano ar kitas plokšteles, kurios atsparios lietuviško klimato sąlygoms – šalčiui, drėgmei ir temperatūros svyravimams.',
        'Prieš pradedant darbus, kruopščiai paruošiame pagrindą: pašaliname piktžoles, sulyginame paviršių ir užtikriname tinkamą drenažą. Plokštelės klojamos ant specialaus pagrindo, todėl jos išlaiko formą ir nepasislenka laikui bėgant.',
      ]}
      privalumai={[
        'Ilgaamžis ir patvarus sprendimas – tinkamas ilgiems dešimtmečiams',
        'Platus spalvų, faktūrų ir dydžių pasirinkimas',
        'Lengvai prižiūrima ir valoma',
        'Apsaugoja nuo piktžolių augimo',
        'Puikiai dera su granito paminklais',
        'Galima derinti skirtingų spalvų plokšteles pagal pageidavimą',
      ]}
      relatedServices={[
        { href: '/paslaugos/dekoravimas-skalda', label: 'Dekoravimas skalda' },
        { href: '/paslaugos/kiti-dengimo-budai', label: 'Kiti dengimo būdai' },
        { href: '/paslaugos/kapavietes-prieziura', label: 'Kapaviečių priežiūra' },
      ]}
    />
  )
}
