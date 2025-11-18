import OpenAI from "openai";

// Inicializar cliente OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default openai;

// Função para gerar plano de treino personalizado
export async function generateWorkoutPlan(params: {
  goal: string;
  level: string;
  daysPerWeek: number;
  restrictions?: string;
  userHistory?: any;
}) {
  const { goal, level, daysPerWeek, restrictions, userHistory } = params;

  const systemPrompt = `Você é um Personal Trainer certificado e experiente. 
Crie um plano de treino personalizado baseado nas informações do usuário.
Retorne APENAS um JSON válido no seguinte formato:

{
  "planName": "Nome do Plano",
  "goal": "objetivo",
  "level": "nível",
  "daysPerWeek": número,
  "exercises": [
    {
      "day": "Segunda-feira",
      "exercises": [
        {
          "name": "Nome do Exercício",
          "sets": 3,
          "reps": "12-15",
          "weight": "moderado",
          "restTime": "60s",
          "muscleGroup": "Grupo Muscular",
          "videoUrl": "https://www.youtube.com/watch?v=exemplo",
          "tips": "Dicas de execução"
        }
      ]
    }
  ]
}`;

  const userPrompt = `Crie um plano de treino para:
- Objetivo: ${goal}
- Nível: ${level}
- Dias por semana: ${daysPerWeek}
${restrictions ? `- Restrições: ${restrictions}` : ""}
${userHistory ? `- Histórico: ${JSON.stringify(userHistory)}` : ""}

Retorne APENAS o JSON, sem texto adicional.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const result = completion.choices[0].message.content;
    return JSON.parse(result || "{}");
  } catch (error) {
    console.error("Erro ao gerar plano de treino:", error);
    throw new Error("Falha ao gerar plano de treino");
  }
}

// Função para analisar foto de comida e contar calorias
export async function analyzeFoodImage(imageBase64: string) {
  const systemPrompt = `Você é um Nutricionista certificado e experiente.
Analise a imagem da comida e retorne APENAS um JSON válido no seguinte formato:

{
  "mealName": "Nome da Refeição",
  "ingredients": [
    {
      "name": "Ingrediente",
      "quantity": "quantidade estimada",
      "weight": "peso em gramas"
    }
  ],
  "nutrition": {
    "calories": número,
    "protein": número,
    "carbs": número,
    "fats": número,
    "fiber": número
  },
  "confidence": "alta/média/baixa",
  "notes": "Observações adicionais"
}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Analise esta imagem de comida e forneça informações nutricionais detalhadas. Retorne APENAS o JSON, sem texto adicional.",
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${imageBase64}`,
              },
            },
          ],
        },
      ],
      response_format: { type: "json_object" },
      max_tokens: 1000,
    });

    const result = completion.choices[0].message.content;
    return JSON.parse(result || "{}");
  } catch (error) {
    console.error("Erro ao analisar imagem de comida:", error);
    throw new Error("Falha ao analisar imagem");
  }
}

// Função para gerar insights de progresso
export async function generateProgressInsights(progressData: any) {
  const systemPrompt = `Você é um Personal Trainer e Nutricionista experiente.
Analise os dados de progresso do usuário e forneça insights personalizados.
Retorne APENAS um JSON válido no seguinte formato:

{
  "summary": "Resumo geral do progresso",
  "achievements": ["conquista 1", "conquista 2"],
  "recommendations": ["recomendação 1", "recomendação 2"],
  "nextGoals": ["próximo objetivo 1", "próximo objetivo 2"],
  "motivationalMessage": "Mensagem motivacional"
}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `Analise estes dados de progresso e forneça insights: ${JSON.stringify(
            progressData
          )}. Retorne APENAS o JSON, sem texto adicional.`,
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.8,
    });

    const result = completion.choices[0].message.content;
    return JSON.parse(result || "{}");
  } catch (error) {
    console.error("Erro ao gerar insights:", error);
    throw new Error("Falha ao gerar insights");
  }
}
