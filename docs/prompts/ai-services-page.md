# Dendora.hu AI Services Page — Website Agent Prompt

You are a senior frontend/product engineer working inside the existing `dendora.hu` website repository.

Your job is to add a polished, conversion-focused AI services page and navigation entry for Dendora Bt.

This is NOT a separate app. It must fit the existing website visually, technically, and structurally.

## Context

Dendora Bt. is a software development company in Esztergom / Komárom area.

Existing positioning:
- Custom software development
- Web development / web applications
- Cloud infrastructure
- AI & automation
- Full-stack development
- Modern, practical business software

The website already mentions:
- “Egyedi szoftverfejlesztés, webfejlesztés és AI megoldások Esztergomban”
- “AI & Automatizálás”
- “LLM integráció”
- “Munkafolyamat automatizálás”
- “Adatfeldolgozási pipeline-ok”
- “Meglévő rendszerekkel való integráció”

Now we need a stronger standalone AI page aimed at Hungarian KKV owners.

The target visitor is NOT technical.
They are usually thinking:
- too much manual admin
- too many PDFs / Excels / emails
- slow quotations
- messy document handling
- no clear overview of tasks
- repetitive office work
- they have heard about AI but do not know how to use it safely

Main message:
Dendora does not sell AI hype.
Dendora builds practical AI-supported business workflows that save time.

Tone:
- Hungarian language
- confident, clear, friendly
- no startup bullshit
- no overpromising
- practical KKV language
- business value first
- avoid too many English buzzwords
- technical credibility is okay but secondary

## Goal

Implement a new AI services page on the existing website.

Suggested route/slug:

```txt
/ai-automatizalas
```

or, if the existing site routing convention suggests another naming style, follow the repo convention.

Add a navigation menu item:

```txt
AI automatizálás
```

The page should explain what Dendora can do with AI for KKV clients and encourage them to request a short consultation / audit / demo.

Primary CTA:

```txt
Kérek egy rövid AI felmérést
```

Secondary CTA:

```txt
Mutassanak egy példát
```

These CTAs should link to the existing contact section/page/form if available. If there is no contact route, use the existing contact anchor or create a sensible fallback.

## Important constraints

- Do not rewrite the entire website.
- Do not introduce a new heavy dependency unless absolutely necessary.
- Preserve existing styling conventions.
- Reuse existing components if the repository has them.
- If the repo has Astro, Next.js, Vite, React, Svelte, plain HTML, or another framework, adapt to it.
- Do not ask questions.
- Make a complete working implementation.
- Keep the page responsive.
- Keep SEO basics: title, description, headings.
- Do not make fake legal claims.
- Do not claim that AI always works perfectly.
- Do not claim that all processing is local/on-prem unless the website explicitly offers that.
- You may say “igény esetén saját infrastruktúrán vagy elkülönített környezetben is kialakítható” if technically appropriate.
- Hungarian copy only on the public page.

## Page structure

Create a polished landing/service page with these sections.

### 1. Hero

Headline:

```txt
AI automatizálás KKV-knak, érthetően és gyakorlatiasan
```

Subheadline:

```txt
Segítünk megtalálni és automatizálni azokat a céges folyamatokat, ahol ma még túl sok idő megy el e-mailekre, PDF-ekre, Excel táblákra és ismétlődő adminisztrációra.
```

Hero bullets:

```txt
Nem dobozos chatbotot adunk
Meglévő munkafolyamatokra építünk
Kis lépésekben, mérhető eredménnyel indulunk
```

CTA buttons:
- Kérek egy rövid AI felmérést
- Mutassanak egy példát

Add a small trust/status label:

```txt
Esztergom és környéke · Egyedi szoftverfejlesztés · AI támogatott folyamatok
```

### 2. Problem section

Title:

```txt
Hol folyik el az idő a legtöbb KKV-nál?
```

Cards:

1. E-mail káosz
Text:
```txt
Ajánlatkérések, visszakérdezések, határidők és ügyfélválaszok keverednek a napi levelezésben.
```

2. PDF és Excel másolgatás
Text:
```txt
Számlákból, rendelőkből, szerződésekből és táblázatokból kézzel kerülnek át adatok egyik rendszerből a másikba.
```

3. Lassú ajánlatadás
Text:
```txt
A vevő vár, az információ több helyen van, a korábbi ajánlatokat pedig nehéz visszakeresni.
```

4. Nincs átlátható folyamat
Text:
```txt
Sok feladat fejben, e-mailben vagy külön táblázatokban él, ezért könnyű elfelejteni vagy duplán elvégezni valamit.
```

### 3. What we build

Title:

```txt
Milyen AI megoldásokat készítünk?
```

Intro:

```txt
Nem általános „AI csodát” építünk, hanem konkrét, használható eszközöket: dokumentumfeldolgozást, kereshető tudásbázist, feladatgenerálást, ajánlat-előkészítést és belső asszisztenseket.
```

Cards:

1. Dokumentumfeldolgozás
Bullets:
```txt
PDF-ek, szerződések, számlák, ajánlatok feldolgozása
fontos adatok kinyerése
kereshető dokumentumtár
```

2. AI asszisztensek
Bullets:
```txt
belső céges tudás keresése
válasz- és ajánlatvázlatok készítése
munkatársak támogatása ismétlődő kérdésekben
```

3. Munkafolyamat automatizálás
Bullets:
```txt
beérkező igények rendszerezése
feladatok létrehozása
státuszok, naplók és riportok
```

4. Egyedi integrációk
Bullets:
```txt
kapcsolódás meglévő rendszerekhez
API-k, adatbázisok, fájltárolók
felhő vagy saját infrastruktúra
```

### 4. Industry examples

Title:

```txt
Példák, ahol gyorsan értéket tud adni
```

Create 3 example panels:

#### Építőipar
```txt
Ajánlatkérések, szerződések, teljesítésigazolások és számlák rendszerezése. Korábbi dokumentumok visszakeresése és ajánlatvázlatok előkészítése.
```

#### Könyvelés és adminisztráció
```txt
Beérkező dokumentumok szétválogatása, hiányzó adatok jelzése, ügyfélkommunikáció előkészítése és határidők követése.
```

#### Gyártás és kereskedelem
```txt
Rendelések, cikkszámok, mennyiségek, határidők és beszállítói dokumentumok feldolgozása, exportálása és ellenőrzése.
```

Add a note:

```txt
A legtöbb projektet egy kis, jól körülhatárolt folyamattal kezdjük. Nem kell mindent egyszerre átalakítani.
```

### 5. How we work

Title:

```txt
Hogyan indul egy AI automatizálási projekt?
```

Steps:

1. Rövid felmérés
```txt
Megnézzük, hol megy el sok idő, mi ismétlődik gyakran, és hol lenne kézzelfogható nyereség.
```

2. Mini demo vagy prototípus
```txt
Egy konkrét folyamatra mutatunk működő példát, nem hosszú tanulmányt írunk.
```

3. Bevezetés kis lépésekben
```txt
Először egy részfolyamatot automatizálunk, mérjük a hasznát, majd innen lehet tovább építkezni.
```

4. Üzemeltetés és finomhangolás
```txt
A rendszer nem magára hagyott kísérlet: naplózás, javítás, bővítés és támogatás is része lehet.
```

### 6. Why Dendora

Title:

```txt
Miért Dendora?
```

Bullets:
```txt
Több évtizedes szoftverfejlesztési tapasztalat
Backend, frontend és infrastruktúra egy kézben
Nem csak AI eszközöket kötünk össze, hanem működő üzleti rendszert építünk
Helyi jelenlét Esztergom környékén, személyes egyeztetési lehetőséggel
Egyedi fejlesztés, nem mindenkire ráhúzott sablon
```

### 7. Demo concept section

Title:

```txt
Mit lehet megmutatni egy rövid demón?
```

Cards:

1. PDF-ből feladat
```txt
Feltöltünk egy dokumentumot, a rendszer felismeri a típust, kinyeri a fontos adatokat és feladatokat javasol.
```

2. Céges dokumentumkereső
```txt
Korábbi ajánlatok, szerződések vagy leírások között természetes nyelven lehet kérdezni.
```

3. Ajánlat-előkészítés
```txt
Egy beérkező igényből vázlat, ellenőrzőlista vagy válaszlevél készülhet.
```

### 8. FAQ

Add a short FAQ.

Questions and answers:

#### Ez egy kész termék?
```txt
Nem feltétlenül. Általában egyedi folyamatból indulunk ki, de olyan építőelemekkel dolgozunk, amelyek gyorsan testre szabhatók.
```

#### Ki kell cserélni a meglévő rendszereinket?
```txt
Nem ez a cél. Sok esetben a meglévő levelezés, fájlok, táblázatok vagy belső rendszerek mellé építünk egy okosabb réteget.
```

#### Biztonságos az AI használata céges adatokkal?
```txt
Ez mindig a konkrét megoldástól függ. Már a tervezésnél figyelembe vesszük, milyen adat hova kerülhet, milyen naplózás és jogosultságkezelés szükséges.
```

#### Mennyi idő alatt látszik eredmény?
```txt
Egy jól kiválasztott részfolyamatnál akár rövid időn belül készülhet működő prototípus. A cél nem a nagy ígéret, hanem egy kis, mérhető első lépés.
```

#### Csak Esztergom környékén dolgoztok?
```txt
Nem, de helyi cégeknek előny lehet, hogy személyesen is át tudjuk beszélni a folyamatokat.
```

### 9. Final CTA

Title:

```txt
Nézzük meg, nálatok hol tudna időt spórolni az AI
```

Text:

```txt
Egy rövid beszélgetés alapján meg tudjuk mondani, érdemes-e AI automatizálásban gondolkodni, és ha igen, melyik folyamattal lenne célszerű kezdeni.
```

Button:

```txt
Kérek egy rövid AI felmérést
```

## SEO metadata

Use appropriate site-specific mechanism.

Suggested:

Title:
```txt
AI automatizálás KKV-knak | Dendora Bt.
```

Description:
```txt
Gyakorlatias AI automatizálás kis- és középvállalkozásoknak: dokumentumfeldolgozás, belső AI asszisztensek, munkafolyamat automatizálás és egyedi integrációk.
```

Keywords only if the repo already uses keywords:
```txt
AI automatizálás, KKV automatizálás, mesterséges intelligencia, szoftverfejlesztés Esztergom, dokumentumfeldolgozás, üzleti automatizálás
```

## Visual direction

Use the existing visual system.

If there are no strict existing components, use a clean modern layout:
- large hero
- cards with subtle borders/shadows
- gradient accent only if already used
- simple icons if icon library already exists
- responsive grid
- max-width container
- clear CTA buttons
- enough whitespace

Avoid:
- dark unreadable gradients
- generic robot imagery
- too many animations
- huge blocks of text
- fake dashboards unless lightweight and tasteful

Optional but nice:
Add a small visual mock panel in the hero showing:

```txt
Dokumentum feldolgozva
Típus: Ajánlatkérés
Teendők: 3
Hiányzó adat: szállítási határidő
Javasolt válasz: elkészült
```

This should be pure UI, not functional.

## Navigation

Add menu item:

```txt
AI automatizálás
```

Place it near existing services menu items.

If the site has a mobile navigation, add it there too.

## Implementation behavior

1. Inspect the repository structure.
2. Identify framework and routing.
3. Reuse existing layout/header/footer components.
4. Add the new route/page.
5. Add the navigation link.
6. Add SEO metadata using existing conventions.
7. Ensure the project builds.
8. Fix any TypeScript/lint/build errors you introduce.
9. Do not leave TODOs for required functionality.
10. Do not ask follow-up questions.

## Acceptance criteria

The implementation is complete when:

- The new AI services page exists.
- The navigation includes “AI automatizálás”.
- The page is Hungarian.
- The page is responsive.
- The CTAs link to the existing contact page/section/form.
- The site builds successfully.
- No unrelated pages are broken.
- No major new dependency is introduced.
- The result feels consistent with Dendora.hu.
- The copy is practical and KKV-focused.
- The page can be used immediately for tomorrow’s demo / outreach.

## Suggested manual test

Run the existing dev command, usually one of:

```bash
npm run dev
pnpm dev
yarn dev
```

Open:

```txt
/ai-automatizalas
```

Check:
- desktop layout
- mobile layout
- header nav
- mobile nav
- CTA links
- footer
- build command

Then run the existing build command, usually:

```bash
npm run build
```

or equivalent.

## Final response expected from the agent

When done, summarize briefly:

- which files were changed
- the new route URL
- how to run locally
- how to build
- whether the build passed

Do not include a long explanation.
