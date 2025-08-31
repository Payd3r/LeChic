import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy loading dei componenti per migliorare le prestazioni
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Products = lazy(() => import('./components/Products'));
const Results = lazy(() => import('./components/Results'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Componente di loading
const SectionLoader = () => (
  <div className="min-h-96 flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-700 mx-auto mb-4"></div>
      <p className="text-slate-600 font-medium">Caricamento...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Products />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Results />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-32 bg-slate-100 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
