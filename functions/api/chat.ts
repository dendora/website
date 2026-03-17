/**
 * Cloudflare Pages Function — POST /api/chat
 *
 * DIMOP AI assistant powered by Cloudflare Workers AI.
 * Answers questions about the DIMOP grant, Dendora's services, and packages.
 *
 * Required CF Pages binding (configured in wrangler.jsonc):
 *   AI — Cloudflare Workers AI binding
 */

interface Env {
  AI: Ai;
}

interface ChatPayload {
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
}

// Source: official MKIK Facebook post (fb.com/photo.php?fbid=1312961421032849) + palyazat.gov.hu
const SYSTEM_PROMPT = `Te a Dendora digitális asszisztense vagy. A DIMOP pályázatról és a Dendora szolgáltatásairól segítesz a látogatóknak. Magyarul válaszolj, röviden és lényegre törően.

A DIMOP PÁLYÁZATRÓL (hivatalosan megerősített adatok):
- Hivatalos neve: „KKV-k növekedési lehetőségeinek támogatása a digitális infrastruktúra és transzformáció elősegítésére (II. kör)" — DIMOP Plusz-1.2.6/B-26
- 90%-os vissza nem térítendő támogatási intenzitás
- Projekt méret: 3–12 millió Ft
- Teljes keretösszeg: 30 milliárd Ft
- Beadási időszak: 2026. március 31. 17:00-tól 2026. június 30. 23:59-ig
- Ez a II. kör — az I. kör (DIMOP Plusz-1.2.6-24) már lezárult

JOGOSULTSÁG:
- Budapesten kívüli székhellyel vagy telephellyel rendelkező mikro- és kisvállalkozások
- Akik jelenleg nagyon alacsony digitális intenzitással működnek
- Szükséges a digitális intenzitási szint felmérése és egy Digitális Fejlesztési Koncepció elkészítése (az MKIK közreműködésével)

MIRE LEHET KÖLTENI:
- Hardver: laptop, PC, monitor, hálózati eszköz, mobiltelefon, tablet, multifunkciós nyomtató
- Szoftver és szolgáltatás: weboldal/webshop fejlesztés, felhőmegoldások, CRM/ERP rendszerek, IT-biztonsági megoldások
- Képzés és tanácsadás a bevezetéshez kapcsolódóan
- FONTOS: eszközbeszerzés mellett kötelező a szoftveres fejlesztés is!

DENDORÁRÓL:
- Szoftverfejlesztő csapat, nem pályázatíró iroda
- A teljes projektet visszük végig: tervezés, fejlesztés, beszerzés, bevezetés, betanítás, üzemeltetés
- Nem csak a beadásban segítünk, hanem a tényleges megvalósításban is
- Elérhetőség: hello@dendora.hu, +36 30 686 3734

SZABÁLYOK:
- Mindig magyarul válaszolj
- Légy barátságos, de szakmai
- Rövid válaszokat adj (2-3 mondat)
- Ha nem tudod a választ, javasolj konzultációt: hello@dendora.hu vagy a palyazat.gov.hu felhívás megtekintését
- Ha érdeklődik, irányítsd a jogosultság-ellenőrző űrlaphoz (görgessen le)
- NE találj ki információt — ha valamit nem tudsz biztosan, mondd meg
- Ha nem DIMOP/Dendora témáról kérdeznek, udvariasan tereld vissza`;

const MAX_MESSAGES = 10;

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://dendora.hu',
  };

  try {
    const { messages } = (await context.request.json()) as ChatPayload;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Messages array is required' }),
        { status: 400, headers },
      );
    }

    // Limit conversation length to prevent abuse
    const trimmed = messages.slice(-MAX_MESSAGES);

    // Validate message roles
    for (const msg of trimmed) {
      if (msg.role !== 'user' && msg.role !== 'assistant') {
        return new Response(
          JSON.stringify({ error: 'Invalid message role' }),
          { status: 400, headers },
        );
      }
      if (typeof msg.content !== 'string' || msg.content.length > 1000) {
        return new Response(
          JSON.stringify({ error: 'Message content must be a string under 1000 chars' }),
          { status: 400, headers },
        );
      }
    }

    const aiMessages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...trimmed.map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content })),
    ];

    const response = await context.env.AI.run(
      '@cf/meta/llama-3.1-8b-instruct' as BaseAiTextGenerationModels,
      {
        messages: aiMessages,
        temperature: 0.3,
        max_tokens: 512,
      },
    );

    const text =
      typeof response === 'string'
        ? response
        : (response as { response?: string }).response || '';

    return new Response(JSON.stringify({ reply: text.trim() }), { status: 200, headers });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: 'AI service error', detail: message }),
      { status: 500, headers },
    );
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://dendora.hu',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
};
