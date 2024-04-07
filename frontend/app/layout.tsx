import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../public/font/archia-regular-webfont.woff',
  display: 'swap',
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
