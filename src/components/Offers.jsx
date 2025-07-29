import React from 'react';
import { Gift, Clock, Percent, Sparkles } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Pacchetto Benessere Completo',
    originalPrice: '€180',
    discountedPrice: '€140',
    savings: '€40',
    description: 'Trattamento viso + massaggio rilassante + manicure. Il pacchetto perfetto per un giorno di relax totale.',
    duration: '3 ore',
    validUntil: '31 Dicembre 2024',
    featured: true
  },
  {
    id: 2,
    title: 'Pacchetto Bellezza',
    originalPrice: '€120',
    discountedPrice: '€95',
    savings: '€25',
    description: 'Trattamento viso + pedicure + nail art. Per chi vuole sentirsi bella dalla testa ai piedi.',
    duration: '2 ore',
    validUntil: '31 Dicembre 2024',
    featured: false
  },
  {
    id: 3,
    title: 'Pacchetto Epilazione',
    originalPrice: '€200',
    discountedPrice: '€160',
    savings: '€40',
    description: '3 sedute di epilazione laser gambe + braccia. Risultati duraturi e pelle liscia.',
    duration: '3 sedute',
    validUntil: '31 Dicembre 2024',
    featured: false
  }
];

const Offers = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Gift size={48} className="text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main font-playfair">Offerte Speciali</h2>
          <p className="text-lg text-text-main mt-4 max-w-2xl mx-auto font-lato">
            Scopri i nostri pacchetti esclusivi e approfitta delle offerte limitate per i tuoi trattamenti di bellezza.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div 
              key={offer.id} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden card-hover animate-fade-in-up ${
                offer.featured ? 'ring-2 ring-secondary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {offer.featured && (
                <div className="bg-secondary text-white text-center py-2 font-bold text-sm">
                  <Sparkles size={16} className="inline mr-2" />
                  OFFERTA PIÙ POPOLARE
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-main mb-3 font-playfair">{offer.title}</h3>
                <p className="text-text-main mb-4 font-lato">{offer.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-text-main">
                    <Clock size={16} className="text-secondary" />
                    <span>{offer.duration}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 line-through">{offer.originalPrice}</span>
                    <div className="text-2xl font-bold text-accent">{offer.discountedPrice}</div>
                    <span className="text-sm text-green-600 font-semibold">Risparmi {offer.savings}</span>
                  </div>
                </div>
                
                <div className="bg-primary/20 p-3 rounded-md mb-4">
                  <div className="flex items-center gap-2 text-sm text-text-main">
                    <Percent size={16} className="text-secondary" />
                    <span>Valido fino al {offer.validUntil}</span>
                  </div>
                </div>
                
                <a 
                  href="#contact" 
                  className="w-full bg-secondary text-white font-bold py-3 px-6 rounded-md hover:bg-accent transition-colors duration-300 font-lato text-center block"
                >
                  Prenota Ora
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
            <h3 className="text-xl font-bold text-text-main mb-2 font-playfair">Regalo Speciale</h3>
            <p className="text-text-main font-lato mb-4">
              Prenota 3 trattamenti e ricevi un trattamento occhi gratuito!
            </p>
            <a 
              href="#contact" 
              className="bg-accent text-white font-bold py-2 px-6 rounded-md hover:bg-secondary transition-colors duration-300 font-lato"
            >
              Scopri di Più
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers; 