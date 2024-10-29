import {Noto_Sans_KR, Noto_Serif_KR, Cinzel} from 'next/font/google';

export const sans = Noto_Sans_KR({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const serif = Noto_Serif_KR({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

export const serif_en = Cinzel({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif-en',
});
