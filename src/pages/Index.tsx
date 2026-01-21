import { HeroSection } from '@/components/home/HeroSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { WhyFyronex } from '@/components/home/WhyFyronex';
import { HowItWorks } from '@/components/home/HowItWorks';
import { QuickContact } from '@/components/home/QuickContact';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <WhyFyronex />
      <HowItWorks />
      <QuickContact />
    </main>
  );
};

export default Index;
