# Image prompts for ChatGPT (Modern Indian)

Twenty-one images, one per photo slot on the website. Each prompt is complete, so copy one code block into ChatGPT at a time.

## How to use

1. Paste one prompt into ChatGPT and generate.
2. Download the image and save it in the `assets` folder with the **Save as** name shown, e.g. `assets/hero-1.png`.
3. In the project folder run `npm run images`, then refresh the browser.

## Tips for good results

- **One image per message.** If a result is close but not right, reply with the fix ("make the cabinets darker", "remove the plant on the left") rather than starting over.
- **Shape matters.** Each prompt asks for landscape (1536 x 1024), portrait (1024 x 1536) or square. The site crops the edges, so the prompts keep the main subject near the centre.
- **Hero images.** If ChatGPT offers a higher resolution or an upscale option, use it for `hero-1`, `hero-2`, `hero-3` and `cta-band`. They fill the whole screen.
- **Avoid** images with people, text, logos or brand names. Every prompt already says so, but check the result.
- **Craft section.** Real photos of your own workshop are better than generated ones for `craft-workshop` and `craft-detail`, because that section says "Designed by us. Made by us." Use the prompts only until you have real photos.

---

## 1. Hero slideshow

The large headline sits on the left of these images, so each prompt keeps the left side calm.

### hero-1 · Living room

**Save as:** `hero-1.png` · **Shape:** landscape

```text
Photorealistic interior photograph of a spacious modern Indian living room in a premium 3BHK apartment in Tirupati, golden hour sunlight. A low cream boucle sofa with handloom cushions in rust and indigo ikat, a walnut veneer fluted TV wall with a floating console and warm cove lighting, a gypsum false ceiling with a recessed cove and slim profile lights. A large brass urli with floating marigolds and jasmine on a solid teak coffee table, a cane accent chair, a jute and wool rug, an Italian marble floor. Floor-to-ceiling windows with sheer linen curtains on the right. Keep the left third of the frame calm and uncluttered (soft plain wall in warm ivory) for headline text. Architectural photography, 24mm lens, straight verticals, soft natural light, warm palette of ivory, sand, walnut, brass and terracotta. Editorial magazine quality, Architectural Digest India style. No people, no text, no logos, no watermark. Landscape 1536x1024.
```

### hero-2 · Modular kitchen

**Save as:** `hero-2.png` · **Shape:** landscape

```text
Photorealistic interior photograph of a modern Indian modular kitchen in an independent house. L-shaped layout with matte sage-green acrylic lower shutters and warm white high-gloss laminate upper cabinets, a tall unit with aluminium profile doors in bronze frames and fluted glass, a quartz countertop with a breakfast counter and two cane bar stools. A brass pendant trio, under-cabinet LED strips, a built-in hob and chimney, a few brass and copper vessels and a small tulsi plant on the windowsill. Morning sunlight from a window on the right. Keep the left third of the frame calm (plain wall or soft shadow) for headline text. Architectural photography, 24mm lens, straight verticals, warm palette of ivory, sage, oak, brass. Clean, uncluttered, magazine quality. No people, no text, no logos, no brand names, no watermark. Landscape 1536x1024.
```

### hero-3 · Bedroom

**Save as:** `hero-3.png` · **Shape:** landscape

```text
Photorealistic interior photograph of a serene modern Indian master bedroom in a villa, evening mood. An upholstered bed with a tall headboard in oatmeal fabric set against a wall of fluted wooden panels, a floor-to-ceiling sliding wardrobe on the right with aluminium profile frames, tinted bronze glass and teak veneer panels. A Kalamkari-inspired framed textile artwork above the bed, warm bedside wall lights, a gypsum false ceiling with warm cove lighting, linen bedding with a block-print throw, a jute rug on a wooden floor. Keep the left third of the frame calm and darker for headline text. Architectural photography, 24mm lens, straight verticals, warm palette of ivory, sand, walnut, brass and muted terracotta. Editorial magazine quality. No people, no text, no logos, no watermark. Landscape 1536x1024.
```

---

## 2. Studio section

### studio-main · Shown inside an arch shape

**Save as:** `studio-main.png` · **Shape:** portrait

```text
Photorealistic vertical interior photograph of a double-height living area in a modern Indian independent house. A tall arched window with teak frames lets in soft afternoon light. A wooden oonjal (indoor swing) hangs from the ceiling on brass chains with handloom cushions, beside a large CNC-cut wooden jaali partition casting patterned shadows on a lime-plaster wall. Terracotta and brass accents, a potted areca palm, a Kota stone floor. The main subject is centred in the frame because the image is cropped into an arch shape. Architectural photography, straight verticals, warm palette of ivory, sand, teak, brass and terracotta. Editorial magazine quality. No people, no text, no logos, no watermark. Portrait 1024x1536.
```

### studio-main · Short video (Sora, ChatGPT's video tool)

Plays inside the arch in place of the photo. Upload `assets/studio-main.png` as the reference image so the video matches the current photo. Sora only makes landscape video, which is fine: the site crops it to the tall arch from the centre, so only the middle third of the frame shows.

**Save as:** `public/assets/studio-main.mp4` (straight into `public/assets`; videos skip `npm run images`) · **Format:** landscape (16:9), 1080p, about 10 seconds, no sound needed, under 6 MB

```text
Turn this photograph into a calm 10-second cinemagraph-style video, landscape 16:9. Recreate the same room, colours and lighting, with the wooden oonjal swing and the tall arched window exactly in the centre third of the frame, at the same size and framing as in the photo. Extend the room naturally to the left and right: more warm lime-plaster wall, the carved wooden jaali screen continuing on the right, a teak console with a brass lamp and a potted areca palm on the left. The camera is completely still, locked off on a tripod, with no zoom, pan or cuts. Only gentle, natural motion: the swing sways very slowly forward and back on its brass chains, a soft afternoon breeze moves the palm leaves slightly, fine dust motes drift through the sunbeam from the arched window, and the patterned shadows of the jaali shift a little across the wall as the light breathes. Warm, peaceful, quiet luxury mood. No people, no animals, no text, no logos, no watermark. The last frame must match the first frame so the video loops seamlessly.
```

### studio-detail · Materials still life

**Save as:** `studio-detail.png` · **Shape:** square

```text
Photorealistic overhead still-life photograph of interior design material samples on a white Italian marble table: teak and walnut veneer swatches, matte and high-gloss laminate chips, an acrylic shutter sample, a fluted glass sample in an aluminium profile frame, a small CNC jaali MDF panel, a brass handle, handloom ikat and Kalamkari fabric swatches, a pencil and a rolled architectural floor plan. Soft daylight from the left, gentle shadows. Warm palette of ivory, sand, walnut, brass and terracotta. Magazine quality product photography. No people, no text, no logos, no watermark. Square 1024x1024.
```

---

## 3. Services

Portrait images. Phones crop these to landscape, so the subject stays in the middle.

### service-home · Complete home interiors

**Save as:** `service-home.png` · **Shape:** portrait

```text
Photorealistic vertical interior photograph of an open-plan living and dining space in a modern Indian 3BHK apartment, fully furnished by one interior firm. In the centre, a six-seater solid sheesham dining table with upholstered chairs, behind it a crockery unit with fluted glass shutters, brass handles and interior lighting. A layered gypsum false ceiling with cove lighting and a sculptural brass pendant above the table. The living area beyond has a fabric sofa and a wall with fluted PVC panels in warm beige. Italian marble floor, balcony with plants in the background. Keep the main subject in the centre of the frame. Architectural photography, straight verticals, warm palette of ivory, sand, walnut and brass. Magazine quality. No people, no text, no logos, no watermark. Portrait 1024x1536.
```

### service-kitchen · Modular kitchens

**Save as:** `service-kitchen.png` · **Shape:** portrait

```text
Photorealistic vertical interior photograph of a modern Indian parallel modular kitchen, viewed straight down the middle. One side has high-gloss deep teal acrylic shutters with a quartz countertop, the other side has warm oak-finish laminate cabinets with a tall pantry unit and a built-in oven. Profile handles in champagne gold, under-cabinet LED strips, a granite-look backsplash, a stainless steel sink below a window with a small tulsi plant, brass and steel vessels neatly arranged. Keep the main subject in the centre of the frame. Architectural photography, straight verticals, soft daylight. Clean, uncluttered, magazine quality. No people, no text, no logos, no brand names, no watermark. Portrait 1024x1536.
```

### service-wardrobe · Wardrobes, sliding doors and profile doors

**Save as:** `service-wardrobe.png` · **Shape:** portrait

```text
Photorealistic vertical interior photograph of a floor-to-ceiling sliding-door wardrobe in a modern Indian bedroom. The sliding shutters combine slim black aluminium profile frames with fluted bronze glass and walnut veneer panels; one shutter is slid open to show neatly organised interiors with a hanging rail, drawers, a saree storage section and warm LED profile lighting. A loft above with matching shutters, a dressing unit with a round mirror beside it, a wooden floor and a soft rug. Keep the main subject in the centre of the frame. Architectural photography, straight verticals, warm palette of ivory, walnut, bronze and brass. Magazine quality. No people, no text, no logos, no watermark. Portrait 1024x1536.
```

### service-furniture · TV units, pooja units and custom furniture

**Save as:** `service-furniture.png` · **Shape:** portrait

```text
Photorealistic vertical interior photograph of a custom TV unit wall in a modern Indian living room. A walnut veneer fluted panel wall with a floating console in matte PU finish, backlit open shelves with brass objects, a small bronze Nataraja sculpture and books, a hidden cove light above. To one side, a tall display unit with glass shutters in slim aluminium profile frames. Warm marble floor, a cane chair in the foreground corner. Keep the main subject in the centre of the frame. Architectural photography, straight verticals, warm palette of ivory, walnut, brass and terracotta. Magazine quality. No people, no text, no logos, no TV screen content, no watermark. Portrait 1024x1536.
```

### service-ceiling · False ceilings, wall panels and wallpaper

**Save as:** `service-ceiling.png` · **Shape:** portrait

```text
Photorealistic vertical interior photograph of a modern Indian living room seen from a low angle to show a layered gypsum false ceiling with warm cove lighting, a central wooden rafter detail and slim magnetic track lights. Below it, a feature wall with charcoal fluted panels on one half and a subtle textured botanical wallpaper on the other, lit by picture lights. A low sofa and a brass floor lamp at the bottom of the frame. Keep the main subject in the centre of the frame. Architectural photography, straight verticals, evening mood with warm light, palette of ivory, charcoal, sand, walnut and brass. Magazine quality. No people, no text, no logos, no watermark. Portrait 1024x1536.
```

### service-washroom · Washrooms

**Save as:** `service-washroom.png` · **Shape:** portrait

```text
Photorealistic vertical interior photograph of a modern Indian washroom in a premium apartment. A wall-hung vanity unit in walnut-finish laminate with a white quartz top and a sleek basin, a backlit mirror cabinet above, a frameless glass shower partition with a rain shower and matte black fittings, large-format marble-look wall tiles with one feature wall in terrazzo, a recessed niche with warm LED strip, a small potted plant and folded handloom towels. Bright, clean, spa-like. Keep the main subject in the centre of the frame. Architectural photography, straight verticals, soft light, palette of ivory, walnut, warm grey and brass. Magazine quality. No people, no text, no logos, no brand names, no watermark. Portrait 1024x1536.
```

### service-commercial · Offices and commercial spaces

**Save as:** `service-commercial.png` · **Shape:** portrait

```text
Photorealistic vertical interior photograph of a modern Indian boutique office reception. A curved reception desk in oak veneer with a white quartz top, a terracotta-coloured accent wall with an empty space where a logo would go, a CNC wooden jaali partition separating a small meeting room with glass walls in aluminium profile frames, terrazzo flooring, a gypsum ceiling with linear profile lights, lounge chairs and large indoor plants. Keep the main subject in the centre of the frame. Architectural photography, straight verticals, bright daylight, palette of ivory, oak, terracotta and brass. Magazine quality. No people, no text, no logos, no lettering, no watermark. Portrait 1024x1536.
```

### Services · Short videos (Sora, ChatGPT's video tool)

Each service photo can be replaced by a short looping video. Only the video of the service being viewed plays; the others stay paused. For each one, upload the matching photo from `assets/` (for example `assets/service-home.png`) as the reference image, then paste its prompt.

**Save as:** `public/assets/service-<name>.mp4`, the same name as the photo (straight into `public/assets`; videos skip `npm run images`) · **Format:** whatever shape Sora gives (the site crops from the centre), about 6 to 10 seconds, no sound needed, under 3 MB each. Windows hides file extensions, so type the name without `.mp4` if it already shows as a video file, or it ends up as `.mp4.mp4`.

#### service-home.mp4

```text
Turn this photograph into a calm 8-second cinemagraph-style video. Keep the room, framing, colours and lighting exactly as in the photo, with the dining table in the centre. The camera is completely still, locked off on a tripod, with no zoom, pan or cuts. Only gentle, natural motion: the sheer curtains by the balcony sway softly in a breeze, the plants on the balcony move slightly, the ceiling fan turns slowly, the lilies in the vase on the table stir, the warm glow of the cove lighting and the crockery unit's interior lights breathes softly, and a patch of afternoon sunlight drifts slowly across the marble floor. Warm, peaceful mood. No people, no animals, no text, no logos, no watermark. The last frame must match the first frame so the video loops seamlessly.
```

#### service-kitchen.mp4

```text
Turn this photograph into an 8-second cinematic video with clearly visible motion. Keep the kitchen, colours and lighting exactly as in the photo, with the window in the centre. Camera move: a slow, smooth dolly push-in straight down the middle of the kitchen toward the window for the first 4 seconds, then an equally slow pull-back to the exact starting framing for the last 4 seconds, like a gimbal shot, steady with no shake and no cuts. At the same time the scene is alive: the ceiling fan spins steadily at a clearly visible speed, the trees outside the window sway noticeably in a breeze, the bamboo blind moves slightly, the money plant and the tulsi plant sway, and soft steam curls up from the brass pot on the hob. The under-cabinet lights glow warmly. Fresh morning mood. No people, no animals, no text, no logos, no brand names, no watermark. The video must end on exactly the same frame it starts on so it loops seamlessly.
```

#### service-wardrobe.mp4

```text
Turn this photograph into a calm 8-second cinemagraph-style video. Keep the bedroom, wardrobe, framing, colours and lighting exactly as in the photo, with the open wardrobe section in the centre. The camera is completely still, locked off on a tripod, with no zoom, pan or cuts. Only gentle, natural motion: the warm LED lights inside the wardrobe slowly brighten and soften, the hanging kurtas sway very slightly as if from a soft draught, the sheer curtain on the left moves gently, the lilies on the dressing table stir, and the pendant light above the dressing table glows. The sliding doors stay still. Warm evening mood. No people, no animals, no text, no logos, no watermark. The last frame must match the first frame so the video loops seamlessly.
```

#### service-furniture.mp4

```text
Turn this photograph into a calm 8-second cinemagraph-style video. Keep the room, TV unit, framing, colours and lighting exactly as in the photo, with the fluted TV wall in the centre. The camera is completely still, locked off on a tripod, with no zoom, pan or cuts. Only gentle, natural motion: the backlit shelves and the glass display cabinet slowly glow brighter and then soften, the light catches and glints on the brass vessels, the sheer curtain on the left sways gently, the money plant and the flowers in the terracotta vase stir slightly, and a soft band of evening sunlight moves slowly across the marble floor and the cane chair. The TV screen stays black and blank. Warm evening mood. No people, no animals, no text, no logos, no watermark. The last frame must match the first frame so the video loops seamlessly.
```

#### service-ceiling.mp4

```text
Turn this photograph into a calm 8-second cinemagraph-style video. Keep the room, ceiling, framing, colours and lighting exactly as in the photo, with the layered ceiling and sofa in the centre. The camera is completely still, locked off on a tripod, with no zoom, pan or cuts. Only gentle, natural motion: the cove lighting around the wooden rafters and the track lights slowly fade up from a soft dusk glow to full warm light and then ease back down, the picture lights and the brass floor lamp glow warmly, the candle on the coffee table flickers, and the palm and the curtain by the window sway slightly. Warm evening mood. No people, no animals, no text, no logos, no watermark. The last frame must match the first frame so the video loops seamlessly.
```

#### service-washroom.mp4

```text
Turn this photograph into an 8-second cinematic video with clearly visible motion. Keep the washroom, colours and lighting exactly as in the photo, with the vanity and mirror in the centre. Camera move: a slow, smooth dolly push-in straight toward the vanity for the first 4 seconds, then an equally slow pull-back to the exact starting framing for the last 4 seconds, like a gimbal shot, steady with no shake and no cuts. At the same time the scene is alive: the single round black rain shower head at the top right, inside the glass enclosure, is turned on, and a soft, even curtain of water falls straight down from it onto the shower floor. All the water stays completely inside the glass enclosure; nothing sprays or splashes outside the glass partition, and the floor outside stays dry. The handheld shower stays hanging on the wall, switched off. Soft warm steam rises from the shower and fills the enclosure with a light, misty fog that slowly drifts over the top of the glass into the room as a gentle haze, softly catching the warm light from the mirror and niches. The fog gradually mists the glass panel, a few droplets run down the inside of the glass, and the hanging plants sway gently. The fog stays light and airy, so the vanity, mirror and shower remain clearly visible. The backlit mirror and the niche lights glow warmly. Keep every fixture exactly as in the photo: exactly one shower head, do not add any new shower heads, taps, fixtures or objects. Calm, spa-like mood. No people, no animals, no text, no logos, no brand names, no watermark. The video must end on exactly the same frame it starts on so it loops seamlessly.
```

#### service-commercial.mp4

```text
Turn this photograph into an 8-second cinematic video with clearly visible motion. Keep the reception, colours and lighting exactly as in the photo, with the reception desk in the centre. Camera move: a slow, smooth dolly push-in straight toward the reception desk for the first 4 seconds, then an equally slow pull-back to the exact starting framing for the last 4 seconds, like a gimbal shot, steady with no shake and no cuts. At the same time the scene is alive: the large banana-leaf plants by the windows sway noticeably in a breeze, the trees outside the windows move, sunlight through the windows sweeps slowly across the terrazzo floor and the armchairs, and the patterned shadows of the wooden jaali partition slide across the floor. The brass table lamp and the meeting room pendant glow warmly. The meeting room behind the glass is empty. Bright, welcoming daytime mood. No people, no animals, no text, no logos, no lettering, no watermark. The video must end on exactly the same frame it starts on so it loops seamlessly.
```

---

## 4. Spaces gallery (landscape)

### space-living · "The art of unwinding"

**Save as:** `space-living.png` · **Shape:** landscape

```text
Photorealistic interior photograph of a warm modern Indian living room in an apartment. A large L-shaped linen sofa with block-print and ikat cushions, a round solid wood coffee table with a brass urli and flowers, a rattan accent chair, a Tanjore-style framed painting on a textured lime-plaster wall, sheer curtains, late afternoon light. Calm, cosy and lived-in, not cluttered. Architectural photography, 24mm lens, straight verticals, warm palette of ivory, sand, walnut, brass and terracotta. Magazine quality. No people, no text, no logos, no watermark. Landscape 1536x1024.
```

### space-kitchen · "A little everyday delight"

**Save as:** `space-kitchen.png` · **Shape:** landscape

```text
Photorealistic interior photograph of a bright U-shaped modern Indian modular kitchen in an independent house. Two-tone cabinets with warm white matte laminate uppers and walnut-finish lowers, wall units with aluminium profile frames and frosted glass, a granite countertop, a tall pull-out pantry, a window above the sink with sunlight streaming in, a brass and copper utensil rail, small potted herbs. Architectural photography, 24mm lens, straight verticals, warm palette of ivory, walnut and brass. Clean and functional, magazine quality. No people, no text, no logos, no brand names, no watermark. Landscape 1536x1024.
```

### space-bedroom · "Your own quiet escape"

**Save as:** `space-bedroom.png` · **Shape:** landscape

```text
Photorealistic interior photograph of a calm modern Indian guest bedroom. An upholstered bed against a headboard wall of walnut veneer panels with integrated warm LED strip lighting, pendant bedside lights, a cane-and-teak reading chair by a window, a gypsum ceiling with soft cove light, linen bedding with a handloom throw, a small brass diya on the bedside table. Soft evening light. Architectural photography, 24mm lens, straight verticals, warm palette of ivory, sand, walnut and brass. Magazine quality. No people, no text, no logos, no watermark. Landscape 1536x1024.
```

### space-dining · "Made for coming together"

**Save as:** `space-dining.png` · **Shape:** landscape

```text
Photorealistic interior photograph of a modern Indian dining area. A six-seater solid wood dining table with cane-back chairs, a sculptural brass and glass pendant light above, a full-height crockery unit with fluted glass shutters, interior lighting and displayed brass and ceramic tableware. A CNC wooden jaali partition separates the dining from the living room and casts patterned shadows. Italian marble floor, warm daylight. Architectural photography, 24mm lens, straight verticals, warm palette of ivory, teak, brass and terracotta. Magazine quality. No people, no text, no logos, no watermark. Landscape 1536x1024.
```

### space-wardrobe · "A place for everything"

**Save as:** `space-wardrobe.png` · **Shape:** landscape

```text
Photorealistic interior photograph of a modern Indian walk-in wardrobe and dressing room in a villa. Floor-to-ceiling wardrobes with hinged profile doors in slim champagne-gold aluminium frames with tinted glass, so the neatly organised clothes and sarees inside are visible and lit with warm LED strips. A central island with a stone top and glass-front jewellery drawers, a dressing mirror with backlight, a soft rug. Architectural photography, 24mm lens, straight verticals, warm palette of ivory, walnut, bronze and brass. Magazine quality. No people, no text, no logos, no watermark. Landscape 1536x1024.
```

### space-pooja · "A sacred corner"

**Save as:** `space-pooja.png` · **Shape:** landscape

```text
Photorealistic interior photograph of a contemporary Indian pooja unit in a modern home, set into a living room corner. Teak wood unit with a CNC-carved jaali back panel softly backlit in warm light, carved wooden double doors folded open, a white marble base platform with a small step, brass diyas, a brass bell, fresh marigold and jasmine garlands, a small rangoli-pattern inlay in the marble floor in front. Elegant, serene, minimal and modern, not ornate or cluttered. Do not show any deity faces in detail; keep the idols small and softly out of focus. Architectural photography, 35mm lens, straight verticals, warm glowing light, palette of ivory, teak, white marble and brass. Magazine quality. No people, no text, no logos, no watermark. Landscape 1536x1024.
```

---

## 5. Craft section (use real workshop photos when you have them)

### craft-workshop

**Save as:** `craft-workshop.png` · **Shape:** portrait

```text
Photorealistic vertical documentary photograph inside a clean, well-organised Indian carpentry and modular furniture workshop. A carpenter's hands, seen from the forearms only with no face visible, guide a laminated plywood panel through a panel saw, with sawdust caught in a shaft of window light. In the background, stacked laminate and veneer sheets, aluminium profile sections on a rack and half-built cabinet carcasses. Warm natural light, shallow depth of field, honest documentary style. Keep the main subject in the centre of the frame. No faces, no text, no logos, no brand names, no watermark. Portrait 1024x1536.
```

### craft-detail

**Save as:** `craft-detail.png` · **Shape:** portrait

```text
Photorealistic vertical macro photograph of fine furniture craftsmanship: a precise mitred corner of a walnut veneer cabinet with a brass handle, next to the edge of a fluted glass shutter in a slim bronze aluminium profile frame. Shallow depth of field, soft side light showing the wood grain and the clean joinery. Warm palette of walnut, bronze and brass. Product photography, magazine quality. No people, no text, no logos, no watermark. Portrait 1024x1536.
```

---

## 6. Call to action banner

### cta-band

**Save as:** `cta-band.png` · **Shape:** landscape

```text
Photorealistic wide interior photograph of a modern Indian living room at dusk (blue hour). Warm lamps and cove lighting glowing, a brass urli with floating diyas on the coffee table, a wooden jaali screen casting soft patterned shadows, city lights visible through a large window. Calm, inviting, festive but understated. Darker overall exposure with the centre of the frame soft and uncluttered so white headline text reads clearly on top. Architectural photography, straight verticals, palette of deep teal, ivory, walnut and glowing amber. No people, no text, no logos, no watermark. Landscape 1536x1024.
```

---

## 7. Free 3D design section

This section shows a still image, or plays a short video if you add one. A real 15 second phone clip of your own 3D walkthrough on your big screen beats both of the prompts below, because it is genuinely your work.

### design-3d · Still image (ChatGPT)

**Save as:** `design-3d.png` in `assets`, then run `npm run images` · **Shape:** landscape

```text
Photorealistic photograph inside a modern Indian interior design studio in Tirupati. A couple, seen from behind and seated on a cream sofa, watch a large wall-mounted 85-inch screen that displays a photorealistic 3D render of their future living room: a walnut fluted TV wall with cove lighting, a cream sofa with ikat cushions, a brass urli with marigolds, an Italian marble floor. A designer stands beside the screen pointing at the ceiling detail, face turned away from the camera. In the foreground, a wooden desk with an open laptop showing the same room as a white 3D wireframe model, fanned laminate and veneer samples, a fluted glass sample and a rolled floor plan. The studio has walnut wall panelling, warm ambient lighting and brass accents. The big screen is the clear focus of the image. No faces visible, no text, no logos, no brand names on any screen or device, no watermark. Landscape 1536x1024.
```

### design-3d · Short video (Sora, ChatGPT's video tool)

**Save as:** `public/assets/design-3d.mp4` (straight into `public/assets`; videos skip `npm run images`) · **Format:** 16:9, 1080p, about 10 seconds, no sound needed, under 10 MB

```text
A 10-second cinematic video, 16:9, slow and smooth. Inside a warm, modern Indian interior design studio, a large wall-mounted screen fills most of the frame. The camera slowly pushes in toward the screen. On the screen, a 3D model of a modern Indian living room transforms in one continuous sequence: it starts as a plain white clay model, then materials appear (walnut fluted TV wall, Italian marble floor, cream sofa, brass urli with marigolds), then the gypsum ceiling's cove lighting and lamps glow on, until the screen shows a fully photorealistic finished room that fills the frame. Soft warm light, shallow depth of field on the studio edges, steady camera, no cuts. No people's faces, no text, no logos, no watermark. The last frame should look close to the first so the video loops smoothly.
```
