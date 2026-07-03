# joostkouters.com

Static personal site. Main page (English) at `/`, coaching page (Dutch) at `/coaching/`.
No build step, no framework, no dependencies.

## Structure

```
index.html            Main hub: profile, projects, coaching promo
coaching/index.html   Coaching landing page (NL)
style.css             Shared design system
reveal.js             Scroll-reveal (external so CSP stays strict)
_headers              Security headers (Cloudflare Pages / Netlify)
vercel.json           Security headers (Vercel) — keep only the one you need
```

## Deploy

### 1. Push to GitHub

```bash
cd joostkouters.com
git init
git add .
git commit -m "Initial site"
gh repo create joostkouters.com --private --source=. --push
```

### 2a. Cloudflare Pages (recommended)

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git
2. Select the repo. Build command: none. Output directory: `/`
3. Deploy, then Custom domains → add `joostkouters.com` and `www.joostkouters.com`
4. If DNS is already on Cloudflare this is automatic; otherwise move the
   nameservers or add the CNAME records it shows you
5. Delete `vercel.json` (unused)

### 2b. Vercel (alternative)

1. vercel.com → Add New → Project → import the repo
2. Framework preset: Other. No build command. Output: `/`
3. Settings → Domains → add `joostkouters.com`, set the A/CNAME records
   shown at your DNS provider
4. Delete `_headers` (unused)

Either way: every `git push` to main auto-deploys.

## Before going live

- [ ] Replace `hello@joostkouters.com` if using a different address
      (set up the mailbox or a forward at your domain/DNS provider)
- [ ] Replace `KvK [nummer]` in both footers
- [ ] Add the real LinkedIn URL in both footers
- [ ] Swap the intake mailto for a booking link (Cal.com is free) once ready
- [ ] Confirm Article 11 consent from employer for ancillary activities
- [ ] Check https://securityheaders.com after first deploy — should score A/A+
- [ ] Optional: add a favicon and og-image for link previews
