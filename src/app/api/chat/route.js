import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";
// Ensure that Next.js runs this API route in the Node.js runtime
export const runtime = 'nodejs'; // Ensures it runs in Node.js environment

export async function POST(req) {
  try {
    const { message } = await req.json(); // Parse incoming request body

    const openAiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`, // Use the API key from environment
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Specify the model
        messages: [{ role: "user", content: message }], // Send the user's message to GPT
      }),
    });

    const data = await openAiResponse.json(); // Parse response from OpenAI

    if (openAiResponse.ok) {
      const gptResponse = data.choices[0].message.content; // Extract GPT response
      return new Response(JSON.stringify({ response: gptResponse }), { status: 200 });
    } else {
      console.error("Error from OpenAI:", data);
      return new Response(JSON.stringify({ error: "Error from OpenAI" }), { status: 500 });
    }
  } catch (error) {
    console.error("Request error:", error);
    return new Response(JSON.stringify({ error: "Failed to get response from OpenAI" }), { status: 500 });
  }
}

export async function GET() {
  return new Response("Method GET not allowed", { status: 405 });
}

