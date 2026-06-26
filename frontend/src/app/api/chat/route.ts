import { NextRequest, NextResponse } from "next/server";

const ANTHROPIC_URL = "https://lgts1tetamapi01.azure-api.net/claude/anthropic/v1/messages";

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "ANTHROPIC_API_KEY not configured" }, { status: 500 });
  }

  const { message } = await req.json();

  const response = await fetch(`${ANTHROPIC_URL}?subscription-key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: "You are a warm, supportive mental coach. Keep your responses concise and conversational — like a real coach talking to a friend. Avoid long bullet-point lists. Always be empathetic first, then practical.",
      messages: [{ role: "user", content: message }],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json({ error: data }, { status: response.status });
  }

  return NextResponse.json({ reply: data.content[0].text });
}
