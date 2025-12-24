# Quick Deployment Fix for Vercel

## 🔴 Current Issue
Your deployment is failing with **500 errors** on authentication routes because required environment variables are not set.

## ✅ Fix in 3 Steps (5 minutes)

### Step 1: Set Up Database (2 minutes)

**Using Vercel Postgres (Easiest):**
1. Go to https://vercel.com/dashboard
2. Select your `collide-ai-chatbot` project
3. Click **Storage** tab
4. Click **Create Database** → Choose **Postgres**
5. Click **Create** (Vercel automatically adds `POSTGRES_URL`)

**OR using External Provider (Neon, Supabase, etc.):**
1. Create a PostgreSQL database at your provider
2. Copy the connection string
3. In Vercel: **Settings** → **Environment Variables** → **Add New**
   - Key: `POSTGRES_URL`
   - Value: Your connection string
   - Check: Production, Preview, Development
   - Click **Save**

### Step 2: Generate AUTH_SECRET (1 minute)

1. Open terminal and run:
   ```bash
   openssl rand -base64 32
   ```
   
2. Copy the output

3. In Vercel: **Settings** → **Environment Variables** → **Add New**
   - Key: `AUTH_SECRET`
   - Value: Paste the generated secret
   - Check: Production, Preview, Development
   - Click **Save**

### Step 3: Redeploy (2 minutes)

1. In Vercel, go to **Deployments** tab
2. Find the most recent deployment
3. Click the three dots **⋯** menu
4. Click **Redeploy**
5. Wait for deployment to complete (~2 minutes)

## ✅ Verification

After redeployment, visit your Vercel URL (e.g., `collide-ai-chatbot.vercel.app`):

- ✅ Homepage should load showing "Welcome to COLLIDE"
- ✅ You should see the "Get Started — Define Your DNA" button
- ✅ Interactive flow should work (no 500 errors)
- ✅ You can click through segment selection and framework phases

## 📋 Environment Variables Checklist

Make sure you have these set in Vercel:

- [x] `POSTGRES_URL` ← Connection to your database
- [x] `AUTH_SECRET` ← Authentication secret
- [ ] `AI_GATEWAY_API_KEY` or `OPENAI_API_KEY` ← Optional for AI functionality

## 🎯 Optional: Add AI Provider (For Chat Functionality)

If you want the AI chat to work, add ONE of these:

**Option A: Vercel AI Gateway (No extra setup needed for Vercel deployments)**
- Just works automatically on Vercel!
- No environment variable needed

**Option B: OpenAI**
1. Get API key from https://platform.openai.com
2. Add to Vercel Environment Variables:
   - Key: `OPENAI_API_KEY`
   - Value: Your API key

**Option C: Anthropic**
1. Get API key from https://console.anthropic.com
2. Add to Vercel Environment Variables:
   - Key: `ANTHROPIC_API_KEY`
   - Value: Your API key

Then redeploy again.

## 🆘 Still Having Issues?

See detailed troubleshooting: [DEPLOYMENT_TROUBLESHOOTING.md](DEPLOYMENT_TROUBLESHOOTING.md)

## 📸 Expected Result

After successful deployment, you should see:

1. **Homepage**: Clean COLLIDE branding with gradient title
2. **Interactive Flow**: 
   - Initial screen with "Get Started" button
   - User segment selection (Aspiring vs Emerging)
   - Framework phases with icons and colors
3. **No Errors**: No 500 errors in browser console or Vercel logs

Your COLLIDE deployment will be live and functional! 🎉
