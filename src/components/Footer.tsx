import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, ArrowUpRight } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICES } from '@/data/content';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="container-lux py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-6 max-w-xs font-serif text-lg italic leading-relaxed text-champagne/90">
              {COMPANY.supporting}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Oman-based steel and aluminium workshop delivering fabrication, fitting and finishing for residential, commercial and industrial projects.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-ultra text-champagne">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 transition-colors hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-ultra text-champagne">Services</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="text-sm text-white/70 transition-colors hover:text-champagne"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-ultra text-champagne">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li>
                <span className="block text-white/50">Contact Person</span>
                <span className="text-white">{COMPANY.contactPerson}</span>
              </li>
              <li>
                <a href={`tel:+968${COMPANY.phones[0]}`} className="flex items-center gap-2 transition-colors hover:text-champagne">
                  <Phone size={14} className="text-champagne" /> +968 {COMPANY.phones[0]}
                </a>
                <a href={`tel:+968${COMPANY.phones[1]}`} className="flex items-center gap-2 transition-colors hover:text-champagne">
                  <Phone size={14} className="text-champagne" /> +968 {COMPANY.phones[1]}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 transition-colors hover:text-champagne">
                  <Mail size={14} className="text-champagne" /> {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-champagne"
                >
                  <Instagram size={14} className="text-champagne" /> {COMPANY.instagram}
                </a>
              </li>
            </ul>
            <Link
              to="/quote"
              className="mt-6 inline-flex items-center gap-1.5 font-display text-xs uppercase tracking-ultra text-champagne transition-colors hover:text-champagne-light"
            >
              Request a Quote <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="font-serif text-sm italic text-champagne/70">{COMPANY.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
