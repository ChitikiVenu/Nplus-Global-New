# NPLUS Global — Enterprise Data Intelligence Website

A production-ready Next.js 15 enterprise website for NPLUS Global, built with TypeScript, Tailwind CSS, Framer Motion, and Nodemailer.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** | App Router, Server Actions, SSG/ISR |
| **TypeScript** | Full type safety throughout |
| **Tailwind CSS** | Utility-first styling with custom design tokens |
| **Framer Motion** | Page transitions and animated components |
| **React Hook Form + Zod** | Type-safe form validation |
| **Nodemailer** | SMTP email delivery for all inquiries |
| **next/font** | Syne + DM Sans + JetBrains Mono fonts |
| **Vercel Analytics** | Production analytics |

---

## 📁 Project Structure

```
nplus-global/
├── public/
│   └── logo.jpg                    # NPLUS Global logo
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with SEO & fonts
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Global styles & design tokens
│   │   ├── sitemap.ts              # Dynamic XML sitemap
│   │   ├── robots.ts               # robots.txt
│   │   ├── not-found.tsx           # 404 page
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx            # Blog listing
│   │   │   └── [slug]/page.tsx     # Blog article template
│   │   ├── healthcare/
│   │   │   ├── page.tsx            # Healthcare hub
│   │   │   └── [slug]/page.tsx     # 11 specialty pages
│   │   ├── b2b/
│   │   │   ├── page.tsx            # B2B hub
│   │   │   └── [slug]/page.tsx     # 7 executive list pages
│   │   ├── technology/
│   │   │   ├── page.tsx            # Technology hub
│   │   │   └── [slug]/page.tsx     # 8 platform pages
│   │   ├── industry/
│   │   │   ├── page.tsx            # Industry listing
│   │   │   └── [slug]/page.tsx     # 12+ industry pages
│   │   ├── intent-data/page.tsx
│   │   ├── data-enrichment/page.tsx
│   │   ├── channel-partners/page.tsx
│   │   ├── custom-data/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── components/
│   │   ├── home/                   # 12 homepage section components
│   │   ├── layout/                 # Navbar + Footer
│   │   └── shared/                 # InquiryForm, AnimatedCounter, FloatingCTA, StickyBanner
│   └── lib/
│       └── actions.ts              # Server actions for email via Nodemailer
├── .env.example                    # Environment variables template
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## ⚙️ Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/yourorg/nplus-global.git
cd nplus-global
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Email — use Gmail App Password or any SMTP provider
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
SMTP_FROM="NPLUS Global <noreply@nplusglobal.com>"
CONTACT_EMAIL=info@nplusglobal.com

# Site
NEXT_PUBLIC_SITE_URL=https://nplusglobal.com
NEXT_PUBLIC_SITE_NAME="NPLUS Global"
```

> **Gmail Setup:** Go to Google Account → Security → 2-Step Verification → App Passwords. Generate a password for "Mail".

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📧 Email Configuration

All inquiry forms send emails via Nodemailer Server Actions (`src/lib/actions.ts`):

- **Lead notification** → `info@nplusglobal.com` with full lead details
- **Auto-reply** → Confirmation email to the prospect

Supported SMTP providers: Gmail, SendGrid, Mailgun, AWS SES, Postmark.

**For SendGrid:**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.your-api-key
```

---

## 🌐 Pages & Routes

### Static Pages
| Route | Description |
|---|---|
| `/` | Homepage (all 14 sections) |
| `/healthcare` | Healthcare data hub |
| `/b2b` | B2B data hub |
| `/technology` | Technology users hub |
| `/intent-data` | Intent data & buyer signals |
| `/data-enrichment` | Data enrichment services |
| `/channel-partners` | Channel partner database |
| `/custom-data` | Custom data solutions |
| `/industry` | Industry listing (50+ verticals) |
| `/blog` | Blog listing with categories |
| `/about` | Company about page |
| `/contact` | Contact page with form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

### Dynamic Pages
| Route | Pages |
|---|---|
| `/healthcare/[slug]` | 11 specialty pages (physicians, cardiologists, etc.) |
| `/b2b/[slug]` | 7 executive pages (CFO, CIO, CTO, etc.) |
| `/technology/[slug]` | 8 platform pages (Salesforce, AWS, etc.) |
| `/industry/[slug]` | 12+ industry pages (manufacturing, finance, etc.) |
| `/blog/[slug]` | Individual blog articles |

---

## 🚀 Deployment to Vercel

### Option A: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option B: GitHub Integration

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Add environment variables in Vercel Dashboard
5. Deploy

### Environment Variables in Vercel

Add all variables from `.env.example` in **Vercel Dashboard → Settings → Environment Variables**.

---

## 📤 GitHub Push

```bash
git init
git add .
git commit -m "Initial commit: NPLUS Global enterprise website"
git remote add origin https://github.com/yourorg/nplus-global.git
git branch -M main
git push -u origin main
```

---

## 🎨 Design System

### Colors
```css
--navy-950: #060d22    /* Background */
--navy-900: #0b183d    /* Surface */
--cyan-500: #06b6d4    /* Primary accent */
--cyan-400: #22d3ee    /* Highlight */
```

### Typography
- **Display / Headings:** Syne (700, 800)
- **Body:** DM Sans (400, 500, 600)
- **Mono / Code:** JetBrains Mono

### Key CSS Classes
```css
.enterprise-card      /* Glassmorphism card with hover effect */
.btn-primary          /* Gradient CTA button */
.btn-outline          /* Ghost button */
.gradient-text        /* Cyan-to-blue gradient text */
.gradient-text-cyan   /* Cyan gradient text */
.glass                /* Glassmorphism surface */
.glass-dark           /* Dark glass surface */
.badge-cyan           /* Cyan tag/badge */
.badge-blue           /* Blue tag/badge */
```

---

## 📊 SEO Features

- ✅ Dynamic `<title>` and `<meta description>` per page
- ✅ OpenGraph and Twitter Card tags
- ✅ Canonical URLs
- ✅ JSON-LD Organization schema on root layout
- ✅ FAQ schema on homepage FAQ section
- ✅ Breadcrumb navigation on all inner pages
- ✅ Dynamic XML sitemap at `/sitemap.xml`
- ✅ `robots.txt` via Next.js
- ✅ Semantic HTML5 structure
- ✅ Proper H1→H2→H3 hierarchy

---

## 📝 Adding New Blog Posts

Add entries to the `blogPosts` object in `src/app/blog/[slug]/page.tsx`:

```typescript
'your-new-slug': {
  title: 'Your Article Title',
  metaDesc: 'SEO description...',
  category: 'Healthcare Marketing',
  author: 'Author Name',
  // ... rest of fields
}
```

Then add the slug to `blogSlugs` in `src/app/sitemap.ts`.

---

## 📞 Contact

**NPLUS Global**
- Email: info@nplusglobal.com
- Phone: +1 (204) 410-0635
- Address: 1857, 1007 N Orange St. 4th Floor, Wilmington, DE-19801, USA
