import React from 'react'

const Contato = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Informações Responsivas */}
            <div className="px-2 sm:px-0">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-800/50 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium tracking-widest">INICIE UMA CONVERSA</span>
              </div>
              
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                Vamos Transformar Seu
                <span className="block gradient-text mt-1 sm:mt-2">Negócio Juntos</span>
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-8 sm:mb-12">
                Agende uma consulta estratégica gratuita. Nossos especialistas
                analisarão seu negócio e apresentarão um plano personalizado
                para escalar seus resultados.
              </p>
              
              {/* Diferenciais do Atendimento Responsivos */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Consulta Estratégica Gratuita</h4>
                    <p className="text-slate-400 text-xs sm:text-sm">30 minutos de análise especializada do seu negócio.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Resposta em até 2 horas</h4>
                    <p className="text-slate-400 text-xs sm:text-sm">Nosso time responde todas as consultas rapidamente.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Confidencialidade Garantida</h4>
                    <p className="text-slate-400 text-xs sm:text-sm">Seus dados estão protegidos por nossa política de privacidade.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário Responsivo */}
            <div className="premium-card p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 sm:mb-8">Agendar Consulta Estratégica</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1 sm:mb-2">Nome Completo</label>
                  <input 
                    type="text"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1 sm:mb-2">E-mail Corporativo</label>
                  <input 
                    type="email"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1 sm:mb-2">Telefone/WhatsApp</label>
                  <input 
                    type="tel"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1 sm:mb-2">Faturamento Mensal Atual</label>
                  <select className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm">
                    <option>Selecione uma faixa</option>
                    <option>Até R$ 10.000</option>
                    <option>R$ 10.000 - R$ 50.000</option>
                    <option>R$ 50.000 - R$ 200.000</option>
                    <option>R$ 200.000 - R$ 500.000</option>
                    <option>Acima de R$ 500.000</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1 sm:mb-2">Principal Desafio do Seu Negócio</label>
                  <textarea 
                    rows="3"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    placeholder="Descreva brevemente seu principal desafio..."
                  ></textarea>
                </div>
                
                <button 
                  onClick={() => window.open('https://wa.me/5511999999999?text=Preenchi%20o%20formulário%20no%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20estratégica.', '_blank')}
                  className="w-full accent-bg py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:opacity-90 transition-opacity"
                >
                  AGENDAR CONSULTA ESTRATÉGICA
                </button>
                
                <p className="text-slate-500 text-xs sm:text-sm text-center">
                  Você será redirecionado para o WhatsApp para confirmar o horário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato