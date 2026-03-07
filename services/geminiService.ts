
import { GoogleGenAI, Type } from "@google/genai";

export const suggestSimilarQuestion = async (currentQuestion: string): Promise<{ question: string; recommendation: string }> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `بناءً على هذا السؤال الاستثماري: "${currentQuestion}"، اقترح سؤالاً شبيهاً واحترافياً مع توصية ذكية مختصرة جداً ليكون في كاروسيل تعليمي. أجب بصيغة JSON فقط.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING },
            recommendation: { type: Type.STRING }
          },
          required: ["question", "recommendation"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return {
      question: result.question || 'سؤال مقترح جديد',
      recommendation: result.recommendation || 'توصية مقترحة جديدة'
    };
  } catch (error) {
    console.error("AI Error:", error);
    return {
      question: "ما هي أفضل الاستراتيجيات للعام القادم؟",
      recommendation: "التركيز على الأصول ذات العوائد المستدامة"
    };
  }
};
