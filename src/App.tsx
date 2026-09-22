import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCallButton from '@/components/MobileCallButton';
import HomePage from '@/pages/HomePage';
import ServicePage from '@/pages/ServicePage';
import LocationPage from '@/pages/LocationPage';
import DenverLocationPage from '@/pages/DenverLocationPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/electrician-denver-co" element={<DenverLocationPage />} />
            {[
              'residential-electrician-denver-co',
              'electrical-repair-denver-co',
              'electrical-panel-upgrade-denver-co',
              'residential-wiring-denver-co',
              'outlet-repair-denver-co',
              'switch-repair-denver-co',
              'lighting-installation-denver-co',
              'ceiling-fan-installation-denver-co',
              'ev-charger-installation-denver-co',
              'electrical-inspection-denver-co',
              'surge-protection-denver-co',
              'generator-installation-denver-co',
              'electrical-troubleshooting-denver-co',
            ].map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<ServicePage slug={slug} />} />
            ))}
            {[
              'electrician-aurora-co',
              'electrician-lakewood-co',
              'electrician-littleton-co',
              'electrician-englewood-co',
              'electrician-centennial-co',
              'electrician-parker-co',
              'electrician-highlands-ranch-co',
              'electrician-arvada-co',
              'electrician-westminster-co',
              'electrician-thornton-co',
              'electrician-golden-co',
              'electrician-broomfield-co',
              'electrician-commerce-city-co',
            ].map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<LocationPage slug={slug} />} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileCallButton />
      </div>
    </BrowserRouter>
  );
}
