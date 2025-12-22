import React from 'react'

const Resultados = () => {
  const casos = [
    {
      empresa: 'Case de Sucesso - Clínica Especializada',
      industria: 'Saúde / Especializada',
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
    <section id="resultados" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Responsivo */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-800/50 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium tracking-widest">RESULTADOS COMPROVADOS</span>
          </div>
          
          <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            Resultados Reais, <span className="gradient-text">Números Reais</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto px-2 sm:px-0">
            Veja como transformamos um negócio usando nossa metodologia científica de marketing.
          </p>
        </div>

        {/* Grid de Casos Responsivo */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {casos.map((caso, index) => (
            <div key={index} className="premium-card overflow-hidden">
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Cabeçalho do Caso Responsivo */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-6 lg:mb-8">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{caso.empresa}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-slate-800 rounded-full text-xs sm:text-sm">{caso.industria}</span>
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
                      href="https://wa.me/5511976877867?text=Gostei%20dos%20resultados%20mostrados.%20Podemos%20conversar%20sobre%20meu%20negócio?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold text-sm sm:text-base whitespace-nowrap"
                    >
                      Quero esse resultado →
                    </a>
                  </div>
                </div>

                {/* Desafio e Solução Responsivo */}
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

                {/* Resultados Responsivos */}
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

        {/* CTA de Resultados Responsivo */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-0">
            Seu negócio pode ser nosso próximo case de sucesso.
          </p>
          <a 
            href="https://wa.me/5511976877867?text=Quero%20ser%20o%20próximo%20case%20de%20sucesso%20da%20Digital%20Hack!"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg inline-block px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            QUERO RESULTADOS COMPROVADOS
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resultados