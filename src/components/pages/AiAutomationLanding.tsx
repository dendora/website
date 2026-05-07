import React, { useCallback, useState } from 'react';
import {
  ArrowRight,
  Mail,
  Phone,
  CheckCircle2,
  Send,
  Loader2,
  FileText,
  Bot,
  Workflow,
  Plug,
  Building2,
  Calculator,
  Factory,
  Search,
  FlaskConical,
  Rocket,
  LifeBuoy,
  Sparkles,
  AlertCircle,
} from 'lucide-react';
import { Navigation, MotionFade } from '../ui';
import { Footer } from '../layout';
import { CONTACT_EMAIL, CONTACT_PHONE } from '../../lib/site-config';
import type { Language } from '../../lib/variant-translations';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface AiAutomationLandingProps {
  language: Language;
}

interface Copy {
  trustBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBullets: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  mockTitle: string;
  mockFile: string;
  mockDone: string;
  mockType: string;
  mockTypeValue: string;
  mockTasks: string;
  mockMissing: string;
  mockMissingValue: string;
  mockSuggested: string;
  mockSuggestedValue: string;
  problemTitle: string;
  problems: { title: string; text: string }[];
  whatTitle: string;
  whatIntro: string;
  whatItems: { title: string; bullets: string[] }[];
  industriesTitle: string;
  industries: { title: string; text: string }[];
  industriesNote: string;
  howTitle: string;
  howSteps: { title: string; text: string }[];
  whyTitle: string;
  whyPoints: string[];
  demoTitle: string;
  demoItems: { title: string; text: string }[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  contactTitle: string;
  contactSubtitle: string;
  contactSuccess: string;
  contactError: string;
  contactFallback: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formSending: string;
  formSubmit: string;
}

const COPY: Record<Language, Copy> = {
  hu: {
    trustBadge:
      'Egyedi szoftverfejlesztés · AI támogatott folyamatok · Esztergomból, országosan',
    heroTitle: 'AI automatizálás KKV-knak, érthetően és gyakorlatiasan',
    heroSubtitle:
      'Segítünk megtalálni és automatizálni azokat a céges folyamatokat, ahol ma még túl sok idő megy el e-mailekre, PDF-ekre, Excel táblákra és ismétlődő adminisztrációra.',
    heroBullets: [
      'Nem dobozos chatbotot adunk',
      'Meglévő munkafolyamatokra építünk',
      'Kis lépésekben, mérhető eredménnyel indulunk',
    ],
    ctaPrimary: 'Kérek egy rövid AI felmérést',
    ctaSecondary: 'Mutassanak egy példát',
    mockTitle: 'Dokumentum feldolgozva',
    mockFile: 'ajánlatkérés_2026_05.pdf',
    mockDone: 'kész',
    mockType: 'Típus',
    mockTypeValue: 'Ajánlatkérés',
    mockTasks: 'Teendők',
    mockMissing: 'Hiányzó adat',
    mockMissingValue: 'szállítási határidő',
    mockSuggested: 'Javasolt válasz',
    mockSuggestedValue: 'elkészült',
    problemTitle: 'Hol folyik el az idő a legtöbb KKV-nál?',
    problems: [
      {
        title: 'E-mail káosz',
        text: 'Ajánlatkérések, visszakérdezések, határidők és ügyfélválaszok keverednek a napi levelezésben.',
      },
      {
        title: 'PDF és Excel másolgatás',
        text: 'Számlákból, rendelőkből, szerződésekből és táblázatokból kézzel kerülnek át adatok egyik rendszerből a másikba.',
      },
      {
        title: 'Lassú ajánlatadás',
        text: 'A vevő vár, az információ több helyen van, a korábbi ajánlatokat pedig nehéz visszakeresni.',
      },
      {
        title: 'Nincs átlátható folyamat',
        text: 'Sok feladat fejben, e-mailben vagy külön táblázatokban él, ezért könnyű elfelejteni vagy duplán elvégezni valamit.',
      },
    ],
    whatTitle: 'Milyen AI megoldásokat készítünk?',
    whatIntro:
      'Nem általános „AI csodát" építünk, hanem konkrét, használható eszközöket: dokumentumfeldolgozást, kereshető tudásbázist, feladatgenerálást, ajánlat-előkészítést és belső asszisztenseket.',
    whatItems: [
      {
        title: 'Dokumentumfeldolgozás',
        bullets: [
          'PDF-ek, szerződések, számlák, ajánlatok feldolgozása',
          'fontos adatok kinyerése',
          'kereshető dokumentumtár',
        ],
      },
      {
        title: 'AI asszisztensek',
        bullets: [
          'belső céges tudás keresése',
          'válasz- és ajánlatvázlatok készítése',
          'munkatársak támogatása ismétlődő kérdésekben',
        ],
      },
      {
        title: 'Munkafolyamat automatizálás',
        bullets: [
          'beérkező igények rendszerezése',
          'feladatok létrehozása',
          'státuszok, naplók és riportok',
        ],
      },
      {
        title: 'Egyedi integrációk',
        bullets: [
          'kapcsolódás meglévő rendszerekhez',
          'API-k, adatbázisok, fájltárolók',
          'felhő vagy saját infrastruktúra',
        ],
      },
    ],
    industriesTitle: 'Példák, ahol gyorsan értéket tud adni',
    industries: [
      {
        title: 'Építőipar',
        text: 'Ajánlatkérések, szerződések, teljesítésigazolások és számlák rendszerezése. Korábbi dokumentumok visszakeresése és ajánlatvázlatok előkészítése.',
      },
      {
        title: 'Könyvelés és adminisztráció',
        text: 'Beérkező dokumentumok szétválogatása, hiányzó adatok jelzése, ügyfélkommunikáció előkészítése és határidők követése.',
      },
      {
        title: 'Gyártás és kereskedelem',
        text: 'Rendelések, cikkszámok, mennyiségek, határidők és beszállítói dokumentumok feldolgozása, exportálása és ellenőrzése.',
      },
    ],
    industriesNote:
      'A legtöbb projektet egy kis, jól körülhatárolt folyamattal kezdjük. Nem kell mindent egyszerre átalakítani.',
    howTitle: 'Hogyan indul egy AI automatizálási projekt?',
    howSteps: [
      {
        title: 'Rövid felmérés',
        text: 'Megnézzük, hol megy el sok idő, mi ismétlődik gyakran, és hol lenne kézzelfogható nyereség.',
      },
      {
        title: 'Mini demo vagy prototípus',
        text: 'Egy konkrét folyamatra mutatunk működő példát, nem hosszú tanulmányt írunk.',
      },
      {
        title: 'Bevezetés kis lépésekben',
        text: 'Először egy részfolyamatot automatizálunk, mérjük a hasznát, majd innen lehet tovább építkezni.',
      },
      {
        title: 'Üzemeltetés és finomhangolás',
        text: 'A rendszer nem magára hagyott kísérlet: naplózás, javítás, bővítés és támogatás is része lehet.',
      },
    ],
    whyTitle: 'Miért Dendora?',
    whyPoints: [
      'Több évtizedes szoftverfejlesztési tapasztalat',
      'Backend, frontend és infrastruktúra egy kézben',
      'Nem csak AI eszközöket kötünk össze, hanem működő üzleti rendszert építünk',
      'Helyi jelenlét Esztergom környékén, személyes egyeztetési lehetőséggel',
      'Egyedi fejlesztés, nem mindenkire ráhúzott sablon',
    ],
    demoTitle: 'Mit lehet megmutatni egy rövid demón?',
    demoItems: [
      {
        title: 'PDF-ből feladat',
        text: 'Feltöltünk egy dokumentumot, a rendszer felismeri a típust, kinyeri a fontos adatokat és feladatokat javasol.',
      },
      {
        title: 'Céges dokumentumkereső',
        text: 'Korábbi ajánlatok, szerződések vagy leírások között természetes nyelven lehet kérdezni.',
      },
      {
        title: 'Ajánlat-előkészítés',
        text: 'Egy beérkező igényből vázlat, ellenőrzőlista vagy válaszlevél készülhet.',
      },
    ],
    faqTitle: 'Gyakori kérdések',
    faqs: [
      {
        question: 'Ez egy kész termék?',
        answer:
          'Nem feltétlenül. Általában egyedi folyamatból indulunk ki, de olyan építőelemekkel dolgozunk, amelyek gyorsan testre szabhatók.',
      },
      {
        question: 'Ki kell cserélni a meglévő rendszereinket?',
        answer:
          'Nem ez a cél. Sok esetben a meglévő levelezés, fájlok, táblázatok vagy belső rendszerek mellé építünk egy okosabb réteget.',
      },
      {
        question: 'Biztonságos az AI használata céges adatokkal?',
        answer:
          'Ez mindig a konkrét megoldástól függ. Már a tervezésnél figyelembe vesszük, milyen adat hova kerülhet, milyen naplózás és jogosultságkezelés szükséges. Igény esetén saját infrastruktúrán vagy elkülönített környezetben is kialakítható.',
      },
      {
        question: 'Mennyi idő alatt látszik eredmény?',
        answer:
          'Egy jól kiválasztott részfolyamatnál akár rövid időn belül készülhet működő prototípus. A cél nem a nagy ígéret, hanem egy kis, mérhető első lépés.',
      },
      {
        question: 'Csak Esztergom környékén dolgoztok?',
        answer:
          'Nem, de helyi cégeknek előny lehet, hogy személyesen is át tudjuk beszélni a folyamatokat.',
      },
    ],
    contactTitle: 'Nézzük meg, nálatok hol tudna időt spórolni az AI',
    contactSubtitle:
      'Egy rövid beszélgetés alapján meg tudjuk mondani, érdemes-e AI automatizálásban gondolkodni, és ha igen, melyik folyamattal lenne célszerű kezdeni.',
    contactSuccess: 'Köszönjük. Hamarosan jelentkezünk.',
    contactError: 'Hiba történt. Kérjük próbálja újra.',
    contactFallback: 'vagy keressen minket közvetlenül:',
    formName: 'Név',
    formEmail: 'E-mail',
    formMessage: 'Pár mondatban: milyen folyamatot automatizálnátok?',
    formSending: 'Küldés…',
    formSubmit: 'Kérek egy rövid AI felmérést',
  },
  en: {
    trustBadge:
      'Custom software development · AI-supported workflows · Hungary, working internationally',
    heroTitle: 'Practical AI automation for SMEs — clear, hands-on, no hype',
    heroSubtitle:
      'We help you find and automate the business processes where too much time is still lost on emails, PDFs, spreadsheets and repetitive admin work.',
    heroBullets: [
      'No off-the-shelf chatbot',
      'We build on your existing workflows',
      'Small steps, measurable outcomes',
    ],
    ctaPrimary: 'Request a short AI assessment',
    ctaSecondary: 'Show me an example',
    mockTitle: 'Document processed',
    mockFile: 'rfq_2026_05.pdf',
    mockDone: 'done',
    mockType: 'Type',
    mockTypeValue: 'Request for quote',
    mockTasks: 'Tasks',
    mockMissing: 'Missing field',
    mockMissingValue: 'delivery deadline',
    mockSuggested: 'Suggested reply',
    mockSuggestedValue: 'drafted',
    problemTitle: 'Where does time leak in most SMEs?',
    problems: [
      {
        title: 'Email chaos',
        text: 'Quote requests, follow-ups, deadlines and customer replies all get tangled in daily inbox traffic.',
      },
      {
        title: 'PDF and Excel copying',
        text: 'Data from invoices, orders, contracts and spreadsheets ends up moved by hand from one system to another.',
      },
      {
        title: 'Slow quoting',
        text: 'The customer waits, information lives in many places, and previous quotes are hard to find.',
      },
      {
        title: 'No clear process',
        text: 'Tasks live in heads, emails or scattered spreadsheets — easy to forget or duplicate work.',
      },
    ],
    whatTitle: 'What kind of AI solutions do we build?',
    whatIntro:
      'Not generic "AI magic" — concrete, usable tools: document processing, searchable knowledge bases, task generation, quote drafting and internal assistants.',
    whatItems: [
      {
        title: 'Document processing',
        bullets: [
          'PDFs, contracts, invoices, quotes',
          'extract key data fields',
          'searchable document library',
        ],
      },
      {
        title: 'AI assistants',
        bullets: [
          'search internal company knowledge',
          'draft replies and quote outlines',
          'support staff with repetitive questions',
        ],
      },
      {
        title: 'Workflow automation',
        bullets: [
          'organize incoming requests',
          'auto-create tasks',
          'status, audit logs and reports',
        ],
      },
      {
        title: 'Custom integrations',
        bullets: [
          'connect to existing systems',
          'APIs, databases, file storage',
          'cloud or your own infrastructure',
        ],
      },
    ],
    industriesTitle: 'Examples where AI delivers value quickly',
    industries: [
      {
        title: 'Construction',
        text: 'Organize RFQs, contracts, completion certificates and invoices. Retrieve previous documents and prepare quote drafts.',
      },
      {
        title: 'Accounting and admin',
        text: 'Sort incoming documents, flag missing fields, prepare client communication and track deadlines.',
      },
      {
        title: 'Manufacturing and trade',
        text: 'Process, export and validate orders, SKUs, quantities, deadlines and supplier documents.',
      },
    ],
    industriesNote:
      'Most projects start with a small, well-defined process. You do not need to change everything at once.',
    howTitle: 'How does an AI automation project start?',
    howSteps: [
      {
        title: 'Short assessment',
        text: 'We look at where time is lost, what repeats often, and where the tangible upside lies.',
      },
      {
        title: 'Mini demo or prototype',
        text: 'We show a working example on a concrete process — not a long study document.',
      },
      {
        title: 'Roll out in small steps',
        text: 'We automate one part first, measure the impact, then build out from there.',
      },
      {
        title: 'Operate and tune',
        text: 'The system is not a science project: logging, fixes, extensions and support are part of the work.',
      },
    ],
    whyTitle: 'Why Dendora?',
    whyPoints: [
      'Decades of software engineering experience',
      'Backend, frontend and infrastructure under one roof',
      'We do not just glue AI tools together — we build a working business system',
      'Hungary-based, available for on-site discussions in the region',
      'Custom builds, not one-size-fits-all templates',
    ],
    demoTitle: 'What can we show in a short demo?',
    demoItems: [
      {
        title: 'PDF to task',
        text: 'Upload a document — the system detects the type, extracts key data and suggests tasks.',
      },
      {
        title: 'Company document search',
        text: 'Ask natural-language questions across past quotes, contracts or descriptions.',
      },
      {
        title: 'Quote drafting',
        text: 'An incoming request becomes a draft, checklist or reply email.',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        question: 'Is this a finished product?',
        answer:
          'Not necessarily. We usually start from a specific process, but we work with building blocks that can be customized quickly.',
      },
      {
        question: 'Do we need to replace our existing systems?',
        answer:
          'That is not the goal. In most cases we add a smarter layer next to existing email, files, spreadsheets or internal systems.',
      },
      {
        question: 'Is it safe to use AI with company data?',
        answer:
          'It always depends on the specific solution. Already at design time we consider what data goes where, what logging and access control is needed. On request we can deploy on your own or an isolated infrastructure.',
      },
      {
        question: 'How quickly do we see results?',
        answer:
          'For a well-chosen sub-process, a working prototype can be ready in a short time. The goal is not a big promise — it is a small, measurable first step.',
      },
      {
        question: 'Do you only work in Hungary?',
        answer:
          'No. We work internationally and remotely; for local clients we can also meet in person to walk through processes.',
      },
    ],
    contactTitle: 'Let us see where AI could save you time',
    contactSubtitle:
      'A short conversation is usually enough to tell whether AI automation makes sense for you, and if so — which process to start with.',
    contactSuccess: 'Thanks. We will be in touch soon.',
    contactError: 'Something went wrong. Please try again.',
    contactFallback: 'or reach us directly:',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'A few sentences: which process would you automate?',
    formSending: 'Sending…',
    formSubmit: 'Request a short AI assessment',
  },
};

const ContactForm: React.FC<{ copy: Copy }> = ({ copy }) => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('sending');
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ source: 'ai-automatizalas', ...formData }),
        });
        if (!res.ok) throw new Error('send failed');
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } catch {
        setStatus('error');
      }
    },
    [formData],
  );

  const isBusy = status === 'sending';

  return (
    <section id="contact" className="bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-16 md:py-20">
        <MotionFade>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-white mb-2 text-center">
            {copy.contactTitle}
          </h2>
        </MotionFade>
        <MotionFade delay={0.1}>
          <p className="text-base text-gray-400 mb-10 text-center">{copy.contactSubtitle}</p>
        </MotionFade>

        {status === 'success' ? (
          <MotionFade>
            <div className="flex flex-col items-center gap-4 py-8">
              <CheckCircle2 className="h-10 w-10 text-emerald-400" />
              <p className="text-lg text-white font-medium">{copy.contactSuccess}</p>
            </div>
          </MotionFade>
        ) : (
          <MotionFade delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={copy.formName}
                  disabled={isBusy}
                  aria-label={copy.formName}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/25 transition disabled:opacity-50"
                />
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={copy.formEmail}
                  disabled={isBusy}
                  aria-label={copy.formEmail}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/25 transition disabled:opacity-50"
                />
              </div>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder={copy.formMessage}
                disabled={isBusy}
                aria-label={copy.formMessage}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/25 transition resize-none disabled:opacity-50"
              />

              {status === 'error' && (
                <p className="text-sm text-red-400">{copy.contactError}</p>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isBusy}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-gray-900 transition hover:bg-gray-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isBusy ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {isBusy ? copy.formSending : copy.formSubmit}
                </button>
              </div>
            </form>
          </MotionFade>
        )}

        <MotionFade delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="text-sm text-gray-500">{copy.contactFallback}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition"
              >
                <Mail className="h-3.5 w-3.5" />
                {CONTACT_EMAIL}
              </a>
              <span className="text-gray-600">|</span>
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition"
              >
                <Phone className="h-3.5 w-3.5" />
                {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </MotionFade>
      </div>
    </section>
  );
};

const HeroMockPanel: React.FC<{ copy: Copy }> = ({ copy }) => (
  <div className="rounded-2xl border border-black/[0.08] bg-white shadow-sm p-5 text-left">
    <div className="flex items-center gap-2 mb-4">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600">
        <FileText className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{copy.mockTitle}</p>
        <p className="text-[11px] text-gray-500">{copy.mockFile}</p>
      </div>
      <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
        <CheckCircle2 className="h-3 w-3" /> {copy.mockDone}
      </span>
    </div>
    <ul className="space-y-2 text-sm">
      <li className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2">
        <span className="text-gray-500">{copy.mockType}</span>
        <span className="text-gray-900 font-medium">{copy.mockTypeValue}</span>
      </li>
      <li className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2">
        <span className="text-gray-500">{copy.mockTasks}</span>
        <span className="text-gray-900 font-medium">3</span>
      </li>
      <li className="flex items-center justify-between rounded-md bg-amber-50 px-3 py-2">
        <span className="text-amber-700 inline-flex items-center gap-1.5">
          <AlertCircle className="h-3.5 w-3.5" /> {copy.mockMissing}
        </span>
        <span className="text-amber-900 font-medium">{copy.mockMissingValue}</span>
      </li>
      <li className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2">
        <span className="text-gray-500">{copy.mockSuggested}</span>
        <span className="text-gray-900 font-medium">{copy.mockSuggestedValue}</span>
      </li>
    </ul>
  </div>
);

const Hero: React.FC<{ copy: Copy }> = ({ copy }) => (
  <section className="hero-gradient pt-12 pb-20 md:pt-16 md:pb-24 px-4">
    <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
      <div>
        <MotionFade>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-gray-700">
            <Sparkles className="h-3 w-3" />
            {copy.trustBadge}
          </span>
        </MotionFade>

        <MotionFade delay={0.05}>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-[3.4rem] font-normal tracking-tight text-gray-900 leading-[1.08]">
            {copy.heroTitle}
          </h1>
        </MotionFade>

        <MotionFade delay={0.1}>
          <p className="mt-5 text-lg text-gray-600 max-w-xl leading-relaxed">{copy.heroSubtitle}</p>
        </MotionFade>

        <MotionFade delay={0.15}>
          <ul className="mt-6 space-y-2 text-sm md:text-base text-gray-700">
            {copy.heroBullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </MotionFade>

        <MotionFade delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-base font-medium text-white transition hover:bg-black/85 cursor-pointer group"
            >
              {copy.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-base font-medium text-black transition hover:border-black/20 hover:bg-black/5 cursor-pointer"
            >
              {copy.ctaSecondary}
            </a>
          </div>
        </MotionFade>
      </div>

      <MotionFade delay={0.25}>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200/40 via-transparent to-blue-200/30 blur-2xl -z-10 rounded-3xl" />
          <HeroMockPanel copy={copy} />
        </div>
      </MotionFade>
    </div>
  </section>
);

const ProblemSection: React.FC<{ copy: Copy }> = ({ copy }) => (
  <section className="border-t border-black/5">
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <MotionFade>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-10 text-center">
          {copy.problemTitle}
        </h2>
      </MotionFade>
      <div className="grid gap-4 sm:grid-cols-2">
        {copy.problems.map((it, i) => (
          <MotionFade key={it.title} delay={0.05 + i * 0.05}>
            <div className="h-full rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900 mb-2">{it.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{it.text}</p>
            </div>
          </MotionFade>
        ))}
      </div>
    </div>
  </section>
);

const WHAT_ICONS = [
  <FileText key="f" className="h-5 w-5" />,
  <Bot key="b" className="h-5 w-5" />,
  <Workflow key="w" className="h-5 w-5" />,
  <Plug key="p" className="h-5 w-5" />,
];

const WhatWeBuild: React.FC<{ copy: Copy }> = ({ copy }) => (
  <section className="bg-gray-50 border-t border-black/5">
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <MotionFade>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3 text-center">
          {copy.whatTitle}
        </h2>
      </MotionFade>
      <MotionFade delay={0.05}>
        <p className="max-w-2xl mx-auto text-base text-gray-500 mb-10 text-center leading-relaxed">
          {copy.whatIntro}
        </p>
      </MotionFade>

      <div className="grid gap-4 md:grid-cols-2">
        {copy.whatItems.map((it, i) => (
          <MotionFade key={it.title} delay={0.05 + i * 0.05}>
            <div className="h-full rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 mb-4">
                {WHAT_ICONS[i]}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">{it.title}</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {it.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-gray-400 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionFade>
        ))}
      </div>
    </div>
  </section>
);

const INDUSTRY_ICONS = [
  <Building2 key="b" className="h-5 w-5" />,
  <Calculator key="c" className="h-5 w-5" />,
  <Factory key="f" className="h-5 w-5" />,
];

const Industries: React.FC<{ copy: Copy }> = ({ copy }) => (
  <section className="border-t border-black/5">
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <MotionFade>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-10 text-center">
          {copy.industriesTitle}
        </h2>
      </MotionFade>
      <div className="grid gap-4 md:grid-cols-3">
        {copy.industries.map((it, i) => (
          <MotionFade key={it.title} delay={0.05 + i * 0.05}>
            <div className="h-full rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gray-900 text-white mb-4">
                {INDUSTRY_ICONS[i]}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{it.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{it.text}</p>
            </div>
          </MotionFade>
        ))}
      </div>
      <MotionFade delay={0.25}>
        <p className="mt-8 max-w-3xl mx-auto text-center text-sm text-gray-500 italic">
          {copy.industriesNote}
        </p>
      </MotionFade>
    </div>
  </section>
);

const STEP_ICONS = [
  <Search key="s" className="h-5 w-5" />,
  <FlaskConical key="f" className="h-5 w-5" />,
  <Rocket key="r" className="h-5 w-5" />,
  <LifeBuoy key="l" className="h-5 w-5" />,
];

const HowWeWork: React.FC<{ copy: Copy }> = ({ copy }) => (
  <section className="bg-gray-50 border-t border-black/5">
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <MotionFade>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-10 text-center">
          {copy.howTitle}
        </h2>
      </MotionFade>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {copy.howSteps.map((s, i) => (
          <MotionFade key={s.title} delay={0.05 + i * 0.05}>
            <div className="h-full rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm relative">
              <span className="absolute right-5 top-5 text-xs font-semibold text-gray-300">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 mb-4">
                {STEP_ICONS[i]}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.text}</p>
            </div>
          </MotionFade>
        ))}
      </div>
    </div>
  </section>
);

const WhyDendora: React.FC<{ copy: Copy }> = ({ copy }) => (
  <section className="border-t border-black/5">
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
      <MotionFade>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">
          {copy.whyTitle}
        </h2>
      </MotionFade>
      <MotionFade delay={0.1}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {copy.whyPoints.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-xl border border-black/[0.06] bg-white p-4 shadow-sm"
            >
              <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </MotionFade>
    </div>
  </section>
);

const DemoConcept: React.FC<{ copy: Copy }> = ({ copy }) => (
  <section id="demo" className="bg-gray-950 text-white border-t border-black/5">
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <MotionFade>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10 text-center">
          {copy.demoTitle}
        </h2>
      </MotionFade>
      <div className="grid gap-4 md:grid-cols-3">
        {copy.demoItems.map((it, i) => (
          <MotionFade key={it.title} delay={0.05 + i * 0.05}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
              <h3 className="text-base font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{it.text}</p>
            </div>
          </MotionFade>
        ))}
      </div>
    </div>
  </section>
);

const FaqItem: React.FC<{
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ id, question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
      aria-expanded={isOpen}
      aria-controls={`${id}-panel`}
      id={`${id}-trigger`}
    >
      <span className="text-base font-medium text-gray-900 pr-4 group-hover:text-gray-600 transition-colors">
        {question}
      </span>
      <ArrowRight
        className={`h-4 w-4 text-gray-300 flex-shrink-0 transition-transform duration-200 ${
          isOpen ? 'rotate-90 text-gray-900' : ''
        }`}
      />
    </button>
    <div
      id={`${id}-panel`}
      role="region"
      aria-labelledby={`${id}-trigger`}
      hidden={!isOpen}
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 pb-5' : 'max-h-0'
      }`}
    >
      <p className="text-sm text-gray-500 leading-relaxed">{answer}</p>
    </div>
  </div>
);

const Faq: React.FC<{ copy: Copy }> = ({ copy }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faqs.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  };

  return (
    <section className="bg-white border-t border-black/5">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-20">
        <MotionFade>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-10 text-center">
            {copy.faqTitle}
          </h2>
        </MotionFade>
        <MotionFade delay={0.1}>
          <div className="rounded-2xl border border-gray-100 bg-gray-50/50 px-6">
            {copy.faqs.map((it, i) => (
              <FaqItem
                key={it.question}
                id={`ai-faq-${i}`}
                question={it.question}
                answer={it.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
              />
            ))}
          </div>
        </MotionFade>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  );
};

export const AiAutomationLanding: React.FC<AiAutomationLandingProps> = ({ language }) => {
  const copy = COPY[language];
  return (
    <div className="min-h-screen bg-white">
      <Navigation language={language} variant="work" />

      <main id="main-content">
        <Hero copy={copy} />
        <ProblemSection copy={copy} />
        <WhatWeBuild copy={copy} />
        <Industries copy={copy} />
        <HowWeWork copy={copy} />
        <WhyDendora copy={copy} />
        <DemoConcept copy={copy} />
        <Faq copy={copy} />
        <ContactForm copy={copy} />
      </main>

      <Footer language={language} />
    </div>
  );
};

export default AiAutomationLanding;
