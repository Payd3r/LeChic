import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Products from './components/Products';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <About />
        <Products />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
