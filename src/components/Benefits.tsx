export default function Benefits() {
  const benefits = [
    {
      icon: "🔒",
      title: "Seguridad Garantizada",
      description:
        "Utilizamos protocolos de seguridad de nivel bancario para proteger tu información y garantizar transacciones seguras.",
    },
    {
      icon: "⚡",
      title: "Verificación Rápida",
      description:
        "Proceso de verificación optimizado que toma minutos, no días. Activa tu cuenta PayPal al instante.",
    },
    {
      icon: "🎯",
      title: "Tasa de Éxito del 99.9%",
      description:
        "Nuestro método probado garantiza el éxito en la verificación de tu cuenta PayPal sin complicaciones.",
    },
    {
      icon: "🌍",
      title: "Cobertura Global",
      description:
        "Servicio disponible para cuentas PayPal de cualquier país. Sin restricciones geográficas.",
    },
    {
      icon: "💳",
      title: "Tarjetas Premium",
      description:
        "Utilizamos tarjetas de crédito virtuales de alta calidad de bancos reconocidos internacionalmente.",
    },
    {
      icon: "🎧",
      title: "Soporte 24/7",
      description:
        "Nuestro equipo de expertos está disponible las 24 horas para resolver cualquier duda o problema.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Accede a tu PayPal",
      description:
        "Ingresa a tu cuenta PayPal desde tu navegador PC o móvil de forma segura.",
    },
    {
      step: "02",
      title: "Ve a tu Cartera",
      description:
        "Haz clic en la sección 'Cartera' para gestionar tus métodos de pago.",
    },
    {
      step: "03",
      title: "Asocia la Tarjeta",
      description:
        "Vincula la tarjeta Mastercard BSG_PAY con tu dirección de residencia.",
    },
    {
      step: "04",
      title: "Confirma los Datos",
      description:
        "Revisa la información y haz clic en 'Listo' para continuar.",
    },
    {
      step: "05",
      title: "Selecciona la Tarjeta",
      description:
        "Haz clic en la tarjeta que acabas de agregar para activarla.",
    },
    {
      step: "06",
      title: "Solicita Verificación",
      description:
        "Clic en 'Confirmar y solicitar código' para iniciar la verificación.",
    },
    {
      step: "07",
      title: "Ingresa el Código",
      description:
        "Introduce el código de 4 dígitos que BSG_PAY te proporcionará.",
    },
    {
      step: "08",
      title: "¡Verificación Completa!",
      description:
        "Tu cuenta PayPal queda 100% verificada y lista para usar globalmente.",
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Por qué elegir <span className="gradient-text">BSG Pay</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos líderes en verificación de cuentas PayPal con años de
            experiencia y miles de clientes satisfechos en todo el mundo.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 card-hover group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proceso Simple en <span className="gradient-text">8 Pasos</span>
            </h3>
            <p className="text-gray-300 text-lg">
              Verificar tu cuenta PayPal nunca había sido tan fácil y rápido
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-600 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-red-600 to-yellow-500"></div>
                  )}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/573104430801?text=¡Hola! 👋 Vengo desde su página web y estoy interesado en verificar mi cuenta PayPal. ¿Podrían ayudarme con el proceso?"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-red-yellow text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Comenzar Verificación Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
