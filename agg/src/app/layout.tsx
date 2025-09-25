import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AGGELOS Rentals - Car Rental Services in Piraeus Port & Athens Airport",
  description: "Your trusted partner for car rental services in Piraeus Port and Athens Airport. Quality vehicles, convenient locations, and affordable rates. Book your rental today!",
  keywords: "car rental, Piraeus Port, Athens Airport, AGGELOS Rentals, Greece, vehicle rental, transportation",
  authors: [{ name: "AGGELOS Rentals" }],
  creator: "AGGELOS Rentals",
  publisher: "AGGELOS Rentals",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aggelosrentals.com",
    siteName: "AGGELOS Rentals",
    title: "AGGELOS Rentals - Car Rental Services in Piraeus Port & Athens Airport",
    description: "Your trusted partner for car rental services in Piraeus Port and Athens Airport. Quality vehicles, convenient locations, and affordable rates.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AGGELOS Rentals - Car Rental Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AGGELOS Rentals - Car Rental Services in Piraeus Port & Athens Airport",
    description: "Your trusted partner for car rental services in Piraeus Port and Athens Airport. Quality vehicles, convenient locations, and affordable rates.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://aggelosrentals.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CarRental",
              "name": "AGGELOS Rentals",
              "description": "Car rental services in Piraeus Port and Athens Airport",
              "url": "https://aggelosrentals.com",
              "telephone": "+30-698-015-1068",
              "email": "piraeus@aggelosrentals.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Akti Themistokleous 104",
                "addressLocality": "Piraeus",
                "addressCountry": "GR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.9439",
                "longitude": "23.6466"
              },
              "openingHours": "Mo-Su 08:00-20:00",
              "priceRange": "$$"
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-gray-900 bg-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
