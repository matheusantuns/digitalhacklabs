import React from 'react'

const Metodologia = () => {
  const scrollToResultados = (e) => {
    e.preventDefault();
    const resultadosSection = document.getElementById('resultados');
    if (resultadosSection) {
      resultadosSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="metodologia" className="relative min-h-screen flex items-center pt-16 sm:pt-20 bg-slate-900">
      {/* Gradiente Sobreposto - IGUAL À HERO */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/70 to-slate-900"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="premium-card p-8 sm:p-10">
            {/* Badge OFERTA GRATUITA */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              <span className="text-white text-sm font-bold tracking-wider">
                OFERTA GRATUITA
              </span>
            </div>

            {/* Título Principal - COM MUDANÇA SOLICITADA */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Pré diagnóstico e plano de ação
            </h2>
            
            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-blue-400 font-bold mb-4">
              Agora Totalmente Grátis
            </p>

            {/* Descrição */}
            <p className="text-base text-slate-300 mb-8 leading-relaxed">
              Diagnóstico detalhado do seu marketing digital com relatório completo de oportunidades. 
              
            </p>

            {/* Valores - LAYOUT EXATO DA IMAGEM */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Valor Normal */}
              <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="text-sm text-slate-400 mb-2 font-medium">Preço</div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-400 line-through">R$ 500,00</div>
                <div className="text-sm text-slate-500 mt-2">→</div>
              </div>
              
              {/* Oferta Especial */}
              <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border-2 border-blue-500">
                <div className="text-sm text-blue-400 mb-2 font-medium">Oferta Especial</div>
                <div className="text-3xl sm:text-4xl font-bold text-white">R$ 0,00</div>
              </div>
            </div>

            {/* Botões - COM MAIS ESPAÇAMENTO */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center">
              {/* Botão WhatsApp - MAIOR ESPAÇAMENTO */}
              <a 
                href="https://wa.me/5511976877867?text=Olá%20Digital%20Hack!%20Quero%20agendar%20meu%20Pré%20diagnóstico%20e%20plano%20de%20ação%20gratuito%20de%20R$500%20por%20R$0!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center w-full sm:w-auto"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.012-.57-.012-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.958 17.8c-.198.574-1.114 1.05-1.813 1.104-.447.033-.99.063-2.89-.641-2.358-.884-4.332-3.03-5.963-5.431-2.016-2.968-2.245-6.63-1.188-8.795.33-.67 1.036-1.081 1.767-1.081.198 0 .396.008.578.025.473.041.955.156 1.396.347.36.165.64.438.785.774.198.457.661 1.8.723 1.931.062.132.099.28.025.446-.074.165-.124.248-.273.397-.149.149-.297.347-.416.496-.124.149-.248.297-.124.578.124.281.561 1.203 1.213 1.943.826.934 1.529 1.479 1.836 1.653.198.116.397.149.595.008.198-.14.843-.645 1.075-.86.231-.215.462-.215.694-.149.231.066.99.413 1.16.488.173.074.297.124.347.231.05.107.05.595-.148 1.169z"/>
                </svg>
                AGENDAR CONSULTA
              </a>

              {/* Botão Ver Cases - MAIOR ESPAÇAMENTO */}
              <button
                onClick={scrollToResultados}
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors flex items-center justify-center w-full sm:w-auto"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                VER CASES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <style jsx>{`
        section {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.8) 100%);
          position: relative;
        }
        
        section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
      `}</style>
    </section>
  )
}

export default Metodologia