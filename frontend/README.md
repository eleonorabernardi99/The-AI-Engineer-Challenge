# Mental Coach Frontend

A warm, friendly chat interface for the Mental Coach app, built with Next.js and Tailwind CSS.

## Prerequisites

- Node.js 18+
- npm

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file in this folder with your API key:

```
ANTHROPIC_API_KEY=your-subscription-key-here
```

## Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> The app calls Claude Sonnet via the `/api/chat` Next.js API route — no separate backend needed.

## Deploying to Vercel

```bash
vercel --prod
```

Make sure to add `ANTHROPIC_API_KEY` as an environment variable in your Vercel project settings before deploying.
