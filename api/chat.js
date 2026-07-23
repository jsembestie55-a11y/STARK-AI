import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      error: "No message"
    });
  }

  try {

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Jsi STARK AI, futuristický osobní asistent inspirovaný JARVISEM."
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    res.status(200).json({
      reply: response.choices[0].message.content
    });

  } catch (error) {

    res.status(500).json({
      error: "AI chyba"
    });

  }
}