# Cloudflare Worker Setup for Reservations

This document explains how to set up a Cloudflare Worker to handle reservation form submissions and send emails via Resend.

## Prerequisites

- Cloudflare account
- Resend account with API key
- Domain configured with Cloudflare (optional but recommended)

## Setup Steps

### 1. Create a Cloudflare Worker

```bash
npm create cloudflare@latest reservation-worker
```

Choose:
- "Hello World" Worker template
- TypeScript
- No Git repository (if already in one)
- No deployment yet

### 2. Install Resend SDK

```bash
cd reservation-worker
npm install resend
```

### 3. Worker Code

Create or update `src/index.ts`:

```typescript
import { Resend } from 'resend';

interface Env {
  RESEND_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://koshaa-indian.github.io',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { 
        status: 405,
        headers: corsHeaders 
      });
    }

    try {
      const data = await request.json() as {
        name: string;
        email: string;
        phone: string;
        date: string;
        time: string;
        guests: number;
        message?: string;
      };

      // Initialize Resend
      const resend = new Resend(env.RESEND_API_KEY);

      // Send email
      const result = await resend.emails.send({
        from: 'Koshaa Reservations <reservations@yourdomain.com>',
        to: 'koshaarestaurant@gmail.com',
        subject: `New Reservation Request from ${data.name}`,
        html: `
          <h2>New Reservation Request</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Date:</strong> ${data.date}</p>
          <p><strong>Time:</strong> ${data.time}</p>
          <p><strong>Number of Guests:</strong> ${data.guests}</p>
          ${data.message ? `<p><strong>Special Requests:</strong> ${data.message}</p>` : ''}
        `,
      });

      return new Response(JSON.stringify({ success: true, id: result.id }), {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Failed to process reservation' 
      }), {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });
    }
  },
};
```

### 4. Configure Environment Variable

Add your Resend API key as a secret:

```bash
npx wrangler secret put RESEND_API_KEY
```

When prompted, paste your Resend API key.

### 5. Update wrangler.toml

```toml
name = "reservation-worker"
main = "src/index.ts"
compatibility_date = "2024-01-01"

[vars]
# Non-sensitive environment variables can go here
```

### 6. Deploy the Worker

```bash
npx wrangler deploy
```

After deployment, you'll get a URL like: `https://reservation-worker.your-subdomain.workers.dev`

### 7. Update the Website

In `components/reservation-form.tsx`, update the fetch URL:

```typescript
const response = await fetch("https://reservation-worker.your-subdomain.workers.dev", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
```

## Testing

Test the endpoint with curl:

```bash
curl -X POST https://reservation-worker.your-subdomain.workers.dev \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "date": "2024-12-25",
    "time": "19:00",
    "guests": 4,
    "message": "Window seat please"
  }'
```

## Custom Domain (Optional)

To use a custom domain:

1. Go to Cloudflare Dashboard > Workers & Pages
2. Select your worker
3. Click "Triggers" tab
4. Add a custom domain route

## Security Considerations

1. **Rate Limiting**: Consider adding rate limiting to prevent spam
2. **Input Validation**: Add validation for all fields
3. **CORS**: Update CORS origin to match your actual domain
4. **API Key**: Never commit API keys to version control

## Resend Setup

1. Sign up at [resend.com](https://resend.com)
2. Verify your sending domain
3. Generate an API key
4. Add the API key to Cloudflare Worker secrets

## Troubleshooting

- Check Cloudflare Worker logs: `npx wrangler tail`
- Verify CORS headers if requests are being blocked
- Ensure Resend API key is correctly set
- Check that the "from" email domain is verified in Resend
