import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🔥 Verificar Cuenta PayPal Venezuela y Colombia 2025 | BSG Pay ✅",
  description:
    "⭐ Verificación de cuentas PayPal en Venezuela y Colombia en solo 7 minutos. Tarjetas virtuales desde $7 USD. Servicio confiable desde 2020. ¡Sin límites ni restricciones! 🚀",
  keywords: [
    "verificar cuenta paypal venezuela",
    "verificar paypal colombia",
    "como verificar paypal venezuela",
    "verificacion paypal venezuela 2025",
    "paypal venezuela",
    "paypal colombia",
    "tarjeta virtual paypal",
    "verificar paypal sin tarjeta",
    "paypal venezuela bolivares",
    "verificacion paypal rapida",
    "BSG Pay",
    "cuenta paypal verificada",
    "paypal sin limites venezuela",
    "verificar paypal mastercard",
    "tarjeta prepagada paypal",
    "verificacion express paypal",
  ],
  authors: [{ name: "BSG Pay - Especialistas en Verificación PayPal" }],
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
  verification: {
    google: "verificacion-google-aqui", // Agregar código de verificación de Google
  },
  alternates: {
    canonical: "https://bsg-pay.vercel.app",
    languages: {
      "es-VE": "https://bsg-pay.vercel.app",
      "es-CO": "https://bsg-pay.vercel.app",
      es: "https://bsg-pay.vercel.app",
    },
  },
  openGraph: {
    title: "🔥 Verificar Cuenta PayPal Venezuela y Colombia | BSG Pay",
    description:
      "⭐ Verificación rápida de PayPal en Venezuela y Colombia. Tarjetas virtuales desde $7 USD. Proceso en 7 minutos. ¡Sin complicaciones!",
    type: "website",
    url: "https://bsg-pay.vercel.app",
    siteName: "BSG Pay",
    locale: "es_VE",
    images: [
      {
        url: "https://res.cloudinary.com/djrdozcdw/image/upload/v1756136236/bsg%20images/ChatGPT_Image_25_ago_2025_10_36_31_a.m._afqvzw.png",
        width: 1200,
        height: 630,
        alt: "BSG Pay - Verificación PayPal Venezuela Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🔥 Verificar PayPal Venezuela y Colombia | BSG Pay",
    description:
      "⭐ Verificación rápida de PayPal. Tarjetas virtuales desde $7 USD. Proceso en 7 minutos.",
    images: [
      "https://res.cloudinary.com/djrdozcdw/image/upload/v1756136236/bsg%20images/ChatGPT_Image_25_ago_2025_10_36_31_a.m._afqvzw.png",
    ],
    creator: "@bsg_pay",
  },
  other: {
    "geo.region": "VE-CO",
    "geo.placename": "Venezuela, Colombia",
    "geo.position": "8.0;-66.0",
    ICBM: "8.0, -66.0",
    distribution: "global",
    rating: "general",
    "revisit-after": "1 days",
    classification: "servicios financieros, verificacion paypal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BSG Pay",
    description:
      "Especialistas en verificación de cuentas PayPal para Venezuela y Colombia",
    url: "https://bsg-pay.vercel.app",
    logo: "https://res.cloudinary.com/djrdozcdw/image/upload/v1756136236/bsg%20images/ChatGPT_Image_25_ago_2025_10_36_31_a.m._afqvzw.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57-310-4430801",
      contactType: "Customer Service",
      availableLanguage: ["Spanish"],
      areaServed: ["VE", "CO"],
    },
    sameAs: ["https://instagram.com/bsg_pay", "https://wa.me/573104430801"],
    areaServed: [
      {
        "@type": "Country",
        name: "Venezuela",
      },
      {
        "@type": "Country",
        name: "Colombia",
      },
    ],
    serviceType: [
      "Verificación de cuentas PayPal",
      "Tarjetas virtuales PayPal",
      "Servicios financieros digitales",
    ],
    priceRange: "$7-$12 USD",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "500+",
    },
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta
          name="google-site-verification"
          content="tu-codigo-de-verificacion-google"
        />
        <meta name="msvalidate.01" content="tu-codigo-de-verificacion-bing" />
        <link rel="canonical" href="https://bsg-pay.vercel.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
