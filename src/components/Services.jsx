import React from 'react';
import { Sparkles, Hand, Footprints, Heart, Eye, Scissors, Clock, Star } from 'lucide-react';

const services = [
  {
    icon: <Hand size={40} className="text-secondary" />,
    title: 'Manicure & Pedicure',
    description: 'Trattamenti completi per unghie perfette. Offriamo ricostruzione, semipermanente e nail art personalizzata.',
    price: 'da €25',
    duration: '45-60 min',
    features: ['Ricostruzione gel', 'Semipermanente', 'Nail art', 'Trattamento cuticole']
  },
  {
    icon: <Sparkles size={40} className="text-secondary" />,
    title: 'Trattamenti Viso',
    description: 'Pulizia profonda, trattamenti anti-età e soluzioni specifiche per ogni tipo di pelle, per un viso luminoso e rigenerato.',
    price: 'da €45',
    duration: '60-90 min',
    features: ['Pulizia profonda', 'Anti-età', 'Idratante', 'Mascherine personalizzate']
  },
  {
    icon: <Footprints size={40} className="text-secondary" />,
    title: 'Epilazione Laser',
    description: 'Tecnologia laser di ultima generazione per una rimozione progressiva e definitiva dei peli superflui, in totale sicurezza.',
    price: 'da €35',
    duration: '30-45 min',
    features: ['Laser Diodo', 'Sicuro e indolore', 'Risultati permanenti', 'Tutte le zone']
  },
  {
    icon: <Heart size={40} className="text-secondary" />,
    title: 'Massaggi Benessere',
    description: 'Massaggi rilassanti e decontratturanti per alleviare lo stress e ritrovare il benessere psicofisico.',
    price: 'da €50',
    duration: '60-90 min',
    features: ['Massaggio rilassante', 'Decontratturante', 'Aromaterapia', 'Oli essenziali']
  },
  {
    icon: <Eye size={40} className="text-secondary" />,
    title: 'Trattamenti Occhi',
    description: 'Trattamenti specifici per la zona perioculare, anti-occhiaie e ringiovanimento dello sguardo.',
    price: 'da €30',
    duration: '30 min',
    features: ['Anti-occhiaie', 'Ringiovanimento', 'Idratazione', 'Lifting naturale']
  },
  {
    icon: <Scissors size={40} className="text-secondary" />,
    title: 'Depilazione',
    description: 'Depilazione professionale con cera calda o fredda per gambe, braccia, viso e zone intime.',
    price: 'da €20',
    duration: '30-60 min',
    features: ['Cera calda/fredda', 'Tutte le zone', 'Risultati duraturi', 'Pelle liscia']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main font-playfair">I Nostri Servizi di Punta</h2>
          <p className="text-lg text-text-main mt-4 max-w-2xl mx-auto font-lato">
            Offriamo una gamma di trattamenti esclusivi per esaltare la tua bellezza naturale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 border border-light-gray/20 card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3 font-playfair text-center">{service.title}</h3>
              <p className="text-text-main font-lato text-center mb-4">{service.description}</p>

              <div className="flex items-center justify-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1 text-secondary">
                  <Clock size={16} />
                  <span>{service.duration}</span>
                </div>
                <div className="text-accent font-bold">
                  {service.price}
                </div>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-text-main">
                    <Star size={12} className="text-secondary flex-shrink-0" />
                    <span className="font-lato">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a
                  href="#contact"
                  className="bg-primary text-text-main px-4 py-2 rounded-md hover:bg-secondary hover:text-white transition-colors font-semibold text-sm"
                >
                  Prenota Ora
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
