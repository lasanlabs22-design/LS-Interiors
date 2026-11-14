# LS Interiors

Website for Lakshmi Srinivasa Interiors, Tirupati. Next.js App Router, statically rendered.

## Local development

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

| File | What it holds |
|---|---|
| `app/content.js` | Business details, all copy, services, gallery items and image slots |
| `app/page.jsx` | Page structure |
| `app/globals.css` | Design system and all styling |
| `app/icons.jsx` | Icon set (line icons plus Instagram, Facebook and WhatsApp glyphs) |
| `public/interactions.js` | Header, mobile menu, hero slideshow, services, gallery filters, lightbox, enquiry form |

## Replacing photos

See `IMAGE-PROMPTS.md`. Save an image in `/assets` with its slot name and run `npm run images`.

Some photo slots can show a short looping video instead: the studio arch (`studio-main.mp4`), the 3D design screen (`design-3d.mp4`) and each service (`service-<id>.mp4`, e.g. `service-kitchen.mp4`). Put the `.mp4` straight into `public/assets`; the page uses it when the file exists and falls back to the photo otherwise. Only the active service's video plays, and videos stay paused for visitors who prefer reduced motion.

## Production

```sh
npm run build
npm start
```

## Enquiries

The form prepares a WhatsApp message for +91 92811 97901. Visitors review and send it in WhatsApp. No backend stores submissions. The floating buttons at the bottom right call the business or open a WhatsApp chat.

## Content notes

Gallery photos are labelled as design inspiration until real project photos are added. No project counts or testimonials have been added, because none were supplied.
