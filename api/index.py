from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import httpx
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

ANTHROPIC_URL = "https://lgts1tetamapi01.azure-api.net/claude/anthropic/v1/messages"

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/api/chat")
def chat(request: ChatRequest):
    api_key = os.getenv("ANTHROPIC_API_KEY")
    if not api_key:
        raise HTTPException(status_code=500, detail="ANTHROPIC_API_KEY not configured")

    try:
        response = httpx.post(
            ANTHROPIC_URL,
            params={"subscription-key": api_key},
            json={
                "model": "claude-sonnet-4-6",
                "max_tokens": 1024,
                "system": "You are a warm, supportive mental coach. Keep your responses concise and conversational — like a real coach talking to a friend. Avoid long bullet-point lists. Always be empathetic first, then practical.",
                "messages": [{"role": "user", "content": request.message}]
            },
            timeout=60.0
        )
        data = response.json()
        return {"reply": data["content"][0]["text"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calling Anthropic API: {str(e)}")
