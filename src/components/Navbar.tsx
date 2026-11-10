import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/data/content';
import { Logo } from './Logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-900/95 py-3 backdrop-blur-md shadow-[0_1px_0_0_rgba(198,161,91,0.15)]'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-lux flex items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-display text-[0.78rem] uppercase tracking-ultra transition-colors duration-300 ${
                    isActive ? 'text-champagne' : 'text-white/80 hover:text-white'
                  }`
                }
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/quote" className="btn-gold !px-6 !py-3 text-[0.7rem]">
              Request a Quote
            </Link>
          </div>

          <button
            className="text-white lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink-900 lg:hidden"
          >
            <div className="container-lux flex items-center justify-between py-5">
              <Logo onClick={() => setOpen(false)} />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white">
                <X size={24} />
              </button>
            </div>
            <motion.div
              className="container-lux mt-8 flex flex-col gap-1"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.path}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `block border-b border-white/10 py-4 font-serif text-3xl ${
                        isActive ? 'text-champagne' : 'text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="mt-6"
              >
                <Link to="/quote" className="btn-gold w-full">
                  Request a Quote
                </Link>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="mt-8 flex flex-col gap-3 text-sm text-white/70"
              >
                <a href={`tel:${COMPANY.phones[0]}`} className="flex items-center gap-2">
                  <Phone size={16} className="text-champagne" /> +968 {COMPANY.phones[0]}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="text-champagne">
                  {COMPANY.email}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
