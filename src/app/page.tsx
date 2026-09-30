import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Solutions from '@/components/home/Solutions';
import Technology from '@/components/home/Technology';
import RecentEvents from '@/components/RecentEvents';
import PartnerBand from '@/components/home/PartnerBand';
import Footer from '@/components/Footer';
import MarketplaceModal from '@/components/MarketplaceModal';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <Solutions />
        <Technology />
        <RecentEvents />
        <PartnerBand />
      </main>
      <Footer />
      <MarketplaceModal />
    </div>
  );
}
