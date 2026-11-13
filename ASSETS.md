# Asset sources

## Logo

Supplied by the client (`assets/latest-logo-hi.png`). The white background has been removed and the logo split into web assets in `public/assets`:

- `logo-icon.png`: the orange house mark on a transparent background.
- `logo-wordmark-mask.png`: the "LS Interiors" wordmark as an alpha mask. The site colours it with CSS, so it shows white on the hero and ink on light backgrounds.
- `logo-full-dark.png` and `logo-full-light.png`: full transparent lockups for social media, print or other use.
- `favicon.png` and `apple-touch-icon.png`.

## Photography

Every photo slot and its prompt is listed in `IMAGE-PROMPTS.md`. Until generated or real project photos are added, the slots hold Unsplash placeholder images (originals in `/assets`):

- Living: photo-1600210492486-724fe5c67fb0
- Lounge: photo-1600210491892-03d54c0aaf87
- Kitchen: photo-1556912172-45b7abe8b7e1
- Bedroom: photo-1611892440504-42a792e24d32
- Detail: photo-1600607687920-4e2a09cf159d
- Dining: photo-1616486338812-3dadae4b4ace

## Typefaces

Cormorant Garamond (display) and Manrope (body), from Google Fonts, self-hosted at build time by `next/font`.
