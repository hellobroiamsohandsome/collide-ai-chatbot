<a href="https://chat.vercel.ai/">
  <img alt="COLLIDE - Brand-Shaping House for Creative Founders" src="app/(chat)/opengraph-image.png">
  <h1 align="center">COLLIDE - The Founder's Lens</h1>
</a>

<p align="center">
    COLLIDE is a strategic and creative house for creative founders, powered by Next.js and the AI SDK. This implementation features "The Founder's Lens" — an AI guide through the COLLIDE Framework™.
</p>

<p align="center">
  <a href="COLLIDE.md"><strong>About COLLIDE</strong></a> ·
  <a href="#the-collide-framework"><strong>The Framework</strong></a> ·
  <a href="#quick-deployment"><strong>Deploy Now</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a>
</p>
<br/>

> **⚠️ Deployment Note:** This application requires `POSTGRES_URL` and `AUTH_SECRET` environment variables to function. If you're getting 500 errors after deployment, see [QUICK_FIX.md](QUICK_FIX.md) for a 5-minute fix.

## Quick Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/templates/next.js/nextjs-ai-chatbot)

**After clicking "Deploy":**
1. Set up Vercel Postgres database (Storage tab)
2. Add `AUTH_SECRET` environment variable (generate with `openssl rand -base64 32`)
3. Redeploy

See [QUICK_FIX.md](QUICK_FIX.md) for detailed instructions.

## About COLLIDE

COLLIDE is where **creative integrity meets commercial viability**. This AI-powered platform guides founders through a comprehensive 6-phase framework to transform vision into sustainable business reality.

### The Founder's Lens

An expert AI guide that is personal yet sharp, offering empathy for the struggle of building clarity from chaos while providing strategic insights at the intersection of aesthetics and business.

### For Two Audiences

1. **Aspiring Entrepreneurs** (Pre-launch/Ideation) - Focus on Discover, Frame, and Craft phases
2. **Emerging Entrepreneurs** (Early Growth/Scaling) - Focus on Structure, Activate, and Evolve phases

For complete details, see [COLLIDE.md](COLLIDE.md).

## The COLLIDE Framework™

Six interconnected phases guiding founders from ideation to sustainable growth:

1. **DISCOVER** - Unearth vision, values & positioning
2. **FRAME** - Define strategic narrative & market position
3. **CRAFT** - Build brand identity & creative expression
4. **STRUCTURE** - Establish business architecture & operations
5. **ACTIVATE** - Launch strategies & go-to-market execution
6. **EVOLVE** - Continuous refinement & adaptive growth

---

## Technical Foundation

This implementation is built on the Next.js AI Chatbot template.

## Features

- [Next.js](https://nextjs.org) App Router
  - Advanced routing for seamless navigation and performance
  - React Server Components (RSCs) and Server Actions for server-side rendering and increased performance
- [AI SDK](https://ai-sdk.dev/docs/introduction)
  - Unified API for generating text, structured objects, and tool calls with LLMs
  - Hooks for building dynamic chat and generative user interfaces
  - Supports xAI (default), OpenAI, Fireworks, and other model providers
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - Component primitives from [Radix UI](https://radix-ui.com) for accessibility and flexibility
- Data Persistence
  - [Neon Serverless Postgres](https://vercel.com/marketplace/neon) for saving chat history and user data
  - [Vercel Blob](https://vercel.com/storage/blob) for efficient file storage
- [Auth.js](https://authjs.dev)
  - Simple and secure authentication

## Model Providers

This template uses the [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) to access multiple AI models through a unified interface. The default configuration includes [xAI](https://x.ai) models (`grok-2-vision-1212`, `grok-3-mini`) routed through the gateway.

### AI Gateway Authentication

**For Vercel deployments**: Authentication is handled automatically via OIDC tokens.

**For non-Vercel deployments**: You need to provide an AI Gateway API key by setting the `AI_GATEWAY_API_KEY` environment variable in your `.env.local` file.

With the [AI SDK](https://ai-sdk.dev/docs/introduction), you can also switch to direct LLM providers like [OpenAI](https://openai.com), [Anthropic](https://anthropic.com), [Cohere](https://cohere.com/), and [many more](https://ai-sdk.dev/providers/ai-sdk-providers) with just a few lines of code.

## Deploy Your Own

You can deploy your own version of the Next.js AI Chatbot to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/templates/next.js/nextjs-ai-chatbot)

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js AI Chatbot. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various AI and authentication provider accounts.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm db:migrate # Setup database or apply latest database changes
pnpm dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000).
