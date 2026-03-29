import ServicePage from '@/components/ServicePage'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Dekoravimas skalda | Kornema',
  description: 'Įvairių spalvų ir frakcijų skalda kapavietei.',
}
export default function Page() {
  return (
    <ServicePage
      title="Dekoravimas skalda"
      subtitle="Įvairių spalvų ir frakcijų skalda suteikia išskirtinį vaizdą"
      heroImg="https://www.kornema.lt/_next/image?url=%2Ftitulinis%2Fdekoravimas-skalda.jpg&w=1200&q=75"
      paragraphs={[
        'Dekoravimas skalda – populiarus, natūralus ir ekonomiškas kapavietės įrengimo sprendimas. Skalda puikiai dera su granito paminklais ir suteikia kapavietei tvarką bei estetišką išvaizdą.',
        'Siūlome įvairių spalvų skaldą: baltą, pilką, juodą, rudą ir kitas. Frakcijos parenkamos pagal pageidavimą – smulkesnė skalda atrodo elegantiškiau, stambesnė – natūraliau.',
        'Prieš berdami skaldą, patiesiame specialią agroplėvelę, kuri neleidžia augti piktžolėms. Tai užtikrina, kad kapavietė ilgai išliktų tvarkinga be didelių priežiūros pastangų.',
      ]}
      privalumai={[
        'Natūralus ir estetiškas vaizdas',
        'Platus spalvų ir frakcijų pasirinkimas',
        'Ekonomiškas sprendimas',
        'Lengvai atnaujinama ir papildoma',
        'Geras vandens pralaidumas',
        'Agroplėvelė apsaugo nuo piktžolių',
      ]}
      relatedServices={[
        { href: '/paslaugos/dengimas-plokstemis', label: 'Dengimas plokštelėmis' },
        { href: '/paslaugos/kiti-dengimo-budai', label: 'Kiti dengimo būdai' },
        { href: '/paslaugos/kapavietes-prieziura', label: 'Kapaviečių priežiūra' },
      ]}
    />
  )
}
