import { NextRequest, NextResponse } from "next/server";
import { analyzeFoodImage } from "@/lib/openai";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { imageBase64 } = body;

    // Validação básica
    if (!imageBase64) {
      return NextResponse.json(
        { error: "Imagem não fornecida" },
        { status: 400 }
      );
    }

    // Analisar imagem usando OpenAI Vision
    const nutritionData = await analyzeFoodImage(imageBase64);

    return NextResponse.json({
      success: true,
      data: nutritionData,
    });
  } catch (error) {
    console.error("Erro na API de análise de comida:", error);
    return NextResponse.json(
      { error: "Erro ao analisar imagem" },
      { status: 500 }
    );
  }
}
