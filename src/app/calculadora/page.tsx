"use client";

import { useState } from "react";
import Link from "next/link";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";

export default function CalculadoraPayPal() {
  // Estados para los cálculos
  const [commission, setCommission] = useState("5.4"); // 5.4% por defecto
  const [fixedFee, setFixedFee] = useState("0.3"); // $0.3 USD por defecto

  // Para recibir dinero
  const [amountToReceive, setAmountToReceive] = useState("");
  const [amountToSendCalculated, setAmountToSendCalculated] = useState("");
  const [receiveCommission, setReceiveCommission] = useState("");

  // Para enviar dinero
  const [amountToSend, setAmountToSend] = useState("");
  const [amountReceivedCalculated, setAmountReceivedCalculated] = useState("");
  const [sendCommission, setSendCommission] = useState("");

  // Función para calcular cuando quieres recibir una cantidad específica
  const calculateForReceiving = (receiveAmount: string) => {
    if (!receiveAmount || isNaN(Number(receiveAmount))) {
      setAmountToSendCalculated("");
      setReceiveCommission("");
      return;
    }

    const receive = parseFloat(receiveAmount);
    const commissionRate = parseFloat(commission) / 100;
    const fixed = parseFloat(fixedFee);

    // Fórmula: amount_to_send = (receive_amount + fixed_fee) / (1 - commission_rate)
    const amountToSend = (receive + fixed) / (1 - commissionRate);
    const totalCommission = amountToSend - receive;

    setAmountToSendCalculated(amountToSend.toFixed(2));
    setReceiveCommission(totalCommission.toFixed(2));
  };

  // Función para calcular cuando envías una cantidad específica
  const calculateForSending = (sendAmount: string) => {
    if (!sendAmount || isNaN(Number(sendAmount))) {
      setAmountReceivedCalculated("");
      setSendCommission("");
      return;
    }

    const send = parseFloat(sendAmount);
    const commissionRate = parseFloat(commission) / 100;
    const fixed = parseFloat(fixedFee);

    // Fórmula: amount_received = (send_amount * (1 - commission_rate)) - fixed_fee
    const amountReceived = send * (1 - commissionRate) - fixed;
    const totalCommission = send - amountReceived;

    setAmountReceivedCalculated(amountReceived.toFixed(2));
    setSendCommission(totalCommission.toFixed(2));
  };

  const handleReceiveChange = (value: string) => {
    setAmountToReceive(value);
    calculateForReceiving(value);
  };

  const handleSendChange = (value: string) => {
    setAmountToSend(value);
    calculateForSending(value);
  };

  const handleCommissionChange = (value: string) => {
    setCommission(value);
    // Recalcular ambos si hay valores
    if (amountToReceive) calculateForReceiving(amountToReceive);
    if (amountToSend) calculateForSending(amountToSend);
  };

  const handleFixedFeeChange = (value: string) => {
    setFixedFee(value);
    // Recalcular ambos si hay valores
    if (amountToReceive) calculateForReceiving(amountToReceive);
    if (amountToSend) calculateForSending(amountToSend);
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Calculadora de{" "}
            <span className="gradient-text">Comisiones PayPal</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calcula exactamente cuánto necesitas enviar o cuánto recibirás con
            las comisiones de PayPal. Herramienta actualizada con las tarifas
            oficiales.
          </p>
        </div>

        {/* Configuración de comisiones */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            ⚙️ Configuración de Comisiones PayPal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Comisión Porcentual (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={commission}
                onChange={(e) => handleCommissionChange(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                placeholder="5.4"
              />
              <p className="text-gray-400 text-sm mt-1">Estándar: 5.4%</p>
            </div>
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Comisión Fija (USD)
              </label>
              <input
                type="number"
                step="0.01"
                value={fixedFee}
                onChange={(e) => handleFixedFeeChange(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                placeholder="0.30"
              />
              <p className="text-gray-400 text-sm mt-1">Estándar: $0.30 USD</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculadora para RECIBIR */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-8 border border-green-700/50">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">💰</div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Calculadora para Recibir
              </h2>
              <p className="text-gray-300">
                Calcula cuánto debe enviarte alguien para que recibas la
                cantidad exacta
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Quiero Recibir (USD)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={amountToReceive}
                  onChange={(e) => handleReceiveChange(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none text-lg"
                  placeholder="100.00"
                />
              </div>

              <ClientOnlyWrapper>
                {amountToReceive && (
                  <>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Hay que Enviar:</span>
                        <span className="text-green-400 font-bold text-xl">
                          ${amountToSendCalculated} USD
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Comisión Total:</span>
                        <span className="text-red-400 font-semibold">
                          ${receiveCommission} USD
                        </span>
                      </div>
                    </div>

                    <div className="bg-green-900/30 rounded-lg p-4 border border-green-600/50">
                      <h3 className="text-green-400 font-semibold mb-2">
                        💡 Resumen:
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Para recibir <strong>${amountToReceive} USD</strong>{" "}
                        netos, la persona debe enviarte{" "}
                        <strong>${amountToSendCalculated} USD</strong>. PayPal
                        cobrará <strong>${receiveCommission} USD</strong> en
                        comisiones.
                      </p>
                    </div>
                  </>
                )}
              </ClientOnlyWrapper>
            </div>
          </div>

          {/* Calculadora para ENVIAR */}
          <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/50">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">📤</div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Calculadora para Enviar
              </h2>
              <p className="text-gray-300">
                Calcula cuánto recibirá la otra persona si envías una cantidad
                específica
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Voy a Enviar (USD)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={amountToSend}
                  onChange={(e) => handleSendChange(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none text-lg"
                  placeholder="100.00"
                />
              </div>

              <ClientOnlyWrapper>
                {amountToSend && (
                  <>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Recibirá:</span>
                        <span className="text-blue-400 font-bold text-xl">
                          ${amountReceivedCalculated} USD
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Comisión Total:</span>
                        <span className="text-red-400 font-semibold">
                          ${sendCommission} USD
                        </span>
                      </div>
                    </div>

                    <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-600/50">
                      <h3 className="text-blue-400 font-semibold mb-2">
                        💡 Resumen:
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Si envías <strong>${amountToSend} USD</strong>, la
                        persona recibirá{" "}
                        <strong>${amountReceivedCalculated} USD</strong> netos.
                        PayPal cobrará <strong>${sendCommission} USD</strong> en
                        comisiones.
                      </p>
                    </div>
                  </>
                )}
              </ClientOnlyWrapper>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-12 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            📋 Información Importante sobre Comisiones PayPal
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-3">
                🔍 ¿Cómo funciona esta calculadora?
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • <strong>Monto Bruto:</strong> El dinero enviado sin
                  descuentos
                </li>
                <li>
                  • <strong>Monto Neto:</strong> El dinero recibido después de
                  comisiones
                </li>
                <li>
                  • <strong>Comisión:</strong> {commission}% + ${fixedFee} USD
                  por transacción
                </li>
                <li>• Los cálculos son precisos según las tarifas oficiales</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-3">
                ⚠️ Notas Importantes
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Las comisiones pueden variar según tu país</li>
                <li>• Revisa las tarifas actuales en PayPal</li>
                <li>• Esta calculadora no incluye conversiones de moneda</li>
                <li>• Los resultados son aproximados para referencia</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Necesitas verificar tu cuenta PayPal?
            </h3>
            <p className="text-gray-300 mb-6">
              Con una cuenta verificada puedes recibir transferencias sin
              límites y con mayor seguridad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/573104430801?text=¡Hola! 👋 Vengo desde la calculadora PayPal y estoy interesado en verificar mi cuenta. ¿Podrían ayudarme?"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-red-yellow text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Verificar Mi PayPal
              </a>
              <Link
                href="/#servicios"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                Ver Planes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
