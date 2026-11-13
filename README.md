# Regner Dental Studio

Responsive one-page dental clinic website built with Next.js App Router, TypeScript, Tailwind CSS, and Web3Forms for appointment requests.

## Run locally

1. Install Node.js 20+.
2. Run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.

## Enable appointment submissions

1. Create a free account at https://web3forms.com using the inbox that should receive appointment requests, and copy the access key.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_KEY` to that access key.
3. Restart the dev server. Each request is emailed to the inbox linked to the access key, with the patient's email set as reply-to. Appointment confirmation is handled manually by replying.
4. Set the same variable in your Vercel project settings when deploying.

To change the receiving inbox, create a new Web3Forms access key for that email and replace the value.

**Security:** Never commit `.env.local`. Before public launch, add a privacy notice/consent flow appropriate to your jurisdiction.

## Before publishing

- Replace the dentist portrait placeholder with an authorized photo.
- Verify the clinic location (the PDF only states Zurich, Switzerland), contact email (the PDF lists `hello@regnerdental@gmail.com`, which appears malformed), phone number, operating hours, and PHP sample prices.
- Replace the Unsplash sample photography with licensed/approved clinic photos.
- The source describes the clinic as a *concept*, not a verified operating practice. Confirm all public-facing claims with the owner.
