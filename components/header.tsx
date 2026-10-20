'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { brand } from '@/config/brand';
const links = [{ href: '#about', label: 'About' }, { href: '#platform', label: 'Platform' }, { href: '#journey', label: 'Our journey' }, { href: '#partners', label: 'Partners' }];
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><Link className="wordmark" href="#top" aria-label="SELLSPACE home"><span className="brand-badge" aria-hidden="true">S</span><span className="wordmark-name"><span className="wordmark-sell">Sell</span><span className="wordmark-space">Space</span><small>COMMERCE, SIMPLIFIED</small></span></Link><nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<Link href="/policies" onClick={() => setOpen(false)}>Policies</Link><a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={15} /></a></nav><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>{open ? <X /> : <Menu />}</button></header>;
}
