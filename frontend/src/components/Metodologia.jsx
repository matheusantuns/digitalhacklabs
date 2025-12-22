import React from 'react'

const Metodologia = () => {
  const analiseCompleta = {
    titulo: "Análise Completa de Performance",
    descricao: "Realizamos uma auditoria detalhada do seu marketing digital para identificar oportunidades ocultas e problemas críticos.",
    itens: [
      {
        titulo: "Auditoria de Campanhas",
        descricao: "Análise profunda de todas as suas campanhas de tráfego pago e orgânico.",
        pontos: [
          "Avaliação de estrutura de campanhas",
          "Análise de segmentação e público-alvo",
          "Review de copy e criativos",
          "Verificação de configurações técnicas"
        ]
      },
      {
        titulo: "Diagnóstico de Conversão",
        descricao: "Identificação de gargalos no seu funil de conversão.",
        pontos: [
          "Análise de taxas de conversão por etapa",
          "Mapeamento da jornada do cliente",
          "Identificação de pontos de abandono",
          "Testes de usabilidade e experiência"
        ]
      },
      {
        titulo: "Análise Competitiva",
        descricao: "Benchmarking contra seus principais concorrentes.",
        pontos: [
          "Monitoramento de estratégias concorrentes",
          "Análise de posicionamento de mercado",
          "Identificação de gaps competitivos",
          "Oportunidades de diferenciação"
        ]
      }
    ]
  }

  const recomendacoes = {
    titulo: "Recomendações Estratégicas Baseadas em Dados",
    descricao: "Após a análise completa, entregamos um plano de ação com recomendações práticas e priorizadas.",
    categorias: [
      {
        nome: "Otimizações Imediatas",
        cor: "emerald",
        itens: [
          "Ajustes em campanhas com baixo ROI",
          "Correções técnicas críticas",
          "Otimização de landing pages"
        ]
      },
      {
        nome: "Oportunidades de Crescimento",
        cor: "blue",
        itens: [
          "Expansão para novos públicos",
          "Testes de novos canais",
          "Otimização de funil de vendas"
        ]
      },
      {
        nome: "Estratégias de Longo Prazo",
        cor: "purple",
        itens: [
          "Plano de expansão de mercado",
          "Desenvolvimento de marca",
          "Automação de processos"
        ]
      }
    ]
  }

  return (
    <section id="metodologia" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Responsivo */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-800/50 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium tracking-widest">METODOLOGIA CIENTÍFICA</span>
          </div>
          
          <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            Como Identificamos <span className="gradient-text">Oportunidades de Crescimento</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto px-2 sm:px-0">
            Nossa abordagem sistemática transforma dados complexos em insights acionáveis
            e recomendações práticas para escalar seu negócio.
          </p>
        </div>

        {/* Análise Completa - Layout Responsivo */}
        <div className="mb-12 sm:mb-16 lg:mb-24">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            <div className="px-2 sm:px-0">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">{analiseCompleta.titulo}</h3>
              <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-6 sm:mb-8">{analiseCompleta.descricao}</p>
              
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                {analiseCompleta.itens.map((item, index) => (
                  <div key={index} className="premium-card p-4 sm:p-6">
                    <div className="flex items-start mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg gradient-bg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                        <span className="font-bold text-white text-sm sm:text-base">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">{item.titulo}</h4>
                        <p className="text-slate-400 text-xs sm:text-sm">{item.descricao}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-1 sm:space-y-2 ml-11 sm:ml-14">
                      {item.pontos.map((ponto, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-300 text-xs sm:text-sm">{ponto}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Card Lateral Responsivo */}
            <div className="premium-card p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">O Que Você Recebe</h4>
                <p className="text-slate-400 text-xs sm:text-sm">Um relatório completo com insights acionáveis</p>
              </div>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="p-3 sm:p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mr-2 sm:mr-3"></div>
                    <h5 className="font-semibold text-sm sm:text-base">Problemas Críticos Identificados</h5>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm">Lista priorizada dos principais problemas que estão limitando seu crescimento.</p>
                </div>
                
                <div className="p-3 sm:p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
                    <h5 className="font-semibold text-sm sm:text-base">Oportunidades Inexploradas</h5>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm">Áreas de alto potencial que não estão sendo aproveitadas atualmente.</p>
                </div>
                
                <div className="p-3 sm:p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full mr-2 sm:mr-3"></div>
                    <h5 className="font-semibold text-sm sm:text-base">Recomendações Práticas</h5>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm">Passo a passo para implementar as otimizações identificadas.</p>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-800">
                <a 
                  href="https://wa.me/5511976877867?text=Gostaria%20de%20agendar%20uma%20análise%20completa%20do%20meu%20marketing%20digital."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center accent-bg py-2 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
                >
                  Agendar Análise Completa
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recomendações Estratégicas Responsivas */}
        <div className="mb-12 sm:mb-16 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">{recomendacoes.titulo}</h3>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto px-2 sm:px-0">{recomendacoes.descricao}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {recomendacoes.categorias.map((categoria, index) => (
              <div key={index} className="premium-card p-4 sm:p-6 lg:p-8">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-${categoria.cor}-900/30 flex items-center justify-center mb-4 sm:mb-6`}>
                  <svg className={`w-5 h-5 sm:w-6 sm:h-6 text-${categoria.cor}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">{categoria.nome}</h4>
                
                <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                  {categoria.itens.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-${categoria.cor}-900/20 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0`}>
                        <div className={`w-2 h-2 rounded-full bg-${categoria.cor}-500`}></div>
                      </div>
                      <span className="text-slate-300 text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final Responsivo - ATUALIZADO SEM "GRATUITO" */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-24">
          <div className="premium-card p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700">
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-4 sm:mb-6">Pronto para uma Análise Completa do Seu Marketing?</h3>
            <p className="text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2 sm:px-0">
              Agende uma consulta estratégica e receba um diagnóstico detalhado
              das oportunidades de crescimento do seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
              <a 
                href="https://wa.me/5511976877867?text=Quero%20agendar%20uma%20consulta%20estratégica%20para%20receber%20uma%20análise%20completa%20do%20meu%20marketing."
                target="_blank"
                rel="noopener noreferrer"
                className="accent-bg px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                AGENDAR CONSULTA
              </a>
              
              <a
                href="#resultados"
                className="border border-slate-700 sm:border-2 px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-slate-800/30 transition-colors whitespace-nowrap"
              >
                VER CASOS
              </a>
            </div>
            
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-800">
              <p className="text-slate-500 text-xs sm:text-sm">
                ⚡ Consulta com especialista • Análise detalhada • Valor por projeto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Metodologia