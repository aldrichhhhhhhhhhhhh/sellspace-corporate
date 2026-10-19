# Repository and preview deployment setup

## 1. Create the public GitHub repository

On GitHub, create a **new empty public repository** named `sellspace-corporate` under your account. Do not add a README, license, or `.gitignore` on GitHub because those files are already included here.

## 2. Extract and push the source (Windows PowerShell)

Extract `sellspace-corporate.zip`, then open PowerShell in the extracted `sellspace-corporate` folder:

```powershell
git init
git add .
git commit -m "Initial SELLSPACE corporate website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/sellspace-corporate.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username. The repository should be public as requested.

## 3. Create the separate Vercel preview project

In Vercel, choose **Add New → Project**, import `sellspace-corporate`, and create a new project named `sellspace-corporate`. Confirm the project is not linked to VANT or the e-commerce app. Let Vercel detect Next.js automatically and deploy the `main` branch as the initial preview. Keep the generated `.vercel.app` URL for review; do not attach a custom domain yet.

## 4. Verify before a domain decision

- Confirm the landing page and all section links work on desktop and mobile.
- Check reduced-motion behavior and keyboard navigation.
- Replace the placeholder email in `config/brand.ts` before inviting public inquiries.
- Confirm the copy accurately represents SELLSPACE's current stage.
- Run `npm install` and `npm run build` locally or rely on a successful Vercel build before approving the preview.

## 5. Share the repository URL

Once the repository exists and has been pushed, share its URL in the project chat. The connected GitHub tools can then work with the actual repository; the separate Vercel project can be linked and a preview deployment checked.
