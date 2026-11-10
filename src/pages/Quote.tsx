import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal, GoldDivider } from '@/components/Reveal';
import { SERVICE_DROPDOWN, COMPANY } from '@/data/content';

const HERO_IMG = 'https://images.pexels.com/photos/31197870/pexels-photo-31197870.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '23b310a0-21ea-4b7e-a7b0-db8516fc5e42';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  location: '',
  description: '',
  additional: '',
};

export function Quote() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiMessage, setApiMessage] = useState('');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your full name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    if (!form.service) e.service = 'Please select a service';
    if (!form.location.trim()) e.location = 'Please enter the project location';
    if (!form.description.trim()) e.description = 'Please describe your project';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    if (!validate()) return;

    setStatus('loading');
    setApiMessage('');

    if (!WEB3FORMS_KEY) {
      setApiMessage('The enquiry form is not configured with a Web3Forms access key.');
      setStatus('error');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_KEY);
      formData.append('subject', 'New Website Enquiry - Maryam Projects Company SPC');
      formData.append('from_name', 'Maryam Projects Website');
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('service', form.service);
      formData.append('project_location', form.location);
      formData.append('project_description', form.description);
      formData.append('additional_requirements', form.additional);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data: { success?: unknown; message?: unknown } = await response.json();
      const message = typeof data.message === 'string' ? data.message : '';

      console.info('[Web3Forms] enquiry response', {
        status: response.status,
        success: data.success === true,
        message,
      });

      if (response.ok && data.success === true) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setApiMessage(message || `Web3Forms rejected the enquiry (HTTP ${response.status}).`);
        setStatus('error');
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Network request failed.';
      console.error('[Web3Forms] enquiry request failed', { message });
      setApiMessage(message);
      setStatus('error');
    }
  };

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const inputClass = (field: string) =>
    `w-full border bg-ink-900 px-4 py-3 text-white outline-none transition-colors focus:border-champagne ${
      errors[field] ? 'border-red-500/50' : 'border-white/15'
    }`;

  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell Us About Your Project"
        description="Share your project details and our team will visit, advise and provide a clear, transparent quotation."
        image={HERO_IMG}
        breadcrumb="Request a Quote"
      />

      <section className="bg-ink-900 py-24 md:py-32">
        <div className="container-lux max-w-3xl">
          <Reveal>
            <GoldDivider className="mb-6" />
            <h2 className="heading-section">Project Enquiry Form</h2>
            <p className="mt-4 text-white/60">
              All fields marked with * are required. The more detail you provide, the more accurate our quotation will be.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="q-name" className="mb-2 block font-display text-xs uppercase tracking-ultra text-white/70">Full Name *</label>
                  <input id="q-name" type="text" value={form.name} onChange={(e) => update('name', e.target.value)} className={inputClass('name')} />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="q-email" className="mb-2 block font-display text-xs uppercase tracking-ultra text-white/70">Email Address *</label>
                  <input id="q-email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputClass('email')} />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="q-phone" className="mb-2 block font-display text-xs uppercase tracking-ultra text-white/70">Phone Number *</label>
                  <input id="q-phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputClass('phone')} />
                  {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="q-service" className="mb-2 block font-display text-xs uppercase tracking-ultra text-white/70">Service Required *</label>
                  <select id="q-service" value={form.service} onChange={(e) => update('service', e.target.value)} className={inputClass('service')}>
                    <option value="" disabled>Select a service...</option>
                    {SERVICE_DROPDOWN.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="mt-1.5 text-xs text-red-400">{errors.service}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="q-location" className="mb-2 block font-display text-xs uppercase tracking-ultra text-white/70">Project Location *</label>
                <input id="q-location" type="text" placeholder="City / area in Oman" value={form.location} onChange={(e) => update('location', e.target.value)} className={inputClass('location')} />
                {errors.location && <p className="mt-1.5 text-xs text-red-400">{errors.location}</p>}
              </div>

              <div>
                <label htmlFor="q-description" className="mb-2 block font-display text-xs uppercase tracking-ultra text-white/70">Project Description *</label>
                <textarea id="q-description" rows={5} placeholder="Describe your project — dimensions, materials, timeline, etc." value={form.description} onChange={(e) => update('description', e.target.value)} className={inputClass('description')} />
                {errors.description && <p className="mt-1.5 text-xs text-red-400">{errors.description}</p>}
              </div>

              <div>
                <label htmlFor="q-additional" className="mb-2 block font-display text-xs uppercase tracking-ultra text-white/70">Additional Requirements</label>
                <textarea id="q-additional" rows={3} placeholder="Any other details you'd like to share" value={form.additional} onChange={(e) => update('additional', e.target.value)} className={inputClass('additional')} />
              </div>

              <button type="submit" disabled={status === 'loading'} className="btn-gold w-full disabled:opacity-50">
                {status === 'loading' ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending Enquiry...</>
                ) : (
                  <>Send Project Enquiry <Send size={14} /></>
                )}
              </button>
            </form>
          </Reveal>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-start gap-3 border border-green-500/30 bg-green-500/10 p-5 text-sm text-green-300"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Your enquiry has been sent successfully.</p>
                  <p className="mt-1 text-green-300/80">We'll contact you at the details provided. For urgent enquiries, call +968 {COMPANY.phones[0]}.</p>
                </div>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-start gap-3 border border-red-500/30 bg-red-500/10 p-5 text-sm text-red-300"
              >
                <AlertCircle size={20} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">We couldn't send your enquiry.</p>
                  <p className="mt-1 text-red-300/80">{apiMessage || `Please try again, or contact us directly at ${COMPANY.email} or +968 ${COMPANY.phones[0]}.`}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </>
  );
}
