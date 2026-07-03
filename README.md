# joostkouters.com

Static personal site. Main page (English) at `/`, coaching page (Dutch) at `/coaching/`.
No build step, no framework, no dependencies.

## Structure

```
index.html            Main hub: profile, projects, coaching promo (EN default, NL toggle)
coaching/index.html   Coaching landing page (EN default, NL toggle)
style.css             Shared design system
reveal.js             Scroll-reveal (external so CSP stays strict)
switch.js             Language toggle — swaps data-en/data-nl text, remembers choice
_headers              Security headers (Cloudflare Pages / Netlify)
vercel.json           Security headers (Vercel) — keep only the one you need
```

## Language toggle

Both pages default to English. A flag switcher in the nav (🇬🇧 / 🇳🇱) swaps
visible text via `switch.js`, reading `data-en` / `data-nl` attributes on
each element, and remembers the choice in `localStorage` across pages.

To edit copy: change both the visible text inside the tag *and* the matching
`data-en="..."` / `data-nl="..."` attribute (or `data-en-html` /
`data-nl-html` for text containing tags like `<em>` or `<strong>`) — the
attribute is what actually gets shown; the inline text is just the
no-JS fallback.

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

- [x] Mailbox set up: info@joostkouters.com
- [ ] Replace `KvK [nummer]` in both footers
- [ ] Add the real LinkedIn URL in both footers
- [ ] Swap the intake mailto for a booking link (Cal.com is free) once ready
- [ ] Confirm Article 11 consent from employer for ancillary activities
- [ ] Check https://securityheaders.com after first deploy — should score A/A+
- [ ] Optional: add a favicon and og-image for link previews
