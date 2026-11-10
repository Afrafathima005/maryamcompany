import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { CTASection } from '@/components/CTASection';
import { Reveal, StaggerGroup, StaggerItem, GoldDivider } from '@/components/Reveal';

const HERO_IMG = 'https://images.pexels.com/photos/40097286/pexels-photo-40097286.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

const solutions = [
  { title: 'Aluminium Doors', description: 'Premium aluminium doors engineered for smooth operation and modern aesthetics.', image: 'https://images.pexels.com/photos/34624053/pexels-photo-34624053.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop' },
  { title: 'Aluminium Windows', description: 'Slim, strong frames delivering performance and visual clarity.', image: 'https://images.pexels.com/photos/28556417/pexels-photo-28556417.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop' },
  { title: 'Cast Aluminium', description: 'Decorative cast aluminium gates, fences and panels with durable construction.', image: 'https://images.pexels.com/photos/36826064/pexels-photo-36826064.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop' },
  { title: 'Glass Works', description: 'Architectural glass installations, partitions and facade details.', image: 'https://images.pexels.com/photos/1779826/pexels-photo-1779826.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop' },
  { title: 'Curtain Walls', description: 'Full-height glazed curtain wall facades for contemporary architecture.', image: 'https://images.pexels.com/photos/10958536/pexels-photo-10958536.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop' },
  { title: 'Pergola Installations', description: 'Modern pergola structures combining shade, design and durability.', image: 'https://images.pexels.com/photos/7587884/pexels-photo-7587884.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop' },
  { title: 'UPVC Systems', description: 'Modern UPVC windows and doors with thermal performance and weather sealing.', image: 'https://images.pexels.com/photos/30728904/pexels-photo-30728904.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop' },
  { title: 'WPVC Systems', description: 'Wood-pattern WPVC doors and windows with timber appearance and PVC durability.', image: 'https://images.pexels.com/photos/26442708/pexels-photo-26442708.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop' },
];

export function AluminiumGlass() {
  return (
    <>
      <PageHero
        eyebrow="Aluminium & Glass Solutions"
        title="Architectural Aluminium, Glass & Facade Solutions"
        description="From premium aluminium doors and windows to glazed curtain walls, pergolas and UPVC systems — contemporary architectural solutions for modern buildings."
        image={HERO_IMG}
        breadcrumb="Aluminium & Glass"
      />

      {/* Solutions grid */}
      <section className="bg-ink-900 py-24 md:py-32">
        <div className="container-lux">
          <Reveal className="mb-16">
            <GoldDivider className="mb-6" />
            <p className="eyebrow mb-4">Our Solutions</p>
            <h2 className="heading-section max-w-2xl">Complete Aluminium & Glass Capability</h2>
            <p className="mt-6 max-w-xl text-white/60">
              Eight specialised solutions covering the full scope of aluminium, glass and architectural glazing work for residential and commercial projects.
            </p>
          </Reveal>

          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((sol, i) => (
              <StaggerItem key={sol.title}>
                <div className="group relative aspect-[3/4] overflow-hidden border border-white/10">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="font-serif text-sm text-champagne/70">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-1 font-serif text-lg text-white">{sol.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/60">{sol.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Feature image band */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/934328/pexels-photo-934328.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Modern skyscrapers with glass facades"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-ink-900/75" />
        </div>
        <div className="container-lux relative z-10">
          <Reveal>
            <GoldDivider className="mb-6" />
            <h2 className="heading-section max-w-3xl">
              Contemporary architecture demands precision glazing and refined aluminium work.
            </h2>
            <p className="mt-6 max-w-xl text-white/70">
              We deliver the materials, fabrication and installation that bring modern architectural visions to life — cleanly, precisely and reliably.
            </p>
            <Link to="/quote" className="btn-gold mt-10">
              Discuss Your Project <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="LET'S CREATE SOMETHING REMARKABLE."
        description="From a single window to a complete curtain wall facade — tell us your requirements and receive a clear, professional quotation."
        buttonText="START YOUR PROJECT"
        image="https://images.pexels.com/photos/27985107/pexels-photo-27985107.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      />
    </>
  );
}
