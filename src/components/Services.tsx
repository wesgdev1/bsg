import Image from "next/image";

export default function Services() {
  const plans = [
    {
      name: "Tarjeta Virtual Básica",
      duration: "3 años",
      price: "$7 USD",
      features: [
        "Verificación PayPal por 3 años",
        "Funcionan para todos los países",
        "Es un único pago",
        "El proceso no tarda ni 7 minutos",
        "No te pedimos información",
      ],
      popular: false,
      color: "border-gray-600",
      badge: "",
    },
    {
      name: "Tarjeta Virtual Recomendada",
      duration: "5 años",
      price: "$10 USD",
      features: [
        "Verificación PayPal por 5 años",
        "Funcionan para todos los países",
        "Es un único pago",
        "El proceso no tarda ni 7 minutos",
        "No te pedimos información",
      ],
      popular: true,
      color: "border-yellow-400",
      badge: "MÁS COMPRADA",
    },
    {
      name: "Tarjeta Virtual Premium",
      duration: "8 años",
      price: "$12 USD",
      features: [
        "Verificación PayPal por 8 años",
        "Funcionan para todos los países",
        "Es un único pago",
        "El proceso no tarda ni 7 minutos",
        "No te pedimos información",
      ],
      popular: false,
      color: "border-red-500",
      badge: "",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros{" "}
            <span className="gradient-text">Planes de Verificación</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. Todos incluyen
            verificación completa de tu cuenta PayPal con tarjetas de crédito
            virtuales de alta calidad.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border-2 ${
                plan.color
              } card-hover ${
                plan.popular ? "scale-105 shadow-yellow-500/20 shadow-2xl" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-red-yellow text-white px-6 py-2 rounded-full text-sm font-bold">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Card Image */}
              <div className="text-center mb-6">
                <Image
                  src="https://res.cloudinary.com/djrdozcdw/image/upload/v1756137270/bsg%20images/371908930_CREDIT_CARD_400_1_mzq0q4.png"
                  alt="Tarjeta Virtual BSG Pay"
                  width={128}
                  height={80}
                  className="mx-auto mb-4 rounded-lg shadow-lg"
                />
              </div>

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {plan.price}
                </div>
                <div className="text-gray-400">
                  Verificación válida por {plan.duration}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="text-green-400 mr-3 mt-1">✓</div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://wa.me/573104430801?text=¡Hola! 👋 Vengo desde su página web y estoy interesado en el plan de verificación PayPal. ¿Podrían ayudarme con el proceso?"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 text-center ${
                  plan.popular
                    ? "gradient-red-yellow text-white hover:opacity-90 transform hover:scale-105"
                    : "border-2 border-gray-600 text-white hover:border-yellow-400 hover:text-yellow-400"
                }`}
              >
                Seleccionar Plan
              </a>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="text-center mt-16 mb-12">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              💳 Formas de Pago Disponibles
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
                <div className="text-2xl mb-2">💵</div>
                <div className="text-white font-semibold">Dólares USD</div>
                <div className="text-gray-400 text-sm">
                  Transferencia bancaria
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
                <div className="text-2xl mb-2">🇨🇴</div>
                <div className="text-white font-semibold">
                  Pesos Colombianos
                </div>
                <div className="text-gray-400 text-sm">
                  COP - Nequi, Bancolombia
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
                <div className="text-2xl mb-2">🇻🇪</div>
                <div className="text-white font-semibold">
                  Bolívares Fuertes
                </div>
                <div className="text-gray-400 text-sm">VES - Pago móvil</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
                <div className="text-2xl mb-2">💳</div>
                <div className="text-white font-semibold">PayPal</div>
                <div className="text-gray-400 text-sm">Pago internacional</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              ✅ Aceptamos múltiples métodos de pago para tu comodidad • ✅
              Proceso de pago seguro y rápido
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Necesitas algo personalizado?
            </h3>
            <p className="text-gray-300 mb-6">
              Ofrecemos soluciones personalizadas para empresas y usuarios con
              necesidades específicas. Contáctanos para obtener una cotización
              personalizada.
            </p>
            <a
              href="https://wa.me/573104430801?text=¡Hola! 👋 Vengo desde su página web y estoy interesado en obtener un plan personalizado para verificación PayPal. ¿Podrían ayudarme?"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Contactar para Plan Personalizado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
