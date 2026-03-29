# Kornema – Next.js svetainė

## Puslapiai

- `/` – Pagrindinis (Hero, Apie mus, Paslaugos, Katalogas, Kontaktai)
- `/apie-mus` – Apie įmonę
- `/kontaktai` – Kontaktai ir forma
- `/katalogas` – Nuotraukų galerija
- `/patarimai` – Patarimai
- `/atliktu-darbu-galerija` – Atlikti darbai
- `/paslaugos/dengimas-plokstemis`
- `/paslaugos/dekoravimas-skalda`
- `/paslaugos/kiti-dengimo-budai`
- `/paslaugos/kapavietes-prieziura`

## Paleidimas lokaliai

```bash
npm install
npm run dev
```

Atidaryk http://localhost:3000

## Talpinimas į Vercel

### 1 būdas – per GitHub (rekomenduojama)

1. Sukurk naują repozitoriją GitHub.com
2. Įkelk visus failus į repozitoriją
3. Eik į vercel.com → "Add New Project"
4. Pasirink savo GitHub repozitoriją
5. Spustelk "Deploy" – viskas!

### 2 būdas – per Vercel CLI

```bash
npm install -g vercel
vercel
```

## Kontaktų forma

Šiuo metu forma simuliuoja siuntimą. Norint gauti realius laiškus, rekomenduojame:

- **Formspree** (nemokamas, paprastas): https://formspree.lt
- **Resend** (Next.js draugiškas): https://resend.com

Faile `src/components/ContactForm.tsx` pakeisk `handleSubmit` funkciją su realia integracija.

## Technologijos

- Next.js 14 (App Router)
- TypeScript
- CSS-in-JS (inline styles)
- Google Fonts (Playfair Display + Inter)
