import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import RecentEvents from '@/components/RecentEvents';
import Footer from '@/components/Footer';
import MarketplaceModal from '@/components/MarketplaceModal';

export default function Home() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <RecentEvents />
      </main>
      <Footer />
      <MarketplaceModal />
    </div>
  );
}