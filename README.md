# AI Receptionist: Marketing Site

A one-page marketing site (plus `/privacy`) for an AI receptionist service for HVAC and plumbing companies.
It's built with Next.js + Tailwind CSS and exported as a fully static site for GitHub Pages.

## Where to edit things

| What | Where |
| --- | --- |
| **All text, prices, FAQ, switches** | `site.config.ts` |
| Your domain | `public/CNAME` |
| Your photo | `public/images/` + `about.photo` in `site.config.ts` |
| Colors | top of `app/globals.css` |
| Section layouts | `components/` (one file per section) |

Placeholders look like `[THIS]`. Search the project for `[` to find any you haven't filled in.

## Placeholder checklist

- [ ] `site.config.ts` → `business.demoPhone`: `[GHL DEMO NUMBER]`, then set `SHOW_DEMO = true`
- [ ] Optional: `site.config.ts` → `GHL_WEBHOOK_URL`: `[GHL INBOUND WEBHOOK URL]` (also send each request into GoHighLevel)
- [ ] Optional: `site.config.ts` → `GHL_FORM_EMBED_URL`: `[GHL FORM EMBED URL]` (only if `CONTACT_FORM_MODE = "ghl-embed"`)
- [ ] `public/CNAME`: `[MY DOMAIN]`, e.g. `www.yourdomain.com`
- [ ] Your photo → `public/images/prahaladh.jpg`, then set `about.photo: "/images/prahaladh.jpg"`
- [ ] Later: testimonials → add to `testimonials.items`, set `SHOW_TESTIMONIALS = true`

## Switches (top of `site.config.ts`)

- `SHOW_TESTIMONIALS`: shows the Testimonials section and nav link. Supports text quotes and video (YouTube, Vimeo, or an `.mp4` in `public/videos/`).
- `SHOW_DEMO`: shows the "Call the Demo" buttons and demo section. Turn on once `business.demoPhone` is your live GoHighLevel AI number.
- `CONTACT_FORM_MODE`:
  - `"custom-form"` (default) is the built-in consultation form. Each request is emailed to you through Web3Forms (`WEB3FORMS_ACCESS_KEY`), and also sent to GoHighLevel if `GHL_WEBHOOK_URL` is set.
  - `"ghl-embed"` embeds your GoHighLevel form from `GHL_FORM_EMBED_URL` instead.

## Run it on your computer

Needs [Node.js](https://nodejs.org) 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000, updates as you save
npm run build      # makes the static site in /out
```

## Deploy to GitHub Pages

Every push to `main` builds and publishes automatically (`.github/workflows/deploy.yml`).

1. Create a new repo on GitHub and push this folder to its `main` branch.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Go to the **Actions** tab. If the first run failed because Pages wasn't turned on yet, open it and click **Re-run all jobs**.
4. The site will be live at `https://<username>.github.io/<repo-name>/`.

The workflow figures out the `/<repo-name>` prefix by itself. To hard-code it instead, see the comment in `next.config.ts`.

## Custom domain

1. Put your domain in `public/CNAME` (e.g. `www.yourdomain.com`) and push.
2. At your domain registrar, add DNS records:
   - `www` → **CNAME** → `<username>.github.io`
   - The bare domain (`yourdomain.com`) → **A** records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. In **Settings → Pages → Custom domain**, enter the same domain and click **Save**. Wait for the DNS check to pass, then tick **Enforce HTTPS**. The certificate can take up to an hour.
4. **Actions → Deploy to GitHub Pages → Run workflow** once more so links drop the `/<repo-name>` prefix.

Tip: verify the domain under your GitHub account (**Settings → Pages → Add a domain**) so nobody else can claim it.
