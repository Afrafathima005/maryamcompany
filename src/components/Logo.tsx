import { Link } from 'react-router-dom';

export function Logo({ className = '', onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className={`group flex flex-col leading-none ${className}`} aria-label="Maryam Projects Company SPC — Home">
      <div className="flex items-center gap-2.5">
        <span className="h-5 w-5 rotate-45 border border-champagne transition-transform duration-500 group-hover:rotate-[135deg]" />
        <span className="font-serif text-xl tracking-[0.15em] text-white md:text-2xl">MARYAM</span>
      </div>
      <span className="mt-1 pl-7 font-display text-[0.6rem] uppercase tracking-[0.25em] text-champagne/80">
        Projects Company SPC
      </span>
    </Link>
  );
}
