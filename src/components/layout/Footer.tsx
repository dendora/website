import React from 'react'
import { Globe, Mail } from 'lucide-react'
import { t, type Language } from '../../lib/translations'
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
          <a href="https://dendora.hu" className="inline-flex items-center gap-1 hover:text-black transition-colors">
            <Globe className="h-4 w-4" />
            <span>dendora.hu</span>
          </a>
          <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-1 hover:text-black transition-colors">
            <Mail className="h-4 w-4" />
            <span>hello@dendora.hu</span>
          </a>
        </div>
      </div>
    </footer>
  )
}