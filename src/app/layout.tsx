import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Görsel/marka ismi için Unicode domain kullanılabilir
const siteHostUnicode = "eczakapımda.com";

// Teknik/SEO canonical için (Punycode)
const siteHostAscii = "eczakapımda.com";

const siteUrl = "https://www.xn--eczakapmda-3ub.com";
const siteName = "Ecza Kapımda";

const metadataBase = new URL(siteUrl);

export const viewport: Viewport = {
  themeColor: "#dc2626",
};

export const metadata: Metadata = {
  metadataBase,

  title: {
    default: `${siteName} | Konya Eczane Kurye`,
    template: `%s | ${siteName}`,
  },

  description:
    "Konya genelinde lisanslı eczanelerden reçetesiz ürünlerinizi hızlı ve güvenilir kurye ile kapınıza getiriyoruz. 7/24 destek.",

  keywords: [
    "Konya eczane kurye",
    "Konya ilaç kurye",
    "Konya ecza kurye",
    "Konya eczane kapımda",
    "reçetesiz ürün teslimat",
    "Konya hızlı teslimat",
    "Ecza Kapımda",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} | Konya Eczane Kurye`,
    description:
      "Konya genelinde lisanslı eczanelerden reçetesiz ürünlerinizi hızlı ve güvenilir kurye ile kapınıza getiriyoruz.",
    siteName,
    locale: "tr_TR",
    images: [
      {
        url: new URL("/og.png", metadataBase),
        width: 1200,
        height: 630,
        alt: `${siteName} Konya`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Konya Eczane Kurye`,
    description:
      "Konya genelinde lisanslı eczanelerden reçetesiz ürünlerinizi hızlı ve güvenilir kurye ile kapınıza getiriyoruz.",
    images: [new URL("/og.png", metadataBase)],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  url: siteUrl,
  // İstersen ayrıca Unicode domaini de "sameAs" gibi alanlarda belirtebilirsin:
  // sameAs: [`https://${siteHostUnicode}`],
  telephone: "+905334976980",
  email: "eczakapimda@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Konya",
    addressRegion: "Konya",
    addressCountry: "TR",
  },
  areaServed: {
    "@type": "City",
    name: "Konya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
