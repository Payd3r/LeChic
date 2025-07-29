import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, User, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin size={24} className="text-secondary" />,
    text: 'Via Corogna, 7, 22031 Albavilla (CO)',
    href: 'https://www.google.com/maps/search/?api=1&query=Via+Corogna,+7,+22031+Albavilla+CO',
  },
  {
    icon: <Phone size={24} className="text-secondary" />,
    text: '+39 123 456 7890',
    href: 'tel:+391234567890',
  },
  {
    icon: <Mail size={24} className="text-secondary" />,
    text: 'info@lechicbenessere.it',
    href: 'mailto:info@lechicbenessere.it',
  },
  {
    icon: <Clock size={24} className="text-secondary" />,
    text: 'Mar - Sab: 9:00 - 19:00',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Grazie per la tua prenotazione! Ti contatteremo presto.');
  };

  return (
    <section id="contact" className="py-20 bg-primary/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main font-playfair">Contattaci</h2>
          <p className="text-lg text-dark-gray mt-4 font-lato">Siamo qui per te. Prenota il tuo momento di relax o chiedici informazioni.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Section */}
          <div className="space-y-8 me-28">
            <div>
              <h3 className="text-2xl font-bold text-text-main mb-6 font-playfair">Informazioni di Contatto</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    {item.href ? (
                       <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-lg text-text-main hover:text-accent font-lato">{item.text}</a>
                    ) : (
                      <p className="text-lg text-text-main font-lato">{item.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-text-main mb-6 font-playfair">Orari di Apertura</h3>
              <div className="space-y-3 font-lato">
                <div className="flex justify-between">
                  <span>Lunedì</span>
                  <span className="text-accent font-semibold">Chiuso</span>
                </div>
                <div className="flex justify-between">
                  <span>Martedì - Venerdì</span>
                  <span>9:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabato</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domenica</span>
                  <span className="text-accent font-semibold">Chiuso</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg ms-4">
            <h3 className="text-2xl font-bold text-text-main mb-6 font-playfair">Prenota il Tuo Trattamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2 font-lato">
                    <User size={16} className="inline mr-2" />
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-lato"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2 font-lato">
                    <Phone size={16} className="inline mr-2" />
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-lato"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-main mb-2 font-lato">
                  <Mail size={16} className="inline mr-2" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-lato"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2 font-lato">
                    <Calendar size={16} className="inline mr-2" />
                    Servizio Desiderato
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-lato"
                  >
                    <option value="">Seleziona un servizio</option>
                    <option value="manicure">Manicure & Pedicure</option>
                    <option value="viso">Trattamenti Viso</option>
                    <option value="laser">Epilazione Laser</option>
                    <option value="massaggio">Massaggi Benessere</option>
                    <option value="occhi">Trattamenti Occhi</option>
                    <option value="depilazione">Depilazione</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2 font-lato">
                    <Calendar size={16} className="inline mr-2" />
                    Data Preferita
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-lato"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-main mb-2 font-lato">
                  <MessageSquare size={16} className="inline mr-2" />
                  Messaggio
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Descrivi le tue esigenze o richieste speciali..."
                  className="w-full px-4 py-3 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-lato"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-secondary text-white font-bold py-4 px-8 rounded-md hover:bg-accent transition-colors duration-300 font-lato text-lg"
              >
                Invia Prenotazione
              </button>
            </form>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-text-main mb-6 font-playfair text-center">Dove Siamo</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.9362336228053!2d9.17812797683195!3d45.85226190849616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786a3c1c6a54e3b%3A0x5b878e337d96584!2sVia%20Corogna%2C%207%2C%2022031%20Albavilla%20CO!5e0!3m2!1sit!2sit!4v1722274017351!5m2!1sit!2sit"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
