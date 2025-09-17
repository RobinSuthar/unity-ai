"use server";
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.

export async function GeminiAI(userMessage: string) {
  const ai = new GoogleGenAI({});

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: userMessage,
  });
  console.log(response);

  return response.text;
}
