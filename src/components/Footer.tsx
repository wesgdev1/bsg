export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">BSG</span>
              <span className="gradient-text">Pay</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Líder en servicios de verificación de cuentas PayPal. Confiable,
              rápido y seguro. Tu éxito financiero es nuestra prioridad.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/bsg_pay"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 text-white p-3 rounded-lg transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297l-.272-.272-.816.816c-.136.136-.408.136-.544 0s-.136-.408 0-.544l.816-.816-.272-.272C3.138 13.306 2.648 12.155 2.648 10.858c0-3.054 2.497-5.551 5.551-5.551s5.551 2.497 5.551 5.551-2.497 5.551-5.551 5.551zm7.424-2.497c-.136.136-.408.136-.544 0l-.816-.816-.272.272c-.878.807-2.029 1.297-3.326 1.297-3.054 0-5.551-2.497-5.551-5.551s2.497-5.551 5.551-5.551 5.551 2.497 5.551 5.551c0 1.297-.49 2.448-1.297 3.326l-.272.272.816.816c.136.136.136.408 0 .544z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-yellow-600 text-white p-3 rounded-lg transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-red-600 text-white p-3 rounded-lg transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Verificación PayPal
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Tarjetas 3 años
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Tarjetas 5 años
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Tarjetas 8 años
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Planes Personalizados
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contacto"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Chat en Vivo
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contacto" className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Información de Contacto
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-3">📧</span>
                  <span className="text-gray-300">contacto@bsgpay.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-3">💬</span>
                  <span className="text-gray-300">
                    WhatsApp: +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-3">📱</span>
                  <span className="text-gray-300">Instagram: @bsg_pay</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-3">🌐</span>
                  <span className="text-gray-300">
                    Disponible 24/7 en todo el mundo
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h4 className="text-white font-bold mb-3">
                ¿Listo para verificar tu cuenta?
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Únete a miles de usuarios que ya confían en BSG Pay para sus
                verificaciones PayPal.
              </p>
              <button className="w-full gradient-red-yellow text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Comenzar Ahora
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © 2024 BSG Pay. Todos los derechos reservados. | Verificaciones
            PayPal profesionales desde 2020.
          </p>
        </div>
      </div>
    </footer>
  );
}
