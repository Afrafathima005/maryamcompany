import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { GoldDivider } from './Reveal';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  breadcrumb?: string;
};

export function PageHero({ eyebrow, title, description, image, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-32 md:min-h-[65vh]">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-ink-900/40" />
        <div className="absolute inset-0 bg-ink-900/30" />
      </div>
      <div className="container-lux relative z-10 pb-14 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-2 text-xs text-white/60">
            <Link to="/" className="transition-colors hover:text-champagne">Home</Link>
            <ChevronRight size={12} />
            <span className="text-champagne">{breadcrumb || title}</span>
          </div>
          <GoldDivider className="mb-6" />
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="heading-display max-w-4xl">{title}</h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
