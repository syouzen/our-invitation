import type {Metadata, Viewport} from 'next';
import './globals.css';
import {PreloadResources} from './preload';

import {sans, serif, serif_en} from './font';
import {ToastProvider} from './components';
import {cn} from './utils/tailwind-utils';
import {SpeedInsights} from '@vercel/speed-insights/next';

const contents = {
  title: '최승연 ♥ 김현아 결혼합니다',
  description: '11월 8일 토요일 오후 12시 30분, 두가헌',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const ogImage = {
  url: `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/og.webp`,
  width: 2666,
  height: 1346,
};

export const metadata: Metadata = {
  title: contents.title,
  description: contents.description,
  openGraph: {
    title: contents.title,
    description: contents.description,
    images: [ogImage],
  },
  manifest: '/manifest.json',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={cn(
        sans.variable,
        serif.variable,
        serif_en.variable,
        'scrollbar-hide',
      )}
    >
      <PreloadResources />
      <meta name="twitter:label1" content="장소" />
      <meta name="twitter:data1" content="두가헌" />
      <meta name="twitter:label2" content="날짜" />
      <meta name="twitter:data2" content="11월 8일 오후 12시 30분" />
      <body>
        <ToastProvider />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
