'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { brand } from '@/config/brand';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#platform', label: 'Platform' },
  { href: '/#journey', label: 'Our journey' },
  { href: '/#partners', label: 'Partners' },
  { href: '/policies', label: 'Policies' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="SELLSPACE home" onClick={closeMenu}>
        <span className="brand-badge" aria-hidden="true">S</span>
        <span className="wordmark-name">
          <span className="wordmark-sell">Sell</span><span className="wordmark-space">Space</span>
          <small>COMMERCE, SIMPLIFIED</small>
        </span>
      </Link>

      <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation" id="main-navigation">
        <div className="nav-links" aria-label="Explore SELLSPACE">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
        </div>
        <a className="nav-cta" href="/#contact" onClick={closeMenu}>
          <span>Let’s talk</span><ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </nav>

      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
