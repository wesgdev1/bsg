export default function Services() {
  const plans = [
    {
      name: "Plan Básico",
      duration: "3 años",
      price: "$49",
      features: [
        "Verificación de cuenta PayPal",
        "Tarjeta de crédito virtual 3 años",
        "Soporte por email",
        "Activación en 24 horas",
        "Garantía de funcionalidad",
      ],
      popular: false,
      color: "border-gray-600",
    },
    {
      name: "Plan Profesional",
      duration: "5 años",
      price: "$79",
      features: [
        "Verificación de cuenta PayPal",
        "Tarjeta de crédito virtual 5 años",
        "Soporte prioritario 24/7",
        "Activación inmediata",
        "Garantía extendida",
        "Asesoría personalizada",
      ],
      popular: true,
      color: "border-yellow-400",
    },
    {
      name: "Plan Premium",
      duration: "8 años",
      price: "$119",
      features: [
        "Verificación de cuenta PayPal",
        "Tarjeta de crédito virtual 8 años",
        "Soporte VIP dedicado",
        "Activación instantánea",
        "Garantía total",
        "Asesoría completa",
        "Renovación automática disponible",
      ],
      popular: false,
      color: "border-red-500",
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
                    MÁS POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {plan.price}
                </div>
                <div className="text-gray-400">
                  Tarjeta válida por {plan.duration}
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
              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "gradient-red-yellow text-white hover:opacity-90 transform hover:scale-105"
                    : "border-2 border-gray-600 text-white hover:border-yellow-400 hover:text-yellow-400"
                }`}
              >
                Seleccionar Plan
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Necesitas algo personalizado?
            </h3>
            <p className="text-gray-300 mb-6">
              Ofrecemos soluciones personalizadas para empresas y usuarios con
              necesidades específicas. Contáctanos para obtener una cotización
              personalizada.
            </p>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Contactar para Plan Personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
