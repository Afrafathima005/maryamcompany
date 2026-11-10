export const COMPANY = {
  name: 'Maryam Projects Company SPC',
  shortName: 'Maryam Projects',
  tagline: 'BUILT WITH PURPOSE. LED WITH INTEGRITY. DELIVERED WITH EXCELLENCE.',
  supporting: 'BUILT ON STRENGTH. DESIGNED TO LAST.',
  website: 'maryamprojects.com',
  email: 'maryamprojectscompanyspc@gmail.com',
  phones: ['77503397', '92174786'],
  instagram: '@mpc__om',
  instagramUrl: 'https://instagram.com/mpc__om',
  contactPerson: 'Abdullah Jabha',
  location: 'Oman',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Our Process', path: '/process' },
  { label: 'Contact', path: '/contact' },
];

export type Service = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  benefits: string[];
  applications: string[];
  category: string;
};

export const SERVICES: Service[] = [
  {
    id: 'steel-doors-railings',
    number: '01',
    title: 'Steel Doors & Railings',
    shortTitle: 'Steel Doors & Railings',
    description:
      'Custom-designed steel doors, entrance gates, staircase railings and protective barriers fabricated to exact measurements with precision welding and a premium finish.',
    image: 'https://images.pexels.com/photos/812526/pexels-photo-812526.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    benefits: ['Custom designs to exact measurements', 'Durable and secure construction', 'Premium finish options', 'Precision welding'],
    applications: ['Villas & residences', 'Commercial entrances', 'Staircases & balconies', 'Security barriers'],
    category: 'Steel Works',
  },
  {
    id: 'steel-works',
    number: '02',
    title: 'Steel Works (All Types)',
    shortTitle: 'Steel Fabrication',
    description:
      'General and structural steel fabrication covering beams, columns, platforms, brackets and custom structural components for residential, commercial and industrial applications.',
    image: 'https://images.pexels.com/photos/32239084/pexels-photo-32239084.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    benefits: ['Structural integrity', 'Custom structural components', 'Workshop & on-site capability', 'Quality materials'],
    applications: ['Building structures', 'Industrial platforms', 'Mezzanine floors', 'Custom brackets & supports'],
    category: 'Steel Works',
  },
  {
    id: 'pergola-glass-works',
    number: '03',
    title: 'Pergola & Glass Works',
    shortTitle: 'Pergola & Glass',
    description:
      'Modern pergolas, outdoor living structures, glass partitions and architectural glass installations that combine structural strength with refined visual appeal.',
    image: 'https://images.pexels.com/photos/7587884/pexels-photo-7587884.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    benefits: ['Weather-resistant structures', 'Architectural glass installations', 'Outdoor living enhancement', 'Custom designs'],
    applications: ['Gardens & terraces', 'Glass partitions', 'Outdoor seating', 'Architectural features'],
    category: 'Glass Works',
  },
  {
    id: 'stainless-steel',
    number: '04',
    title: 'Stainless Steel Works',
    shortTitle: 'Stainless Steel',
    description:
      'Polished stainless steel fabrication, railings and architectural applications delivering a clean, contemporary finish with exceptional corrosion resistance.',
    image: 'https://images.pexels.com/photos/23940459/pexels-photo-23940459.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    benefits: ['Corrosion resistance', 'Polished premium finish', 'Low maintenance', 'Modern aesthetic'],
    applications: ['Railings & handrails', 'Architectural accents', 'Kitchen fixtures', 'Decorative panels'],
    category: 'Steel Works',
  },
  {
    id: 'cast-aluminium',
    number: '05',
    title: 'Cast Aluminium Works',
    shortTitle: 'Cast Aluminium',
    description:
      'Decorative and functional cast aluminium gates, fences and panels combining traditional craftsmanship with durable, lightweight construction.',
    image: 'https://images.pexels.com/photos/36826064/pexels-photo-36826064.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    benefits: ['Lightweight yet strong', 'Decorative craftsmanship', 'Corrosion resistant', 'Long-lasting finish'],
    applications: ['Decorative gates', 'Fences & panels', 'Architectural details', 'Garden features'],
    category: 'Aluminium Works',
  },
  {
    id: 'car-parking-shades',
    number: '06',
    title: 'Car Parking Shades',
    shortTitle: 'Parking Shades',
    description:
      'Weather-resistant parking shade structures engineered for residential, commercial and compound applications, protecting vehicles from sun and heat.',
    image: 'https://images.pexels.com/photos/9799759/pexels-photo-9799759.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    benefits: ['UV & heat protection', 'Engineered for wind loads', 'Durable tensioned fabric', 'Custom sizes'],
    applications: ['Residential parking', 'Commercial complexes', 'Compound car parks', 'Shade structures'],
    category: 'Structural Solutions',
  },
  {
    id: 'upvc-curtain-wall',
    number: '07',
    title: 'UPVC & Curtain Wall',
    shortTitle: 'UPVC & Curtain Wall',
    description:
      'Modern UPVC systems and glazed curtain wall facades delivering thermal performance, weather sealing and striking contemporary architecture.',
    image: 'https://images.pexels.com/photos/10958536/pexels-photo-10958536.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    benefits: ['Thermal efficiency', 'Weather sealing', 'Large-span glazing', 'Contemporary facades'],
    applications: ['Commercial facades', 'Office buildings', 'Residential towers', 'Architectural glazing'],
    category: 'Glass Works',
  },
  {
    id: 'aluminium-doors-windows',
    number: '08',
    title: 'Aluminium Doors & Windows',
    shortTitle: 'Aluminium Doors & Windows',
    description:
      'Premium aluminium doors, windows and architectural frames engineered for smooth operation, weather performance and refined modern aesthetics.',
    image: 'https://images.pexels.com/photos/28556417/pexels-photo-28556417.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    benefits: ['Slim strong frames', 'Smooth operation', 'Weather resistant', 'Modern aesthetic'],
    applications: ['Residential windows', 'Commercial entrances', 'Sliding doors', 'Architectural frames'],
    category: 'Aluminium Works',
  },
  {
    id: 'kitchen-works',
    number: '09',
    title: 'Kitchen Works',
    shortTitle: 'Kitchen Works',
    description:
      'Custom kitchen cabinetry, fittings and contemporary kitchen installations crafted with attention to detail and premium materials.',
    image: 'https://images.pexels.com/photos/6587896/pexels-photo-6587896.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    benefits: ['Custom cabinetry', 'Premium materials', 'Contemporary design', 'Precision installation'],
    applications: ['Residential kitchens', 'Apartment kitchens', 'Custom fittings', 'Finishing works'],
    category: 'Kitchen & Carpentry',
  },
  {
    id: 'wpvc-doors-windows',
    number: '10',
    title: 'WPVC Doors & Windows',
    shortTitle: 'WPVC Systems',
    description:
      'Wood-pattern WPVC doors and windows offering the warmth of timber with the durability, moisture resistance and low maintenance of PVC.',
    image: 'https://images.pexels.com/photos/30728904/pexels-photo-30728904.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    benefits: ['Moisture resistant', 'Low maintenance', 'Timber appearance', 'Cost effective'],
    applications: ['Interior doors', 'Bathroom windows', 'Residential projects', 'Commercial interiors'],
    category: 'Aluminium Works',
  },
  {
    id: 'carpentry-works',
    number: '11',
    title: 'Carpentry Works',
    shortTitle: 'Carpentry',
    description:
      'Skilled carpentry works covering custom woodwork, fittings and finishing details that complement our steel, aluminium and glass installations.',
    image: 'https://images.pexels.com/photos/13005858/pexels-photo-13005858.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    benefits: ['Skilled craftsmanship', 'Custom woodwork', 'Finishing details', 'Integrated solutions'],
    applications: ['Custom fittings', 'Finishing works', 'Interior detailing', 'Integrated projects'],
    category: 'Kitchen & Carpentry',
  },
];

export const PROCESS_STEPS = [
  { number: '01', title: 'Consult', description: 'We listen to your needs, visit the site and take accurate measurements.' },
  { number: '02', title: 'Design & Quote', description: 'Clear drawings, material options and a transparent price.' },
  { number: '03', title: 'Fabricate', description: 'Precision cutting, welding and finishing in our workshop.' },
  { number: '04', title: 'Install', description: 'Neat, safe installation by our trained team on site.' },
  { number: '05', title: 'Handover', description: 'Final inspection, a clean site and ongoing support.' },
];

export const VALUES = [
  { number: '01', title: 'Integrity', description: 'We are honest in our quotes, timelines and workmanship.' },
  { number: '02', title: 'Quality', description: 'We never compromise on materials, finish or detail.' },
  { number: '03', title: 'Safety', description: 'The wellbeing of our team and clients comes first on every site.' },
  { number: '04', title: 'Reliability', description: 'We deliver what we promise, when we promise it.' },
  { number: '05', title: 'Innovation', description: 'We adopt better methods and designs to serve clients better.' },
  { number: '06', title: 'Customer Focus', description: 'We listen first, then build exactly what the client needs.' },
];

export const WHY_CHOOSE_US = [
  'Complete steel, aluminium, glass and carpentry capability',
  'Custom designs made to exact measurements',
  'Quality materials',
  'Professional finishing',
  'Responsive communication',
  'Commitment to timelines',
];

export const SERVICE_DROPDOWN = SERVICES.map((s) => s.title);
