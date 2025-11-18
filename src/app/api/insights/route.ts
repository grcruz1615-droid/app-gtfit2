import { NextRequest, NextResponse } from "next/server";
import { generateProgressInsights } from "@/lib/openai";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { progressData } = body;

    // Validação básica
    if (!progressData) {
      return NextResponse.json(
        { error: "Dados de progresso não fornecidos" },
        { status: 400 }
      );
    }

    // Gerar insights usando OpenAI
    const insights = await generateProgressInsights(progressData);

    return NextResponse.json({
      success: true,
      data: insights,
    });
  } catch (error) {
    console.error("Erro na API de insights:", error);
    return NextResponse.json(
      { error: "Erro ao gerar insights" },
      { status: 500 }
    );
  }
}
