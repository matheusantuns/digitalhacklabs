import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo com imagem AUMENTADA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a href="#home" className="flex items-center space-x-3 sm:space-x-4 no-underline">
              {/* LOGO MUITO MAIOR - APENAS A IMAGEM AUMENTADA */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Digital Hack Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%231e40af'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='40' fill='white' font-family='Arial'%3EDH%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="flex flex-col">
                {/* TEXTO MANTIDO NO MESMO TAMANHO */}
                <h1 className="heading-font text-lg sm:text-xl font-bold text-white tracking-tight leading-none">
                  DIGITAL <span className="text-blue-400">HACK </span> LABS
                </h1>
                <p className="text-[10px] sm:text-xs text-slate-400 tracking-wider font-medium">
                  ESPECIALISTAS EM TRÁFEGO PAGO
                </p>
              </div>
            </a>
          </div>

          {/* Restante do código mantido igual */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <a href="#home" className="nav-link text-sm tracking-wider px-4 py-2 rounded-lg hover:bg-slate-800/30 transition-all duration-300">HOME</a>
            <a href="#sobre" className="nav-link text-sm tracking-wider px-4 py-2 rounded-lg hover:bg-slate-800/30 transition-all duration-300">SOBRE</a>
            <a href="#metodologia" className="nav-link text-sm tracking-wider px-4 py-2 rounded-lg hover:bg-slate-800/30 transition-all duration-300">METODOLOGIA</a>
            <a href="#resultados" className="nav-link text-sm tracking-wider px-4 py-2 rounded-lg hover:bg-slate-800/30 transition-all duration-300">CASES</a>
            
            <div className="relative ml-2 pl-2 xl:ml-4 xl:pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-px before:bg-slate-700">
              <a 
                href="https://wa.me/5511976877867?text=Olá%20Digital%20Hack!%20Gostaria%20de%20agendar%20uma%20consulta%20estratégica%20para%20meu%20negócio."
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 active:scale-95 text-xs sm:text-sm tracking-wide whitespace-nowrap inline-flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <span>AGENDAR CONSULTA</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button mantido igual */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-800/30 transition-all duration-300 group"
            aria-label="Menu"
          >
            {/* ... */}
          </button>
        </div>

        {/* Mobile Menu mantido igual */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          {/* ... */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar