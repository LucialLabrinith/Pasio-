import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { QuoteBuilderSection } from './components/QuoteBuilderSection';
import { ServicesSection } from './components/ServicesSection';
import { ALL_SERVICES, ServiceId } from './data/events';

export default function App() {
  const [selectedServiceIds, setSelectedServiceIds] = useState<ServiceId[]>([
    'wedding-planning',
    'stage-floral-decor',
    'catering-live-stalls',
  ]);

  const handleToggleService = (id: ServiceId) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAllServices = () => {
    setSelectedServiceIds(ALL_SERVICES.map((service) => service.id));
  };

  const handleClearServices = () => {
    setSelectedServiceIds([]);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FAF5EE] text-[#242B22]">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <ServicesSection
            selectedServiceIds={selectedServiceIds}
            onToggleService={handleToggleService}
          />
          <QuoteBuilderSection
            selectedServiceIds={selectedServiceIds}
            onToggleService={handleToggleService}
            onSelectAllServices={handleSelectAllServices}
            onClearServices={handleClearServices}
          />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
