// One consistent 24px line-icon family (1.5 stroke) + filled brand glyphs.
const Line = ({ children, size = 24, className, strokeWidth = 1.5 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{children}</svg>
);

export const ArrowUpRight = p => <Line {...p}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></Line>;
export const ArrowRight = p => <Line {...p}><path d="M4 12h16" /><path d="m14 6 6 6-6 6" /></Line>;
export const ArrowLeft = p => <Line {...p}><path d="M20 12H4" /><path d="m10 6-6 6 6 6" /></Line>;
export const ArrowUp = p => <Line {...p}><path d="M12 20V4" /><path d="m6 10 6-6 6 6" /></Line>;
export const Close = p => <Line {...p}><path d="M6 6l12 12M18 6 6 18" /></Line>;
export const Pause = p => <Line {...p}><path d="M9 6v12M15 6v12" /></Line>;
export const Play = p => <Line {...p}><path d="M8 5.5v13l10.5-6.5z" /></Line>;
export const Plus = p => <Line {...p}><path d="M12 5v14M5 12h14" /></Line>;

export const Phone = p => <Line {...p}><path d="M21.5 16.6v2.9a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6 19.7 19.7 0 0 1-3.1-8.6A2 2 0 0 1 3.6 1.6h2.9a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7.5 9.4a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.9 2.2z" /></Line>;
export const MapPin = p => <Line {...p}><path d="M19.5 10c0 5.5-7.5 11.5-7.5 11.5S4.5 15.5 4.5 10a7.5 7.5 0 0 1 15 0z" /><circle cx="12" cy="10" r="2.6" /></Line>;
export const Clock = p => <Line {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Line>;

// Services
export const HomeIcon = p => <Line {...p}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9v12h14V9" /><path d="M10 21v-6h4v6" /></Line>;
export const Kitchen = p => <Line {...p}><rect x="3" y="3" width="18" height="18" rx="1.5" /><path d="M3 9h18M12 9v12" /><path d="M7 6h2M15 6h2M9.5 14v2M14.5 14v2" /></Line>;
export const Wardrobe = p => <Line {...p}><rect x="5" y="2.5" width="14" height="17.5" rx="1" /><path d="M12 2.5V20M10 10v2.5M14 10v2.5M7 20v1.5M17 20v1.5" /></Line>;
export const Chair = p => <Line {...p}><path d="M6.5 11V5.5a2.5 2.5 0 0 1 2.5-2.5h6a2.5 2.5 0 0 1 2.5 2.5V11" /><path d="M4 11.5a1.5 1.5 0 0 1 3 0V14h10v-2.5a1.5 1.5 0 0 1 3 0V17H4z" /><path d="M6 17v4M18 17v4" /></Line>;
export const Lamp = p => <Line {...p}><path d="M12 2v5" /><path d="M5 14a7 7 0 0 1 14 0z" /><path d="M10 17.5a2 2 0 0 0 4 0" /><path d="M4 20.5h16" /></Line>;
export const Bath = p => <Line {...p}><path d="M3 12h18v2.5a5.5 5.5 0 0 1-5.5 5.5h-7A5.5 5.5 0 0 1 3 14.5z" /><path d="M6 12V5.5a2.5 2.5 0 0 1 4.6-1.4" /><path d="M9.5 6.5l2.5-1.5" /><path d="m6.5 20-1 1.5M17.5 20l1 1.5" /></Line>;
export const Building = p => <Line {...p}><path d="M4 21V4.5A1.5 1.5 0 0 1 5.5 3h8A1.5 1.5 0 0 1 15 4.5V21" /><path d="M15 9h3.5A1.5 1.5 0 0 1 20 10.5V21" /><path d="M2 21h20M8 7h3M8 11h3M8 15h3" /></Line>;

// 3D design
export const Cube = p => <Line {...p}><path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z" /><path d="M3.5 7 12 11.5 20.5 7M12 11.5v10" /></Line>;
export const Monitor = p => <Line {...p}><rect x="2" y="3.5" width="20" height="13.5" rx="1.5" /><path d="M8 21h8M12 17v4" /><path d="m10 8 4.5 2.25L10 12.5z" /></Line>;
export const Gift = p => <Line {...p}><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M5 12v8.5h14V12M12 8v12.5" /><path d="M12 8C10.5 4.5 6.5 4 6.5 6.3 6.5 8 9.5 8 12 8zM12 8c1.5-3.5 5.5-4 5.5-1.7C17.5 8 14.5 8 12 8z" /></Line>;

// Factory stages
export const Layers = p => <Line {...p}><path d="m12 3 9 4.5-9 4.5-9-4.5z" /><path d="m3 12 9 4.5 9-4.5" /><path d="m3 16.5 9 4.5 9-4.5" /></Line>;
export const Press = p => <Line {...p}><path d="M4 3h16M12 3v5" /><rect x="6" y="8" width="12" height="3" rx=".5" /><rect x="3" y="15" width="18" height="3" rx=".5" /><path d="M5 18v3M19 18v3M9 13.5h6" /></Line>;

// Pillars & process
export const Ruler = p => <Line {...p}><path d="M3.5 16.5 16.5 3.5l4 4-13 13z" /><path d="m7 13 2 2M10 10l1.5 1.5M13 7l2 2" /></Line>;
export const Workshop = p => <Line {...p}><path d="M2 21h20" /><path d="M3.5 21V10l5 3.5V10l5 3.5V6.5L20.5 3V21" /><path d="M7 17h2M12 17h2M17 17h1" /></Line>;
export const Sparkle = p => <Line {...p}><path d="M12 3c.6 4.5 2.5 6.4 7 7-4.5.6-6.4 2.5-7 7-.6-4.5-2.5-6.4-7-7 4.5-.6 6.4-2.5 7-7z" /><path d="M19 16.5c.2 1.3.8 1.9 2 2-1.2.2-1.8.8-2 2-.2-1.2-.8-1.8-2-2 1.2-.1 1.8-.7 2-2z" /></Line>;
export const Chat = p => <Line {...p}><path d="M20.5 14.5a2 2 0 0 1-2 2H8l-4.5 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" /><path d="M8 8.5h8M8 12h5" /></Line>;
export const Pencil = p => <Line {...p}><path d="M3 21l1.2-4.6L16.7 3.9a2 2 0 0 1 2.9 0l.5.5a2 2 0 0 1 0 2.9L7.6 19.8z" /><path d="m14.5 6 3.5 3.5M12 21h9" /></Line>;
export const Hammer = p => <Line {...p}><path d="m13.5 9.5-9.3 9.3a1.6 1.6 0 0 0 2.3 2.3l9.3-9.3" /><path d="m11.5 7.5 3-3a5 5 0 0 1 4.6-1.3L20 3.4l-2.3 2.3 1 3.3 2.3 2.3-2.5 2.5-2.3-2.3-1.5.3-2.2-2.2" /></Line>;
export const Key = p => <Line {...p}><circle cx="8" cy="15" r="4.5" /><path d="m11.2 11.8 9.3-9.3M17 6l2.5 2.5M14.5 8.5 16.5 10.5" /></Line>;

// Brand glyphs
export const WhatsApp = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.59-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35zm-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z" />
  </svg>
);
export const Instagram = p => <Line {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.6" r=".6" fill="currentColor" /></Line>;
export const Facebook = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M13.5 21.5v-8h2.7l.4-3.2h-3.1V8.3c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5v3.2h2.7v8z" />
  </svg>
);
