"use server";
import OpenAI from "openai";

export async function AIRead(userMessage: string) {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const response = await client.responses.create({
    model: "gpt-4",
    input: [
      {
        role: "system",
        content:
          "You are a helpful assistant. Always reply in GitHub-flavored Markdown. Use proper headings (#, ##, ###), bullet points, numbered lists, tables, and fenced code blocks (```language) when needed.",
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
  });
  console.log(response.output_text);

  return response.output_text;
}
