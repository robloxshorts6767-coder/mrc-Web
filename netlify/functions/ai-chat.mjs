export default async (request, context) => {
  const AI_API_KEY = "sk-BugWE0uLMeo59q12ZEuZ3P6EUtCmEt35JIIzfw1GxjMUEFAhWUU8HEUxyZaRGEE8";
  const OPENCODE_URL = "https://opencode.ai/zen/v1/chat/completions";

  try {
    const body = await request.json();

    const response = await fetch(OPENCODE_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${AI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-v4-flash-free",
        messages: body.messages,
        temperature: body.temperature || 0.7,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(
        JSON.stringify({ error: `API Error ${response.status}`, details: errorText }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Internal Server Error", message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const config = {
  path: "/api/chat",
};
