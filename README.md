# 🛍️ E-handelsplattform i Next.js

Kort beskrivning av projektet, lite om tekniker, vad syftet är.
En minimalistisk e-handelsplattform byggd med **Next.js 15 App Router** och **TypeScript**. 
Projektet gör det här och det här, innehåller detta...

---

## 📑 Innehåll
- 📖 [Om projektet](#-om-projektet)
- ✨ [Funktioner](#-funktioner)
- 🛠 [Teknologier](#-teknologier)
- ⚙️ [Installation](#-installation)
- 🚀 [Användning](#-användning)
- 📂 [Projektstruktur](#-projektstruktur)
- 📈 [Arbetsflöde](#-arbetsflöde)
- 🗓 [Sprintplan](#-sprintplan)
- 🤝 [Bidra](#-bidra)
- 📚 [Lärdomar](#-lärdomar)
- 📜 [Licens](#-licens)
- ✍️ [Kontakt](#-kontakt)


---

## 📖 Om projektet
Detta är en gruppövning där målet var att bygga en **minimalistisk e-handelsplattform**.
Syftet är att träna på:
- Arbete i grupp (Agilt)
- Arbete i proejkt (GitHub)
- Next.js/React kod 

---

## ✨ Funktioner
- ✅ Startsida med Hero-sektion och CTA, utvalda produkter
- ✅ Produktsida med sökfunktion och kategori filtrering
- ✅ Sökfält och navigeringsfält
- ✅ Adminsida med formulär för uppdatering, radering och skapande av produkt

---

## 🛠 Teknologier
- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript] (https://www.typescriptlang.org/)
- [Tailwind CSS] (https://tailwindcss.com/)
- [API] (https://dummyjson.com/)
- [WAVE](https://wave.webaim.org/)

---

## ⚙️ Installation
```bash
# Klona repo
git clone https://github.com/VladZGarcia/ecommersepage.git

# Gå in i projektmappen
cd ecommersepage

# Installera beroenden
npm install

# Starta utvecklingsserver
npm run dev
```

---

## 🚀 Användning
* Navigering -> navigeringsfält med sökfunktion
* Startsida -> hero med CTA som går till alla produkter + utvalda produkter + om oss + kontact
* Produkt -> alla produkter + sökfält + kategorifiltrering
* Produktdetalj -> produktbeskrivning + omdömen + recension + lagerstatus + fraktinformation + val av antal + liknande produkter
* Om oss -> statisk sida med text
* Kontakt -> sida med kontaktformulär
* Footer -> footer med länkar och nyhetsbrev
* Admin -> lista med alla produkter + radering
* Admin/skapa -> formulär för att skapa upp produkt
* Admin/uppdatera -> formulär för att uppdatera befintlig produkt

---

## 📂 Projektstruktur
```
|-- app/
|   |-- page.tsx                 # Startsida
|   |-- about/page.tsx           # Om oss
|   |-- admin/
|   |   |-- page.tsx             # Adminsida
|   |   |-- create/page.tsx      # Produktskapande
|   |   |-- update/[id]/page.tsx # Produktuppdatering
|   |-- api/action.ts            # Server actions för formulärvalidering
|   |-- contact/page.tsx         # Kontaktsida
|   |-- pages/products/
|   |   |--page.tsx              # Produktsida
|   |   |--[id]/page.tsx         # Prodktdetaljsida
|-- components/                  # Återanvändbara komponenter
|-- components/breadcrumb/       # Breadcrumbkomponenter
|-- components/categories/       # Kategorikomponenter
|-- components/Nav/              # Navigationskomponenter
|-- components/product-card/     # Produktkortkomponenter
|-- components/product-details/  # Produktdetaljkomponenter
|-- lib/data/
|   |   |-- pages.json           # Navigationsfältslänkar
|   |   |-- product-data.tsx     # API fetch funktioner
|   |   |-- utils.ts             # Återanvändbara hjälpfunktioner
|-- lib/interfaces/products.ts   # Återanvändbara interfaces
|-- public/                      # Bilder
```

---

## 📈 Arbetsflöde
* Grupparbete i agila sprintar (SCRUM)
* Delade upp issues i feature branches
* PR + kodgranskning

---

## 🗓 Sprintplan
### Sprint 1 - Grundläggande struktur

* Satte upp Next.js-projektet
* Skapade menyer & statiska sidor

### Sprint 2 - Produktsidan

* Satte upp Next.js-projektet
* Skapade menyer & statiska sidor

### Sprint 3 - Adminsidan

* Satte upp Next.js-projektet
* Skapade menyer & statiska sidor

### Sprint 4 - Finputs

* Satte upp Next.js-projektet
* Skapade menyer & statiska sidor

---

## 🤝 Bidra
Vill du bidra?

1. Forka projektet
2. Skapa en feature-branch (`git checkout ......`)
3. Commit & push
4. Skicka en Pull Request

---

## 📚 Lärdomar
* Skillnaden mellan Server & Client Components i Next.js
* Agila metoder
* API
* Responsivitet
* Github feature branches

---

## 📜 Licens
Detta projekt är utvecklat i utbildningssyfte och är inte avsett för produktion.

---

## ✍️ Kontakt
Ev. kontaktuppgifter



---

# OLD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the application in action.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.