import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone, Sparkles } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['home', 'services', 'about', 'products', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preload delle immagini critiche dopo il mount
  useEffect(() => {
    const criticalImages = [
      '/11.jpg',
      '/13.jpg',
      '/product/1.jpg',
      '/product/2.jpg',
      '/product/3.jpg',
      '/product/6.jpg',
      '/product/7.jpg',
      '/product/8.jpg',
      '/product/10.jpg',
      '/product/12.jpg',
      '/result/4.jpg',
      '/result/5.jpg',
      '/result/9.jpg'
    ];

    // Preload delle immagini con priorità bassa
    const preloadImages = () => {
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    // Usa requestIdleCallback se disponibile, altrimenti setTimeout
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadImages);
    } else {
      setTimeout(preloadImages, 1000);
    }
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Servizi' },
    { href: '#about', label: 'Chi Siamo' },
    { href: '#products', label: 'Prodotti' },
    { href: '#contact', label: 'Contatti' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 pt-3 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-8 py-8 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 text-3xl font-bold text-text-main font-playfair">
          <Sparkles size={32} className="text-secondary" />
          <span>Le Chic</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10 font-lato">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`text-text-main transition-colors duration-300 relative group font-medium ${
                activeSection === link.href.substring(1) ? 'text-secondary' : 'hover:text-secondary'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                activeSection === link.href.substring(1) ? 'w-full bg-secondary' : 'w-0 bg-secondary group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </nav>

        {/* Desktop Contact Info */}
        <div className="hidden lg:flex items-center space-x-6">
          <a 
            href="tel:+391234567890" 
            className="flex items-center gap-2 text-text-main hover:text-secondary transition-colors duration-300"
          >
            <Phone size={18} />
            <span className="text-sm font-medium">031 626280</span>
          </a>
          <a 
            href="https://www.instagram.com/lechicalbavilla?igsh=bncxbXU1dDBwa2ls" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-main hover:text-secondary transition-colors duration-300 p-2 rounded-full hover:bg-primary/20"
          >
            <Instagram size={22} />
          </a>
        </div>

        {/* Mobile Nav Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-text-main focus:outline-none p-2 rounded-md hover:bg-primary/20 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-light-gray/20">
          <div className="container mx-auto px-8 py-8">
            <nav className="flex flex-col space-y-6 mb-8">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className={`text-text-main transition-colors duration-300 font-lato text-xl py-3 border-b border-light-gray/20 ${
                    activeSection === link.href.substring(1) ? 'text-secondary font-semibold' : 'hover:text-secondary'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            <div className="space-y-6 pt-6 border-t border-light-gray/20">
              <a 
                href="tel:+391234567890" 
                className="flex items-center gap-4 text-text-main hover:text-secondary transition-colors duration-300"
              >
                <Phone size={22} />
                <span className="text-lg">031 626280</span>
              </a>
              <a 
                href="https://www.instagram.com/lechicalbavilla?igsh=bncxbXU1dDBwa2ls" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-text-main hover:text-secondary transition-colors duration-300"
              >
                <Instagram size={22} />
                <span className="text-lg">Seguici su Instagram</span>
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="bg-secondary text-white font-bold py-4 px-8 rounded-md hover:bg-accent transition-colors duration-300 font-lato text-center block text-lg"
              >
                Prenota Ora
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
