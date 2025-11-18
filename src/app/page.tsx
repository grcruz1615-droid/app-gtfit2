"use client";

import Link from "next/link";
import { Dumbbell, Zap, Camera, TrendingUp, Check, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section - APELATIVO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-32">
          <div className="text-center space-y-8">
            {/* Badge de Destaque */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-600 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
              <Zap className="w-4 h-4" />
              <span>LANÇAMENTO ESPECIAL - 50% OFF</span>
            </div>

            {/* Logo e Título Principal */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  GTFit
                </span>
              </h1>
              <p className="text-2xl sm:text-4xl font-bold text-gray-100">
                Seu Personal Trainer + Nutricionista
                <br />
                <span className="text-orange-400">com Inteligência Artificial</span>
              </p>
            </div>

            {/* Proposta de Valor */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Treinos personalizados que evoluem com você, contador de calorias por foto e vídeos explicativos. 
              <span className="text-pink-400 font-bold"> Tudo isso no seu bolso!</span>
            </p>

            {/* CTA Principal - BRASILEIRO */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Dumbbell className="w-6 h-6 mr-2" />
                  COMEÇAR GRÁTIS AGORA
                </Button>
              </Link>
              
              <Link href="/planos">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300"
                >
                  Ver Planos - 12x sem juros
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300"><span className="font-bold text-white">+50.000</span> usuários ativos</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-gray-300"><span className="font-bold text-white">4.9/5</span> avaliação</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300"><span className="font-bold text-white">App do Ano</span> 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Principais */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                3 Funcionalidades Revolucionárias
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Tecnologia de ponta para seus resultados</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/30 p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Treinos com IA</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Planos de treino personalizados que evoluem automaticamente com seu progresso. 
                Sua academia no bolso, seu personal 24/7.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Adaptação semanal automática</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Vídeos explicativos de cada exercício</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Histórico completo de performance</span>
                </li>
              </ul>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-pink-500/30 p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Calorias por Foto</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Tire uma foto do seu prato e a IA calcula automaticamente calorias e macros. 
                Nutricionista digital no seu celular.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Análise instantânea por foto</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Contagem de proteínas, carbs e gorduras</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Histórico nutricional completo</span>
                </li>
              </ul>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-purple-500/30 p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Evolução Inteligente</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Acompanhe seu progresso com gráficos detalhados e insights personalizados. 
                Veja sua transformação acontecer.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Gráficos de evolução de peso e carga</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Análise de performance por exercício</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Metas e conquistas gamificadas</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparação Planos - APELATIVO */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black mb-4">
              Escolha Seu Plano
            </h2>
            <p className="text-orange-400 text-xl font-bold">
              🔥 PROMOÇÃO: 50% OFF no primeiro mês + 12x sem juros no cartão
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plano Básico */}
            <Card className="bg-gray-800 border-gray-700 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Plano Básico</h3>
                <div className="text-5xl font-black text-white mb-2">GRÁTIS</div>
                <p className="text-gray-400">Para sempre</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">1 plano de treino semanal fixo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Vídeos explicativos básicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Contador de calorias manual</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Acompanhamento de peso</span>
                </li>
              </ul>

              <Link href="/dashboard" className="block">
                <Button variant="outline" className="w-full border-gray-600 hover:bg-gray-700">
                  Começar Grátis
                </Button>
              </Link>
            </Card>

            {/* Plano Premium - DESTAQUE */}
            <Card className="bg-gradient-to-br from-orange-500 to-pink-600 p-1 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm">
                🔥 MAIS POPULAR
              </div>
              
              <div className="bg-gray-900 rounded-lg p-8 h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-orange-400">Plano Premium</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl text-gray-500 line-through">R$ 79,90</span>
                    <span className="text-5xl font-black bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">R$ 39,90</span>
                  </div>
                  <p className="text-gray-400">por mês</p>
                  <p className="text-orange-400 font-bold text-sm mt-2">ou 12x de R$ 3,32 sem juros</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-white font-semibold">Treinos ilimitados com IA personalizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-white font-semibold">Vídeos dinâmicos com destaque muscular</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-white font-semibold">Contador de calorias por FOTO (IA)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-white font-semibold">Histórico completo e análises avançadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-white font-semibold">Planos que evoluem semanalmente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-white font-semibold">Suporte prioritário</span>
                  </li>
                </ul>

                <Link href="/planos" className="block">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold text-lg py-6 shadow-2xl hover:scale-105 transition-all duration-300">
                    Assinar Premium - 50% OFF
                  </Button>
                </Link>
                
                <p className="text-center text-gray-400 text-xs mt-4">
                  ✓ Cancele quando quiser • ✓ Garantia de 7 dias
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                O Que Nossos Usuários Dizem
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Silva",
                role: "Perdeu 15kg em 3 meses",
                text: "Melhor investimento que já fiz! A IA realmente entende meu corpo e adapta os treinos. Perdi 15kg e ganhei massa muscular.",
                rating: 5
              },
              {
                name: "Ana Paula",
                role: "Ganhou 5kg de massa magra",
                text: "O contador de calorias por foto é SENSACIONAL! Não preciso mais ficar digitando tudo. Economizo 30min por dia.",
                rating: 5
              },
              {
                name: "Roberto Costa",
                role: "Treina há 2 anos no GTFit",
                text: "Cancelei meu personal trainer presencial. O GTFit é mais completo, mais barato e está sempre comigo. Vale cada centavo!",
                rating: 5
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-gray-800 border-gray-700 p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-orange-400">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - URGÊNCIA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 text-white">
            Pronto Para Transformar Seu Corpo?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Junte-se a mais de 50.000 pessoas que já estão alcançando seus objetivos com o GTFit
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/dashboard">
              <Button 
                size="lg" 
                className="bg-white text-pink-600 hover:bg-gray-100 font-bold text-lg px-12 py-6 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-6 h-6 mr-2" />
                COMEÇAR AGORA - GRÁTIS
              </Button>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
            <p className="text-white font-bold text-lg mb-2">🎁 BÔNUS EXCLUSIVO DE LANÇAMENTO:</p>
            <ul className="text-white/90 space-y-2 text-left max-w-md mx-auto">
              <li>✓ 50% OFF no primeiro mês do Premium</li>
              <li>✓ 12x sem juros no cartão de crédito</li>
              <li>✓ 7 dias de garantia ou seu dinheiro de volta</li>
              <li>✓ E-book grátis: "Guia Definitivo de Hipertrofia"</li>
            </ul>
          </div>
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
