
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-100 selection:text-amber-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Partners />
      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
};

export default App;
