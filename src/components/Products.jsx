import React from 'react';
import { ShoppingBag, Star, Heart } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const products = [
  {
    id: 1,
    name: 'Crema Viso Idratante 24h',
    category: 'Viso',
    price: '€45',
    image: '/product/1.jpg',
    description: 'Crema idratante 24h con acido ialuronico per pelle secca e sensibile.',
    rating: 5,
    featured: true
  },
  {
    id: 2,
    name: 'Siero Vitamina C Illuminante',
    category: 'Viso',
    price: '€38',
    image: '/product/2.jpg',
    description: 'Siero illuminante con vitamina C pura per un incarnato radioso e uniforme.',
    rating: 5,
    featured: true
  },
  {
    id: 3,
    name: 'Smalto Semipermanente',
    category: 'Unghie',
    price: '€18',
    image: '/product/3.jpg',
    description: 'Smalto semi-permanente di lunga durata, disponibile in 50+ colori.',
    rating: 4,
    featured: false
  },
  {
    id: 4,
    name: 'Olio Essenziale Lavanda',
    category: 'Benessere',
    price: '€28',
    image: '/product/6.jpg',
    description: 'Olio essenziale puro di lavanda per relax e benessere psicofisico.',
    rating: 4,
    featured: false
  },
  {
    id: 5,
    name: 'Maschera Notte Rigenerante',
    category: 'Viso',
    price: '€32',
    image: '/product/7.jpg',
    description: 'Maschera notturna per rigenerazione profonda della pelle.',
    rating: 5,
    featured: true
  },
  {
    id: 6,
    name: 'Kit Manicure Completo',
    category: 'Unghie',
    price: '€55',
    image: '/product/8.jpg',
    description: 'Kit completo per manicure professionale a casa.',
    rating: 4,
    featured: false
  },
  {
    id: 7,
    name: 'Crema Corpo Nutriente',
    category: 'Corpo',
    price: '€42',
    image: '/product/10.jpg',
    description: 'Crema corpo nutriente con burro di karité e olio di mandorle.',
    rating: 5,
    featured: false
  },
  {
    id: 8,
    name: 'Set Skincare Viso Completo',
    category: 'Viso',
    price: '€85',
    image: '/product/12.jpg',
    description: 'Set completo per la routine di bellezza quotidiana.',
    rating: 5,
    featured: true
  }
];

const Products = () => {
  return (
    <section id="products" className="pt-20 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Products Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <ShoppingBag size={48} className="text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 font-playfair">Prodotti a Casa Tua</h2>
          <p className="text-lg text-text-main mb-8 font-lato max-w-3xl mx-auto">
            Porta l'efficacia dei nostri trattamenti anche nella tua routine quotidiana. Puoi acquistare i nostri prodotti direttamente in negozio.
          </p>
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 card-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <OptimizedImage 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48"
                  priority={product.featured}
                />
                {product.featured && (
                  <div className="absolute top-2 left-2 bg-secondary text-white px-2 py-1 rounded-full text-xs font-bold">
                    TOP
                  </div>
                )}
                <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart size={20} />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-secondary font-semibold uppercase">{product.category}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < product.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-text-main mb-2 font-playfair">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3 font-lato">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-secondary">{product.price}</span>
                  <button className="bg-primary text-text-main px-4 py-2 rounded-md hover:bg-secondary hover:text-white transition-colors font-semibold text-sm">
                    Acquista
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Note */}
        <div className="text-center mt-12">
          <p className="text-dark-gray font-lato text-lg">
            Disponibili in negozio. Per ordini, contattaci via mail o telefono.
          </p>
        </div>
      
      </div>
    </section>
  );
};

export default Products;
