import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kornema | Kapaviečių įrengimas ir priežiūra Vilniuje',
  description: 'Profesionalus kapaviečių įrengimas ir priežiūra Vilniaus regione ir aplink 100 km spinduliu. Dengimas plokštelėmis, skalda, priežiūra ištisus metus.',
  keywords: 'kapaviečių įrengimas, kapaviečių priežiūra, Vilnius, dengimas plokštelėmis, skalda',
  openGraph: {
    title: 'Kornema | Kapaviečių įrengimas ir priežiūra',
    description: 'Profesionalus kapaviečių įrengimas ir priežiūra Vilniaus regione.',
    url: 'https://kornema.lt',
    siteName: 'Kornema',
    locale: 'lt_LT',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
