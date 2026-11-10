import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Maryam Projects Company SPC | Steel Fabrication & Structural Solutions Oman',
    description: 'Oman-based steel fabrication, aluminium, glass and structural solutions. Built with purpose. Led with integrity. Delivered with excellence.',
  },
  '/about': {
    title: 'About Us | Maryam Projects Company SPC',
    description: 'An Oman-based steel and aluminium workshop delivering fabrication, fitting and finishing. Learn about our vision, mission and core values.',
  },
  '/services': {
    title: 'Our Services | Maryam Projects Company SPC',
    description: 'Steel doors & railings, steel fabrication, pergola & glass, stainless steel, cast aluminium, parking shades, UPVC, curtain walls, aluminium windows, kitchen works and carpentry.',
  },
  '/steel-fabrication': {
    title: 'Steel Fabrication | Maryam Projects Company SPC',
    description: 'Precision steel fabrication and structural solutions in Oman — structural steel, custom gates, doors, railings and general fabrication.',
  },
  '/aluminium-glass': {
    title: 'Aluminium & Glass Solutions | Maryam Projects Company SPC',
    description: 'Architectural aluminium doors, windows, cast aluminium, glass works, curtain walls, pergolas, UPVC and WPVC systems in Oman.',
  },
  '/process': {
    title: 'Our Process | Maryam Projects Company SPC',
    description: 'A clear five-step process: Consult, Design & Quote, Fabricate, Install and Handover — ensuring every project is delivered with precision.',
  },
  '/contact': {
    title: 'Contact Us | Maryam Projects Company SPC',
    description: 'Contact Abdullah Jabha at Maryam Projects Company SPC. Call +968 77503397 or email maryamprojectscompanyspc@gmail.com.',
  },
  '/quote': {
    title: 'Request a Quote | Maryam Projects Company SPC',
    description: 'Tell us about your steel, aluminium or glass project in Oman. Send a project enquiry and receive a clear, transparent quotation.',
  },
};

export function SeoManager() {
  const location = useLocation();
  useEffect(() => {
    const meta = META[location.pathname] || META['/'];
    document.title = meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', meta.description);
  }, [location.pathname]);
  return null;
}
