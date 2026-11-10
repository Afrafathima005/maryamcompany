import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal, GoldDivider } from '@/components/Reveal';
import { SERVICES } from '@/data/content';

const HERO_IMG = 'https://images.pexels.com/photos/29224609/pexels-photo-29224609.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Steel, Aluminium, Glass & Carpentry — One Trusted Team"
        description="Eleven service categories covering the full scope of fabrication, fitting and finishing for residential, commercial and industrial projects across Oman."
        image={HERO_IMG}
        breadcrumb="Services"
      />

      {/* Services list — alternating layout */}
      <section className="bg-ink-900 py-20 md:py-28">
        <div className="container-lux space-y-20 md:space-y-28">
          {SERVICES.map((service, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <Reveal key={service.id} direction={reversed ? 'left' : 'right'}>
                <div id={service.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  {/* Image */}
                  <div className={`relative ${reversed ? 'lg:order-2' : ''}`}>
                    <div className={`absolute -top-4 h-24 w-24 border-champagne/40 ${reversed ? '-right-4 border-r border-t' : '-left-4 border-l border-t'}`} />
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-ink-900/20" />
                      <span className="absolute left-5 top-5 font-serif text-5xl text-champagne/80">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <GoldDivider className="mb-5" />
                    <p className="eyebrow mb-3">Service {service.number}</p>
                    <h2 className="font-serif text-3xl leading-tight md:text-4xl">{service.title}</h2>
                    <p className="mt-5 text-base leading-relaxed text-white/70">
                      {service.description}
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h3 className="font-display text-xs uppercase tracking-ultra text-champagne">Key Benefits</h3>
                        <ul className="mt-4 space-y-2.5">
                          {service.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-2 text-sm text-white/70">
                              <Check size={14} className="mt-1 shrink-0 text-champagne" /> {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-display text-xs uppercase tracking-ultra text-champagne">Applications</h3>
                        <ul className="mt-4 space-y-2.5">
                          {service.applications.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-sm text-white/70">
                              <Check size={14} className="mt-1 shrink-0 text-champagne" /> {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link to="/quote" className="btn-gold !text-[0.7rem]">
                        Request a Quote <ArrowRight size={14} />
                      </Link>
                      <Link
                        to={service.category.includes('Steel') ? '/steel-fabrication' : '/aluminium-glass'}
                        className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 font-display text-[0.7rem] uppercase tracking-ultra text-white transition-all hover:border-champagne hover:text-champagne"
                      >
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
