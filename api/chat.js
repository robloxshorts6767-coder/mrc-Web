export default async function handler(req, res) {
  const AI_API_KEY = "sk-BugWE0uLMeo59q12ZEuZ3P6EUtCmEt35JIIzfw1GxjMUEFAhWUU8HEUxyZaRGEE8";
  const OPENCODE_URL = "https://opencode.ai/zen/v1/chat/completions";

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, temperature } = req.body;

    const response = await fetch(OPENCODE_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${AI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-v4-flash-free",
        messages: messages,
        temperature: temperature || 0.1,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: `API Error ${response.status}`, details: errorText });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
}
