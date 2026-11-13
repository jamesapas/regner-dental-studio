# Regner Dental Studio

Responsive one-page dental clinic website built with Next.js App Router, TypeScript, Tailwind CSS, and a Supabase-backed appointment API.

## Run locally

1. Install Node.js 20+.
2. Run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.

## Enable appointment submissions

1. Create a Supabase project and run `supabase.sql` in the SQL Editor.
2. Copy `.env.example` to `.env.local` and fill in `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from Supabase project settings.
3. Restart the dev server. Requests will be stored in the `appointments` table with `pending` status. Appointment confirmation must be handled manually; no email notifications or automatic confirmation are included.
4. Set the same two variables in your Vercel project settings when deploying.

**Security:** Never expose the service role key in client code or commit `.env.local`. Before public launch, add rate limiting and anti-spam protection to the API, a privacy notice/consent flow appropriate to your jurisdiction, and a secure staff workflow for accessing appointment data.

## Before publishing

- Replace the dentist portrait placeholder with an authorized photo.
- Verify the clinic location (the PDF only states Zurich, Switzerland), contact email (the PDF lists `hello@regnerdental@gmail.com`, which appears malformed), phone number, operating hours, and PHP sample prices.
- Replace the Unsplash sample photography with licensed/approved clinic photos.
- The source describes the clinic as a *concept*, not a verified operating practice. Confirm all public-facing claims with the owner.
