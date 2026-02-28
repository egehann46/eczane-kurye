export interface CityConfig {
  name: string;
  slug: string;
  phone: string | null;
  phoneTel: string | null;
  whatsappLink: string | null;
  email: string;
  address: string;
  serviceArea: string;
  deliveryTime: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  heroText: string;
  aboutText: string;
  footerText: string;
  gaConversionId: string | null;
  gaPhoneSnippet: string | null;
}

const cities: CityConfig[] = [
  {
    name: "Konya",
    slug: "konya",
    phone: "(0533) 497 69 80",
    phoneTel: "+905334976980",
    whatsappLink: "https://wa.me/905334976980",
    email: "eczakapimda@gmail.com",
    address: "Konya Merkez",
    serviceArea: "Konya Geneli Hizmet",
    deliveryTime: "30 Dakika",
    metaTitle: "Konya Eczane Kurye",
    metaDescription:
      "Konya genelinde lisanslı eczanelerden reçetesiz ürünlerinizi hızlı ve güvenilir kurye ile kapınıza getiriyoruz. 7/24 destek.",
    metaKeywords: [
      "Konya eczane kurye",
      "Konya ilaç kurye",
      "Konya ecza kurye",
      "Konya eczane kapımda",
      "reçetesiz ürün teslimat",
      "Konya hızlı teslimat",
      "Ecza Kapımda",
    ],
    heroText:
      "Konya'nın profesyonel kurye ekibi olarak, lisanslı eczanelerden ilaçlarınızı hızlı ve güvenilir şekilde adresinize getiriyoruz.",
    aboutText:
      "Ecza Kapımda olarak, Konya'da profesyonel kurye hizmeti veren bir ekibiz. 2020 yılından bu yana, lisanslı eczanelerle işbirliği halinde ilaç ihtiyaçlarınızı en hızlı ve güvenilir şekilde kapınıza getiriyoruz.",
    footerText: "Konya'nın en hızlı ve güvenilir ilaç kurye hizmeti.",
    gaConversionId: "AW-17853440695/pQjZCJuSh94bELfFl8FC",
    gaPhoneSnippet: "(0533) 497 69 80",
  },
  {
    name: "Van",
    slug: "van",
    phone: "(0533) 497 69 80",
    phoneTel: "+905334976980",
    whatsappLink: "https://wa.me/905334976980",
    email: "eczakapimda@gmail.com",
    address: "Van Merkez",
    serviceArea: "Van Geneli Hizmet",
    deliveryTime: "30 Dakika",
    metaTitle: "Van Eczane Kurye",
    metaDescription:
      "Van genelinde lisanslı eczanelerden reçetesiz ürünlerinizi hızlı ve güvenilir kurye ile kapınıza getiriyoruz. 7/24 destek.",
    metaKeywords: [
      "Van eczane kurye",
      "Van ilaç kurye",
      "Van ecza kurye",
      "Van eczane kapımda",
      "reçetesiz ürün teslimat",
      "Van hızlı teslimat",
      "Ecza Kapımda",
    ],
    heroText:
      "Van'ın profesyonel kurye ekibi olarak, lisanslı eczanelerden ilaçlarınızı hızlı ve güvenilir şekilde adresinize getiriyoruz.",
    aboutText:
      "Ecza Kapımda olarak, Van'da profesyonel kurye hizmeti veren bir ekibiz. 2020 yılından bu yana, lisanslı eczanelerle işbirliği halinde ilaç ihtiyaçlarınızı en hızlı ve güvenilir şekilde kapınıza getiriyoruz.",
    footerText: "Van'ın en hızlı ve güvenilir ilaç kurye hizmeti.",
    gaConversionId: null,
    gaPhoneSnippet: "(0533) 497 69 80",
  },
];

export function getCityBySlug(slug: string): CityConfig | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCities(): CityConfig[] {
  return cities;
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

export function getDefaultCity(): CityConfig {
  return cities[0];
}
