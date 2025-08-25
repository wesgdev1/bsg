export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-yellow-900/20"></div>
        {/* Animated background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Verificación de</span>
            <br />
            <span className="gradient-text">Cuentas PayPal</span>
            <br />
            <span className="text-white">Sin Complicaciones</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Servicio profesional de verificación de cuentas PayPal mediante
            tarjetas de crédito.
            <span className="text-yellow-400 font-semibold">
              {" "}
              Rápido, seguro y confiable.
            </span>
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-red-600/30">
              <span className="text-red-400">✓</span> Proceso 100% Seguro
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-600/30">
              <span className="text-yellow-400">✓</span> Verificación
              Instantánea
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-red-600/30">
              <span className="text-red-400">✓</span> Soporte 24/7
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="https://wa.me/573104430801?text=¡Hola! 👋 Vengo desde su página web y estoy interesado en verificar mi cuenta PayPal. ¿Podrían ayudarme con el proceso?"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-red-yellow text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
            >
              Verificar Mi Cuenta Ahora
            </a>
            <a
              href="#servicios"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Ver Planes Disponibles
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                +500
              </div>
              <div className="text-gray-400 mt-2">Cuentas Verificadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                99.9%
              </div>
              <div className="text-gray-400 mt-2">Tasa de Éxito</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                24/7
              </div>
              <div className="text-gray-400 mt-2">Soporte Disponible</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
