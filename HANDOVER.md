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

## Brand fidelity (taken from the old site, not invented)

- **Typeface:** Modesto (Poster, Text, Condensed, Open Inline Fill) loaded from the festival's own Adobe Fonts kit `wgs2amx` (`<link>` in `src/layouts/Base.astro`). It must stay tied to their Adobe subscription; if it lapses, text falls back to Georgia.
- **Palette:** blue `#2382A6`, orange `#FA965E`, cream `#F2E1D1`, navy `#1F1E3D`, red-pink `#D1445B`, gold `#FFB85D` (tokens in `global.css`). Darker variants (`--coral-ink`, `--teal-deep`) exist only so text passes WCAG AA.
- **Marks:** the wordmark lettering and centred sun/moon mark in the header; the engraved sun/moon, moon-face and rising half-sun artwork as ghosted watermarks (`Watermark.astro`, rebuilt as true line-art masks in `src/assets/brand/wm-*.svg`); the flower of life behind the seven values; the horizontal and vertical flourish dividers. All originals were pulled from the old site's uploads.
- **Hero film:** the old site's two YouTube background videos. Desktop is the 2025 Aftermovie (`6lcjCU5aSzc`), mobile is the vertical Reel (`OcV4jINr2EE`). Change the IDs on `data-hero-video` in `src/pages/index.astro`. It is muted, loads after the page, pauses off-screen, stays still under reduced-motion / calm mode / data-saver, and has a visible Pause control.

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
- Images auto-converted to AVIF/WebP with responsive sizes. Fonts come from the client's Adobe Fonts kit. About 2 KB of shared JavaScript plus the hero-film loader.
- Not run: Lighthouse (no Chrome binary available in the build environment). Run it once deployed.

## Features beyond a standard festival site

Hero background film · scroll-lit manifesto · live countdown · ticket calculator with payment-plan estimate · stage explorer (keyboard-accessible tabs) · interactive values wheel · searchable FAQ with topic filters · packing checklist saved on-device · gallery with filters + lightbox (swipe/keys) · 2026 line-up archive · journal (6 posts migrated verbatim) · "calm mode" motion toggle · full legacy redirect map.
