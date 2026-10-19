# SELLSPACE Corporate Website

A standalone corporate website for SELLSPACE. This repository is intentionally separate from VANT (`aldrichhhhhhhhh/vant-ai`) and the e-commerce application.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS 4 (available for future component work)
- Framer Motion for scroll reveals, with reduced-motion support
- Lucide icons
- Vercel for preview hosting

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build verification

```bash
npm run build
```

## Before public launch

- Replace `contactEmail` in `config/brand.ts` with a verified company email address.
- Replace `siteUrl` after the Vercel preview URL is confirmed.
- Confirm official company description, product claims, legal entity details, contact information, and any investor material.
- Add a real contact form only after selecting a delivery mechanism and spam protection.
- Review accessibility, mobile layouts, metadata, and all copy.
- Connect the GitHub repository to a separate Vercel project. Do not connect this project to the VANT Vercel project.
- Add a custom domain only after preview review and approval.

## Content integrity

Roadmap entries are planning themes, not completed milestones. The site intentionally avoids unverified traction, partnership, funding, customer, or revenue claims.

## Brand settings

Edit `config/brand.ts` to change the name, tagline, site URL, contact email, and palette. Main company copy and roadmap are in `content/company.ts` and `content/roadmap.ts`.
