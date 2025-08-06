import type {Metadata, Viewport} from 'next';
import './globals.css';
import {PreloadResources} from './preload';

import {sans, serif, serif_en} from './font';
import {ToastProvider} from './components';
import {cn} from './utils/tailwind-utils';

const contents = {
  title: '최승연 ♥ 김현아 결혼합니다',
  description: '11월 8일 오후 1시 30분, 두가헌',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: contents.title,
  description: contents.description,
  openGraph: {
    title: contents.title,
    description: contents.description,
    images: ['https://kr.object.ncloudstorage.com/zen-bucket/last-6.png'],
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
      <body>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
