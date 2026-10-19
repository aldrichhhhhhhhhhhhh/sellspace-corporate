import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ShieldCheck, FileText, Cookie, ShoppingBag } from 'lucide-react';
import { Header } from '@/components/header';
import { brand } from '@/config/brand';

export const metadata: Metadata = { title: 'Policies', description: 'Read the policies that guide the SELLSPACE website and future services.' };

const policies = [
  { href: '/policies/privacy', icon: ShieldCheck, number: '01', title: 'Privacy Policy', description: 'How we handle information when you visit our website or contact us.' },
  { href: '/policies/terms', icon: FileText, number: '02', title: 'Website Terms of Use', description: 'The basic rules for accessing and using the SELLSPACE corporate website.' },
  { href: '/policies/cookies', icon: Cookie, number: '03', title: 'Cookies & Analytics', description: 'Information about cookies and similar technologies used on this website.' },
  { href: '/policies/marketplace', icon: ShoppingBag, number: '04', title: 'Marketplace Policies', description: 'A future policy area for buyers, sellers, transactions, refunds, and disputes.' },
];

export default function PoliciesPage() {
 return <main><Header /><section className="policy-hero section-wrap"><Link href="/" className="policy-back"><ArrowLeft size={15}/> Back to SELLSPACE</Link><p className="eyebrow">SELLSPACE / TRUST & TRANSPARENCY</p><h1>Clear rules.<br/><em>Better business.</em></h1><p className="policy-lead">Our policies explain how we approach privacy, website use, and the responsibilities that come with building useful commerce experiences.</p><p className="policy-notice">These are initial website policy drafts, not legal advice. They must be reviewed and updated to match SELLSPACE’s actual operations before public launch.</p></section><section className="policy-list section-wrap"><div className="policy-list-heading"><span>POLICY LIBRARY</span><span>04 DOCUMENTS</span></div>{policies.map(item => { const Icon = item.icon; return <Link href={item.href} className="policy-card" key={item.href}><span className="policy-number">{item.number}</span><span className="policy-icon"><Icon size={21}/></span><span className="policy-card-copy"><strong>{item.title}</strong><small>{item.description}</small></span><ArrowUpRight className="policy-arrow" size={20}/></Link> })}</section><footer className="site-footer section-wrap"><Link className="wordmark footer-wordmark" href="/"><span className="mark">S</span><span>{brand.name}<small>COMMERCE, SIMPLIFIED</small></span></Link><div className="footer-bottom"><span>© {new Date().getFullYear()} SELLSPACE.</span><Link href="/">BACK TO HOME ↑</Link><span>POLICIES & TRANSPARENCY</span></div></footer></main>;
}
