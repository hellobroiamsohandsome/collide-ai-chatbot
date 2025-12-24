# COLLIDE - Brand-Shaping House for Creative Founders

## Overview

COLLIDE is a strategic and creative house where intelligent beauty meets commercial viability. This Next.js application implements an AI-powered assistant called "The Founder's Lens" that guides creative founders through the COLLIDE Framework™ to transform their vision into commercial reality.

## The COLLIDE Framework™

The framework consists of six interconnected phases designed to guide founders from ideation to sustainable growth:

### 1. **DISCOVER** - Unearth Vision, Values & Positioning
- Identify the founder's unique vision and values
- Define target audience and market opportunity
- Establish what makes the approach unique

### 2. **FRAME** - Define Strategic Narrative & Market Position
- Craft the core strategic message
- Determine competitive positioning
- Identify strategic advantages

### 3. **CRAFT** - Build Brand Identity & Creative Expression
- Develop visual and verbal identity
- Define brand aesthetic and tone
- Create cohesive brand experience

### 4. **STRUCTURE** - Establish Business Architecture & Operations
- Design sustainable business model
- Plan revenue streams
- Create operational framework

### 5. **ACTIVATE** - Launch Strategies & Go-to-Market Execution
- Develop audience engagement strategies
- Execute launch plan
- Generate initial momentum

### 6. **EVOLVE** - Continuous Refinement & Adaptive Growth
- Implement measurement and feedback systems
- Adapt based on market response
- Scale while maintaining integrity

## User Segments

### Aspiring Entrepreneurs (Pre-launch/Ideation)
Focus: Discover → Frame → Craft

For founders in the ideation or pre-launch phase who need to:
- Crystallize their vision
- Validate commercial viability
- Build a strong foundation before launch

### Emerging Entrepreneurs (Early Growth/Scaling)
Focus: Structure → Activate → Evolve

For founders who have launched and are ready to:
- Scale intelligently
- Maintain brand integrity while growing
- Build sustainable operational systems

## The Founder's Lens AI Persona

The AI assistant embodies these characteristics:
- **Personal yet sharp**: Offers empathy for the struggle of building clarity from chaos
- **Expert guidance**: Deep expertise in brand strategy and business development
- **Balanced perspective**: Understands both creative integrity and commercial viability
- **Actionable insights**: Provides concrete next steps and practical advice

## 30-Minute Brand & Business DNA Diagnostic

A focused session designed to help founders quickly gain clarity:

1. **Vision & Purpose** (8 min) - What drives you? Who do you serve?
2. **Strategic Positioning** (8 min) - How do you position yourself? What's your advantage?
3. **Commercial Viability** (8 min) - What's your business model? How do you generate revenue?
4. **Next Steps** (6 min) - What are your priorities? What obstacles exist?

## Clear Financial Advisory Integration

For deeptech and energy transition pioneers, COLLIDE connects to Clear (clearcf.com), a financial advisory boutique offering:

- End-to-end financing expertise (venture debt, hybrid financing)
- Strong international investor network
- EU funding opportunities guidance
- Strategic divestment planning

### Target Sectors for Clear
- Biofuels and sustainable fuels
- Hydrogen production and infrastructure
- Small Modular Reactors (SMRs)
- Battery Energy Storage Systems (BESS)
- Wind and solar energy
- Cleantech and climate tech

## Key Features

- **Interactive Framework Navigation**: Visual exploration of the COLLIDE Framework phases
- **Personalized User Journeys**: Tailored guidance based on entrepreneur type
- **AI-Powered Conversations**: Natural language interaction with The Founder's Lens
- **Diagnostic Sessions**: Structured 30-minute sessions for rapid clarity
- **Boutique Aesthetic**: Clean, sophisticated design reflecting "intelligent beauty"

## Design Philosophy

COLLIDE's visual identity reflects:
- **Intelligent Beauty**: Sophisticated aesthetic with purposeful design
- **Strategic Clarity**: Clean layouts that promote focus and insight
- **Creative Confidence**: Bold use of color gradients and modern typography
- **Professional Warmth**: Approachable yet premium feel

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **AI**: Vercel AI SDK with support for multiple LLM providers
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animations**: Framer Motion for smooth interactions
- **Database**: PostgreSQL (Neon Serverless) for chat history
- **Authentication**: NextAuth.js

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install --legacy-peer-deps`
3. Set up environment variables (see `.env.example`)
4. Run database migrations: `npm run db:migrate`
5. Start development server: `npm run dev`

## Environment Variables

Required environment variables:
- `POSTGRES_URL`: Database connection string
- `AUTH_SECRET`: NextAuth secret key
- AI provider credentials (OpenAI, Anthropic, or via Vercel AI Gateway)

## Messaging Pillars

### For COLLIDE
> "Creative integrity meets commercial viability"

The intersection of aesthetics and strategy, where founders learn to see their business through both a creative and commercial lens.

### For Clear
> "Leveraging the intersection of finance, innovation, and impact"

Out-of-the-box support for ambitious infrastructure projects driving the energy transition.

## Contributing

This is a specialized implementation for COLLIDE and Clear. For customization or questions, please contact the maintainers.

## License

See LICENSE file for details.
