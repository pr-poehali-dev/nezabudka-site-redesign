
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!circleRef.current) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      // Slight parallax effect
      const moveX = (x - window.innerWidth / 2) * 0.02;
      const moveY = (y - window.innerHeight / 2) * 0.02;
      
      circleRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={circleRef}
          className="absolute top-1/4 right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#9b87f5] to-[#6e59a5] opacity-30 blur-[100px] animate-rotate"
        ></div>
        <div className="absolute bottom-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#6e59a5] to-[#9b87f5] opacity-20 blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We create <span className="text-gradient">digital experiences</span> that matter
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Award-winning digital agency specialized in creative and results-driven solutions. We build awesome products that help businesses grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button className="bg-[var(--accent)] hover:bg-[#8a78dd] text-white rounded-full px-8 py-6 text-lg">
              View our work
            </Button>
            <Button variant="outline" className="border-white/30 hover:border-white/70 hover:bg-white/5 text-white rounded-full px-8 py-6 text-lg">
              Get in touch
            </Button>
          </div>
          
          <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-[var(--text-secondary)] mb-6">Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center gap-10 opacity-60">
              <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80" alt="Client logo" className="h-8 grayscale" />
              <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80" alt="Client logo" className="h-8 grayscale" />
              <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80" alt="Client logo" className="h-8 grayscale" />
              <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80" alt="Client logo" className="h-8 grayscale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
