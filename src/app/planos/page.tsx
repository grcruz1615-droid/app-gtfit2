"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, Zap, Dumbbell, Crown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Planos() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const features = {
    basico: [
      { text: "1 plano de treino semanal fixo", included: true },
      { text: "Vídeos explicativos básicos", included: true },
      { text: "Contador de calorias manual", included: true },
      { text: "Acompanhamento de peso", included: true },
      { text: "Treinos personalizados com IA", included: false },
      { text: "Contador de calorias por foto", included: false },
      { text: "Vídeos com destaque muscular", included: false },
      { text: "Histórico completo e análises", included: false },
      { text: "Planos que evoluem semanalmente", included: false },
      { text: "Suporte prioritário", included: false }
    ],
    premium: [
      { text: "Treinos ilimitados personalizados com IA", included: true },
      { text: "Contador de calorias por FOTO (IA)", included: true },
      { text: "Vídeos dinâmicos com destaque muscular", included: true },
      { text: "Histórico completo e análises avançadas", included: true },
      { text: "Planos que evoluem semanalmente", included: true },
      { text: "Rastreamento de carga e performance", included: true },
      { text: "Insights personalizados de progresso", included: true },
      { text: "Suporte prioritário 24/7", included: true },
      { text: "Acesso antecipado a novos recursos", included: true },
      { text: "E-books e guias exclusivos", included: true }
    ]
  };

  const prices = {
    basico: {
      monthly: { price: 29.90, original: 59.90, installment: 2.49 },
      annual: { price: 299.90, original: 599.90, installment: 24.99, monthlyEquivalent: 24.99 }
    },
    premium: {
      monthly: { price: 99.90, original: 199.90, installment: 8.32 },
      annual: { price: 999.90, original: 1999.90, installment: 83.32, monthlyEquivalent: 83.32 }
    }
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
            
            <Link href="/">
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-600 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-bounce">
            <Zap className="w-4 h-4" />
            <span>OFERTA ESPECIAL - 50% OFF NO PRIMEIRO MÊS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black mb-6">
            Escolha o Plano Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
              Para Sua Transformação
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comece grátis e faça upgrade quando quiser. Sem compromisso, cancele quando quiser.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-3 rounded-lg font-bold transition-all relative ${
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Anual
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                -17%
              </span>
            </button>
          </div>

          <p className="text-orange-400 font-bold text-lg">
            💳 Parcelamento em até 12x sem juros no cartão de crédito
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Plano Básico */}
            <Card className="bg-gray-800 border-gray-700 p-8 flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-2xl mb-4">
                  <Dumbbell className="w-8 h-8 text-gray-400" />
                </div>
                <h2 className="text-3xl font-black mb-2 text-white">Plano Básico</h2>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl text-gray-500 line-through">
                    R$ {prices.basico[billingCycle].original.toFixed(2)}
                  </span>
                  <span className="text-5xl font-black text-white">
                    R$ {prices.basico[billingCycle].price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-400 mb-2">
                  {billingCycle === "monthly" ? "por mês" : "por ano"}
                </p>
                {billingCycle === "annual" && (
                  <p className="text-green-400 font-semibold text-sm mb-2">
                    Equivalente a R$ {prices.basico.annual.monthlyEquivalent.toFixed(2)}/mês
                  </p>
                )}
                <div className="inline-block bg-orange-500/20 border border-orange-500/30 rounded-lg px-4 py-2">
                  <p className="text-orange-400 font-bold text-sm">
                    💳 ou 12x de R$ {prices.basico[billingCycle].installment.toFixed(2)} sem juros
                  </p>
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {features.basico.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "text-gray-300" : "text-gray-600"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={`/pagamento?plan=basico&cycle=${billingCycle}`} className="block">
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 font-bold text-lg py-6"
                >
                  Começar Agora
                </Button>
              </Link>

              <p className="text-center text-gray-500 text-xs mt-4">
                Cancele quando quiser
              </p>
            </Card>

            {/* Plano Premium - DESTAQUE */}
            <Card className="bg-gradient-to-br from-orange-500 to-pink-600 p-1 relative flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full font-black text-sm flex items-center gap-2 shadow-2xl">
                <Crown className="w-4 h-4" />
                MAIS POPULAR
              </div>

              <div className="bg-gray-900 rounded-lg p-8 h-full flex flex-col">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-black mb-2 text-orange-400">Plano Premium</h2>
                  
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl text-gray-500 line-through">
                      R$ {prices.premium[billingCycle].original.toFixed(2)}
                    </span>
                    <span className="text-5xl font-black bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                      R$ {prices.premium[billingCycle].price.toFixed(2)}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-2">
                    {billingCycle === "monthly" ? "por mês" : "por ano"}
                  </p>
                  
                  {billingCycle === "annual" && (
                    <p className="text-green-400 font-semibold text-sm mb-2">
                      Equivalente a R$ {prices.premium.annual.monthlyEquivalent.toFixed(2)}/mês
                    </p>
                  )}
                  
                  <div className="inline-block bg-orange-500/20 border border-orange-500/30 rounded-lg px-4 py-2">
                    <p className="text-orange-400 font-bold text-sm">
                      💳 ou 12x de R$ {prices.premium[billingCycle].installment.toFixed(2)} sem juros
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {features.premium.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white font-semibold">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={`/pagamento?plan=premium&cycle=${billingCycle}`} className="block">
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-black text-lg py-6 shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Assinar Premium - 50% OFF
                  </Button>
                </Link>

                <p className="text-center text-gray-400 text-xs mt-4">
                  ✓ Cancele quando quiser • ✓ Garantia de 7 dias • ✓ Suporte 24/7
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Compare os Planos
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Veja todas as diferenças em detalhes</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-6 text-gray-400 font-semibold">Funcionalidade</th>
                  <th className="text-center py-4 px-6 text-white font-bold">Básico</th>
                  <th className="text-center py-4 px-6 text-orange-400 font-bold">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Planos de Treino</td>
                  <td className="text-center py-4 px-6 text-gray-400">1 fixo por semana</td>
                  <td className="text-center py-4 px-6 text-white font-semibold">Ilimitados com IA</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Vídeos Explicativos</td>
                  <td className="text-center py-4 px-6 text-gray-400">Básicos</td>
                  <td className="text-center py-4 px-6 text-white font-semibold">Com destaque muscular</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Contador de Calorias</td>
                  <td className="text-center py-4 px-6 text-gray-400">Manual</td>
                  <td className="text-center py-4 px-6 text-white font-semibold">Por foto (IA)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Histórico e Análises</td>
                  <td className="text-center py-4 px-6 text-gray-400">Básico</td>
                  <td className="text-center py-4 px-6 text-white font-semibold">Completo e avançado</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Evolução Automática</td>
                  <td className="text-center py-4 px-6"><X className="w-5 h-5 text-gray-600 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-orange-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Suporte Prioritário</td>
                  <td className="text-center py-4 px-6"><X className="w-5 h-5 text-gray-600 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-orange-400 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Posso cancelar a qualquer momento?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Sim! Você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas. 
                Você continuará tendo acesso até o final do período pago.
              </p>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Como funciona o parcelamento?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Você pode parcelar em até 12x sem juros no cartão de crédito. 
                Plano Básico: 12x de R$ 2,49 (mensal) ou 12x de R$ 24,99 (anual) | 
                Plano Premium: 12x de R$ 8,32 (mensal) ou 12x de R$ 83,32 (anual)
              </p>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                A garantia de 7 dias funciona como?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Se você não ficar satisfeito nos primeiros 7 dias, devolvemos 100% do seu dinheiro. 
                Sem perguntas, sem complicação.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 text-white">
            Pronto Para Começar Sua Transformação?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Mais de 50.000 pessoas já estão alcançando seus objetivos com o GTFit
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/pagamento">
              <Button 
                size="lg"
                className="bg-white text-pink-600 hover:bg-gray-100 font-black text-lg px-12 py-6 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-6 h-6 mr-2" />
                COMEÇAR AGORA
              </Button>
            </Link>
          </div>

          <p className="text-white/80 text-sm mt-6">
            ✓ Sem cartão de crédito para teste • ✓ Cancele quando quiser • ✓ Suporte 24/7
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-black bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent mb-4">
              GTFit
            </h3>
            <p className="text-gray-400 mb-6">
              Seu Personal Trainer + Nutricionista com Inteligência Artificial
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-orange-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Contato</a>
            </div>
            <p className="text-gray-600 text-xs mt-6">
              © 2024 GTFit. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
