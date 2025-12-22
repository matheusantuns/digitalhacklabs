import React from 'react'

const Footer = () => {
  const whatsappMessage = encodeURIComponent("Olá Digital Hack Labs! Gostaria de agendar uma consulta estratégica para minha clínica/consultório. Pode me ajudar?")
  const whatsappLink = `https://wa.me/5511976877867?text=${whatsappMessage}`

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              {/* Logo */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
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
              <div>
                <h2 className="heading-font text-xl sm:text-2xl font-bold text-white tracking-tight">
                  DIGITAL <span className="text-blue-400">HACK</span> LABS
                </h2>
                <p className="text-sm text-slate-400 hidden sm:block mt-1">MARKETING LOCAL PARA CLÍNICAS</p>
              </div>
            </div>
            
            <p className="text-slate-400 mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
              Especialistas em marketing digital científico para clínicas e consultórios. 
              Transformamos sua presença digital com estratégias baseadas em dados reais.
            </p>
            
            {/* Informações de Contato */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <div>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-emerald-400 transition-colors text-sm sm:text-base font-medium block"
                  >
                    (11) 97687-7867
                  </a>
                  <p className="text-slate-500 text-xs mt-1">Atendimento via WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <div>
                  <p className="text-slate-300 text-sm sm:text-base">R. Estado de Israel, 107</p>
                  <p className="text-slate-300 text-sm sm:text-base">Vila Clementino</p>
                  <p className="text-slate-300 text-sm sm:text-base">São Paulo - SP, 04022-000</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <p className="text-slate-300 text-sm sm:text-base">CNPJ: 54.449.697/0001-01</p>
                  <p className="text-slate-500 text-xs mt-1">Empresa regularizada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-bold mb-4 sm:mb-6 text-slate-300 text-sm sm:text-base">MENU</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Home</a></li>
              <li><a href="#sobre" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="#metodologia" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Metodologia Científica</a></li>
              <li><a href="#resultados" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Casos de Sucesso</a></li>
              <li><a href="#contato" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Agendar Consulta</a></li>
            </ul>

            {/* Instagram */}
            <div className="mt-6 sm:mt-8">
              <a 
                href="https://www.instagram.com/digital.clinicas?igsh=dzBsY2Fnd3E3Mjd1&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-slate-400 hover:text-pink-500 transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Siga nosso Instagram</span>
              </a>
            </div>
          </div>

          {/* Atendimento e CTA */}
          <div>
            <h3 className="font-bold mb-4 sm:mb-6 text-slate-300 text-sm sm:text-base">HORÁRIO</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Segunda a Sexta: 9h às 18h</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Foco em Clínicas e Consultórios</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Consultoria Especializada</span>
              </li>
            </ul>
            
            {/* WhatsApp CTA */}
            <div className="mt-6 sm:mt-8">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors w-full text-center hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <span>AGENDAR CONSULTA</span>
              </a>
              <p className="text-slate-500 text-xs text-center mt-2">
                Clique para enviar mensagem automática
              </p>
            </div>
          </div>
        </div>

        {/* Linha divisória e informações legais */}
        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <p className="text-slate-500 text-xs sm:text-sm">
                © {new Date().getFullYear()} Digital Hack Labs Marketing Científico
              </p>
              <p className="text-slate-600 text-xs mt-1">
                CNPJ: 54.449.697/0001-01 - R. Estado de Israel, 107 - Vila Clementino, SP
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500">
              <a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-blue-400 transition-colors">LGPD</a>
            </div>
          </div>
          
          <p className="text-slate-600 text-xs text-center mt-4 sm:mt-6 max-w-2xl mx-auto">
            Marketing digital baseado em dados reais para clínicas e consultórios que buscam crescimento sustentável.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer