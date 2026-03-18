import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Bot, Send, X, MessageCircle, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AiChatWidgetProps {
  context?: 'dimop' | 'general';
  language?: 'hu' | 'en';
  welcomeMessage?: string;
  suggestions?: string[];
  subtitle?: string;
}

const DIMOP_WELCOME =
  'Szia! A DIMOP Plusz pályázatról tudok segíteni. Kérdezhet a jogosultságról, a támogatható fejlesztésekről, vagy akár végig is mehetünk együtt egy gyors jogosultsági ellenőrzésen!';

const DIMOP_SUGGESTIONS = [
  'Nézzük meg, jogosult vagyok-e!',
  'Mire lehet költeni?',
  'Meddig lehet beadni?',
];

const GENERAL_WELCOME =
  'Szia! A Dendora szolgáltatásairól, munkamódszeréről és referenciáiról tudok segíteni. Kérdezzen bátran!';

const GENERAL_WELCOME_EN =
  'Hi! I can help you learn about Dendora\'s services, workflow, and references. Feel free to ask!';

const GENERAL_SUGGESTIONS = [
  'Milyen szolgáltatásokat kínáltok?',
  'Meséljetek a referenciáitokról!',
  'Hogyan indíthatok projektet?',
];

const GENERAL_SUGGESTIONS_EN = [
  'What services do you offer?',
  'Tell me about your references!',
  'How do I start a project?',
];

export const AiChatWidget: React.FC<AiChatWidgetProps> = ({
  context = 'dimop',
  language = 'hu',
  welcomeMessage,
  suggestions,
  subtitle,
}) => {
  const isEn = language === 'en';
  const welcome = welcomeMessage ?? (
    context === 'dimop' ? DIMOP_WELCOME :
    isEn ? GENERAL_WELCOME_EN : GENERAL_WELCOME
  );
  const chips = suggestions ?? (
    context === 'dimop' ? DIMOP_SUGGESTIONS :
    isEn ? GENERAL_SUGGESTIONS_EN : GENERAL_SUGGESTIONS
  );
  const sub = subtitle ?? (
    context === 'dimop' ? 'DIMOP Pályázati Asszisztens' :
    isEn ? 'Digital Assistant' : 'Digitális Asszisztens'
  );

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      const userMsg: Message = { role: 'user', content: trimmed };
      const updated = [...messages, userMsg];
      setMessages(updated);
      setInput('');
      setLoading(true);

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: updated, context, language }),
        });

        if (!res.ok) throw new Error('API error');

        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.reply || (isEn ? 'Something went wrong. Please try again!' : 'Sajnos hiba történt. Próbálja újra!') },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: isEn
              ? 'Could not reach the service. Please contact us: hello@dendora.hu'
              : 'Sajnos nem sikerült elérni a szolgáltatást. Kérem írjon nekünk: hello@dendora.hu',
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [messages, loading],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      sendMessage(input);
    },
    [input, sendMessage],
  );

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-20 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl border border-gray-200 bg-white shadow-2xl flex flex-col overflow-hidden"
          style={{ height: 'min(520px, calc(100vh - 8rem))' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 bg-gray-950 px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <Bot className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">Dendora AI</div>
                <div className="text-[10px] text-white/40 leading-tight">{sub}</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 hover:bg-white/20 transition cursor-pointer"
              aria-label={isEn ? 'Close' : 'Bezárás'}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {/* Welcome message */}
            <div className="flex gap-2">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center mt-0.5">
                <Bot className="h-3.5 w-3.5 text-white" />
              </div>
              <div className="rounded-xl rounded-tl-sm bg-gray-100 px-3 py-2 text-sm text-gray-700 leading-relaxed max-w-[85%]">
                {welcome}
              </div>
            </div>

            {/* Suggestions (only if no messages yet) */}
            {messages.length === 0 && (
              <div className="flex flex-wrap gap-1.5 pl-8">
                {chips.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => sendMessage(s)}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Conversation */}
            {messages.map((msg, i) => (
              <div key={i} className={cn('flex gap-2', msg.role === 'user' && 'justify-end')}>
                {msg.role === 'assistant' && (
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center mt-0.5">
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                )}
                <div
                  className={cn(
                    'rounded-xl px-3 py-2 text-sm leading-relaxed max-w-[85%] whitespace-pre-wrap',
                    msg.role === 'user'
                      ? 'rounded-tr-sm bg-gray-900 text-white'
                      : 'rounded-tl-sm bg-gray-100 text-gray-700',
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex gap-2">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center mt-0.5">
                  <Bot className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="rounded-xl rounded-tl-sm bg-gray-100 px-3 py-2">
                  <Loader2 className="h-4 w-4 text-gray-400 animate-spin" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-100 px-3 py-2.5 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isEn ? 'Type your question...' : 'Írja be kérdését...'}
              className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-900/20"
              disabled={loading}
              maxLength={500}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
              aria-label={isEn ? 'Send' : 'Küldés'}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Footer */}
          <div className="px-3 pb-2 text-center">
            <span className="text-[10px] text-gray-400">
              Dendora AI · {isEn ? 'responses are informational only' : 'válaszok tájékoztató jellegűek'}
            </span>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-full shadow-lg transition-all cursor-pointer',
          open
            ? 'h-12 w-12 bg-gray-800 hover:bg-gray-700'
            : 'h-14 w-14 bg-gray-900 hover:bg-gray-800 hover:scale-105',
        )}
        aria-label={open ? (isEn ? 'Close chat' : 'Chat bezárása') : (isEn ? 'Open AI Chat' : 'AI Chat megnyitása')}
      >
        {open ? (
          <X className="h-5 w-5 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>
    </>
  );
};
