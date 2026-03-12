import React from 'react'
import { Globe, Mail, Phone } from 'lucide-react'
import { t, type Language } from '../../lib/translations'
import { CONTACT_EMAIL, CONTACT_PHONE, SITE_URL } from '../../lib/site-config'
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
        <div className="flex items-center gap-4">
          <a href={SITE_URL} className="inline-flex items-center gap-1 hover:text-black transition-colors">
            <Globe className="h-4 w-4" />
            <span>dendora.hu</span>
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-1 hover:text-black transition-colors">
            <Mail className="h-4 w-4" />
            <span>{CONTACT_EMAIL}</span>
          </a>
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="inline-flex items-center gap-1 hover:text-black transition-colors">
            <Phone className="h-4 w-4" />
            <span>{CONTACT_PHONE}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}