
import { GoogleGenAI, Type } from "@google/genai";

// Always use process.env.API_KEY directly for initialization
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBookRecommendations = async (userPrompt: string, availableBooks: any[]) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `
      Context: You are a friendly academic advisor for MedPlexus, a premium medical textbook and equipment marketplace in Nigeria. 
      The user is looking for textbook or equipment recommendations.
      Available Items Data: ${JSON.stringify(availableBooks)}
      
      User Ask: ${userPrompt}
      
      Instructions: Recommend 1-3 specific items from the list and explain why they are good for their specific level or course. Keep it professional but encouraging. Mention the brand quality if it's equipment.
    `
  });
  // Use the .text property to access generated content
  return response.text;
};