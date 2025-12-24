# Environment Setup Guide for COLLIDE

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Database Configuration
POSTGRES_URL="your-postgres-connection-string"

# Authentication
AUTH_SECRET="your-secret-key-here"
# Generate with: openssl rand -base64 32

# Optional: For GitHub OAuth
AUTH_GITHUB_ID="your-github-oauth-client-id"
AUTH_GITHUB_SECRET="your-github-oauth-client-secret"

# AI Provider Configuration (choose one or multiple)

# Option 1: Vercel AI Gateway (recommended for production)
AI_GATEWAY_API_KEY="your-vercel-ai-gateway-key"

# Option 2: Direct OpenAI
OPENAI_API_KEY="your-openai-api-key"

# Option 3: Direct Anthropic
ANTHROPIC_API_KEY="your-anthropic-api-key"

# Optional: Redis for resumable streams
REDIS_URL="your-redis-connection-string"

# Optional: Blob Storage
BLOB_READ_WRITE_TOKEN="your-vercel-blob-token"
```

## Quick Start

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

Note: We use `--legacy-peer-deps` due to peer dependency requirements in the AI SDK.

### 2. Set Up Database

If you're using a PostgreSQL database, run migrations:

```bash
npm run db:migrate
```

For local development, you can use:
- [Neon](https://neon.tech) - Serverless Postgres (recommended)
- Local PostgreSQL instance
- Docker container with PostgreSQL

### 3. Configure Authentication

Generate a secure auth secret:

```bash
openssl rand -base64 32
```

Add this to your `.env.local` as `AUTH_SECRET`.

### 4. Choose AI Provider

#### Using Vercel AI Gateway (Recommended)

1. Create an account at [vercel.com](https://vercel.com)
2. Navigate to your project settings
3. Generate an AI Gateway API key
4. Add to `.env.local` as `AI_GATEWAY_API_KEY`

#### Using OpenAI Directly

1. Get an API key from [platform.openai.com](https://platform.openai.com)
2. Add to `.env.local` as `OPENAI_API_KEY`

#### Using Anthropic Directly

1. Get an API key from [console.anthropic.com](https://console.anthropic.com)
2. Add to `.env.local` as `ANTHROPIC_API_KEY`

### 5. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see COLLIDE in action.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

Vercel automatically handles:
- AI Gateway authentication (no API key needed)
- Build optimization
- Edge deployment

### Other Platforms

COLLIDE can be deployed to any platform that supports Next.js:
- AWS Amplify
- Netlify
- Railway
- Render
- Self-hosted with Node.js

Ensure your platform supports:
- Node.js 18+
- PostgreSQL database
- Environment variables

## Database Schema

The application uses Drizzle ORM. Schema migrations are in `lib/db/migrations/`.

To generate new migrations after schema changes:

```bash
npm run db:generate
```

To apply migrations:

```bash
npm run db:migrate
```

To open Drizzle Studio for database management:

```bash
npm run db:studio
```

## Troubleshooting

### Build Issues

If you encounter build issues, try:

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Rebuild
npm run build
```

### Database Connection Issues

Verify your `POSTGRES_URL` format:

```
postgresql://user:password@host:port/database?sslmode=require
```

For Neon or other serverless providers, ensure the connection string includes SSL parameters.

### AI Provider Issues

Test your API keys:

```bash
# For OpenAI
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY"

# For Anthropic
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01"
```

## Optional Enhancements

### Redis for Resumable Streams

For better stream handling and resumability:

1. Set up a Redis instance (Upstash, Redis Cloud, or local)
2. Add `REDIS_URL` to `.env.local`

### Blob Storage for File Uploads

To enable file uploads:

1. Set up Vercel Blob storage
2. Add `BLOB_READ_WRITE_TOKEN` to `.env.local`

### Analytics

COLLIDE includes Vercel Analytics by default. No additional configuration needed when deployed to Vercel.

## Development Tips

### Hot Reload

Development server supports hot reload with Turbopack:

```bash
npm run dev  # Uses Turbopack by default
```

### Linting

Check code quality:

```bash
npm run lint
```

Fix issues automatically:

```bash
npm run format
```

### Type Checking

Run TypeScript type checking:

```bash
npx tsc --noEmit
```

## Support

For COLLIDE-specific questions, refer to [COLLIDE.md](COLLIDE.md).

For technical issues with the Next.js template, see the [Chat SDK documentation](https://chat-sdk.dev).
