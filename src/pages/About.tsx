import { motion } from 'framer-motion';
import { ShieldCheck, Award, HardHat, Clock, Lightbulb, Users } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { CTASection } from '@/components/CTASection';
import { Reveal, StaggerGroup, StaggerItem, GoldDivider } from '@/components/Reveal';
import { VALUES } from '@/data/content';

const HERO_IMG = 'https://images.pexels.com/photos/32239084/pexels-photo-32239084.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';
const WHO_IMG = 'https://images.pexels.com/photos/17406672/pexels-photo-17406672.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop';

const valueIcons = [ShieldCheck, Award, HardHat, Clock, Lightbulb, Users];

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Maryam Projects"
        title="A Company Built on Strength and Integrity"
        description="An Oman-based steel and aluminium workshop delivering fabrication, fitting and finishing for residential, commercial and industrial projects."
        image={HERO_IMG}
        breadcrumb="About"
      />

      {/* Who We Are */}
      <section className="bg-ink-900 py-24 md:py-32">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-champagne/40" />
              <img
                src={WHO_IMG}
                alt="Welder performing precision metalwork in a fabrication workshop"
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
                From a custom steel gate to a full curtain wall, we combine skilled craftsmanship with quality materials and careful engineering.
              </p>
              <p>
                Our scope spans steel, stainless steel, cast and fabricated aluminium, UPVC and WPVC systems, glass and carpentry, which means one reliable team for the whole job.
              </p>
              <p>
                We treat every project as a long-term commitment: measured accurately, fabricated precisely and installed cleanly, so that what we build performs and looks right for years to come.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-ink-800 py-24 md:py-32">
        <div className="container-lux grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="border border-white/10 bg-ink-900 p-10 md:p-12">
              <GoldDivider className="mb-6" />
              <p className="eyebrow mb-4">Our Vision</p>
              <h3 className="font-serif text-2xl leading-snug md:text-3xl">
                To be Oman's most trusted name in steel fabrication and structural solutions, recognised for quality, reliability and craftsmanship that stands the test of time.
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-white/10 bg-ink-900 p-10 md:p-12">
              <GoldDivider className="mb-6" />
              <p className="eyebrow mb-4">Our Mission</p>
              <h3 className="font-serif text-2xl leading-snug md:text-3xl">
                To deliver durable, precisely engineered and beautifully finished steel, aluminium and glass work, on time and within budget, through skilled people, quality materials and honest partnership with every client.
              </h3>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-ink-900 py-24 md:py-32">
        <div className="container-lux">
          <Reveal className="mb-16 text-center">
            <GoldDivider className="mx-auto justify-center" />
            <p className="eyebrow mt-6 mb-4">What Drives Us</p>
            <h2 className="heading-section">Core Values</h2>
          </Reveal>

          <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, i) => {
              const Icon = valueIcons[i] || ShieldCheck;
              return (
                <StaggerItem key={value.number}>
                  <div className="group relative h-full border border-white/10 bg-ink-800 p-8 transition-all duration-500 hover:border-champagne/40">
                    <div className="flex items-start justify-between">
                      <Icon size={32} className="text-champagne" />
                      <span className="font-serif text-3xl text-white/15 transition-colors group-hover:text-champagne/30">
                        {value.number}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-sm uppercase tracking-ultra text-white">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {value.description}
                    </p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '2rem' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mt-6 h-px bg-champagne/50"
                    />
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <CTASection />
    </>
  );
}
