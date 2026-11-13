// Single source of truth for business details, copy and image slots.
// Images live in /public/assets. To replace one, see IMAGE-PROMPTS.md and `npm run images`.

export const business = {
  name: 'LS Interiors',
  legalName: 'Lakshmi Srinivasa Interiors',
  phoneDisplay: '+91 92811 97901',
  phoneHref: 'tel:+919281197901',
  phone2Display: '+91 91002 12306',
  phone2Href: 'tel:+919100212306',
  whatsapp: '919281197901',
  whatsappGreeting: "Hello LS Interiors, I'd like to discuss my space.",
  addressLines: ['RC Rd, Ambedhkar Colony, Avilali', 'Tirupati, Andhra Pradesh 517502'],
  mapsUrl: 'https://maps.app.goo.gl/WXF8yxrQbr1DFhFs6',
  instagram: 'https://www.instagram.com/lakshmisrinivasa_interiors/',
  facebook: 'https://www.facebook.com/profile.php?id=61559983027749',
};

export const whatsappLink = (text = business.whatsappGreeting) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: '#studio', label: 'Studio' },
  { href: '#services', label: 'Services' },
  { href: '#spaces', label: 'Spaces' },
  { href: '#design', label: '3D Design' },
  { href: '#craft', label: 'Craft' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export const heroSlides = [
  { src: '/assets/hero-1.webp', label: 'Living', alt: 'Sunlit living room with a walnut TV wall, cream sofa with ikat cushions, brass urli on a teak coffee table and a cove-lit false ceiling' },
  { src: '/assets/hero-2.webp', label: 'Kitchens', alt: 'Modular kitchen with sage-green lower cabinets, white gloss uppers, a profile-door glass unit, brass pendants and cane bar stools' },
  { src: '/assets/hero-3.webp', label: 'Bedrooms', alt: 'Bedroom with a fluted wood panel wall, Kalamkari-style artwork above the bed and a sliding wardrobe with bronze glass' },
];

export const marquee = ['Free 3D designs', 'Modular kitchens', 'Sliding & profile doors', 'Pooja units', 'Wardrobes', 'False ceilings & lighting', 'Washrooms', 'Living rooms', 'Commercial spaces'];

export const founder = {
  name: 'Kesava Naidu',
  role: 'Founder, Lakshmi Srinivasa Interiors',
  quote: 'With over 15 years of expertise and more than 450 successfully completed projects, we are dedicated to crafting spaces you’ll love.',
};

export const stats = [
  { value: '2010', label: 'Established in Tirupati' },
  { value: '15+', label: 'Years of expertise' },
  { value: '450+', label: 'Projects successfully completed' },
  { value: 'Free', label: '3D design for every client' },
];

export const designPoints = [
  { icon: 'Cube', title: 'Photorealistic 3D visuals', text: 'Every room designed in 3D with your materials, colours and lighting, so you know exactly what you are getting.' },
  { icon: 'Monitor', title: 'Video walkthroughs on a big screen', text: 'We render your home as a video and walk you through it on a big screen, room by room.' },
  { icon: 'Gift', title: 'Completely free of cost', text: 'Change anything you like until it feels right. The 3D design is on us.' },
];

export const services = [
  { id: 'home', icon: 'HomeIcon', image: '/assets/service-home.webp', title: 'Complete home interiors', text: 'A cohesive home, planned room by room. Living, bedrooms, dining and every detail in between, designed around the way your family lives.', tags: ['Space planning', 'Material palettes', 'Turnkey execution'], service: 'Complete home interiors' },
  { id: 'kitchen', icon: 'Kitchen', image: '/assets/service-kitchen.webp', title: 'Modular kitchens', text: 'Practical layouts, generous storage and durable finishes, built to fit your space and your cooking.', tags: ['L, U & parallel layouts', 'Tall units', 'Breakfast counters'], service: 'Modular kitchen' },
  { id: 'wardrobe', icon: 'Wardrobe', image: '/assets/service-wardrobe.webp', title: 'Wardrobes & sliding doors', text: 'Sliding wardrobes, aluminium profile doors with glass, hinged and walk-in storage, organised around what you actually own.', tags: ['Sliding doors', 'Profile doors', 'Lofts & organisers'], service: 'Wardrobes & sliding doors' },
  { id: 'furniture', icon: 'Chair', image: '/assets/service-furniture.webp', title: 'Bespoke furniture & woodwork', text: 'TV units, pooja units, crockery and display cabinets, beds and study tables, made in our own unit.', tags: ['TV & pooja units', 'Display cabinets', 'Custom pieces'], service: 'Pooja, TV & custom furniture' },
  { id: 'ceiling', icon: 'Lamp', image: '/assets/service-ceiling.webp', title: 'False ceilings & lighting', text: 'Layered gypsum ceilings, cove and profile lighting, wall panels and wallpaper that set the mood of every room.', tags: ['Gypsum & POP', 'Cove & profile lights', 'Wall panels & wallpaper'], service: 'False ceilings & lighting' },
  { id: 'washroom', icon: 'Bath', image: '/assets/service-washroom.webp', title: 'Washrooms', text: 'Vanity units, mirror cabinets, shower partitions and tiling, planned for easy upkeep and a calm, spa-like feel.', tags: ['Vanity units', 'Shower partitions', 'Tiling & fittings'], service: 'Washroom' },
  { id: 'commercial', icon: 'Building', image: '/assets/service-commercial.webp', title: 'Commercial spaces', text: 'Offices, clinics, showrooms and retail interiors that work hard and welcome customers.', tags: ['Offices', 'Retail & showrooms', 'Clinics'], service: 'Commercial interiors' },
];

export const spaces = [
  { category: 'living', label: 'Living', image: '/assets/space-living.webp', title: 'The art of unwinding', mood: 'Warm · Natural · Inviting', text: 'Layered neutrals, generous seating and natural textures. A living room that invites you to slow down.', alt: 'Living room with an L-shaped sofa, Tanjore-style painting, cane chair and a brass urli on a round wooden table', service: 'Complete home interiors' },
  { category: 'kitchen', label: 'Kitchen', image: '/assets/space-kitchen.webp', title: 'A little everyday delight', mood: 'Functional · Effortless · Refined', text: 'Thoughtful storage, clean lines and room to create. A kitchen designed around the rhythm of everyday life.', alt: 'U-shaped kitchen with walnut-finish lower cabinets, frosted glass profile wall units and a copper utensil rail', service: 'Modular kitchen' },
  { category: 'bedroom', label: 'Bedroom', image: '/assets/space-bedroom.webp', title: 'Your own quiet escape', mood: 'Soft · Restful · Personal', text: 'Soft lighting and a calm palette set the tone for rest, with storage that keeps the room serene.', alt: 'Bedroom with a walnut panelled headboard wall, pendant bedside lights and a cane reading chair by the window', service: 'Wardrobes & sliding doors' },
  { category: 'dining', label: 'Dining', image: '/assets/space-dining.webp', title: 'Made for coming together', mood: 'Connected · Welcoming · Timeless', text: 'Natural materials and considered proportions make room for everyday meals and long conversations.', alt: 'Dining area with cane-back chairs, a lit crockery unit with fluted glass and a carved wooden jaali partition', service: 'Complete home interiors' },
  { category: 'wardrobe', label: 'Wardrobe', image: '/assets/space-wardrobe.webp', title: 'A place for everything', mood: 'Ordered · Tailored · Calm', text: 'Full-height wardrobes with interiors planned around your routine, so mornings feel effortless.', alt: 'Walk-in wardrobe with glass profile doors, lit saree shelves, a central jewellery island and a backlit mirror', service: 'Wardrobes & sliding doors' },
  { category: 'pooja', label: 'Pooja', image: '/assets/space-pooja.webp', title: 'A sacred corner', mood: 'Serene · Crafted · Personal', text: 'A pooja unit crafted with care: warm wood, soft backlighting and quiet detail at the heart of the home.', alt: 'Teak pooja unit with a backlit carved jaali panel, open carved doors, brass diyas and a marble floor inlay', service: 'Pooja, TV & custom furniture' },
];

export const craftStages = [
  { icon: 'Layers', title: 'Plywood selection', text: 'Termite-proof, waterproof and borer-proof boards, inspected for strong core bonding and a smooth surface.' },
  { icon: 'Press', title: 'Glue & pressing', text: '100-ton hydraulic cold pressing for bubble-free, zero-chipping laminate bonding.' },
  { icon: 'Ruler', title: 'Precision CNC cutting', text: 'Exact, millimetre-level cuts that guarantee seamless joints.' },
  { icon: 'Sparkle', title: 'Machine edge banding', text: 'Factory-grade edge sealing, so tapes never peel off or wear down over time.' },
];

export const steps = [
  { icon: 'Chat', title: 'We listen', text: 'Your ideas, your routine and your wish list. We start by understanding what home means to you.' },
  { icon: 'Pencil', title: 'We design', text: 'Layouts, materials and finishes shaped around your space, shown to you in free 3D visuals before anything is made.' },
  { icon: 'Hammer', title: 'We craft', text: 'Your interiors take shape in our manufacturing unit, with care in every detail.' },
  { icon: 'Key', title: 'You move in', text: 'Installation brings it all together. Your space is ready for the life you want to live.' },
];

export const enquiryOptions = ['Complete home interiors', 'Modular kitchen', 'Wardrobes & sliding doors', 'Pooja, TV & custom furniture', 'False ceilings & lighting', 'Washroom', 'Commercial interiors', 'Something else'];
