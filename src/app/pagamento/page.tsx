"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Dumbbell, CreditCard, Lock, Check, ArrowLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function PagamentoPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const planFromUrl = searchParams.get("plan") as "basico" | "premium" || "premium";
  const cycleFromUrl = searchParams.get("cycle") as "monthly" | "annual" || "monthly";
  
  const [selectedPlan, setSelectedPlan] = useState<"basico" | "premium">(planFromUrl);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(cycleFromUrl);
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "pix">("credit");
  const [installments, setInstallments] = useState(12);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSelectedPlan(planFromUrl);
    setBillingCycle(cycleFromUrl);
  }, [planFromUrl, cycleFromUrl]);

  const plans = {
    basico: {
      name: "Plano Básico",
      monthly: {
        price: 29.90,
        originalPrice: 59.90,
      },
      annual: {
        price: 299.90,
        originalPrice: 599.90,
      },
      features: [
        "1 plano de treino semanal fixo",
        "Vídeos explicativos básicos",
        "Contador de calorias manual",
        "Acompanhamento de peso"
      ]
    },
    premium: {
      name: "Plano Premium",
      monthly: {
        price: 99.90,
        originalPrice: 199.90,
      },
      annual: {
        price: 999.90,
        originalPrice: 1999.90,
      },
      features: [
        "Treinos ilimitados com IA",
        "Contador de calorias por foto",
        "Vídeos com destaque muscular",
        "Histórico completo e análises",
        "Planos que evoluem semanalmente",
        "Suporte prioritário 24/7"
      ]
    }
  };

  const selectedPlanData = plans[selectedPlan];
  const currentPrice = selectedPlanData[billingCycle].price;
  const currentOriginalPrice = selectedPlanData[billingCycle].originalPrice;
  const installmentValue = currentPrice / installments;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de processamento de pagamento
    setTimeout(() => {
      setLoading(false);
      // Redirecionar para dashboard após pagamento
      router.push("/dashboard?payment=success");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-orange-400" />
              <span className="text-2xl font-black bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                GTFit
              </span>
            </Link>
            
            <Link href="/planos">
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar aos Planos
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-600 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-bounce">
            <Zap className="w-4 h-4" />
            <span>🔥 OFERTA ESPECIAL - 50% OFF</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Finalize Sua Assinatura
          </h1>
          <p className="text-gray-400 text-lg">
            Transforme seu corpo com tecnologia de ponta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Plan Selection & Summary */}
          <div className="space-y-6">
            {/* Plan Selection */}
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h2 className="text-2xl font-bold mb-6 text-white">Escolha Seu Plano</h2>
              
              {/* Billing Cycle Toggle */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`flex-1 py-3 rounded-lg font-bold transition-all ${
                    billingCycle === "monthly"
                      ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
                      : "bg-gray-700 text-gray-400 hover:text-white"
                  }`}
                >
                  Mensal
                </button>
                <button
                  onClick={() => setBillingCycle("annual")}
                  className={`flex-1 py-3 rounded-lg font-bold transition-all relative ${
                    billingCycle === "annual"
                      ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
                      : "bg-gray-700 text-gray-400 hover:text-white"
                  }`}
                >
                  Anual
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    -17%
                  </span>
                </button>
              </div>
              
              <div className="space-y-4">
                {/* Plano Básico */}
                <button
                  onClick={() => setSelectedPlan("basico")}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedPlan === "basico"
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">Plano Básico</h3>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 line-through">
                        R$ {plans.basico[billingCycle].originalPrice.toFixed(2)}
                      </p>
                      <p className="text-2xl font-black text-orange-400">
                        R$ {plans.basico[billingCycle].price.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-400">
                        /{billingCycle === "monthly" ? "mês" : "ano"}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">Ideal para começar sua jornada fitness</p>
                </button>

                {/* Plano Premium */}
                <button
                  onClick={() => setSelectedPlan("premium")}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all relative ${
                    selectedPlan === "premium"
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <div className="absolute -top-3 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    MAIS POPULAR
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">Plano Premium</h3>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 line-through">
                        R$ {plans.premium[billingCycle].originalPrice.toFixed(2)}
                      </p>
                      <p className="text-2xl font-black bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                        R$ {plans.premium[billingCycle].price.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-400">
                        /{billingCycle === "monthly" ? "mês" : "ano"}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">Resultados máximos com IA personalizada</p>
                </button>
              </div>
            </Card>

            {/* Order Summary */}
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h2 className="text-2xl font-bold mb-6 text-white">Resumo do Pedido</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>{selectedPlanData.name} ({billingCycle === "monthly" ? "Mensal" : "Anual"})</span>
                  <span className="line-through text-gray-500">R$ {currentOriginalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-green-400 font-semibold">
                  <span>Desconto (50% OFF)</span>
                  <span>- R$ {(currentOriginalPrice - currentPrice).toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between text-2xl font-black text-white">
                    <span>Total</span>
                    <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                      R$ {currentPrice.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    ou {installments}x de R$ {installmentValue.toFixed(2)} sem juros
                  </p>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-4">
                  <h3 className="font-bold text-white mb-2">O que está incluso:</h3>
                  <ul className="space-y-2">
                    {selectedPlanData.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Payment Form */}
          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h2 className="text-2xl font-bold mb-6 text-white">Dados de Pagamento</h2>
              
              {/* Payment Method Selection */}
              <div className="flex gap-2 mb-6">
                <Button
                  variant={paymentMethod === "credit" ? "default" : "outline"}
                  onClick={() => setPaymentMethod("credit")}
                  className={`flex-1 ${
                    paymentMethod === "credit"
                      ? "bg-gradient-to-r from-orange-500 to-pink-600 font-bold"
                      : "border-gray-700 text-gray-400 hover:text-white"
                  }`}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Cartão
                </Button>
                <Button
                  variant={paymentMethod === "pix" ? "default" : "outline"}
                  onClick={() => setPaymentMethod("pix")}
                  className={`flex-1 ${
                    paymentMethod === "pix"
                      ? "bg-gradient-to-r from-orange-500 to-pink-600 font-bold"
                      : "border-gray-700 text-gray-400 hover:text-white"
                  }`}
                >
                  PIX
                </Button>
              </div>

              <form onSubmit={handlePayment} className="space-y-4">
                {paymentMethod === "credit" ? (
                  <>
                    {/* Card Number */}
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Número do Cartão</label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                        required
                      />
                    </div>

                    {/* Card Name */}
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Nome no Cartão</label>
                      <input
                        type="text"
                        placeholder="NOME COMPLETO"
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none uppercase"
                        required
                      />
                    </div>

                    {/* Expiry & CVV */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">Validade</label>
                        <input
                          type="text"
                          placeholder="MM/AA"
                          maxLength={5}
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          maxLength={4}
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Installments */}
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Parcelamento</label>
                      <select
                        value={installments}
                        onChange={(e) => setInstallments(Number(e.target.value))}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                      >
                        <option value={1}>1x de R$ {currentPrice.toFixed(2)} sem juros</option>
                        <option value={2}>2x de R$ {(currentPrice / 2).toFixed(2)} sem juros</option>
                        <option value={3}>3x de R$ {(currentPrice / 3).toFixed(2)} sem juros</option>
                        <option value={6}>6x de R$ {(currentPrice / 6).toFixed(2)} sem juros</option>
                        <option value={12}>12x de R$ {(currentPrice / 12).toFixed(2)} sem juros</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-white p-6 rounded-lg inline-block mb-4">
                      {/* QR Code Placeholder */}
                      <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                        <p className="text-gray-600 text-sm">QR Code PIX</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-2">Escaneie o QR Code com seu app de banco</p>
                    <p className="text-sm text-gray-500">Pagamento confirmado em até 2 minutos</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 font-bold text-lg py-6 shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processando...
                    </span>
                  ) : (
                    <>
                      <Lock className="w-5 h-5 mr-2" />
                      {paymentMethod === "credit" ? "Finalizar Pagamento" : "Aguardando Pagamento"}
                    </>
                  )}
                </Button>

                {/* Security Info */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-4">
                  <Lock className="w-4 h-4" />
                  <span>Pagamento 100% seguro e criptografado</span>
                </div>
              </form>
            </Card>

            {/* Guarantees */}
            <Card className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border-green-500/30 p-6">
              <h3 className="font-bold text-white mb-4 text-center">Garantias GTFit</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span><strong>7 dias de garantia:</strong> Não gostou? Devolvemos 100% do seu dinheiro</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span><strong>Cancele quando quiser:</strong> Sem multas ou taxas de cancelamento</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span><strong>Suporte 24/7:</strong> Estamos aqui para ajudar sempre que precisar</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
