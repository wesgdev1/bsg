"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-white">BSG</span>
              <span className="gradient-text">Pay</span>
            </div>
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
              href="#contacto"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="gradient-red-yellow text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Comenzar Ahora
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
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
                href="#contacto"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="px-3 py-2">
                <button className="w-full gradient-red-yellow text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Comenzar Ahora
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
