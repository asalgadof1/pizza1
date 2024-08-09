import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Navbar from './Componentes/Navbar';
import Home from './Componentes/Home';
import Footer from './Componentes/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};


export default App
