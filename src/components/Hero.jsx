import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
      
      <div className="relative container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-playfair leading-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>
            Eleganza, <span className="text-secondary">Benessere</span>, Bellezza.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto font-lato leading-relaxed" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
            Il centro estetico Le Chic si occupa per eccellenza di bellezza, benessere e relax per le sue clienti. Scopri la tua bellezza naturale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-secondary text-white font-bold py-4 px-8 rounded-md hover:bg-accent transition-all duration-300 shadow-lg transform hover:scale-105 font-lato inline-flex items-center justify-center gap-2 text-lg"
            >
              Prenota un Appuntamento
              <ArrowRight size={20} />
            </a>
            <a 
              href="#services" 
              className="bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-md hover:bg-white/30 transition-all duration-300 shadow-lg transform hover:scale-105 font-lato inline-flex items-center justify-center gap-2 text-lg border border-white/30"
            >
              Scopri i Servizi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
