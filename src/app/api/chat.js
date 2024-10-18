
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // 
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      });

      const gptResponse = response.data.choices[0].message.content;
      console.log(gptResponse)

      res.status(200).json({ response: gptResponse });
    } catch (error) {
      console.error("Error communicating with OpenAI:", error);
      res.status(500).json({ error: "Failed to get response from OpenAI" });
    }
  } else {
   
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
