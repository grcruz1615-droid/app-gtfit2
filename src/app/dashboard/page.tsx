"use client";

import { useState } from "react";
import { Dumbbell, Camera, TrendingUp, Calendar, Clock, Flame, Target, Award, ChevronRight, Play, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"treino" | "nutricao" | "progresso">("treino");

  // Dados simulados
  const userStats = {
    name: "Carlos",
    plan: "básico", // ou "premium"
    streak: 12,
    workoutsCompleted: 45,
    caloriesTracked: 28,
    weightGoal: { current: 82, target: 75, start: 90 }
  };

  const todayWorkout = {
    day: "Segunda-feira",
    focus: "Peito e Tríceps",
    duration: "45-60 min",
    exercises: [
      { name: "Supino Reto", sets: 4, reps: "8-12", rest: "90s", video: true },
      { name: "Supino Inclinado", sets: 3, reps: "10-12", rest: "90s", video: true },
      { name: "Crucifixo", sets: 3, reps: "12-15", rest: "60s", video: true },
      { name: "Tríceps Testa", sets: 3, reps: "10-12", rest: "60s", video: true },
      { name: "Tríceps Corda", sets: 3, reps: "12-15", rest: "60s", video: true }
    ]
  };

  const nutritionToday = {
    target: 2200,
    consumed: 1650,
    protein: { consumed: 120, target: 165 },
    carbs: { consumed: 180, target: 220 },
    fats: { consumed: 55, target: 70 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-orange-400" />
              <span className="text-2xl font-black bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                GTFit
              </span>
            </Link>
            
            <div className="flex items-center gap-4">
              {userStats.plan === "básico" && (
                <Link href="/planos">
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 font-bold"
                  >
                    ⚡ Upgrade Premium
                  </Button>
                </Link>
              )}
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <Flame className="w-5 h-5 text-orange-400" />
                <span className="font-bold">{userStats.streak} dias</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black mb-2">
            Olá, {userStats.name}! 👋
          </h1>
          <p className="text-gray-400 text-lg">
            Pronto para mais um treino incrível?
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-orange-500/20 to-pink-600/20 border-orange-500/30 p-6">
            <div className="flex items-center justify-between mb-2">
              <Dumbbell className="w-8 h-8 text-orange-400" />
              <span className="text-3xl font-black text-white">{userStats.workoutsCompleted}</span>
            </div>
            <p className="text-gray-300 font-semibold">Treinos Completos</p>
          </Card>

          <Card className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 border-pink-500/30 p-6">
            <div className="flex items-center justify-between mb-2">
              <Camera className="w-8 h-8 text-pink-400" />
              <span className="text-3xl font-black text-white">{userStats.caloriesTracked}</span>
            </div>
            <p className="text-gray-300 font-semibold">Refeições Rastreadas</p>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 border-purple-500/30 p-6">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8 text-purple-400" />
              <span className="text-3xl font-black text-white">{userStats.weightGoal.current}kg</span>
            </div>
            <p className="text-gray-300 font-semibold">Peso Atual</p>
            <Progress 
              value={((userStats.weightGoal.start - userStats.weightGoal.current) / (userStats.weightGoal.start - userStats.weightGoal.target)) * 100} 
              className="mt-2 h-2"
            />
          </Card>
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <Button
            variant={activeTab === "treino" ? "default" : "outline"}
            onClick={() => setActiveTab("treino")}
            className={activeTab === "treino" 
              ? "bg-gradient-to-r from-orange-500 to-pink-600 font-bold" 
              : "border-gray-700 text-gray-400 hover:text-white"}
          >
            <Dumbbell className="w-4 h-4 mr-2" />
            Treino de Hoje
          </Button>
          <Button
            variant={activeTab === "nutricao" ? "default" : "outline"}
            onClick={() => setActiveTab("nutricao")}
            className={activeTab === "nutricao" 
              ? "bg-gradient-to-r from-orange-500 to-pink-600 font-bold" 
              : "border-gray-700 text-gray-400 hover:text-white"}
          >
            <Camera className="w-4 h-4 mr-2" />
            Nutrição
          </Button>
          <Button
            variant={activeTab === "progresso" ? "default" : "outline"}
            onClick={() => setActiveTab("progresso")}
            className={activeTab === "progresso" 
              ? "bg-gradient-to-r from-orange-500 to-pink-600 font-bold" 
              : "border-gray-700 text-gray-400 hover:text-white"}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Progresso
          </Button>
        </div>

        {/* Tab Content */}
        {activeTab === "treino" && (
          <div className="space-y-6">
            {/* Workout Header */}
            <Card className="bg-gradient-to-r from-orange-500 to-pink-600 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 text-white/80 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">{todayWorkout.day}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    {todayWorkout.focus}
                  </h2>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{todayWorkout.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Dumbbell className="w-4 h-4" />
                      <span className="text-sm">{todayWorkout.exercises.length} exercícios</span>
                    </div>
                  </div>
                </div>
                <Button 
                  size="lg"
                  className="bg-white text-pink-600 hover:bg-gray-100 font-bold"
                >
                  Iniciar Treino
                </Button>
              </div>
            </Card>

            {/* Exercises List */}
            <div className="space-y-4">
              {todayWorkout.exercises.map((exercise, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 p-6 hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-gradient-to-r from-orange-500 to-pink-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{exercise.name}</h3>
                          <p className="text-sm text-gray-400">
                            {exercise.sets} séries × {exercise.reps} reps • Descanso: {exercise.rest}
                          </p>
                        </div>
                      </div>
                      
                      {userStats.plan === "básico" && exercise.video && (
                        <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-orange-400" />
                          <p className="text-sm text-orange-300">
                            <span className="font-bold">Premium:</span> Vídeo com destaque muscular disponível
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2 ml-4">
                      {exercise.video && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-gray-600 hover:bg-gray-700"
                        >
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-gray-600 hover:bg-gray-700"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Premium CTA */}
            {userStats.plan === "básico" && (
              <Card className="bg-gradient-to-r from-orange-500/20 to-pink-600/20 border-orange-500/30 p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      🔥 Desbloqueie Treinos Personalizados com IA
                    </h3>
                    <p className="text-gray-300">
                      Planos que evoluem com você + vídeos premium + muito mais
                    </p>
                  </div>
                  <Link href="/planos">
                    <Button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 font-bold whitespace-nowrap">
                      Ver Planos Premium
                    </Button>
                  </Link>
                </div>
              </Card>
            )}
          </div>
        )}

        {activeTab === "nutricao" && (
          <div className="space-y-6">
            {/* Calorie Summary */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-pink-500/30 p-6">
              <h2 className="text-2xl font-bold mb-6 text-white">Resumo Nutricional de Hoje</h2>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 font-semibold">Calorias Consumidas</span>
                  <span className="text-2xl font-black text-white">
                    {nutritionToday.consumed} / {nutritionToday.target} kcal
                  </span>
                </div>
                <Progress 
                  value={(nutritionToday.consumed / nutritionToday.target) * 100} 
                  className="h-3"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Proteínas</p>
                  <p className="text-xl font-bold text-orange-400">
                    {nutritionToday.protein.consumed}g
                  </p>
                  <p className="text-xs text-gray-500">de {nutritionToday.protein.target}g</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Carboidratos</p>
                  <p className="text-xl font-bold text-pink-400">
                    {nutritionToday.carbs.consumed}g
                  </p>
                  <p className="text-xs text-gray-500">de {nutritionToday.carbs.target}g</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Gorduras</p>
                  <p className="text-xl font-bold text-purple-400">
                    {nutritionToday.fats.consumed}g
                  </p>
                  <p className="text-xs text-gray-500">de {nutritionToday.fats.target}g</p>
                </div>
              </div>
            </Card>

            {/* Photo Counter CTA */}
            <Card className="bg-gradient-to-r from-pink-500 to-purple-600 p-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-white" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-black text-white mb-2">
                    Contador de Calorias por Foto
                  </h3>
                  <p className="text-white/90 mb-4">
                    Tire uma foto do seu prato e a IA calcula automaticamente calorias e macros
                  </p>
                  {userStats.plan === "básico" ? (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="/planos">
                        <Button className="bg-white text-pink-600 hover:bg-gray-100 font-bold">
                          Desbloquear com Premium
                        </Button>
                      </Link>
                      <Button variant="outline" className="border-white text-white hover:bg-white/10">
                        Adicionar Manualmente
                      </Button>
                    </div>
                  ) : (
                    <Button className="bg-white text-pink-600 hover:bg-gray-100 font-bold">
                      <Camera className="w-5 h-5 mr-2" />
                      Tirar Foto do Prato
                    </Button>
                  )}
                </div>
              </div>
            </Card>

            {/* Manual Entry */}
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Adicionar Refeição Manualmente</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Nome da Refeição</label>
                    <input 
                      type="text" 
                      placeholder="Ex: Almoço"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Calorias (kcal)</label>
                    <input 
                      type="number" 
                      placeholder="500"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 font-bold">
                  Adicionar Refeição
                </Button>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "progresso" && (
          <div className="space-y-6">
            {/* Weight Progress */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-purple-500/30 p-6">
              <h2 className="text-2xl font-bold mb-6 text-white">Evolução de Peso</h2>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">Peso Inicial</p>
                  <p className="text-2xl font-black text-gray-500">{userStats.weightGoal.start}kg</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">Peso Atual</p>
                  <p className="text-3xl font-black bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                    {userStats.weightGoal.current}kg
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">Meta</p>
                  <p className="text-2xl font-black text-green-400">{userStats.weightGoal.target}kg</p>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 font-semibold">Progresso da Meta</span>
                  <span className="text-lg font-bold text-white">
                    {Math.round(((userStats.weightGoal.start - userStats.weightGoal.current) / (userStats.weightGoal.start - userStats.weightGoal.target)) * 100)}%
                  </span>
                </div>
                <Progress 
                  value={((userStats.weightGoal.start - userStats.weightGoal.current) / (userStats.weightGoal.start - userStats.weightGoal.target)) * 100} 
                  className="h-3"
                />
                <p className="text-sm text-gray-400 mt-2">
                  Faltam {userStats.weightGoal.current - userStats.weightGoal.target}kg para sua meta
                </p>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Conquistas Recentes 🏆</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-gradient-to-r from-orange-500/20 to-pink-600/20 border border-orange-500/30 rounded-lg p-4">
                  <div className="bg-gradient-to-r from-orange-500 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <Flame className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Sequência de Fogo!</p>
                    <p className="text-sm text-gray-400">12 dias consecutivos de treino</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-gradient-to-r from-purple-500/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-4">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Primeira Meta Alcançada!</p>
                    <p className="text-sm text-gray-400">Perdeu 8kg do objetivo inicial</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30 rounded-lg p-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Dedicação Total!</p>
                    <p className="text-sm text-gray-400">45 treinos completados</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Premium Analytics CTA */}
            {userStats.plan === "básico" && (
              <Card className="bg-gradient-to-r from-purple-500/20 to-blue-600/20 border-purple-500/30 p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      📊 Análises Avançadas Disponíveis
                    </h3>
                    <p className="text-gray-300">
                      Gráficos detalhados, histórico completo e insights personalizados
                    </p>
                  </div>
                  <Link href="/planos">
                    <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 font-bold whitespace-nowrap">
                      Upgrade Premium
                    </Button>
                  </Link>
                </div>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
