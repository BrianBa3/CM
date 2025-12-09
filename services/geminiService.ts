import { GoogleGenAI } from "@google/genai";
import { MessageTone } from "../types";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBirthdayMessage = async (
  friendName: string,
  tone: MessageTone,
  memory: string
): Promise<string> => {
  try {
    const prompt = `
      Escribe un mensaje de cumpleaños corto, cálido y personal para mi mejor amiga llamada ${friendName}.
      
      El tono del mensaje debe ser: ${tone}.
      
      Incluye una referencia a este recuerdo o característica nuestra: "${memory}".
      
      El mensaje debe ser emocionante, usar emojis y estar listo para enviar o leer en voz alta. Máximo 100 palabras.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.8,
      }
    });

    return response.text || "¡Feliz cumpleaños! Te quiero mucho.";
  } catch (error) {
    console.error("Error generating message:", error);
    return "¡Feliz cumpleaños! Eres la mejor amiga del mundo (La IA está descansando, pero mi cariño no).";
  }
};