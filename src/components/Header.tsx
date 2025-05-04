
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-4 bg-black/80 blur-overlay' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-white">
            zajno
            <span className="text-[var(--accent)]">.</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#work" className="nav-item text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
            Work
          </a>
          <a href="#about" className="nav-item text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
            About
          </a>
          <a href="#services" className="nav-item text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
            Services
          </a>
          <a href="#contact" className="nav-item text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
            Contact
          </a>
        </nav>
        
        <Button className="hidden md:flex bg-transparent border border-white/30 hover:border-white/70 hover:bg-black/20 text-white rounded-full px-6">
          Let's Talk
        </Button>
        
        <button className="md:hidden text-white">
          <Icon name="Menu" size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
