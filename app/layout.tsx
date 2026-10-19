import type { Metadata } from 'next';
import './globals.css';
import { brand } from '@/config/brand';

export const metadata: Metadata = {
  title: { default: `${brand.name} — ${brand.tagline}`, template: `%s — ${brand.name}` },
  description: 'SELLSPACE is building a simpler, more intuitive experience for everyday commerce.',
  openGraph: { title: `${brand.name} — ${brand.tagline}`, description: 'Everyday commerce made simple.', type: 'website' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
