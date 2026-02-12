# Koshaa - Authentic Indian Restaurant

A modern, static SPA + PWA website for Koshaa, an authentic Indian restaurant in Ontario.

## Features

- ✨ Clean, modern design with dark mode support
- 📱 Progressive Web App (PWA) with offline support
- ♿ WCAG AA accessibility compliant
- 🎨 Built with Next.js, TailwindCSS, shadcn/ui, and Radix UI
- 📊 Schema.org structured data for SEO
- 🌐 Static export compatible with GitHub Pages
- 📝 Content managed through JSON files
- 🍽️ Interactive menu with dietary indicators
- 📸 Photo gallery with filtering
- 💬 Customer testimonials
- 📅 Reservation form (integrates with Cloudflare Worker)

## Tech Stack

- **Framework**: Next.js with static export
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui + Radix UI
- **Dark Mode**: next-themes
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

This creates a static export in the `out` directory.

### Deploy to GitHub Pages

The site is automatically deployed to GitHub Pages. Push changes to the main branch.

## Content Management

All content is managed through JSON files in the `data/` directory:

- `content.json`: Restaurant info, menu, hours, testimonials, gallery, and SEO data

## Reservation Integration

The reservation form posts to a Cloudflare Worker endpoint that uses Resend to send emails to `koshaarestaurant@gmail.com`.

To set up the Cloudflare Worker:

1. Create a Cloudflare Worker
2. Install the Resend SDK
3. Configure environment variables with your Resend API key
4. Update the form action URL in `components/reservation-form.tsx`

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Feature components
├── data/                 # JSON content files
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── manifest.json    # PWA manifest
│   └── sw.js            # Service worker
└── next.config.ts       # Next.js configuration
```

## License

All rights reserved © Koshaa Restaurant
