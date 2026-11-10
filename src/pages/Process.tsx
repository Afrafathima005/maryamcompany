import { motion } from 'framer-motion';
import { PageHero } from '@/components/PageHero';
import { CTASection } from '@/components/CTASection';
import { Reveal, GoldDivider } from '@/components/Reveal';
import { PROCESS_STEPS } from '@/data/content';

const HERO_IMG = 'https://images.pexels.com/photos/26346370/pexels-photo-26346370.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

export function Process() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="From Idea to Installation"
        description="A clear, five-step process from first consultation to final handover — measured accurately, fabricated precisely and installed cleanly."
        image={HERO_IMG}
        breadcrumb="Our Process"
      />

      {/* Desktop horizontal timeline */}
      <section className="hidden bg-ink-900 py-24 md:py-32 lg:block">
        <div className="container-lux">
          <Reveal className="mb-20 text-center">
            <GoldDivider className="mx-auto justify-center" />
            <p className="eyebrow mt-6 mb-4">How We Work</p>
            <h2 className="heading-section">From Idea to Installation</h2>
          </Reveal>

          <div className="relative">
            <div className="absolute left-0 right-0 top-10 h-px bg-white/15" />
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              className="absolute left-0 top-10 h-px bg-champagne"
            />
            <div className="grid grid-cols-5 gap-6">
              {PROCESS_STEPS.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.15}>
                  <div className="flex flex-col items-center px-2 text-center">
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-champagne bg-ink-900">
                      <span className="font-serif text-2xl text-champagne">{step.number}</span>
                    </div>
                    <h3 className="mt-6 font-display text-sm uppercase tracking-ultra text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile/Tablet vertical timeline */}
      <section className="bg-ink-900 py-16 lg:hidden">
        <div className="container-lux">
          <Reveal className="mb-12 text-center">
            <GoldDivider className="mx-auto justify-center" />
            <p className="eyebrow mt-6 mb-4">How We Work</p>
            <h2 className="heading-section">From Idea to Installation</h2>
          </Reveal>

          <div className="relative mx-auto max-w-2xl border-l border-white/15 pl-10">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="relative pb-12 last:pb-0">
                  <div className="absolute -left-[2.6rem] flex h-14 w-14 items-center justify-center rounded-full border border-champagne bg-ink-900">
                    <span className="font-serif text-base text-champagne">{step.number}</span>
                  </div>
                  <h3 className="font-display text-sm uppercase tracking-ultra text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy band */}
      <section className="bg-ink-800 py-24 md:py-32">
        <div className="container-lux">
          <Reveal className="text-center">
            <GoldDivider className="mx-auto justify-center" />
            <h2 className="heading-section mx-auto mt-6 max-w-3xl">
              Every project is a long-term commitment.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-white/60">
              Measured accurately. Fabricated precisely. Installed cleanly. So that what we build performs and looks right for years to come.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
