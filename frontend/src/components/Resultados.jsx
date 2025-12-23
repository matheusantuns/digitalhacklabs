import React from 'react'

const Resultados = () => {
  const casos = [
    {
      empresa: 'Case Google Ads - Clínica Especializada',
      industria: 'Google Ads / Saúde',
      desafio: 'Custo alto por lead e baixa conversão em ligações',
      solucao: 'Otimização completa de campanhas Google Ads e estratégia de conversão',
      resultados: [
        { metrica: 'Impressões', valor: '53,6 mil → 2,47 mil' },
        { metrica: 'Ligações Telefônicas', valor: '206 → 1,32 mil' },
        { metrica: 'Conversões', valor: '130 → 2,68 mil' }
      ],
      periodo: '6 meses de acompanhamento',
      custo: 'R$ 4,87 mil → R$ 34,8 mil',
      roi: 'ROI: +560%'
    }
  ]

  return (
    <section id="resultados" className="relative min-h-screen flex items-center pt-16 sm:pt-20">
      {/* Gradiente Sobreposto - EXATAMENTE IGUAL À HERO */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/70 to-slate-900"></div>
      
      {/* TODO O RESTO DO CÓDIGO PERMANECE EXATAMENTE IGUAL */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Cabeçalho */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            Case Google Ads
            <span className="block gradient-text mt-1 sm:mt-2">Resultados Reais</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto px-2 sm:px-0">
            Veja como transformamos um negócio usando nossa metodologia científica no Google Ads.
          </p>
        </div>

        {/* Grid de Casos - DESIGN ORIGINAL */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {casos.map((caso, index) => (
            <div key={index} className="premium-card overflow-hidden">
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Cabeçalho do Caso */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-6 lg:mb-8">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{caso.empresa}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm">
                        {caso.industria}
                      </span>
                      <span className="px-2 py-1 gradient-bg rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">{caso.periodo}</span>
                      <span className="px-2 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                        {caso.custo}
                      </span>
                      <span className="px-2 py-1 bg-purple-900/30 text-purple-400 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                        {caso.roi}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-3 lg:mt-0">
                    <a 
                      href="https://wa.me/5511976877867?text=Vi%20o%20case%20do%20Google%20Ads%20no%20site.%20Quero%20resultados%20iguais%20para%20minha%20clínica!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold text-sm sm:text-base whitespace-nowrap"
                    >
                      Quero esse resultado →
                    </a>
                  </div>
                </div>

                {/* Desafio e Solução */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
                  <div>
                    <h4 className="font-bold mb-2 sm:mb-3 lg:mb-4 flex items-center text-sm sm:text-base">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mr-2 sm:mr-3"></span>
                      Situação Antes
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm">{caso.desafio}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2 sm:mb-3 lg:mb-4 flex items-center text-sm sm:text-base">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full mr-2 sm:mr-3"></span>
                      Após Implementação
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm">{caso.solucao}</p>
                  </div>
                </div>

                {/* Resultados */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                  {caso.resultados.map((resultado, idx) => (
                    <div key={idx} className="bg-slate-800/50 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-slate-700">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text mb-1 sm:mb-2">{resultado.valor}</div>
                      <div className="text-slate-400 text-xs sm:text-sm">{resultado.metrica}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-0">
            Sua clínica pode ser nosso próximo case de sucesso no Google Ads.
          </p>
          <a 
            href="https://wa.me/5511976877867?text=Quero%20resultados%20iguais%20ao%20case%20do%20Google%20Ads!"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg inline-block px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            QUERO RESULTADOS IGUAIS
          </a>
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

export default Resultados