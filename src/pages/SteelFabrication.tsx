import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { CTASection } from '@/components/CTASection';
import { Reveal, StaggerGroup, StaggerItem, GoldDivider } from '@/components/Reveal';

const HERO_IMG = 'https://images.pexels.com/photos/17572739/pexels-photo-17572739.png?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

const capabilities = [
  { title: 'Structural Steel Works', description: 'Beams, columns, platforms and structural components engineered for load-bearing applications.' },
  { title: 'Custom Steel Gates', description: 'Designed and fabricated to exact measurements with decorative or minimalist detailing.' },
  { title: 'Steel Doors', description: 'Secure, durable steel doors for residential, commercial and industrial entrances.' },
  { title: 'Railings', description: 'Staircase railings, balcony railings and protective barriers with a precision finish.' },
  { title: 'General Fabrication', description: 'Brackets, supports, frames and custom components for any structural requirement.' },
  { title: 'Quality Craftsmanship', description: 'Skilled welding, careful finishing and quality materials in every fabrication.' },
];

const galleryImages = [
  { src: 'https://images.pexels.com/photos/32239084/pexels-photo-32239084.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop', alt: 'Steel framework structure against blue sky', label: 'Structural Framework' },
  { src: 'https://images.pexels.com/photos/23940459/pexels-photo-23940459.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop', alt: 'Sleek steel railing against blue sky', label: 'Steel Railings' },
  { src: 'https://images.pexels.com/photos/812526/pexels-photo-812526.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop', alt: 'Decorative metal gate', label: 'Custom Gates' },
  { src: 'https://images.pexels.com/photos/37663559/pexels-photo-37663559.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop', alt: 'Welder working on a metal structure', label: 'Workshop Fabrication' },
];

export function SteelFabrication() {
  return (
    <>
      <PageHero
        eyebrow="Steel Fabrication"
        title="Precision Steel Fabrication & Structural Solutions"
        description="From structural steel frameworks to custom gates, doors and railings — fabricated with skill, quality materials and careful engineering."
        image={HERO_IMG}
        breadcrumb="Steel Fabrication"
      />

      {/* Capabilities */}
      <section className="bg-ink-900 py-24 md:py-32">
        <div className="container-lux">
          <Reveal className="mb-16">
            <GoldDivider className="mb-6" />
            <p className="eyebrow mb-4">Capabilities</p>
            <h2 className="heading-section max-w-2xl">Complete Steel Fabrication Capability</h2>
          </Reveal>

          <StaggerGroup className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <div className="h-full bg-ink-900 p-8 transition-colors duration-300 hover:bg-ink-700">
                  <h3 className="font-serif text-xl text-champagne">{cap.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{cap.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Workshop gallery */}
      <section className="bg-ink-800 py-24 md:py-32">
        <div className="container-lux">
          <Reveal className="mb-16 text-center">
            <GoldDivider className="mx-auto justify-center" />
            <p className="eyebrow mt-6 mb-4">The Workshop</p>
            <h2 className="heading-section">Where Steel Takes Shape</h2>
          </Reveal>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((img) => (
              <StaggerItem key={img.label}>
                <div className="group relative aspect-[4/5] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 font-display text-xs uppercase tracking-ultra text-champagne">
                    {img.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Quality section */}
      <section className="bg-ink-900 py-24 md:py-32">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <img
              src="https://images.pexels.com/photos/17051952/pexels-photo-17051952.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop"
              alt="Skilled welder working on metal structures in a workshop"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal direction="left">
            <GoldDivider className="mb-6" />
            <p className="eyebrow mb-4">Quality Craftsmanship</p>
            <h2 className="heading-section">Built Right. Built to Last.</h2>
            <p className="mt-6 text-white/70 leading-relaxed">
              Every steel fabrication project begins with accurate measurement and careful planning. Our skilled team works with quality materials, precision welding and attentive finishing to deliver structural work that performs and looks right for years.
            </p>
            <ul className="mt-8 space-y-3">
              {['Precision cutting and welding', 'Quality steel materials', 'Custom designs to exact specifications', 'Professional finishing'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <Check size={16} className="text-champagne" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/quote" className="btn-gold mt-10">
              Enquire About Your Project <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="HAVE A STEEL PROJECT IN MIND?"
        description="From a single gate to a full structural framework — tell us what you need and our team will provide a clear quotation."
        buttonText="REQUEST A QUOTE"
        image="https://images.pexels.com/photos/28529542/pexels-photo-28529542.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      />
    </>
  );
}
