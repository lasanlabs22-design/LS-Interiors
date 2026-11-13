import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});
const body = Manrope({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata = {
  title: 'LS Interiors | Interior Design & Manufacturing in Tirupati',
  description: 'Make room for a beautiful life. LS Interiors, Tirupati: complete home interiors, modular kitchens, wardrobes and bespoke furniture, designed by us and made in our own manufacturing unit.',
  icons: { icon: '/assets/favicon.png', apple: '/assets/apple-touch-icon.png' },
};
export const viewport = { themeColor: '#1c2526' };

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
      </body>
    </html>
  );
}
