import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "📝 Blog PayPal Venezuela: Guías y Consejos 2025 | BSG Pay",
  description:
    "📚 Blog especializado en PayPal Venezuela y Colombia. Guías completas, consejos expertos y tutoriales para verificar tu cuenta PayPal. ¡Información actualizada!",
  keywords: [
    "blog paypal venezuela",
    "guias paypal venezuela",
    "consejos paypal colombia",
    "tutoriales paypal",
    "verificacion paypal venezuela",
    "noticias paypal",
    "blog verificacion paypal",
    "guia verificar paypal",
    "paypal venezuela blog",
    "articulos paypal",
  ],
  openGraph: {
    title: "📝 Blog PayPal Venezuela y Colombia | BSG Pay",
    description:
      "📚 Guías y consejos expertos sobre PayPal para Venezuela y Colombia. Información actualizada y confiable.",
    type: "website",
    url: "https://bsg-pay.vercel.app/blog",
    images: [
      {
        url: "https://res.cloudinary.com/djrdozcdw/image/upload/v1756136236/bsg%20images/ChatGPT_Image_25_ago_2025_10_36_31_a.m._afqvzw.png",
        width: 1200,
        height: 630,
        alt: "Blog PayPal Venezuela - BSG Pay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "📝 Blog PayPal Venezuela | BSG Pay",
    description: "📚 Guías y consejos sobre PayPal para Venezuela y Colombia.",
  },
  alternates: {
    canonical: "https://bsg-pay.vercel.app/blog",
  },
  other: {
    "geo.region": "VE-CO",
    "geo.placename": "Venezuela, Colombia",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
