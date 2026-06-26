"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't reach the server. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-screen bg-orange-50">

      {/* Header */}
      <header className="px-6 py-4 bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white text-lg">
            🤗
          </div>
          <div>
            <h1 className="text-lg font-semibold text-orange-900">Your Mental Coach</h1>
            <p className="text-xs text-orange-400">Here to support you, always</p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.length === 0 && (
            <div className="text-center mt-16 space-y-3">
              <p className="text-4xl">☀️</p>
              <p className="text-orange-700 font-medium">How are you feeling today?</p>
              <p className="text-orange-400 text-sm">Share anything on your mind — I&apos;m here to listen.</p>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center text-sm flex-shrink-0">
                  🤗
                </div>
              )}
              <div
                className={`max-w-sm px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed shadow-sm ${
                  msg.role === "user"
                    ? "bg-orange-400 text-white rounded-br-none"
                    : "bg-white text-orange-900 rounded-bl-none border border-orange-100"
                }`}
              >
                {msg.content}
              </div>
              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-sm flex-shrink-0">
                  🙂
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-end gap-2 justify-start">
              <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center text-sm flex-shrink-0">
                🤗
              </div>
              <div className="px-4 py-3 rounded-2xl rounded-bl-none bg-white border border-orange-100 shadow-sm">
                <div className="flex gap-1 items-center h-4">
                  <span className="w-2 h-2 bg-orange-300 rounded-full animate-bounce [animation-delay:0ms]"></span>
                  <span className="w-2 h-2 bg-orange-300 rounded-full animate-bounce [animation-delay:150ms]"></span>
                  <span className="w-2 h-2 bg-orange-300 rounded-full animate-bounce [animation-delay:300ms]"></span>
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </main>

      {/* Input */}
      <footer className="px-4 py-4 bg-white border-t border-orange-100 shadow-md">
        <div className="max-w-2xl mx-auto flex gap-2 items-center">
          <input
            className="flex-1 rounded-full border border-orange-200 px-5 py-3 text-sm bg-orange-50 text-orange-900 placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
            placeholder="Share what's on your mind..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            disabled={loading}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="w-11 h-11 rounded-full bg-orange-400 text-white flex items-center justify-center hover:bg-orange-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm text-lg"
          >
            ➤
          </button>
        </div>
      </footer>
    </div>
  );
}
