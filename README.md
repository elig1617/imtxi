# IMTXI — Institute for Immersive Therapeutics (imtxi.com)

Launch website for the Institute for Immersive Therapeutics. Next.js App Router, TypeScript, Tailwind CSS.

## Local development

```bash
cd /workspace/imtxi/site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Forms

Client forms POST JSON to App Router API routes under `src/app/api/*`. Successful submissions append records to:

- `data/newsletter.json`
- `data/contact.json`
- `data/council.json`
- `data/practitioners.json`
- `data/centers.json`
- `data/industry.json`

These files are for launch capture only. Point the routes at HubSpot or another CRM before production traffic.

## Brand assets

SVGs and favicon live in `public/brand/` and `public/favicon.svg`. Colors and type follow `/workspace/imtxi/brand/WEB-DIRECTION.md`.

## Deploy to Vercel (imtxi.com)

1. Push this `site/` directory (or the monorepo with Root Directory set to `site`) to GitHub/GitLab/Bitbucket.
2. Import the repo in [Vercel](https://vercel.com).
3. Framework preset: **Next.js**. Build command: `npm run build`. Output: default.
4. Add domain `imtxi.com` (and `www`) in Project → Settings → Domains.
5. At your DNS host, point:
   - Apex: A record to `76.76.21.21` (Vercel), or use Vercel nameservers
   - `www`: CNAME to `cname.vercel-dns.com`
6. Wait for HTTPS provisioning. Confirm `/`, `/framework`, `/reimbursement`, and form POSTs.

## Routes

`/`, `/about`, `/framework`, `/standards`, `/join`, `/join/practitioners`, `/join/centers`, `/join/industry`, `/council`, `/reimbursement`, `/resources`, `/news`, `/contact`

Plus `/sitemap.xml` and `/robots.txt`.

## Out of scope (by design)

Payments, member portal, LMS, exam, accreditation application UI, registry portal, directory, product classifications of named commercial systems.
