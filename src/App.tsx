import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { SeoManager } from '@/components/SeoManager';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { SteelFabrication } from '@/pages/SteelFabrication';
import { AluminiumGlass } from '@/pages/AluminiumGlass';
import { Process } from '@/pages/Process';
import { Contact } from '@/pages/Contact';
import { Quote } from '@/pages/Quote';

function App() {
  return (
    <BrowserRouter>
      <SeoManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/steel-fabrication" element={<SteelFabrication />} />
          <Route path="/aluminium-glass" element={<AluminiumGlass />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
