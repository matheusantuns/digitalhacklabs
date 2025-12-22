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

            {/* CTA Principal Responsivo */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0">
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

            {/* Diferenciais Responsivos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
              <div className="premium-card p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-bg flex items-center justify-center mb-3 sm:mb-4 mx-auto sm:mx-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-center sm:text-left">Método Científico</h3>
                <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">Estratégias validadas através de testes controlados e análise de dados.</p>
              </div>

              <div className="premium-card p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-bg flex items-center justify-center mb-3 sm:mb-4 mx-auto sm:mx-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-center sm:text-left">Resultados Mensuráveis</h3>
                <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">KPIs claros e relatórios detalhados de performance.</p>
              </div>

              <div className="premium-card p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-bg flex items-center justify-center mb-3 sm:mb-4 mx-auto sm:mx-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-center sm:text-left">Execução Especializada</h3>
                <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">Equipe de especialistas focada em performance e conversão.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator Responsivo */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border border-slate-600 sm:border-2 border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:w-1 sm:h-3 bg-blue-600 rounded-full mt-2"></div>
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