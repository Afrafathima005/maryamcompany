import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal, GoldDivider } from './Reveal';

type CTAProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  image?: string;
};

export function CTASection({
  title = "LET'S BUILD SOMETHING LASTING.",
  description = 'Tell us about your project. Our team will visit, advise and provide a clear quotation.',
  buttonText = 'START YOUR PROJECT',
  image,
}: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-ink-800 py-24 md:py-32">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-20" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-transparent" />
        </div>
      )}
      <div className="container-lux relative z-10 text-center">
        <Reveal>
          <GoldDivider className="mx-auto justify-center" />
          <h2 className="heading-section mt-6 max-w-3xl mx-auto">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-white/70">{description}</p>
          <Link to="/quote" className="btn-gold mt-10">
            {buttonText} <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
