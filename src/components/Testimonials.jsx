import React from 'react';
import { Star, Quote } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const testimonials = [
  {
    id: 1,
    name: 'Maria Rossi',
    service: 'Trattamento Viso',
    rating: 5,
    text: 'Esperienza fantastica! Il trattamento viso mi ha lasciato la pelle luminosa e rigenerata. Il personale è molto professionale e l\'ambiente è rilassante.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Giulia Bianchi',
    service: 'Manicure & Pedicure',
    rating: 5,
    text: 'Le mie unghie sono sempre perfette! La nail artist è molto brava e creativa. Consiglio vivamente per chi vuole un risultato professionale.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Laura Verdi',
    service: 'Epilazione Laser',
    rating: 5,
    text: 'Risultati incredibili con l\'epilazione laser! Dopo solo 3 sedute ho visto una differenza enorme. Il trattamento è stato indolore e professionale.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2076&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Sofia Neri',
    service: 'Massaggio Benessere',
    rating: 5,
    text: 'Il massaggio è stato rigenerante! Ho risolto i dolori alla schiena e mi sono sentita completamente rilassata. Tornerò sicuramente!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2076&auto=format&fit=crop'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main font-playfair">Cosa Dicono le Nostre Clienti</h2>
          <p className="text-lg text-text-main mt-4 max-w-2xl mx-auto font-lato">
            La soddisfazione delle nostre clienti è la nostra priorità. Scopri le loro esperienze.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-lg card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <OptimizedImage 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-3"
                  priority={false}
                />
                <div>
                  <h4 className="font-bold text-text-main font-playfair">{testimonial.name}</h4>
                  <p className="text-sm text-secondary font-lato">{testimonial.service}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                  />
                ))}
              </div>
              
              <div className="relative">
                <Quote size={20} className="text-secondary/30 absolute -top-2 -left-1" />
                <p className="text-sm text-text-main font-lato leading-relaxed pl-4">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-6 py-3 rounded-full">
            <Star size={20} className="text-secondary" />
            <span className="text-text-main font-lato font-semibold">Valutazione Media: 4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 