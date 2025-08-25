'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeatureTabs from '@/components/FeatureTabs';
import ProductPreview from '@/components/ProductPreview';
import LogosCarousel from '@/components/LogosCarousel';
import FeaturesSection from '@/components/FeaturesSection';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <FeatureTabs onTabChange={handleTabChange} />
      <ProductPreview selectedTab={selectedTab} />
      <LogosCarousel />
      <FeaturesSection />
      <FAQSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
