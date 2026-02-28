"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAllCities, getAllCitySlugs } from "@/config/cities";
import MotoCourier from "@/components/MotoCourier";

export default function HomePage() {
  const router = useRouter();
  const cities = getAllCities();
  const citySlugs = getAllCitySlugs();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // ?city=van veya ?city=konya
    const cityParam = params.get("city");
    if (cityParam && citySlugs.includes(cityParam)) {
      router.replace(`/${cityParam}`);
      return;
    }

    // UTM parametrelerinde şehir adı ara
    const utmCampaign = params.get("utm_campaign") || "";
    const utmTerm = params.get("utm_term") || "";
    const utmContent = params.get("utm_content") || "";
    const utmAll = `${utmCampaign} ${utmTerm} ${utmContent}`.toLowerCase();

    for (const slug of citySlugs) {
      if (utmAll.includes(slug)) {
        router.replace(`/${slug}`);
        return;
      }
    }

    // localStorage'dan daha önce seçilen şehir
    try {
      const savedCity = localStorage.getItem("selected_city");
      if (savedCity && citySlugs.includes(savedCity)) {
        router.replace(`/${savedCity}`);
        return;
      }
    } catch {}
  }, [router, citySlugs]);

  return (
    <div className="home-landing h-screen flex flex-col bg-white overflow-hidden">
      {/* Mobil: üstte içerik, altta moto | Masaüstü: yan yana */}
      <div className="flex-1 flex flex-col md:relative md:grid md:grid-cols-[1fr_320px] md:items-center px-4 sm:px-6 lg:px-12">
        {/* İçerik */}
        <div className="relative z-10 flex flex-col items-center md:items-start pt-24 md:pt-0 md:justify-center">
          {/* Logo */}
          <div className="bg-red-600 rounded-xl px-5 py-3 shadow-lg mb-4 md:mb-6">
            <div className="text-white font-black text-lg leading-tight tracking-wide font-sans text-center">
              <div>ECZA</div>
              <div>KAPIMDA</div>
            </div>
          </div>

          {/* Başlık */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left mb-1 md:mb-2">
            <span className="text-gray-900">Eczane </span>
            <span className="text-red-600">Kapınızda!</span>
          </h1>
          <p className="text-gray-500 text-center md:text-left mb-4 md:mb-8 text-sm sm:text-base">
            Hizmet almak istediğiniz şehri seçin
          </p>

          {/* Şehir Kartları */}
          <div className="flex flex-row gap-4 sm:gap-6 w-full max-w-lg justify-center md:justify-start mb-4 md:mb-8">
            {cities.map((city) => {
              const isActive = city.phone !== null;
              return (
                <a
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="group flex-1 max-w-[220px] bg-white rounded-2xl border-2 border-gray-200 hover:border-red-500 px-4 py-4 sm:px-6 sm:py-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative z-10"
                >
                  {/* Konum ikonu */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  {/* Şehir adı */}
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                    {city.name}
                  </h2>

                  {/* Durum */}
                  {isActive ? (
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 font-semibold rounded-full text-xs sm:text-sm mt-1 sm:mt-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                      7/24 Aktif
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-700 font-semibold rounded-full text-xs sm:text-sm mt-1 sm:mt-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-1.5"></span>
                      Çok Yakında
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Uyarı */}
          <div className="px-4 py-2 md:py-3 bg-red-50 border border-red-200 rounded-xl max-w-lg w-full">
            <p className="text-xs sm:text-sm text-red-700 text-center md:text-left font-medium">
              ⚠️ Biz eczane değiliz, profesyonel bir KURYE ekibiyiz. Lisanslı
              eczanelerle işbirliği halinde sadece reçetesiz ilaçlar için hizmet
              veriyoruz.
            </p>
          </div>
        </div>

        {/* Moto: Mobilde altta ayrı alan, masaüstünde overlay */}
        <div className="relative flex-1 md:absolute md:inset-0 z-0 pointer-events-none overflow-hidden">
          <MotoCourier />
        </div>
      </div>

      <div className="py-3 md:py-4 text-center">
        <p className="text-gray-400 text-xs">
          &copy; 2026 Ecza Kapımda. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  );
}