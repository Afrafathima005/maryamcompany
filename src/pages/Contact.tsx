import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Instagram, User, Globe, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { CTASection } from '@/components/CTASection';
import { Reveal, GoldDivider } from '@/components/Reveal';
import { COMPANY } from '@/data/content';

const HERO_IMG = 'https://images.pexels.com/photos/4307947/pexels-photo-4307947.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '23b310a0-21ea-4b7e-a7b0-db8516fc5e42';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [apiMessage, setApiMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setApiMessage('');

    if (!WEB3FORMS_KEY) {
      setApiMessage('The contact form is not configured with a Web3Forms access key.');
      setStatus('error');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_KEY);
      formData.append('subject', 'New Website Contact - Maryam Projects Company SPC');
      formData.append('from_name', 'Maryam Projects Website');
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('message', form.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data: { success?: unknown; message?: unknown } = await response.json();
      const message = typeof data.message === 'string' ? data.message : '';

      console.info('[Web3Forms] contact response', {
        status: response.status,
        success: data.success === true,
        message,
      });

      if (response.ok && data.success === true) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setApiMessage(message || `Web3Forms rejected the message (HTTP ${response.status}).`);
        setStatus('error');
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Network request failed.';
      console.error('[Web3Forms] contact request failed', { message });
      setApiMessage(message);
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Project"
        description="Reach out to discuss your requirements. Our team will visit, advise and provide a clear quotation."
        image={HERO_IMG}
        breadcrumb="Contact"
      />

      <section className="bg-ink-900 py-24 md:py-32">
        <div className="container-lux grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Contact details */}
          <Reveal direction="right">
            <GoldDivider className="mb-6" />
            <p className="eyebrow mb-4">Get in Touch</p>
            <h2 className="heading-section">Contact Information</h2>
            <p className="mt-6 text-white/60">
              We're here to answer your questions and help you plan your next project.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-champagne/30">
                  <User size={18} className="text-champagne" />
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-ultra text-champagne">Contact Person</p>
                  <p className="mt-1 text-white">{COMPANY.contactPerson}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-champagne/30">
                  <Phone size={18} className="text-champagne" />
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-ultra text-champagne">Phone</p>
                  <a href={`tel:+968${COMPANY.phones[0]}`} className="mt-1 block text-white transition-colors hover:text-champagne">+968 {COMPANY.phones[0]}</a>
                  <a href={`tel:+968${COMPANY.phones[1]}`} className="block text-white transition-colors hover:text-champagne">+968 {COMPANY.phones[1]}</a>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-champagne/30">
                  <Mail size={18} className="text-champagne" />
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-ultra text-champagne">Email</p>
                  <a href={`mailto:${COMPANY.email}`} className="mt-1 block break-all text-white transition-colors hover:text-champagne">{COMPANY.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-champagne/30">
                  <Globe size={18} className="text-champagne" />
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-ultra text-champagne">Website</p>
                  <p className="mt-1 text-white">{COMPANY.website}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-champagne/30">
                  <Instagram size={18} className="text-champagne" />
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-ultra text-champagne">Instagram</p>
                  <a href={COMPANY.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-white transition-colors hover:text-champagne">{COMPANY.instagram}</a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal direction="left">
            <div className="border border-white/10 bg-ink-800 p-8 md:p-10">
              <h3 className="font-serif text-2xl text-white">Send Us a Message</h3>
              <p className="mt-2 text-sm text-white/50">Fill in the form and we'll get back to you promptly.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="c-name" className="mb-2 block font-display text-xs uppercase tracking-ultra text-white/70">Full Name *</label>
                  <input
                    id="c-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-white/15 bg-ink-900 px-4 py-3 text-white outline-none transition-colors focus:border-champagne"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-email" className="mb-2 block font-display text-xs uppercase tracking-ultra text-white/70">Email *</label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-white/15 bg-ink-900 px-4 py-3 text-white outline-none transition-colors focus:border-champagne"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="mb-2 block font-display text-xs uppercase tracking-ultra text-white/70">Phone</label>
                    <input
                      id="c-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-white/15 bg-ink-900 px-4 py-3 text-white outline-none transition-colors focus:border-champagne"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-message" className="mb-2 block font-display text-xs uppercase tracking-ultra text-white/70">Message *</label>
                  <textarea
                    id="c-message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-white/15 bg-ink-900 px-4 py-3 text-white outline-none transition-colors focus:border-champagne"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-gold w-full disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending...</>
                  ) : (
                    <>Send Message <Send size={14} /></>
                  )}
                </button>
              </form>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 flex items-center gap-3 border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300"
                  >
                    <CheckCircle2 size={18} /> Your message has been sent. We'll be in touch shortly.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 flex items-center gap-3 border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
                  >
                    <AlertCircle size={18} /> {apiMessage || 'Something went wrong. Please try again or call us directly.'}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
