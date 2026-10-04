import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { business, hero, pricing, seo } from "@/site.config";
import { faqItems } from "@/components/Faq";
import { getSiteUrl } from "@/lib/site-url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: seo.title, template: `%s | ${business.name}` },
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: business.name,
    title: seo.title,
    description: seo.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${business.name}: ${hero.headline}` }],
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: ["/og.png"] },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#05060a" };

/* LocalBusiness schema: helps Google show the business correctly in search. */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: business.name,
      description: seo.description,
      url: `${siteUrl}/`,
      telephone: business.phone,
      email: business.email,
      image: `${siteUrl}/og.png`,
      founder: { "@type": "Person", name: business.owner },
      address: {
        "@type": "PostalAddress",
        addressLocality: business.city,
        addressRegion: business.state,
        addressCountry: "US",
      },
      areaServed: business.serviceAreas.map((city) => ({
        "@type": "City",
        name: `${city}, ${business.state}`,
      })),
      priceRange: "$49–$249 per month plus one-time setup",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Plans",
        itemListElement: pricing.plans.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          price: plan.price.replace(/[^\d.]/g, ""),
          priceCurrency: "USD",
          description: plan.features.join(", "),
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
        {/* GoHighLevel chat widget (bottom corner, every page) */}
        <Script
          id="ghl-chat-loader"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6ac2add382099df3ee103537"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
