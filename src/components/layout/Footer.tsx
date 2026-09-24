import React from 'react'
import { Globe, Mail, Phone } from 'lucide-react'
import { t, type Language } from '../../lib/translations'
import { CONTACT_EMAIL, CONTACT_PHONE, FACEBOOK_URL, SHOW_PHONE, SITE_URL } from '../../lib/site-config'
import { Logo } from '../ui'

interface FooterProps {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="border-t border-black/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-black/70 md:flex-row">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <span>{t(language, 'footer.copyright', { year: new Date().getFullYear() })}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <a href={SITE_URL} className="inline-flex items-center gap-1 hover:text-accent transition-colors">
            <Globe className="h-4 w-4" />
            <span>dendora.hu</span>
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-1 hover:text-accent transition-colors">
            <Mail className="h-4 w-4" />
            <span>{CONTACT_EMAIL}</span>
          </a>
          {SHOW_PHONE && (
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="inline-flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>{CONTACT_PHONE}</span>
            </a>
          )}
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
            {/* lucide-react 1.x dropped brand icons; this is its former Facebook glyph */}
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </footer>
  )
}