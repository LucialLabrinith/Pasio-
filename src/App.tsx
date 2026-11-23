import { CraftSection } from './components/CraftSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBECEB] text-[#3D2424]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MenuSection />
        <CraftSection />
      </main>
      <Footer />
    </div>
  );
}
