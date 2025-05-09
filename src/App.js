import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AgenteIA from './components/Produtos/AgenteIA';
import Whitelabel from './components/Produtos/Whitelabel';
import Testimonials from './components/Testimonials/Testimonials';
import CarrosselClientes from './components/CarrosselClientes/CarrosselClientes';
import Contato from './components/Contato/Contato';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AgenteIA />
      <Whitelabel />
      <Testimonials />
      <CarrosselClientes />
      <Contato />
    </div>
  );
}

export default App;
