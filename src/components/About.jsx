import React from 'react';
import { Users, Award, Heart, Clock, Star } from 'lucide-react';

const stats = [
  { icon: <Users size={24} className="text-secondary" />, number: '500+', label: 'Clienti Soddisfatte' },
  { icon: <Award size={24} className="text-secondary" />, number: '5', label: 'Anni di Esperienza' },
  { icon: <Heart size={24} className="text-secondary" />, number: '100%', label: 'Soddisfazione' },
  { icon: <Star size={24} className="text-secondary" />, number: '4.9', label: 'Valutazione Media' }
];

const values = [
  {
    title: 'Professionalità',
    description: 'Team qualificato e aggiornato sulle ultime tecniche e prodotti del settore.'
  },
  {
    title: 'Personalizzazione',
    description: 'Ogni trattamento è studiato e adattato alle esigenze specifiche di ogni cliente.'
  },
  {
    title: 'Qualità',
    description: 'Utilizziamo solo prodotti di alta gamma e tecnologie all\'avanguardia.'
  },
  {
    title: 'Accoglienza',
    description: 'Un ambiente confortevole e rilassante dove sentirsi a proprio agio.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary/30">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6 font-playfair">La Nostra Filosofia</h2>
            <p className="text-text-main mb-4 font-lato">
              Benvenuta a Le Chic, un'oasi di pace dove la tua bellezza e il tuo benessere sono la nostra priorità. Fondato con la passione per l'estetica e la cura della persona, il nostro centro è diventato un punto di riferimento per chi cerca professionalità, innovazione e un'atmosfera accogliente.
            </p>
            <p className="text-text-main mb-4 font-lato">
              Crediamo che ogni persona sia unica. Per questo, ogni trattamento è personalizzato sulle tue esigenze specifiche, utilizzando solo prodotti di altissima qualità e le tecnologie più avanzate del settore.
            </p>
            <p className="text-text-main font-semibold font-lato">
              Vieni a trovarci per riscoprire la tua luce.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="/11.jpg" 
              alt="Sala trattamenti Le Chic" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              style={{maxHeight: '450px'}}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-accent font-playfair">{stat.number}</div>
              <div className="text-sm text-text-main font-lato">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-8 font-playfair">I Nostri Valori</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-text-main mb-3 font-playfair">{value.title}</h4>
                <p className="text-sm text-text-main font-lato">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-8 font-playfair">Il Nostro Team</h3>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/13.jpg" 
              alt="Team Le Chic" 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="p-8">
              <h4 className="text-xl font-bold text-text-main mb-4 font-playfair">Le Chic di Cinzia</h4>
              <p className="text-dark-gray font-lato mb-4">
                Il nostro team di professionisti qualificati è pronto ad accoglierti in un ambiente rilassante e professionale. 
                Ogni membro del nostro staff è specializzato in trattamenti specifici e utilizza solo prodotti di alta qualità.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary font-playfair">3</div>
                  <div className="text-sm text-dark-gray font-lato">Professionisti</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary font-playfair">10+</div>
                  <div className="text-sm text-dark-gray font-lato">Specializzazioni</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary font-playfair">24/7</div>
                  <div className="text-sm text-dark-gray font-lato">Supporto</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
