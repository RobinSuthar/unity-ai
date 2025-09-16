"use server";
import OpenAI from "openai";
console.log(process.env.OPENAI_API_KE);

export async function AIRead(userMessage: string) {
  console.log(process.env.OPENAI_API_KE);

  console.log("Asdas");
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const response = await client.responses.create({
    model: "gpt-5",
    input: userMessage,
  });

  console.log(response.output_text);

  return response.output_text;
}
