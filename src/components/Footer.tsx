export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img
                src="https://res.cloudinary.com/djrdozcdw/image/upload/v1756136236/bsg%20images/ChatGPT_Image_25_ago_2025_10_36_31_a.m._afqvzw.png"
                alt="BSG Pay Logo"
                className="h-12 w-auto"
              />
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
                className="bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-white p-3 rounded-lg transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/573104430801?text=¡Hola! 👋 Vengo desde su página web y estoy interesado en verificar mi cuenta PayPal. ¿Podrían ayudarme con el proceso?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-600 text-white p-3 rounded-lg transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
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
                  <a
                    href="https://wa.me/573104430801?text=¡Hola! 👋 Vengo desde su página web y estoy interesado en verificar mi cuenta PayPal. ¿Podrían ayudarme con el proceso?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    WhatsApp: +57 310 4430801
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-3">📱</span>
                  <a
                    href="https://instagram.com/bsg_pay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-400 transition-colors"
                  >
                    Instagram: @bsg_pay
                  </a>
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
              <a
                href="https://wa.me/573104430801?text=¡Hola! 👋 Vengo desde su página web y estoy interesado en verificar mi cuenta PayPal. ¿Podrían ayudarme con el proceso?"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full gradient-red-yellow text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Comenzar Ahora
              </a>
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
