# Soul Revolution Festival: site upgrade handover

Static Astro 5 site replacing the WordPress/Elementor build at soulrevolutionfestival.com.
25 pages, ~1,200 files, no server needed.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs ./dist
npm run preview
```

## Where things live

| Want to change… | Edit |
|---|---|
| Dates, venue, prices, FAQs, stages, links, emails, team, retreats, 2026 line-up | `src/data/site.ts` (single source of truth; countdown, calculator, JSON-LD all read from it) |
| Photos used on the home page / heroes | `src/data/photos.ts` |
| Gallery categories | `GALLERY_MAP` in `src/data/site.ts` |
| Journal posts | `src/content/journal/*.md` (frontmatter: title, optional seoTitle, description, date, category) |
| Colours, type | `src/styles/global.css` (`:root` tokens) |
| Legacy URL redirects | `public/_redirects` (Cloudflare Pages / Netlify format) |

## Deploy

Any static host. Cloudflare Pages is the easiest fit: build command `npm run build`, output `dist`.
`public/_redirects` and `public/_headers` are already in Cloudflare/Netlify format.
**Before DNS cutover:** confirm every old URL in the sitemap either exists or is in `_redirects`.

## Things that need a human decision (not guessed)

1. **Ticket prices and availability** were read from Dandelion on 6 Oct 2026 (`TICKETS`, `ticketsCheckedOn` in `site.ts`). Re-check before launch. Prices are not live-synced.
2. **Mailing list** has no provider yet. The form falls back to opening an email to hello@. To connect Mailchimp / Klaviyo / Resend, set `PUBLIC_NEWSLETTER_ENDPOINT` (a URL that accepts `POST {email, source}` JSON).
3. **Privacy page** is a plain-language draft; have it reviewed.
4. **Photo rights.** The gallery and heroes reuse the festival's own photography from the old site. Confirm photographer credits and consent for identifiable faces.
5. **Trader and Healing Village applications** were Elementor pop-ups with no link I could extract. Those two cards currently email hello@. Swap in the real form URLs in `src/pages/participate.astro`.
6. **Car-share WhatsApp group** is mentioned but no invite link was published. Add to `/plan/` when you have it.
7. **No 2027 line-up or programme exists yet.** `/lineup/` shows the 2026 line-up (transcribed from the official poster) as a clearly labelled archive and collects applications until 11 Nov 2026.

## Inconsistencies found on the old site (fixed here, worth fixing at the source)

- Old FAQ said **17–21 June 2027 at "Stanford Hall, Leicestershire"**; the homepage and Dandelion say **27–31 May 2027, Weston Park**. Dandelion treated as authoritative.
- Old FAQ listed postcode **TF11 8PX**; Weston Park's address is **TF11 8LE**. New site uses 8LE.
- Departure time: old FAQ said 3pm Monday; Dandelion says 2pm. New site uses 2pm.
- Soul Temple page says "13 other stages", FAQ says 12. New site says "12-plus".
- Copyright footer said 2024.

## Quality checks run

- axe-core (WCAG 2.1 AA + best-practice): 0 violations on all 19 content pages
- No horizontal overflow at 375px on any page
- 0 broken internal links; unique titles; all titles ≤ 62 and descriptions 70–165 chars; one H1 per page
- JSON-LD: Organization (all), Festival + Offers (home), FAQPage (tickets, FAQs), Article (journal)
- Images auto-converted to AVIF/WebP with responsive sizes. Fonts self-hosted and preloaded. About 2 KB of shared JavaScript.
- Not run: Lighthouse (no Chrome binary available in the build environment). Run it once deployed.

## Features beyond a standard festival site

Rising-sun hero · scroll-lit manifesto · live countdown · ticket calculator with payment-plan estimate · stage explorer (keyboard-accessible tabs) · interactive values wheel · searchable FAQ with topic filters · packing checklist saved on-device · gallery with filters + lightbox (swipe/keys) · 2026 line-up archive · journal (6 posts migrated verbatim) · "calm mode" motion toggle · full legacy redirect map.
