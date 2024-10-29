import type {Metadata, Viewport} from 'next';
import './globals.css';

import {sans, serif, serif_en} from './font';
import {ToastProvider} from './components';

const contents = {
  title: '우리의 초대장',
  description: '당신을 초대합니다',
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
    images: [
      'http://www.drpaulwong.com/wp-content/uploads/2022/12/mayur-gala-2PODhmrvLik-unsplash-1080x675.jpg',
    ],
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
      className={`${sans.variable} ${serif.variable} ${serif_en.variable}`}
    >
      <body>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
