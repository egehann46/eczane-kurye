import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.xn--eczakapmda-3ub.com";
const siteName = "Ecza Kapımda";

export const viewport: Viewport = {
  themeColor: "#dc2626",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Eczane Kurye Hizmeti`,
    template: `%s | ${siteName}`,
  },
  description:
    "Lisanslı eczanelerden reçetesiz ürünlerinizi hızlı ve güvenilir kurye ile kapınıza getiriyoruz. 7/24 destek.",
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
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "192x192", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google tag (gtag.js) - Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17853440695"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17853440695');
          `}
        </Script>

        {/* Google Ads - Telefon Araması (Web) */}
        <Script id="google-ads-phone-web-snippet" strategy="afterInteractive">
          {`
            gtag('config', 'AW-17853440695/pQjZCJuSh94bELfFl8FC', {
              'phone_conversion_number': '(0533) 497 69 80'
            });
          `}
        </Script>

        {/* Accessibility widget (daha stabil: afterInteractive) */}
        <Script
          id="accessibility-widget-loader"
          src="https://erisilebilirlik.vercel.app/accessibility-widget.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}