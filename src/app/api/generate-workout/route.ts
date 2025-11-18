import { NextRequest, NextResponse } from "next/server";
import { generateWorkoutPlan } from "@/lib/openai";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { goal, level, daysPerWeek, restrictions, userHistory } = body;

    // Validação básica
    if (!goal || !level || !daysPerWeek) {
      return NextResponse.json(
        { error: "Parâmetros obrigatórios faltando" },
        { status: 400 }
      );
    }

    // Gerar plano de treino usando OpenAI
    const workoutPlan = await generateWorkoutPlan({
      goal,
      level,
      daysPerWeek,
      restrictions,
      userHistory,
    });

    return NextResponse.json({
      success: true,
      data: workoutPlan,
    });
  } catch (error) {
    console.error("Erro na API de geração de treino:", error);
    return NextResponse.json(
      { error: "Erro ao gerar plano de treino" },
      { status: 500 }
    );
  }
}
