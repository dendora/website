/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * Receives form submissions from:
 *   - /dimop  (DIMOP grant landing page)
 *   - /      (main landing contact form — future)
 *
 * Sends email via Resend API.
 *
 * Required CF Pages environment variable:
 *   RESEND_API_KEY — your Resend API key
 *
 * Optional:
 *   CONTACT_EMAIL — override recipient (default: hello@dendora.hu)
 */

interface Env {
  RESEND_API_KEY: string;
  CONTACT_EMAIL?: string;
}

interface ContactPayload {
  source: 'dimop' | 'main';
  name: string;
  email: string;
  phone?: string;
  message?: string;
  answers?: Array<{ question: string; answer: string }>;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildEmailHtml(data: ContactPayload): string {
  const source = data.source === 'dimop' ? 'DIMOP Pályázat' : 'Főoldal';

  let answersHtml = '';
  if (data.answers?.length) {
    answersHtml = `
      <h3 style="margin-top:24px;color:#065f46;">Felmérő válaszok</h3>
      <table style="width:100%;border-collapse:collapse;">
        ${data.answers
          .map(
            (a) => `
          <tr>
            <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:14px;vertical-align:top;width:40%;">${escapeHtml(a.question)}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:500;font-size:14px;">${escapeHtml(a.answer)}</td>
          </tr>`
          )
          .join('')}
      </table>`;
  }

  let messageHtml = '';
  if (data.message) {
    messageHtml = `
      <h3 style="margin-top:24px;color:#065f46;">Üzenet</h3>
      <p style="background:#f9fafb;padding:12px 16px;border-radius:8px;color:#374151;">${escapeHtml(data.message)}</p>`;
  }

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#065f46;color:white;padding:20px 24px;border-radius:8px 8px 0 0;">
        <h2 style="margin:0;font-size:20px;">Új megkeresés — ${escapeHtml(source)}</h2>
      </div>
      <div style="padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
        <table style="width:100%;">
          <tr><td style="padding:4px 0;color:#6b7280;width:100px;">Név:</td><td style="font-weight:600;">${escapeHtml(data.name)}</td></tr>
          <tr><td style="padding:4px 0;color:#6b7280;">Email:</td><td><a href="mailto:${escapeHtml(data.email)}" style="color:#065f46;">${escapeHtml(data.email)}</a></td></tr>
          ${data.phone ? `<tr><td style="padding:4px 0;color:#6b7280;">Telefon:</td><td><a href="tel:${escapeHtml(data.phone)}" style="color:#065f46;">${escapeHtml(data.phone)}</a></td></tr>` : ''}
        </table>
        ${answersHtml}
        ${messageHtml}
      </div>
    </div>`;
}

function buildSubject(data: ContactPayload): string {
  if (data.source === 'dimop') {
    return `DIMOP Konzultáció — ${data.name}`;
  }
  return `Új megkeresés — ${data.name}`;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  // CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://dendora.hu',
  };

  try {
    const data = (await context.request.json()) as ContactPayload;

    // Basic validation
    if (!data.name || !data.email || !data.source) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, source' }),
        { status: 400, headers }
      );
    }

    // Simple email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers }
      );
    }

    const recipientEmail = context.env.CONTACT_EMAIL || 'hello@dendora.hu';

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Dendora <noreply@dendora.hu>',
        to: [recipientEmail],
        reply_to: data.email,
        subject: buildSubject(data),
        html: buildEmailHtml(data),
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error('Resend API error:', err);
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 502, headers }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers }
    );
  } catch (err) {
    console.error('Contact function error:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers }
    );
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': 'https://dendora.hu',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
};
