// @ts-nocheck
import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import { getKorivaConfig, buildCssVars } from '@/lib/koriva-config';
import './globals.css';

import { KorivaLivePreview } from '@/components/KorivaLivePreview';
const heading = Kanit({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-heading' });

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await getKorivaConfig();
  return {
    title: cfg?.seo?.title ?? 'Muay Thai Miami — Miami, FL',
    description: cfg?.seo?.description ?? "Miami's authentic Muay Thai school. Train the way they train in Thailand.",
    openGraph: { title: cfg?.seo?.title ?? 'Muay Thai Miami' },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cfg  = await getKorivaConfig();
  const vars = buildCssVars(cfg?.brand);
  return (
    <html lang="en" style={vars as React.CSSProperties}>
      <body className={`${heading.variable} bg-mt-bg text-mt-text antialiased`} style={{ fontFamily: 'Kanit, sans-serif' }}>
        {children}
        <KorivaLivePreview />
      </body>
    </html>
  );
}
