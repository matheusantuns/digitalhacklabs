import React from 'react'

const Sobre = () => {
  return (
    <section id="sobre" className="relative min-h-screen flex items-center pt-16 sm:pt-20">
      {/* Gradiente Sobreposto - EXATAMENTE IGUAL À HERO */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/70 to-slate-900"></div>
      
      {/* TODO O RESTO DO CÓDIGO PERMANECE EXATAMENTE IGUAL */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="px-2 sm:px-0">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-800/50 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium tracking-widest">SOBRE A DIGITAL HACK</span>
            </div>
            
            <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              Mais do que uma Agência,
              <span className="block gradient-text mt-1 sm:mt-2">Um Laboratório de Performance</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
                Somos uma consultoria estratégica que aplica metodologia científica ao marketing digital.
                Enquanto outras empresas trabalham com base em suposições, nós trabalhamos com base em dados.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
                Cada estratégia passa por nosso rigoroso processo de validação antes de ser implementada.
                Testamos hipóteses, analisamos resultados e otimizamos continuamente para garantir o máximo desempenho.
              </p>
              
              <div className="pt-4 sm:pt-6 border-t border-slate-800">
                <a 
                  href="https://wa.me/5511976877867?text=Gostaria%20de%20conhecer%20melhor%20a%20metodologia%20da%20Digital%20Hack."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm sm:text-base"
                >
                  <span>Conversar com um consultor</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Grid de Métricas Responsiva */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <div className="premium-card p-4 sm:p-6 lg:p-8">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-2 sm:mb-3 lg:mb-4">42+</div>
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">Nichos Validados</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Estratégias comprovadas em diversos segmentos de mercado.</p>
            </div>
            
            <div className="premium-card p-4 sm:p-6 lg:p-8">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-2 sm:mb-3 lg:mb-4">500+</div>
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">Experimentos</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Testes controlados realizados em nosso laboratório.</p>
            </div>
            
            <div className="premium-card p-4 sm:p-6 lg:p-8">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-2 sm:mb-3 lg:mb-4">100%</div>
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">Baseado em Dados</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Todas as decisões estratégicas são respaldadas por dados.</p>
            </div>
            
            <div className="premium-card p-4 sm:p-6 lg:p-8">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-2 sm:mb-3 lg:mb-4">24/7</div>
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">Monitoramento</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Acompanhamento contínuo de performance e resultados.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Estilo do Background - IGUAL AO DA HERO */}
      <style jsx>{`
        section {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.8) 100%);
          position: relative;
        }
      `}</style>
    </section>
  )
}

export default Sobre