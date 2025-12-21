import type { Metadata } from "next";
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

const siteUrl = "https://eczakapimda.com";
const siteName = "Ecza Kapımda";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

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
    type: "wsiteUrl,
    title: `${siteName} | Konya Eczane Kurye`,
    description:
      "Konya genelinde lisanslı eczanelerden reçetesiz ürünlerinizi hızlı ve güvenilir kurye ile kapınıza getiriyoruz.",
    siteName,
    locale: "tr_TR",
    images: [
      {
        url: "/og.png",
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
    images: ["/og.png"],
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
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", pe: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  url: siteUrl,
  telephone: "+905334976980",
  email: "eczakapimda@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Konya",
    addressRegion: "Konya",
    addressCountry: "TR",
  },
  areaServed: "Konya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
