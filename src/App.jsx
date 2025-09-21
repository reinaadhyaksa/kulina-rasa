import { useState } from 'react';
import Header from './components/Header';
import Homepage from './components/HomePage';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Homepage />
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
