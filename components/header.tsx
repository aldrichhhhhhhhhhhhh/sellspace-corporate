'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';

const menus = [
  { label: 'About', intro: 'Start with the idea behind SELLSPACE.', items: [
    { href: '/about#what-is-sellspace', title: 'What is SELLSPACE?', description: 'The platform and the problem we want to solve.' },
    { href: '/about#company', title: 'About the company', description: 'Our mission, vision, and principles.' },
    { href: '/about#who-its-for', title: 'Who it’s for', description: 'Everyday commerce, from small businesses onward.' },
    { href: '/about#business-theory', title: 'Our business theory', description: 'Why a clearer commerce experience matters.' },
  ]},
  { label: 'Platform', intro: 'Explore the experiences we’re working toward.', items: [
    { href: '/platform', title: 'Platform overview', description: 'The broader SELLSPACE platform thesis.' },
    { href: '/seller-workspace#workspace', title: 'Seller workspace / product preview', description: 'A considered space for everyday operations.' },
    { href: '/seller-workspace#workspace', title: '01 / Seller view · Daily operations', description: 'Attention, orders, and product management.' },
    { href: '/seller-workspace#buyer-view', title: '02 / Buyer view · Discovery + shopping', description: 'Marketplace discovery and product stories.' },
  ]},
  { label: 'Our journey', intro: 'Where we started, what we value, and what comes next.', items: [
    { href: '/journey#story', title: 'The story of SELLSPACE', description: 'The reason we started building.' },
    { href: '/journey#people', title: 'The people behind SELLSPACE', description: 'The team and the roles shaping the work.' },
    { href: '/journey#roadmap', title: 'Interactive roadmap', description: 'Milestones, principles, and what we’re validating.' },
    { href: '/journey#future', title: 'What the future holds', description: 'A direction guided by learning, not promises.' },
    { href: '/journey#business-theory', title: 'Business theory', description: 'The thinking behind the platform.' },
  ]},
  { label: 'Partners', intro: 'Build with us and help everyday commerce move forward.', items: [
    { href: '/partners#investors', title: 'Investors & funding', description: 'Our approach to responsible growth and capital.' },
    { href: '/partners#partnerships', title: 'Partnerships', description: 'Explore aligned ideas and collaboration.' },
    { href: '/partners#small-business', title: 'Small business support hub', description: 'How we want to help small businesses achieve more.' },
    { href: '/#contact', title: 'Contact us', description: 'Start a conversation with SELLSPACE.' },
  ]},
  { label: 'Policies', intro: 'The policies and standards that guide how we work.', items: [
    { href: '/policies/privacy', title: 'Privacy & data', description: 'How website information is handled.' },
    { href: '/policies/terms', title: 'Website terms', description: 'Expectations for using this website.' },
    { href: '/policies/cookies', title: 'Cookies & technology', description: 'Cookies and similar technologies.' },
    { href: '/policies/marketplace', title: 'Planned commerce standards', description: 'Standards to define before commerce goes live.' },
  ]},
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const closeMenu = () => { setOpen(false); setActive(null); };
  const toggleMenu = (label: string) => setActive(current => current === label ? null : label);

  return <header className="site-header">
    <Link className="wordmark" href="/" aria-label="SELLSPACE home" onClick={closeMenu}>
      <span className="brand-badge" aria-hidden="true">S</span>
      <span className="wordmark-name"><span className="wordmark-sell">Sell</span><span className="wordmark-space">Space</span><small>COMMERCE, SIMPLIFIED</small></span>
    </Link>
    <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation" id="main-navigation">
      <div className="nav-links">
        {menus.map(menu => <button key={menu.label} className={'nav-menu-trigger' + (active === menu.label ? ' is-active' : '')} type="button" aria-expanded={active === menu.label} onClick={() => toggleMenu(menu.label)}>{menu.label}<ChevronDown size={13} aria-hidden="true"/></button>)}
      </div>
      <a className="nav-cta" href="/#contact" onClick={closeMenu}><span>Let’s talk</span><ArrowUpRight size={15} aria-hidden="true"/></a>
    </nav>
    <button className="menu-toggle" onClick={() => {setOpen(!open);setActive(null);}} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation">{open ? <X /> : <Menu />}</button>
    {active && <div className="nav-mega" role="region" aria-label={active + ' menu'}>
      {menus.filter(menu => menu.label === active).map(menu => <div key={menu.label} className="nav-mega-inner">
        <div className="nav-mega-intro"><span className="nav-mega-kicker">EXPLORE SELLSPACE / {menu.label.toUpperCase()}</span><h2>{menu.label}<br/><em>at a glance.</em></h2><p>{menu.intro}</p><span className="nav-mega-foot">CLEAR INFORMATION. CONSIDERED COMMERCE.</span></div>
        <div className="nav-mega-items">{menu.items.map((item, index) => <Link key={item.href + item.title} href={item.href} onClick={closeMenu} className="nav-mega-item"><span className="nav-mega-index">{String(index + 1).padStart(2, '0')}</span><span className="nav-mega-item-copy"><b>{item.title}</b><small>{item.description}</small></span><ArrowDownRight size={16} className="nav-mega-arrow"/></Link>)}</div>
        <button type="button" className="nav-mega-close" onClick={() => setActive(null)} aria-label="Close menu"><X size={16}/></button>
      </div>)}
    </div>}
  </header>;
}
