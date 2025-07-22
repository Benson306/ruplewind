import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MissionVisionSection from '@/components/MissionVisionSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import RupleartSection from '@/components/RupleartSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <WhatWeDoSection />
      <RupleartSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
