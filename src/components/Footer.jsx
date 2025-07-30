import React from 'react';
import { Instagram, Phone, Mail, MapPin, Clock, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#services', label: 'Servizi' },
    { href: '#about', label: 'Chi Siamo' },
    { href: '#products', label: 'Prodotti' },
    { href: '#contact', label: 'Contatti' },
  ];

  const services = [
    'Manicure & Pedicure',
    'Trattamenti Viso',
    'Epilazione Laser',
    'Massaggi Benessere',
    'Trattamenti Occhi',
    'Depilazione'
  ];

  const contactInfo = [
    { icon: <MapPin size={16} />, text: 'Via Corogna, 7, 22031 Albavilla (CO)' },
    { icon: <Phone size={16} />, text: '031 626280' },
    { icon: <Mail size={16} />, text: 'lechicalbavilla@gmail.com' },
    { icon: <Clock size={16} />, text: 'Mar - Sab: 9:00 - 19:00' },
  ];

  return (
    <footer className="bg-text-main text-white pt-10">
      <div className="container mx-auto py-16 px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={32} className="text-secondary" />
              <h4 className="text-2xl font-bold font-playfair">Le Chic</h4>
            </div>
            <p className="text-light-gray font-lato mb-6 leading-relaxed">
              Centro Benessere di eccellenza, dove la tua bellezza e il tuo benessere sono la nostra priorità. 
              Professionalità, qualità e accoglienza per ogni cliente.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/lechicalbavilla?igsh=bncxbXU1dDBwa2ls" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-secondary transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
                aria-label="Seguici su Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-bold font-playfair mb-6">Link Rapidi</h5>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-light-gray hover:text-secondary transition-colors duration-300 font-lato text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-lg font-bold font-playfair mb-6">I Nostri Servizi</h5>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-light-gray font-lato text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-bold font-playfair mb-6">Contatti</h5>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-secondary mt-0.5">{info.icon}</span>
                  <span className="text-light-gray font-lato text-sm leading-relaxed">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-5 pb-5">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <p className="text-sm font-lato text-light-gray">&copy; {currentYear} Le Chic di Cinzia. Tutti i diritti riservati.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-sm font-lato">
              <a href="#" className="text-light-gray hover:text-secondary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-light-gray hover:text-secondary transition-colors duration-300">
                Termini di Servizio
              </a>
              <a href="#" className="text-light-gray hover:text-secondary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
