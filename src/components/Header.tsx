"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="https://res.cloudinary.com/djrdozcdw/image/upload/v1756136236/bsg%20images/ChatGPT_Image_25_ago_2025_10_36_31_a.m._afqvzw.png"
              alt="BSG Pay Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#inicio"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#beneficios"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Beneficios
            </a>
            <a
              href="/calculadora"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Calculadora PayPal
            </a>
            <Link
              href="/blog"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Blog
            </Link>
            <a
              href="#contacto"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/573104430801?text=¡Hola! 👋 Vengo desde su página web y estoy interesado en verificar mi cuenta PayPal. ¿Podrían ayudarme con el proceso?"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-red-yellow text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Comenzar Ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            {isMounted && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-400 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMounted && isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              <a
                href="#inicio"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#beneficios"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Beneficios
              </a>
              <a
                href="/calculadora"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculadora PayPal
              </a>
              <Link
                href="/blog"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <a
                href="#contacto"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="px-3 py-2">
                <a
                  href="https://wa.me/573104430801?text=¡Hola! 👋 Vengo desde su página web y estoy interesado en verificar mi cuenta PayPal. ¿Podrían ayudarme con el proceso?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full gradient-red-yellow text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
                >
                  Comenzar Ahora
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
