Next Store

Modern e-commerce app built with Next.js App Router, Prisma, PostgreSQL, Tailwind CSS v4 tokens, and shadcn/ui. Includes authentication, cart/checkout, orders, PayPal and Stripe payments, and transactional emails via Resend.


Features
- Next.js 14 App Router, RSC + server actions
- Auth with NextAuth (credentials/social-ready)
- Prisma ORM with PostgreSQL
- Token-based design system with Tailwind v4 and shadcn/ui
- Product catalog, cart, checkout, orders
- PayPal buttons and Stripe webhooks
- Transactional emails via Resend and @react-email/render
- File uploads via UploadThing (ready)


Requirements
- Node.js 18+
- PostgreSQL (local or managed)
- npm (or pnpm/yarn/bun)


Quick Start
1) Install dependencies

```bash
npm install
```

2) Environment variables
Create a .env file in the project root:

```bash
# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-a-strong-secret"

# PayPal
PAYPAL_CLIENT_ID="your-paypal-client-id"

# Stripe (optional, for local webhook testing)
STRIPE_SECRET_KEY="sk_live_or_test"
STRIPE_WEBHOOK_SECRET="whsec_..."

# Resend email
RESEND_API_KEY="re_..."
SENDER_EMAIL="you@yourdomain.com" # or onboarding@resend.dev if your account allows
APP_NAME="Next Store"

# Public server URL for emails (image absolute URLs)
NEXT_PUBLIC_SERVER_URL="http://localhost:3000"
```

3) Database setup

```bash
npx prisma migrate dev
npm run db:seed   # seeds sample data (if provided)
```

4) Run the app

```bash
npm run dev
# http://localhost:3000
```


Design System
- Tailwind v4 token utilities: bg-background, text-foreground, bg-card, border-border, ring-ring, bg-primary, text-primary-foreground, bg-muted, text-muted-foreground, border-input, shadow-elevated, etc.
- Global tokens live in assets/styles/globals.css (colors, gradients, radius, fonts)
- Components use shadcn/ui, refactored to tokens (see components/ui/*)

Fonts
- Default: BDO Grotesk with Helvetica fallbacks
- To manage local fonts, see app/fonts/README.md for adding .woff2 files and enabling via next/font/local


Emails (Resend + React Email)
- Rendering: @react-email/render
- Sender: set RESEND_API_KEY and SENDER_EMAIL (domain verification may be required on new Resend accounts)
- Preview locally:

```bash
npm run email
# opens email preview at http://localhost:3001
```

Notes
- Ensure NEXT_PUBLIC_SERVER_URL matches the preview origin (e.g., http://localhost:3001) for images to load in previews.
- In production on Vercel, set NEXT_PUBLIC_SERVER_URL to your site origin.


Payments
PayPal
- Buttons configured via PayPalScriptProvider; currency set to EUR
- Set PAYPAL_CLIENT_ID

Stripe
- Webhooks required locally to mark orders paid:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```


Useful Scripts
```bash
npm run dev           # Start Next.js dev server
npm run build         # Build for production
npm run start         # Start production server
npm run lint          # Lint
npm run email         # React Email preview server (localhost:3001)
```


Auth Types
- See auth.ts for typed NextAuth callbacks (Session, JWT, AdapterUser, NextRequest). Avoid any.


Troubleshooting
- Emails not sending: verify RESEND_API_KEY, SENDER_EMAIL domain verification, or use onboarding@resend.dev if your account supports it. Check logs from sendPurchaseReceipt.
- Email images missing in preview: ensure NEXT_PUBLIC_SERVER_URL matches the preview server origin.
- Stripe not marking paid: run stripe listen to forward webhooks to your local server.
- PayPal button flicker: disable extensions or test in incognito if errors about message channel; ensure currency is set (EUR).
- Gradients not visible: remove page-level bg-background wrappers that cover body, and verify variables in assets/styles/globals.css.


Deployment
- Vercel recommended. Set all environment variables in Vercel Project → Settings → Environment Variables.
- Timezone: Vercel runs in UTC. Handle display with Intl.DateTimeFormat as needed per user locale.


License
MIT (or your preferred license)
