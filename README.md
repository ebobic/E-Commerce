# 🛍️ E-handelsplattform i Next.js

En minimalistisk e-handelsplattform byggd med **Next.js 15 App Router** och **TypeScript**.
Projektet hämtar produkter och produktdata från extern backend för att simulera en e-handelsplattform.
Syftet med projektet är att lära oss olika tekniker inom Next.js/React.

---

## 📑 Innehåll
- [Om projektet](#-om-projektet)
- [Funktioner](#-funktioner)
- [Teknologier](#-teknologier)
- [Installation](#-installation)
- [Användning](#-användning)
- [Projektstruktur](#-projektstruktur)
- [Arbetsflöde](#-arbetsflöde)
- [Sprintplan](#-sprintplan)
- [Bidra](#-bidra)
- [Lärdomar](#-lärdomar)
- [Licens](#-licens)
- [Kontakt](#-kontakt)

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
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DummyJSON - API](https://dummyjson.com/)
- [Sonner - Toast](https://github.com/emilkowalski/sonner)
- [ZOD](https://zod.dev/)
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

* Bestämde vilket API vi skulle använda
* Tog fram design med hjälp av Figma
* Satte upp Next.js-projektet
* Skapade menyer & statiska sidor

### Sprint 2 - Produktsidan

* Satte upp produktsidan och ingående komponenter
* Satte upp produktdetaljsidan och ingående komponenter
* Jobbade med nya ideér/tillägg på tidigare komponenter

### Sprint 3 - Adminsidan

* Satte upp Adminsidan och tillhörande komponenter

### Sprint 4 - Finputs

* Förbättrade befintliga komponenter och finputsade på detaljer

---


## 📚 Egna reflektioner & lärdomar

### Primärt bidrag till arbetet: Sökfunktion, responsiva produktkort och admin-panel.

### Viktigaste funktionaliteterna som jag ansvarade för:

### Sökfunktion – Implementerade search-bar.tsx med dropdown och API-integration. Använde React Hooks (useState) för state, Client Components för interaktivitet och Tailwind CSS för en responsiv design.

Responsiva produktkort – Modulära komponenter (product-card.tsx, product-card-image.tsx, product-card-details.tsx, product-card-button.tsx) med Tailwind CSS Grid för responsiv layout (2 kort på mobil, 3+ på större skärmar).

### Admin-panel – Grundstrukur & layout för /admin med delete-knappar och loading states. Använde Next.js App Router, Server Actions för delete-operationer och TypeScript för typning.

### Tekniker och komponenter jag använde mig av:

React/Next.js – Client Components för interaktivitet, Server Actions för backend-operationer
Tailwind CSS – Responsiv design med breakpoints (sm:, md:, lg:)
TypeScript – Typning av komponenter, props och API-responser
React Hooks – useState för state-hantering och loading states
API-integration – Fetch-anrop för produktsökning och delete-operationer


### Vad hade jag kunnat förbättra?

Sökfunktionen i navbaren – Debouncing, caching och prestandaoptimering
Produktkorten – Lazy loading, bildoptimering och bundle size-reduktion

Sammanfattat, så hade jag velat fokusera mer på prestanda och optimering av komponenterna för att förbättra laddningstider och användarupplevelse.

---

## 🤝 Bidra
Vill du bidra?

1. Forka projektet
2. Skapa en feature-branch (`git checkout ......`)
3. Commit & push
4. Skicka en Pull Request

---

##  Licens
Detta projekt är utvecklat i utbildningssyfte och är inte avsett för produktion.

---

## ✍️ Kontakt
- https://github.com/VladZGarcia/
- https://github.com/MissKowalik/
- https://github.com/ebobic/
- https://github.com/Consolider/

---

## Bilder
![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/1.jpg "Startsida")
![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/2.jpg "Featured Products")
![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/3.jpg "Contact + Footer")
![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/4.jpg "Product Detail")
