import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck, Ruler, Award, Clock, MessageSquare, Layers } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem, GoldDivider } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { SERVICES, PROCESS_STEPS, WHY_CHOOSE_US } from '@/data/content';

const HERO_IMAGE = 'https://images.pexels.com/photos/15128958/pexels-photo-15128958.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';
const INTRO_IMAGE = 'https://images.pexels.com/photos/22717514/pexels-photo-22717514.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop';
const PROMISE_IMAGE = 'https://images.pexels.com/photos/31197870/pexels-photo-31197870.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

const heroLines = ['BUILT WITH PURPOSE.', 'LEAD WITH INTEGRITY.', 'DELIVERED WITH EXCELLENCE.'];

const whyIcons = [Layers, Ruler, Award, ShieldCheck, MessageSquare, Clock];

export function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Modern steel and glass architectural structure" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/70 to-ink-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/40" />
        </div>

        <div className="container-lux relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="eyebrow mb-6"
          >
            Steel Fabrication & Structural Solutions · Oman
          </motion.p>

          <h1 className="max-w-4xl">
            {heroLines.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="block font-serif text-4xl leading-[1.15] md:text-6xl lg:text-7xl"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 max-w-xl font-serif text-xl italic text-champagne/90"
          >
            Engineering Strength. Crafting Excellence. Building Lasting Solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-white/70"
          >
            Maryam Projects Company SPC delivers professional steel fabrication, aluminium, glass and structural solutions for residential, commercial and industrial projects across Oman.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link to="/services" className="btn-gold">
              Explore Our Services <ArrowRight size={16} />
            </Link>
            <Link to="/quote" className="btn-outline">
              Request a Quote
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="animate-scroll-bounce text-champagne/60" size={28} />
        </motion.div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="bg-ink-900 py-24 md:py-32">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-champagne/40" />
              <img
                src={INTRO_IMAGE}
                alt="Skilled welder performing precision steel fabrication in a workshop"
                className="relative aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b border-r border-champagne/40" />
            </div>
          </Reveal>

          <Reveal direction="left">
            <GoldDivider className="mb-6" />
            <p className="eyebrow mb-4">Who We Are</p>
            <h2 className="heading-section">Crafted with Precision. Built to Last.</h2>
            <div className="mt-6 space-y-4 text-white/70 leading-relaxed">
              <p>
                Maryam Projects Company SPC is an Oman-based steel and aluminium workshop delivering fabrication, fitting and finishing for residential, commercial and industrial projects.
              </p>
              <p>
                From custom steel gates to complete curtain wall installations, the company combines skilled craftsmanship, quality materials and careful engineering.
              </p>
              <p>
                Its services cover steel, stainless steel, cast and fabricated aluminium, UPVC and WPVC systems, glass and carpentry.
              </p>
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-display text-xs uppercase tracking-ultra text-champagne transition-colors hover:text-champagne-light">
              Discover Our Story <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== FEATURED SERVICES ===== */}
      <section className="bg-ink-800 py-24 md:py-32">
        <div className="container-lux">
          <Reveal className="mb-16 text-center">
            <GoldDivider className="mx-auto justify-center" />
            <p className="eyebrow mt-6 mb-4">What We Do</p>
            <h2 className="heading-section">Featured Services</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              One reliable team for steel, aluminium, glass and carpentry — from custom fabrication to complete installation.
            </p>
          </Reveal>

          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 9).map((service) => (
              <StaggerItem key={service.id}>
                <Link
                  to="/services"
                  className="group relative block overflow-hidden border border-white/10 bg-ink-900 transition-all duration-500 hover:border-champagne/50"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                    <span className="absolute left-4 top-4 font-serif text-sm text-champagne">
                      {service.number}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-white transition-colors group-hover:text-champagne">
                      {service.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/60">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-display text-[0.7rem] uppercase tracking-ultra text-champagne/80 transition-colors group-hover:text-champagne">
                      Learn More <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-ink-900 py-24 md:py-32">
        <div className="container-lux grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <GoldDivider className="mb-6" />
            <p className="eyebrow mb-4">Why Choose Us</p>
            <h2 className="heading-section">One Team.<br />Complete Capability.</h2>
            <p className="mt-6 max-w-md text-white/60">
              From the first measurement to final handover, we bring precision, quality materials and professional finishing to every project.
            </p>
          </Reveal>

          <StaggerGroup className="grid gap-px bg-white/10 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = whyIcons[i] || Layers;
              return (
                <StaggerItem key={item}>
                  <div className="flex h-full items-start gap-4 bg-ink-900 p-6 transition-colors duration-300 hover:bg-ink-700">
                    <Icon size={24} className="mt-1 shrink-0 text-champagne" />
                    <p className="text-sm leading-relaxed text-white/80">{item}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ===== BRAND PROMISE ===== */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={PROMISE_IMAGE} alt="Structural steel framework" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-ink-900/80" />
        </div>
        <div className="container-lux relative z-10 text-center">
          <Reveal>
            <GoldDivider className="mx-auto justify-center" />
            <p className="eyebrow mt-6 mb-4">Our Promise</p>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl lg:text-7xl">
              <span className="block text-white">BUILT ON STRENGTH.</span>
              <span className="block text-champagne">DESIGNED TO LAST.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ===== OUR PROCESS ===== */}
      <section className="bg-ink-900 py-24 md:py-32">
        <div className="container-lux">
          <Reveal className="mb-16 text-center">
            <GoldDivider className="mx-auto justify-center" />
            <p className="eyebrow mt-6 mb-4">How We Work</p>
            <h2 className="heading-section">Our Process</h2>
          </Reveal>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-8 h-px bg-white/15" />
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute left-0 top-8 h-px bg-champagne"
              />
              <StaggerGroup className="grid grid-cols-5">
                {PROCESS_STEPS.map((step) => (
                  <StaggerItem key={step.number}>
                    <div className="flex flex-col items-center px-2 text-center">
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-champagne bg-ink-900">
                        <span className="font-serif text-lg text-champagne">{step.number}</span>
                      </div>
                      <h3 className="mt-5 font-display text-sm uppercase tracking-ultra text-white">{step.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-white/55">{step.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden">
            <div className="relative border-l border-white/15 pl-8">
              {PROCESS_STEPS.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.1}>
                  <div className="relative pb-10 last:pb-0">
                    <div className="absolute -left-[2.1rem] flex h-12 w-12 items-center justify-center rounded-full border border-champagne bg-ink-900">
                      <span className="font-serif text-sm text-champagne">{step.number}</span>
                    </div>
                    <h3 className="font-display text-sm uppercase tracking-ultra text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <CTASection />
    </>
  );
}
