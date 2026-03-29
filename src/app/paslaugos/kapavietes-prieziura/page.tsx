import ServicePage from '@/components/ServicePage'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Kapaviečių priežiūra | Kornema',
  description: 'Reguliari kapaviečių priežiūra ir aplinkos tvarkymas ištisus metus Vilniaus regione.',
}
export default function Page() {
  return (
    <ServicePage
      title="Kapaviečių priežiūra"
      subtitle="Reguliari priežiūra ir aplinkos tvarkymas ištisus metus"
      heroImg="https://www.kornema.lt/_next/image?url=%2Ftitulinis%2Fkapavieciu-tvarkymas.jpg&w=1200&q=75"
      paragraphs={[
        'Suprantame, kad ne visada turite galimybę ar jėgų asmeniškai rūpintis artimojo kapavietės priežiūra. Todėl siūlome reguliarią priežiūros paslaugą – kad kapavietė visada atrodytų tvarkingai ir oriai.',
        'Mūsų priežiūros paslauga apima piktžolių šalinimą, valyimą, žvyro ar skalda papildymą, žolės pjovimą aplinkoje ir kitus smulkius darbus.',
        'Dirbame Vilniaus regione ir aplink 100 km spinduliu. Kiekvieną kapavietę prižiūrime su pagarba ir dėmesiu kiekvienai detalei.',
      ]}
      privalumai={[
        'Reguliarūs apsilankymai pagal susitarimą',
        'Piktžolių šalinimas ir valyimas',
        'Žvyro ir skalda papildymas',
        'Aptarnaujame Vilniaus regioną ir iki 100 km',
        'Paslaugų ataskaitos ir nuotraukos pagal pageidavimą',
        'Lankstūs planai pagal poreikį',
      ]}
      relatedServices={[
        { href: '/paslaugos/dengimas-plokstemis', label: 'Dengimas plokštelėmis' },
        { href: '/paslaugos/dekoravimas-skalda', label: 'Dekoravimas skalda' },
        { href: '/paslaugos/kiti-dengimo-budai', label: 'Kiti dengimo būdai' },
      ]}
    />
  )
}
