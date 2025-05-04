
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <HeroSection />
    </div>
  );
};

export default Index;
