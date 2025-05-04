
import React from 'react';
import Navbar from '../components/Navbar';
import FlowerIcon from '../components/FlowerIcon';
import { Button } from '../components/ui/button';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--background-white)]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-20 right-10 opacity-20 spin-slow">
          <FlowerIcon size={200} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20 spin-slow" style={{ animationDirection: 'reverse' }}>
          <FlowerIcon size={150} />
        </div>
        
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--forget-me-not-dark-blue)] fade-in">
              Детский сад <br />
              <span className="text-[var(--forget-me-not-green)]">«Незабудка»</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700 fade-in-delay-1">
              Мы создаем теплую и заботливую среду, где каждый ребенок может 
              расти, учиться и раскрывать свой потенциал.
            </p>
            <div className="mt-8 flex gap-4 fade-in-delay-2">
              <Button className="btn-primary text-white px-8 py-6">Узнать больше</Button>
              <Button variant="outline" className="border-[var(--forget-me-not-blue)] text-[var(--forget-me-not-blue)] hover:bg-[var(--forget-me-not-light-blue)/10] px-8 py-6">
                Записаться на экскурсию
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative fade-in-delay-3">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Дети играют" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--forget-me-not-blue)]/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 -right-5 flower-animate">
              <FlowerIcon size={80} />
            </div>
          </div>
        </div>
      </section>
      
      <div className="section-divider"></div>
      
      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-[var(--forget-me-not-light-blue)]/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--forget-me-not-dark-blue)]">О нашем саде</h2>
            <div className="w-20 h-1 bg-[var(--forget-me-not-green)] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[var(--forget-me-not-blue)]/20 flex items-center justify-center mb-6">
                <FlowerIcon size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[var(--forget-me-not-dark-blue)]">Уютная атмосфера</h3>
              <p className="text-gray-700">
                Мы создаем безопасное пространство, где дети чувствуют себя как дома и могут свободно выражать себя.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[var(--forget-me-not-green)]/20 flex items-center justify-center mb-6">
                <FlowerIcon size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[var(--forget-me-not-green)]">Развивающие программы</h3>
              <p className="text-gray-700">
                Наши программы разработаны специалистами для гармоничного развития интеллектуальных и творческих способностей.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[var(--forget-me-not-yellow)]/20 flex items-center justify-center mb-6">
                <FlowerIcon size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[var(--forget-me-not-yellow)]">Опытные воспитатели</h3>
              <p className="text-gray-700">
                Наши педагоги имеют богатый опыт работы с детьми и индивидуальный подход к каждому ребенку.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button className="btn-primary text-white">Узнать больше о нас</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
