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

export const metadata: Metadata = {
  title: "BSG Pay - Verificación de Cuentas PayPal",
  description:
    "Servicio de verificación de cuentas PayPal por medio de tarjeta de crédito. Opciones de 3, 5 y 8 años disponibles.",
  keywords: [
    "PayPal",
    "verificación",
    "tarjeta de crédito",
    "BSG Pay",
    "pagos",
    "servicios financieros",
  ],
  authors: [{ name: "BSG Pay" }],
  openGraph: {
    title: "BSG Pay - Verificación de Cuentas PayPal",
    description:
      "Servicio de verificación de cuentas PayPal por medio de tarjeta de crédito",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
