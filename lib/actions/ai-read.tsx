"use server";
import OpenAI from "openai";

export async function AIRead(userMessage: string) {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const response = await client.responses.create({
    model: "gpt-4",
    input: userMessage,
  });

  console.log(response.output_text);

  return response.output_text;
}
