"use client";

import { useState } from "react";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <style jsx>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="bg-red-600 rounded-xl px-6 py-4 shadow-lg hover:bg-red-700 transition-colors duration-200">
                <div className="text-center">
                  <div className="text-white font-black text-lg leading-tight tracking-wide font-sans">
                    <div>ECZANE</div>
                    <div>KAPIMDA</div>
                  </div>
                </div>
              </a>
            </div>
            
            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-12">
              <a href="#" className="text-gray-800 hover:text-red-600 font-bold transition-colors duration-200 tracking-wide font-sans">
                Ana Sayfa
              </a>
              <a href="#hakkimizda" className="text-gray-800 hover:text-red-600 font-bold transition-colors duration-200 tracking-wide font-sans">
                Hakkımızda
              </a>
              <a href="#hizmetler" className="text-gray-800 hover:text-red-600 font-bold transition-colors duration-200 tracking-wide font-sans">
                Hizmetler
              </a>
              <a href="#sss" className="text-gray-800 hover:text-red-600 font-bold transition-colors duration-200 tracking-wide font-sans">
                S.S.S
              </a>
              <a href="#iletisim" className="text-gray-800 hover:text-red-600 font-bold transition-colors duration-200 tracking-wide font-sans">
                İletişim
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                className="text-gray-800 hover:text-red-600 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className="md:hidden fixed top-24 right-4 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-50">
            <nav className="px-4 py-4 space-y-3">
              <a 
                href="#" 
                className="block text-gray-800 hover:text-red-600 font-bold transition-colors duration-200 tracking-wide font-sans py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ana Sayfa
              </a>
              <a 
                href="#hakkimizda" 
                className="block text-gray-800 hover:text-red-600 font-bold transition-colors duration-200 tracking-wide font-sans py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hakkımızda
              </a>
              <a 
                href="#hizmetler" 
                className="block text-gray-800 hover:text-red-600 font-bold transition-colors duration-200 tracking-wide font-sans py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hizmetler
              </a>
              <a 
                href="#sss" 
                className="block text-gray-800 hover:text-red-600 font-bold transition-colors duration-200 tracking-wide font-sans py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                S.S.S
              </a>
              <a 
                href="#iletisim" 
                className="block text-gray-800 hover:text-red-600 font-bold transition-colors duration-200 tracking-wide font-sans py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                İletişim
              </a>
            </nav>
          </div>
        </>
      )}

      <main className="pt-24">
        {/* 1. HERO Section */}
        <section className="relative bg-white min-h-screen flex items-center py-20 overflow-hidden">
          {/* Simplified Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-red-200 rounded-full opacity-15" style={{animation: 'float 6s ease-in-out infinite'}}></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 bg-red-300 rounded-full opacity-20" style={{animation: 'float 8s ease-in-out infinite reverse'}}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="text-gray-900 block drop-shadow-sm">Eczane</span>
                  <span className="text-red-600 block drop-shadow-sm">Kapınızda!</span>
                </h1>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium drop-shadow-sm">
                  Adana'nın profesyonel kurye ekibi olarak, lisanslı eczanelerden 
                  ilaçlarınızı hızlı ve güvenilir şekilde adresinize getiriyoruz.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button 
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 text-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                    style={{
                      animation: 'breathe 1s ease-in-out infinite'
                    }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    Hemen Ara
                  </button>
                  <button 
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 text-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                    style={{
                      animation: 'breathe 1s ease-in-out infinite',
                      animationDelay: '0.5s'
                    }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"></path>
                    </svg>
                    WhatsApp
                  </button>
                </div>

                {/* Features - Horizontal Layout */}
                <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">✅</span>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">7/24</p>
                      <p className="text-gray-600 text-sm">Hizmet</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🛡️</span>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">Güvenli</p>
                      <p className="text-gray-600 text-sm">Teslimat</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="text-2xl mr-3">⚡</span>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">30 Dakika</p>
                      <p className="text-gray-600 text-sm">Garanti</p>
                    </div>
                  </div>
                </div>

                {/* Dipnot */}
                <div className="mt-8 p-4 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-xl shadow-md backdrop-blur-sm">
                  <p className="text-sm text-red-800 text-center font-bold">
                    ⚠️ <strong>Önemli:</strong> Biz eczane değiliz, profesyonel bir KURYE ekibiyiz. 
                    Lisanslı eczanelerle işbirliği halinde sadece reçetesiz ilaçlar için hizmet veriyoruz.
                  </p>
                </div>
              </div>

              {/* Right Content - Special Services */}
              <div className="hidden lg:block">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200 backdrop-blur-sm">
                  {/* Header with location */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 rounded-full flex items-center shadow-lg">
                      <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-white font-bold">Adana Geneli Hizmet</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">
                      <span className="text-red-600">Özel</span> <span className="text-gray-900">Hizmetlerimiz</span>
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
                  </div>

                  {/* Service Cards Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Acil İlaç */}
                    <div className="bg-white rounded-xl p-4 text-center hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1">Acil İlaç</h4>
                      <p className="text-red-600 font-bold text-sm">15 Dakika</p>
                    </div>

                    {/* Cinsel Sağlık */}
                    <div className="bg-white rounded-xl p-4 text-center hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">♂♀</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1">Cinsel Sağlık</h4>
                      <p className="text-purple-600 font-bold text-sm">Gizli Paket</p>
                    </div>

                    {/* Kronik Hastalık */}
                    <div className="bg-white rounded-xl p-4 text-center hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🩺</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1">Kronik Hastalık</h4>
                      <p className="text-green-600 font-bold text-sm">Aylık Plan</p>
                    </div>

                    {/* Bebek & Çocuk */}
                    <div className="bg-white rounded-xl p-4 text-center hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">👶</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1">Bebek & Çocuk</h4>
                      <p className="text-orange-600 font-bold text-sm">Özenli Taşıma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. HİZMETLER Section */}
        <section id="hizmetler" className="py-20 bg-gray-50 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-red-600">3 Adımda</span> <span className="text-gray-900">Hızlı Sipariş</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sadece 3 adımda ilaçlarınız kapınızda
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-3xl">📱</span>
                  </div>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-lg">1</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sipariş Ver</h3>
                <p className="text-gray-600 text-lg">
                  İster hemen arayın ister whatsapp'tan yazarak sipariş verin.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-3xl">💊</span>
                  </div>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-lg">2</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hızlı Hazırlık</h3>
                <p className="text-gray-600 text-lg">
                  Partner eczaneden ilaçlarınız hazırlanır ve güvenle paketlenir.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🏠</span>
                  </div>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-lg">3</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kapınızda!</h3>
                <p className="text-gray-600 text-lg">
                  30 dakika içinde güvenle adresinize teslim ediyoruz.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-full transition-colors duration-200 text-lg inline-block">
                Hemen Sipariş Ver
              </a>
            </div>
          </div>
        </section>

        {/* 3. HAKKIMIZDA Section */}
        <section id="hakkimizda" className="py-20 bg-white min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-red-600">Hakkı</span><span className="text-gray-900">mızda</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Eczane Kapımda olarak, Adana'da profesyonel kurye hizmeti veren bir ekibiz. 
                  2020 yılından bu yana, lisanslı eczanelerle işbirliği halinde ilaç ihtiyaçlarınızı 
                  en hızlı ve güvenilir şekilde kapınıza getiriyoruz.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Sadece reçetesiz ilaçlar için hizmet veren kurye ekibimiz, 7/24 hizmet vererek 
                  sağlığınızı her zaman ön planda tutuyor. Fiyatlandırmamız ilaç bedeli + kurye ücreti şeklindedir.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">10K+</div>
                    <div className="text-gray-600">Mutlu Müşteri</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">30</div>
                    <div className="text-gray-600">Dakika Garanti</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                    <div className="text-gray-600">Hizmet</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                    <div className="text-gray-600">Güvenli</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  <span className="text-red-600">Vizyo</span><span className="text-gray-900">numuz</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  Türkiye'nin en güvenilir ve hızlı ilaç kurye hizmeti olmak, 
                  her evde sağlığa kolay erişim sağlamak.
                </p>
                
                <h3 className="text-2xl font-bold mb-6">
                  <span className="text-red-600">Misyo</span><span className="text-gray-900">numuz</span>
                </h3>
                <p className="text-gray-600">
                  Lisanslı eczanelerle işbirliği halinde, reçetesiz ilaç ihtiyaçlarınızı 
                  teknoloji ile buluşturarak güvenli ve hızlı çözümler sunmak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. S.S.S Section */}
        <section id="sss" className="py-20 bg-gray-50 min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-red-600">Sık Sorulan</span> <span className="text-gray-900">Sorular</span>
              </h2>
              <p className="text-lg text-gray-600">
                Merak ettiğiniz sorulardan bazıları
              </p>
            </div>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors hover:bg-gray-50"
                  onClick={() => toggleFAQ(0)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      📱 Nasıl sipariş veririm?
                    </h3>
                    <div className="ml-6 flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                          openFAQ === 0 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                {openFAQ === 0 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      İhtiyacınız olan reçetesiz ilaçların listesini WhatsApp üzerinden göndermeniz yeterli. 
                      Adres bilgilerinizi aldıktan sonra partner eczaneden temin edip 30 dakika içinde adresinize teslim ediyoruz.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors hover:bg-gray-50"
                  onClick={() => toggleFAQ(1)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      ⚕️ Reçeteli ilaç alıyor musunuz?
                    </h3>
                    <div className="ml-6 flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                          openFAQ === 1 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                {openFAQ === 1 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Hayır, biz sadece reçetesiz ilaçlar için kurye hizmeti veriyoruz. 
                      Reçeteli ilaçlar için doğrudan eczaneyi ziyaret etmeniz gerekmektedir.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors hover:bg-gray-50"
                  onClick={() => toggleFAQ(2)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      💰 Fiyatlandırma nasıl yapılıyor?
                    </h3>
                    <div className="ml-6 flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                          openFAQ === 2 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                {openFAQ === 2 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Fiyatlandırmamız ilaç bedeli + kurye ücreti şeklindedir.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors hover:bg-gray-50"
                  onClick={() => toggleFAQ(3)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      💳 Hangi ödeme yöntemlerini kabul ediyorsunuz?
                    </h3>
                    <div className="ml-6 flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                          openFAQ === 3 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                {openFAQ === 3 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Nakit, Havale/Eft ile ödeme alıyoruz.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors hover:bg-gray-50"
                  onClick={() => toggleFAQ(4)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      ❄️ İlaçlarım soğuk zincirde muhafaza ediliyor mu?
                    </h3>
                    <div className="ml-6 flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                          openFAQ === 4 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                {openFAQ === 4 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Evet, soğuk zincir gerektiren ilaçlar özel termal çantalarda 
                      uygun sıcaklıkta taşınmaktadır.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors hover:bg-gray-50"
                  onClick={() => toggleFAQ(5)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      🕒 Hangi saatlerde hizmet veriyorsunuz?
                    </h3>
                    <div className="ml-6 flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                          openFAQ === 5 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                {openFAQ === 5 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      7/24 hizmet veriyoruz. Gece saatlerinde de acil durumlar için ulaşabilirsiniz.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 5. İLETİŞİM Section */}
        <section id="iletisim" className="py-20 bg-white min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-red-600">İleti</span><span className="text-gray-900">şim</span>
              </h2>
              <p className="text-lg text-gray-600">
                Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefon</h3>
                <p className="text-gray-600">0322 XXX XX XX</p>
                <p className="text-gray-600">7/24 Hizmet</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600">0532 XXX XX XX</p>
                <p className="text-gray-600">Hızlı Destek</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Adres</h3>
                <p className="text-gray-600">Seyhan / ADANA</p>
                <p className="text-gray-600">Merkez Ofis</p>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-full transition-colors duration-200 text-lg">
                  Hemen Ara
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-colors duration-200 text-lg">
                  WhatsApp İletişim
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <a href="#" className="bg-red-600 rounded-xl px-6 py-4 shadow-lg inline-block hover:bg-red-700 transition-colors duration-200">
                <div className="text-center">
                  <div className="text-white font-black text-lg leading-tight tracking-wide font-sans">
                    <div>ECZANE</div>
                    <div>KAPIMDA</div>
                  </div>
                </div>
              </a>
              <p className="text-gray-400 mt-4">
                Adana'nın en hızlı ve güvenilir ilaç kurye hizmeti.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hızlı Linkler</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#hakkimizda" className="hover:text-white">Hakkımızda</a></li>
                <li><a href="#hizmetler" className="hover:text-white">Hizmetler</a></li>
                <li><a href="#iletisim" className="hover:text-white">İletişim</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Destek</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#sss" className="hover:text-white">S.S.S</a></li>
                <li><a href="#" className="hover:text-white">Yardım</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Eczane Kapımda. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  </>
);
} 