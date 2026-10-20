import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ShieldCheck, FileText, Cookie, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/header';
import { brand } from '@/config/brand';

export const metadata: Metadata = {
  title: 'Trust & Policies',
  description: 'How SELLSPACE approaches privacy, responsible website use, and the standards planned for everyday commerce.',
};

const policies = [
  { href: '/policies/privacy', icon: ShieldCheck, number: '01', title: 'Privacy & data', tag: 'WEBSITE POLICY', description: 'How information shared through our website may be handled, protected, and retained.' },
  { href: '/policies/terms', icon: FileText, number: '02', title: 'Website terms', tag: 'WEBSITE POLICY', description: 'The expectations that help keep our website useful, respectful, and secure.' },
  { href: '/policies/cookies', icon: Cookie, number: '03', title: 'Cookies & technology', tag: 'WEBSITE POLICY', description: 'A clear explanation of cookies and similar technologies actually used on the site.' },
  { href: '/policies/marketplace', icon: ShoppingBag, number: '04', title: 'Commerce standards', tag: 'PLANNED FOR PLATFORM', description: 'The buyer, seller, order, refund, and dispute standards to define before commerce goes live.' },
];

export default function PoliciesPage() {
  return <main className="trust-page">
    <Header />
    <section className="trust-hero section-wrap">
      <Link href="/" className="policy-back"><ArrowLeft size={15}/> Back to SELLSPACE</Link>
      <div className="trust-hero-grid">
        <div className="trust-hero-copy">
          <p className="eyebrow"><span className="trust-live-dot"/> SELLSPACE / TRUST CENTER</p>
          <h1>Commerce works<br/>better with <em>trust.</em></h1>
          <p className="policy-lead">Clear expectations are part of a better business experience. Here’s how we approach the website today—and the standards we’re preparing for the SELLSPACE platform.</p>
          <a className="trust-scroll-link" href="#policy-library">Explore our policies <ArrowUpRight size={16}/></a>
        </div>
        <aside className="trust-principle-card">
          <span className="trust-card-index">OUR PRINCIPLE / 001</span>
          <div className="trust-card-symbol"><CheckCircle2 size={25}/></div>
          <h2>Clarity before complexity.</h2>
          <p>People should understand what they’re agreeing to, what happens to their information, and where responsibilities sit.</p>
          <span className="trust-card-foot">COMMERCE, SIMPLIFIED</span>
        </aside>
      </div>
      <div className="trust-values"><span>01 / BE TRANSPARENT</span><span>02 / RESPECT PEOPLE</span><span>03 / SET CLEAR EXPECTATIONS</span></div>
    </section>

    <section className="trust-library section-wrap" id="policy-library">
      <div className="trust-section-heading">
        <div><p className="eyebrow">THE POLICY LIBRARY</p><h2>Good business starts<br/>with <em>clear expectations.</em></h2></div>
        <p>Start with the policies for this website. Platform-specific rules will be finalized around the product and its real operating processes before launch.</p>
      </div>
      <div className="trust-policy-list">{policies.map(item => { const Icon = item.icon; return <Link href={item.href} className="trust-policy-card" key={item.href}>
        <span className="trust-policy-number">{item.number}</span>
        <span className="trust-policy-icon"><Icon size={21}/></span>
        <span className="trust-policy-copy"><span className="trust-policy-tag">{item.tag}</span><strong>{item.title}</strong><small>{item.description}</small></span>
        <ArrowUpRight className="trust-policy-arrow" size={21}/>
      </Link>; })}</div>
      <div className="trust-draft-note"><span className="trust-note-mark">i</span><p><strong>Built on transparency.</strong> These documents are working drafts and are not legal advice. Before publication as final policies, they must be reviewed against SELLSPACE’s actual data practices, operating model, and applicable law.</p></div>
    </section>

    <section className="trust-closing">
      <div className="section-wrap trust-closing-inner"><p className="eyebrow">SELLSPACE / OUR COMMITMENT</p><h2>Make the rules clear.<br/><em>Make business simpler.</em></h2><p>As SELLSPACE develops, these policies should grow with the product—not get ahead of what we can genuinely deliver.</p><Link href="/#contact" className="trust-contact-link">Talk to SELLSPACE <ArrowUpRight size={17}/></Link></div>
    </section>
    <footer className="site-footer section-wrap"><Link className="wordmark footer-wordmark" href="/"><span className="mark">S</span><span>{brand.name}<small>COMMERCE, SIMPLIFIED</small></span></Link><div className="footer-bottom"><span>© {new Date().getFullYear()} SELLSPACE.</span><Link href="/">BACK TO HOME ↑</Link><span>TRUST & TRANSPARENCY</span></div></footer>
  </main>;
}
