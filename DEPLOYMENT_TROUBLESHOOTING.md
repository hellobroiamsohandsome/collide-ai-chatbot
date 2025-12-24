# Vercel Deployment Troubleshooting Guide

## Current Deployment Error: 500 on `/api/auth/callback/guest`

### Problem
The application is failing with a 500 error on authentication routes during Vercel deployment. This is caused by missing required environment variables, specifically `POSTGRES_URL` and `AUTH_SECRET`.

### Root Cause
The error trace shows:
```
at d (/var/task/.next/server/chunks/_e77d9645._.js:1:66611)
at rZ (/var/task/.next/server/chunks/_e77d9645._.js:368:51201)
```

This occurs because:
1. The guest authentication flow tries to create a user in the database
2. The database connection (`lib/db/queries.ts`) uses `process.env.POSTGRES_URL!` which throws when undefined
3. No `AUTH_SECRET` is set, causing NextAuth to fail

## ✅ Solution: Configure Required Environment Variables

### Step 1: Set Up PostgreSQL Database

**Option A: Vercel Postgres (Recommended)**
1. Go to your Vercel project dashboard
2. Navigate to **Storage** tab
3. Click **Create Database** → Select **Postgres**
4. Follow the setup wizard
5. Vercel will automatically add `POSTGRES_URL` to your environment variables

**Option B: External PostgreSQL (Neon, Supabase, etc.)**
1. Create a PostgreSQL database on your preferred provider
2. Get the connection string (should look like: `postgres://user:password@host:5432/dbname`)
3. Add to Vercel environment variables:
   - Key: `POSTGRES_URL`
   - Value: Your connection string
   - Environments: Production, Preview, Development (check all)

### Step 2: Generate and Set AUTH_SECRET

1. Generate a secure secret:
   ```bash
   openssl rand -base64 32
   ```

2. Add to Vercel environment variables:
   - Key: `AUTH_SECRET`
   - Value: The generated secret
   - Environments: Production, Preview, Development (check all)

### Step 3: Configure AI Provider (Optional but Recommended)

**Option A: Vercel AI Gateway (Recommended for Vercel deployments)**
- No additional configuration needed!
- Vercel automatically provides OIDC authentication
- Just make sure your project is properly linked

**Option B: Direct OpenAI**
- Key: `OPENAI_API_KEY`
- Value: Your OpenAI API key from platform.openai.com

**Option C: Direct Anthropic**
- Key: `ANTHROPIC_API_KEY`
- Value: Your Anthropic API key from console.anthropic.com

### Step 4: Optional Environment Variables

For enhanced functionality, consider adding:

- **`REDIS_URL`** - For resumable streams (optional)
  - Use Upstash Redis or Vercel KV
  
- **`BLOB_READ_WRITE_TOKEN`** - For file uploads (optional)
  - Create Vercel Blob storage in Storage tab

### Step 5: Redeploy

After setting all environment variables:
1. Go to **Deployments** tab
2. Find the latest deployment
3. Click the three dots menu → **Redeploy**
4. Or push a new commit to trigger automatic deployment

## Environment Variables Summary

### ✅ Required (Must Set)
```bash
POSTGRES_URL=postgres://...
AUTH_SECRET=<generated-secret>
```

### ⚙️ Recommended (AI Functionality)
```bash
# Choose ONE of:
AI_GATEWAY_API_KEY=<vercel-ai-gateway-key>  # Recommended for Vercel
# OR
OPENAI_API_KEY=<openai-key>
# OR
ANTHROPIC_API_KEY=<anthropic-key>
```

### 🎯 Optional (Enhanced Features)
```bash
REDIS_URL=<redis-connection-string>
BLOB_READ_WRITE_TOKEN=<vercel-blob-token>
```

## Verifying the Fix

After redeployment, the application should:
1. ✅ Load the homepage without errors
2. ✅ Allow guest authentication to work
3. ✅ Enable chat functionality
4. ✅ Display COLLIDE branding correctly

## Common Issues and Solutions

### Issue: Still getting 500 errors after setting environment variables
**Solution:** 
- Ensure you checked ALL environments (Production, Preview, Development)
- Click **Redeploy** to trigger a fresh build
- Check the deployment logs for specific error messages

### Issue: Database connection timeout
**Solution:**
- Verify your database is accessible from Vercel's regions
- Check if your database provider has IP allowlisting (Vercel uses dynamic IPs)
- For Vercel Postgres, this should work automatically
- For external databases, ensure SSL is enabled in connection string

### Issue: AUTH_SECRET not working
**Solution:**
- Make sure the secret is at least 32 characters
- No special characters that might need escaping
- Re-generate with: `openssl rand -base64 32`

### Issue: AI responses not working
**Solution:**
- If using AI Gateway: No key needed on Vercel
- If using direct provider: Verify API key is correct
- Check provider billing/quota limits
- Test API key with curl:
  ```bash
  curl https://api.openai.com/v1/models \
    -H "Authorization: Bearer $OPENAI_API_KEY"
  ```

## Migration Commands

If you need to run database migrations manually:

```bash
# Locally with connection to remote database
POSTGRES_URL="your-connection-string" npm run db:migrate

# Or use Vercel CLI
vercel env pull .env.local
npm run db:migrate
```

## Testing Locally Before Deployment

1. Copy environment variables from Vercel:
   ```bash
   npm i -g vercel
   vercel link
   vercel env pull .env.local
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Test authentication:
   - Open http://localhost:3000
   - Should see COLLIDE welcome screen
   - Click through the interactive flow
   - Start a conversation

## Deployment Checklist

Before marking deployment as complete:

- [ ] `POSTGRES_URL` is set in Vercel environment variables
- [ ] `AUTH_SECRET` is set in Vercel environment variables
- [ ] AI provider configuration is set (AI Gateway, OpenAI, or Anthropic)
- [ ] Database migrations have run successfully
- [ ] Latest code is deployed
- [ ] Homepage loads without errors
- [ ] Guest authentication works
- [ ] Chat functionality is operational
- [ ] COLLIDE branding displays correctly
- [ ] Framework phases are visible and clickable
- [ ] Suggested actions appear properly

## Getting Help

If issues persist after following this guide:

1. Check Vercel deployment logs for specific errors
2. Review the [SETUP.md](SETUP.md) for detailed configuration
3. Check [COLLIDE.md](COLLIDE.md) for feature documentation
4. Verify your database is properly configured and accessible

## Quick Fix Summary

**The fastest way to fix the current deployment:**

1. **Add to Vercel Environment Variables:**
   ```
   POSTGRES_URL=<your-postgres-connection-string>
   AUTH_SECRET=<run: openssl rand -base64 32>
   ```

2. **Redeploy the application**

3. **Test the deployment** at your Vercel URL

That's it! The application should now work correctly.
