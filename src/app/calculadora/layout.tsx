import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "💰 Calculadora Comisiones PayPal Venezuela 2025 | BSG Pay",
  description:
    "🔢 Calculadora gratuita de comisiones PayPal para Venezuela y Colombia. Calcula exactamente cuánto enviar o recibir. Herramienta actualizada 2025. ✅",
  keywords: [
    "calculadora paypal venezuela",
    "comisiones paypal venezuela",
    "calculadora comisiones paypal",
    "paypal calculator venezuela",
    "comisiones paypal colombia",
    "calcular envios paypal",
    "calculadora paypal 2025",
    "fees paypal venezuela",
    "calculator paypal commissions",
    "paypal fees calculator",
  ],
  openGraph: {
    title: "💰 Calculadora Comisiones PayPal Venezuela | BSG Pay",
    description:
      "🔢 Calculadora gratuita para calcular comisiones PayPal en Venezuela y Colombia. Herramienta precisa y actualizada.",
    type: "website",
    url: "https://bsg-pay.vercel.app/calculadora",
    images: [
      {
        url: "https://res.cloudinary.com/djrdozcdw/image/upload/v1756136236/bsg%20images/ChatGPT_Image_25_ago_2025_10_36_31_a.m._afqvzw.png",
        width: 1200,
        height: 630,
        alt: "Calculadora PayPal Venezuela - BSG Pay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "💰 Calculadora PayPal Venezuela | BSG Pay",
    description:
      "🔢 Calcula comisiones PayPal gratis. Para Venezuela y Colombia.",
  },
  alternates: {
    canonical: "https://bsg-pay.vercel.app/calculadora",
  },
  other: {
    "geo.region": "VE-CO",
    "geo.placename": "Venezuela, Colombia",
  },
};

export default function CalculadoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
