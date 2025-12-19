
import { GoogleGenAI, Type } from "@google/genai";

export const getAnimalFact = async (animalName: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Tell me one very short, super fun, and simple fact about ${animalName}s for a 7-year-old child. Use simple words and an emoji.`,
      config: {
        systemInstruction: "You are a friendly teacher for 6-10 year olds. Keep your answers very short, simple, and exciting.",
        temperature: 0.8,
      },
    });
    return response.text || `Did you know that ${animalName}s are super cool? 🌟`;
  } catch (error) {
    console.error("Error fetching animal fact:", error);
    return `Did you know that ${animalName}s are amazing friends? 🐾`;
  }
};

export const getNewQuizQuestions = async (): Promise<any[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Create 5 simple multiple-choice questions for kids about animals and space. Make them very easy.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING } 
              },
              correctAnswer: { type: Type.STRING }
            },
            required: ["question", "options", "correctAnswer"]
          }
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    return [];
  }
};
