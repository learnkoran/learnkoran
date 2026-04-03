import { GoogleGenAI } from "@google/genai";
import { LanguageCode } from "../types";

const apiKey = process.env.API_KEY || '';

// Safely initialize GenAI only if key exists
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getDailyVerse = async (language: string): Promise<string> => {
  if (!ai) return "API Key missing. Please configure.";
  
  try {
    const prompt = `Provide a beautiful, inspiring verse from the Holy Quran translated into ${language}. Include the Surah name and Verse number. Format it cleanly. Do not add markdown code blocks.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Could not load the verse at this moment.";
  }
};

export const askIslamicQuestion = async (question: string, language: string): Promise<string> => {
  if (!ai) return "API Key missing.";

  try {
    const prompt = `You are a knowledgeable and respectful Islamic scholar assistant. Answer the following question about Islam in ${language}. Keep the answer concise, accurate, and peaceful. Question: ${question}`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Service temporarily unavailable.";
  }
};
