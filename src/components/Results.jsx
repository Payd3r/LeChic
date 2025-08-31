import React from 'react';
import { Star, Heart } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const results = [
    {
        id: 1,
        title: 'Trattamento Viso - Prima e Dopo',
        description: 'Risultato dopo 3 sedute di trattamento viso personalizzato',
        image: '/result/4.jpg',
        rating: 5
    },
    {
        id: 2,
        title: 'Manicure Semi-permanente',
        description: 'Nail art personalizzata con smalto semi-permanente',
        image: '/result/5.jpg',
        rating: 5
    },
    {
        id: 3,
        title: 'Trattamento Anti-età',
        description: 'Risultato visibile dopo ciclo di trattamenti anti-età',
        image: '/result/9.jpg',
        rating: 5
    }
];

const Results = () => {
    return (
        <section className="py-20 bg-warm-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main font-playfair">I Nostri Risultati</h2>
                    <p className="text-lg text-dark-gray mt-4 max-w-2xl mx-auto font-lato">
                        Scopri i risultati dei nostri trattamenti attraverso le testimonianze visive delle nostre clienti soddisfatte.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {results.map((result, index) => (
                        <div
                            key={result.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden card-hover animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="relative">
                                <OptimizedImage
                                    src={result.image}
                                    alt={result.title}
                                    className="w-full h-64"
                                    priority={index === 0}
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <div className="flex items-center gap-1">
                                        <Star size={14} className="text-yellow-400 fill-current" />
                                        <span className="text-sm font-semibold text-dark-gray">{result.rating}.0</span>
                                    </div>
                                </div>
                                <button className="absolute top-4 left-4 text-white hover:text-red-500 transition-colors">
                                    <Heart size={20} />
                                </button>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-text-main mb-2 font-playfair">{result.title}</h3>
                                <p className="text-dark-gray font-lato">{result.description}</p>

                                <div className="mt-4 pt-4 border-t border-light-gray">
                                    <p className="text-sm text-dark-gray font-lato italic">
                                        "Risultato eccezionale! Il trattamento ha superato le mie aspettative."
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Results; 