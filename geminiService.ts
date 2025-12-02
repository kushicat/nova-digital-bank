import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// System instruction to give the AI the persona of "Nova Pocket Manager"
const SYSTEM_INSTRUCTION = `
You are Nova, the AI Pocket Manager for Nova Digital Bank in Bangladesh. 
Your tone is youthful, energetic, professional, and helpful. You mix English with occasional Bangla phrases (written in English script or Bangla script) like "taka", "bhai", "shon", "ossome".
You explain financial concepts simply.
Nova Digital Bank features to reference:
1. 100% Digital, Branchless.
2. Backed by VEON and Square Group.
3. Gig-Link for Freelancers (low fees).
4. Micro-loans for instant cash.
5. Savings Pots with high interest.

If the user asks about budgets, savings, or loans, give advice based on Nova's products.
Keep responses concise (under 80 words).
`;

let aiClient: GoogleGenAI | null = null;

const getAiClient = (): GoogleGenAI => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: API_KEY });
  }
  return aiClient;
};

export const generateFinancialAdvice = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm currently in offline mode (API Key missing). But usually, I'd help you save money here!";
  }

  try {
    const ai = getAiClient();
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 150,
      },
    });

    return response.text || "Sorry, I couldn't process that right now. Try checking your internet connection.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong with my financial circuits. Please try again later.";
  }
};