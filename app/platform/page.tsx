import { ArrowLeft, ArrowRight, ArrowUpRight, Boxes, ClipboardCheck, Package, ShoppingBag, Users, ChartNoAxesCombined } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Reveal } from '@/components/reveal';

const pillars = [
  { number: '01', icon: ShoppingBag, title: 'Keep orders moving', body: 'Make it easier to follow order activity and understand what needs attention next.' },
  { number: '02', icon: Package, title: 'Bring products into view', body: 'Keep product and catalog work organized around the things sellers manage every day.' },
  { number: '03', icon: ChartNoAxesCombined, title: 'See the bigger picture', body: 'Bring important business activity into a clearer view, so the next decision feels easier to make.' },
];

export default function PlatformPage() {
  return <main id="top" className="platform-page">
    <Header />
    <section className="platform-hero">
      <div className="platform-page-wrap">
        <Reveal><Link className="platform-back-link" href="/"><ArrowLeft size={15} /> Back to SELLSPACE</Link></Reveal>
        <div className="platform-page-hero-grid">
          <div className="platform-page-copy">
            <Reveal><p className="eyebrow">SELLSPACE / THE PLATFORM</p></Reveal>
            <Reveal delay={0.06}><h1>Everyday business,<br />in a <em>clearer space.</em></h1></Reveal>
            <Reveal delay={0.12}><p className="platform-page-lead">A new platform for everyday commerce—built around the products, orders, customers, and decisions that keep a business moving.</p></Reveal>
            <Reveal delay={0.18}><a className="platform-page-cta" href="#designed-for">Explore the experience <ArrowRight size={17} /></a></Reveal>
            <Reveal delay={0.22}><p className="platform-page-note">A vision for a more connected way to run everyday commerce.</p></Reveal>
          </div>
          <Reveal className="platform-page-art" delay={0.12}>
            <div className="platform-art-orbit platform-art-orbit-a" />
            <div className="platform-art-orbit platform-art-orbit-b" />
            <div className="platform-art-card">
              <div className="platform-art-top"><span className="platform-art-logo">S</span><span>SELLSPACE <small>WORKSPACE CONCEPT</small></span><span className="platform-art-menu">•••</span></div>
              <div className="platform-art-greeting"><span>YOUR BUSINESS, AT A GLANCE</span><strong>Make room for what matters.</strong></div>
              <div className="platform-art-metrics">
                <div><span><ChartNoAxesCombined size={15} /> Business activity</span><strong>In one view</strong><small>See the moving parts</small></div>
                <div><span><ClipboardCheck size={15} /> Order workflow</span><strong>Clear next steps</strong><small>Keep work on track</small></div>
              </div>
              <div className="platform-art-list"><div><i className="platform-art-dot" /><span><b>Orders</b><small>Follow what comes next</small></span><ArrowUpRight size={15} /></div><div><i className="platform-art-dot pale" /><span><b>Products</b><small>Keep your catalog organized</small></span><ArrowUpRight size={15} /></div><div><i className="platform-art-dot gold" /><span><b>Customers</b><small>Keep people at the center</small></span><ArrowUpRight size={15} /></div></div>
              <div className="platform-art-foot">ILLUSTRATIVE PRODUCT DIRECTION <span>01 / 03</span></div>
            </div>
            <div className="platform-art-stamp"><Boxes size={16} /><span>COMMERCE<br /><b>IN MOTION</b></span></div>
          </Reveal>
        </div>
      </div>
    </section>

    <section id="designed-for" className="platform-purpose platform-page-wrap">
      <Reveal><p className="eyebrow">01 — DESIGNED FOR EVERYDAY COMMERCE</p></Reveal>
      <div className="platform-purpose-grid">
        <Reveal><h2>Not more complexity.<br /><em>More clarity.</em></h2></Reveal>
        <Reveal delay={0.1}><div className="platform-purpose-copy"><p className="platform-purpose-lead">Running a business is already a lot of moving parts. The platform should help them make sense together.</p><p>SELLSPACE is being built with a simple ambition: make the everyday work of commerce easier to understand and easier to manage. We’re shaping the experience around real seller needs, starting with the essentials rather than adding complexity for its own sake.</p></div></Reveal>
      </div>
      <div className="platform-pillar-grid">{pillars.map((pillar, index) => { const Icon = pillar.icon; return <Reveal key={pillar.number} delay={index * 0.07}><article className="platform-pillar"><span className="platform-pillar-number">{pillar.number}</span><span className="platform-pillar-icon"><Icon size={21} strokeWidth={1.6} /></span><h3>{pillar.title}</h3><p>{pillar.body}</p><ArrowUpRight className="platform-pillar-arrow" size={18} /></article></Reveal>; })}</div>
    </section>

    <section className="platform-belief">
      <div className="platform-page-wrap platform-belief-grid">
        <Reveal><p className="eyebrow light-eyebrow">02 — THE PRINCIPLE</p><h2>Built around the<br /><em>business behind it.</em></h2></Reveal>
        <Reveal delay={0.12}><div className="platform-belief-copy"><p>From a first product listing to a growing stream of orders, everyday commerce deserves a digital experience that feels considered, capable, and clear.</p><div className="platform-belief-rule" /><p className="platform-belief-signoff">SELLSPACE <span>— A NEW PLATFORM FOR EVERYDAY COMMERCE</span></p></div></Reveal>
      </div>
    </section>

    <section className="platform-next platform-page-wrap">
      <Reveal><p className="eyebrow">03 — WHAT COMES NEXT</p><h2>A platform shaped<br />by <em>real business needs.</em></h2><p className="platform-next-copy">We’ll keep developing the idea, learning from prospective users, and prioritizing the workflows that make the biggest difference. This is a direction we’re working toward—not a claim that every concept shown here is already available.</p><div className="platform-next-actions"><Link className="platform-page-cta dark" href="/#journey">Explore our journey <ArrowUpRight size={17} /></Link><Link className="platform-page-text-link" href="/#contact">Talk with SELLSPACE <ArrowRight size={16} /></Link></div></Reveal>
    </section>
    <footer className="platform-page-footer platform-page-wrap"><Link className="platform-page-footer-brand" href="/">SELLSPACE <span>COMMERCE, SIMPLIFIED</span></Link><Link href="/">Return to homepage <ArrowUpRight size={15} /></Link></footer>
  </main>;
}
