import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-overlay pt-16 sm:pt-20">
      {/* Gradiente Sobreposto */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/70 to-slate-900"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            {/* Título Responsivo */}
            <h1 className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              Potencialize Seu Comércio Local com
              <span className="block gradient-text mt-1 sm:mt-2">Marketing Comprovado</span>
            </h1>

            {/* Frase de Impacto Responsiva */}
            <div className="mb-6 sm:mb-10 max-w-3xl mx-auto px-2">
              <div className="border-l-2 sm:border-l-4 border-blue-600 pl-4 sm:pl-6 py-2 sm:py-4 mb-4 sm:mb-6">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-slate-300 leading-relaxed">
                  "Não acredite em tudo que te falam,
                  <span className="block">acredite em tudo que te provam"</span>
                </p>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed px-2 sm:px-0">
                Na Digital Hack Labs, aplicamos metodologia científica ao marketing digital.
                Cada estratégia é testada, validada e comprovada antes da implementação.
                Seu crescimento é baseado em dados, não em suposições.
              </p>
            </div>

            {/* CTA Principal Responsivo - BOTÕES COM MAIS ESPAÇAMENTO */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0">
              <a
                href="https://wa.me/5511976877867?text=Olá%20Digital%20Hack!%20Gostaria%20de%20agendar%20uma%20consulta%20estratégica%20para%20meu%20negócio."
                target="_blank"
                rel="noopener noreferrer"
                className="accent-bg px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:opacity-90 transition-opacity text-center shadow-xl sm:shadow-2xl shadow-emerald-500/20 whitespace-nowrap"
              >
                AGENDAR CONSULTA
              </a>
              <a
                href="#metodologia"
                className="border border-slate-700 sm:border-2 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-slate-800/30 transition-colors text-center whitespace-nowrap"
              >
                CONHECER METODOLOGIA
              </a>
            </div>

            {/* QUADRADOS COM LOGOS - ESPAÇAMENTO AUMENTADO */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 px-2 sm:px-0">
              {/* Google Ads */}
              <div className="premium-card p-5 sm:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 sm:mb-5 mx-auto">
                  <div className="text-white font-bold text-xl sm:text-2xl">G</div>
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-2 text-center">Google Ads</h3>
                <p className="text-slate-400 text-xs sm:text-sm text-center">
                  Tráfego qualificado para sua clínica
                </p>
              </div>

              {/* Instagram Ads */}
              <div className="premium-card p-5 sm:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 sm:mb-5 mx-auto">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-2 text-center">Instagram Ads</h3>
                <p className="text-slate-400 text-xs sm:text-sm text-center">
                  Autoridade e engajamento social
                </p>
              </div>

              {/* TikTok Ads - COM ÍCONE CORRETO */}
              <div className="premium-card p-5 sm:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center mb-4 sm:mb-5 mx-auto">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-2 text-center">TikTok Ads</h3>
                <p className="text-slate-400 text-xs sm:text-sm text-center">
                  Público jovem e viralização
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    

      {/* Estilos inline para a imagem de fundo */}
      <style jsx>{`
        .hero-overlay {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.8) 100%),
                      url('/hero.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        @media (max-width: 768px) {
          .hero-overlay {
            background-attachment: scroll;
          }
        }
        
        @media (min-width: 769px) {
          .hero-overlay {
            background-attachment: fixed;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero