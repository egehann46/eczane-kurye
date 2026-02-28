import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCityBySlug, getAllCitySlugs } from "@/config/cities";
import CityPageClient from "./CityPageClient";

const siteUrl = "https://www.xn--eczakapmda-3ub.com";
const siteName = "Ecza Kapımda";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  const cityUrl = `${siteUrl}/${city.slug}`;

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.metaKeywords,
    alternates: {
      canonical: cityUrl,
    },
    openGraph: {
      type: "website",
      url: cityUrl,
      title: `${city.metaTitle} | ${siteName}`,
      description: city.metaDescription,
      siteName,
      locale: "tr_TR",
      images: [
        {
          url: new URL("/og.png", siteUrl),
          width: 1200,
          height: 630,
          alt: `${siteName} ${city.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${city.metaTitle} | ${siteName}`,
      description: city.metaDescription,
      images: [new URL("/og.png", siteUrl)],
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    url: `${siteUrl}/${city.slug}`,
    ...(city.phoneTel ? { telephone: city.phoneTel } : {}),
    email: city.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.name,
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CityPageClient city={city} />
    </>
  );
}
