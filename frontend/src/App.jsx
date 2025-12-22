import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Metodologia from './components/Metodologia'
import Resultados from './components/Resultados'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <Sobre />
      <Metodologia />
      <Resultados />
      <Contato />
      <Footer />
    </div>
  )
}

export default App