
import React from 'react';
import FlowerIcon from './FlowerIcon';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FlowerIcon className="flower-animate" size={40} />
          <span className="text-2xl font-bold text-[var(--forget-me-not-dark-blue)]">Незабудка</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="navbar-link text-gray-700 hover:text-[var(--forget-me-not-blue)] transition-colors">Главная</a>
          <a href="#about" className="navbar-link text-gray-700 hover:text-[var(--forget-me-not-blue)] transition-colors">О нас</a>
          <a href="#programs" className="navbar-link text-gray-700 hover:text-[var(--forget-me-not-blue)] transition-colors">Программы</a>
          <a href="#gallery" className="navbar-link text-gray-700 hover:text-[var(--forget-me-not-blue)] transition-colors">Галерея</a>
          <a href="#contacts" className="navbar-link text-gray-700 hover:text-[var(--forget-me-not-blue)] transition-colors">Контакты</a>
        </div>
        
        <Button className="bg-[var(--forget-me-not-blue)] hover:bg-[var(--forget-me-not-dark-blue)]">
          Записаться
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
