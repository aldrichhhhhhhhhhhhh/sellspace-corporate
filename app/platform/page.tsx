import { ArrowLeft, ArrowRight, ArrowUpRight, Boxes, Check, CircleDot, Layers3, Package, ShoppingBag, Workflow, Users, ChartNoAxesCombined, Compass, Handshake } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Reveal } from '@/components/reveal';

const problems = [
  { n: '01', title: 'Too many moving parts.', body: 'Products, orders, inventory, and customer conversations can quickly become scattered across different places.' },
  { n: '02', title: 'Too much effort to stay on top.', body: 'When the everyday picture is fragmented, small tasks take more energy—and important next steps can be harder to spot.' },
  { n: '03', title: 'Growth should not mean more chaos.', body: 'Businesses need room to grow without making the basics harder to manage.' },
];

const advantages = [
  { icon: Layers3, title: 'One clearer workspace', body: 'Bring the essential parts of day-to-day commerce into a more connected experience.' },
  { icon: Workflow, title: 'Designed around real workflows', body: 'Start with the jobs sellers actually need to do—not features added just to fill a checklist.' },
  { icon: Compass, title: 'Clarity over clutter', body: 'Make important activity and next steps easier to understand, so the platform feels approachable.' },
  { icon: Users, title: 'Built with people in mind', body: 'Shape the experience around the realities of small businesses, operators, and the people they serve.' },
];

export default function PlatformPage() {
  return <main id="top" className="platform-page pitch-page">
    <Header />
    <section className="pitch-hero">
      <div className="platform-page-wrap">
        <Reveal><Link className="platform-back-link" href="/"><ArrowLeft size={15} /> Back to SELLSPACE</Link></Reveal>
        <div className="pitch-hero-grid">
          <div className="pitch-hero-copy">
            <Reveal><p className="eyebrow"><span className="pitch-eyebrow-dot"/> THE SELLSPACE THESIS / 01</p></Reveal>
            <Reveal delay={0.05}><h1>Everyday commerce<br/>deserves a <em>better way.</em></h1></Reveal>
            <Reveal delay={0.1}><p className="pitch-hero-lead">We’re building SELLSPACE around a simple belief: running a business is already complex. The platform behind it shouldn’t make it harder.</p></Reveal>
            <Reveal delay={0.16}><div className="pitch-hero-actions"><a className="platform-page-cta" href="#case">See the opportunity <ArrowRight size={17}/></a><Link className="pitch-secondary-link" href="/#contact">Explore a partnership <ArrowUpRight size={16}/></Link></div></Reveal>
            <Reveal delay={0.2}><p className="pitch-honesty"><CircleDot size={13}/> Early-stage vision · Product direction in development</p></Reveal>
          </div>
          <Reveal className="pitch-visual" delay={0.12}>
            <div className="pitch-visual-top"><span>SELLSPACE / COMMERCE WORKSPACE</span><span>CONCEPT 001</span></div>
            <div className="pitch-visual-head"><span className="pitch-s-mark">S</span><div><b>Your business, in one clearer view.</b><small>THE EVERYDAY COMMERCE CONCEPT</small></div><span className="pitch-live-indicator">● CONCEPT</span></div>
            <div className="pitch-workspace">
              <div className="pitch-workspace-nav"><span className="active"><ChartNoAxesCombined size={14}/> Overview</span><span><ShoppingBag size={14}/> Orders</span><span><Package size={14}/> Products</span><span><Users size={14}/> Customers</span></div>
              <div className="pitch-workspace-content"><div className="pitch-workspace-label">THE BUSINESS AT A GLANCE</div><div className="pitch-workspace-cards"><div><small>ORDERS</small><strong>Keep work moving</strong><span>See what needs attention</span></div><div><small>PRODUCTS</small><strong>Stay organized</strong><span>Keep the catalog in view</span></div><div><small>ACTIVITY</small><strong>Find the signal</strong><span>Understand the bigger picture</span></div></div><div className="pitch-workspace-flow"><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/></div><div className="pitch-workspace-caption"><span>ESSENTIALS, CONNECTED</span><ArrowUpRight size={15}/></div></div>
            </div>
            <div className="pitch-visual-bottom"><span>ILLUSTRATIVE PRODUCT DIRECTION</span><span>DESIGNED FOR EVERYDAY BUSINESS ↗</span></div>
          </Reveal>
        </div>
        <div className="pitch-hero-foot"><span>LESS FRICTION</span><span>MORE CLARITY</span><span>ROOM TO GROW</span></div>
      </div>
    </section>

    <section className="pitch-case platform-page-wrap" id="case">
      <Reveal><p className="eyebrow">02 — THE OPPORTUNITY</p><div className="pitch-section-heading"><h2>Business is hard enough.<br/><em>The basics should flow.</em></h2><p>Behind every sale is a person managing details, solving problems, and keeping customers happy. SELLSPACE is being designed to make that everyday work feel more connected and manageable.</p></div></Reveal>
      <div className="pitch-problem-grid">{problems.map((item,i)=><Reveal key={item.n} delay={i*.07}><article className="pitch-problem-card"><span>{item.n} / THE FRICTION</span><h3>{item.title}</h3><p>{item.body}</p></article></Reveal>)}</div>
    </section>

    <section className="pitch-solution">
      <div className="platform-page-wrap">
        <Reveal><p className="eyebrow light-eyebrow">03 — OUR APPROACH</p><div className="pitch-section-heading light"><h2>Not another layer<br/>of complexity. <em>A better foundation.</em></h2><p>SELLSPACE aims to give everyday commerce a more considered home—starting with the essential workflows and improving them with intention.</p></div></Reveal>
        <div className="pitch-advantage-grid">{advantages.map((item,i)=>{const Icon=item.icon;return <Reveal key={item.title} delay={i*.06}><article className="pitch-advantage"><span className="pitch-advantage-icon"><Icon size={20}/></span><span className="pitch-advantage-no">0{i+1}</span><h3>{item.title}</h3><p>{item.body}</p></article></Reveal>;})}</div>
      </div>
    </section>

    <section className="pitch-difference platform-page-wrap">
      <Reveal><p className="eyebrow">04 — WHY SELLSPACE</p><div className="pitch-difference-grid"><h2>Make the everyday<br/><em>feel extraordinary.</em></h2><div><p className="pitch-difference-lead">Our edge starts with what we choose not to do.</p><ul className="pitch-difference-list"><li><Check size={17}/> Not complexity for complexity’s sake.</li><li><Check size={17}/> Not a feature list without a clear purpose.</li><li><Check size={17}/> Not growth claims before the work is proven.</li><li><Check size={17}/> A focused platform, shaped by real seller needs.</li></ul><p className="pitch-difference-note">We know the vision must be earned. Our next step is to validate the most useful workflows with the people who would use them, then build and improve from what we learn.</p></div></div></Reveal>
      <div className="pitch-principle-strip"><span>THE SELLSPACE PRINCIPLE</span><strong>Make it useful. Make it intuitive. Make it matter.</strong><ArrowUpRight size={20}/></div>
    </section>

    <section className="pitch-stage">
      <div className="platform-page-wrap pitch-stage-grid">
        <Reveal><p className="eyebrow light-eyebrow">05 — WHERE WE ARE</p><h2>A bold vision.<br/><em>Built one real step at a time.</em></h2></Reveal>
        <Reveal delay={0.1}><div className="pitch-stage-copy"><p>SELLSPACE is an early-stage platform vision. We’re working toward a more connected commerce experience, and the concepts on this page illustrate that direction—not a promise that every pictured capability is already live.</p><div className="pitch-stage-steps"><div><span>01</span><b>Listen</b><small>Understand everyday seller challenges.</small></div><div><span>02</span><b>Validate</b><small>Test which workflows matter most.</small></div><div><span>03</span><b>Build</b><small>Deliver with focus and earn trust.</small></div></div><Link className="pitch-stage-link" href="/#journey">Follow our journey <ArrowUpRight size={16}/></Link></div></Reveal>
      </div>
    </section>

    <section className="pitch-ask platform-page-wrap">
      <Reveal><p className="eyebrow">06 — THE INVITATION</p><div className="pitch-ask-panel"><div><span className="pitch-ask-label"><Handshake size={15}/> OPEN TO THE RIGHT CONVERSATIONS</span><h2>Help shape what<br/><em>commerce becomes.</em></h2><p>We’re looking to connect with thoughtful partners, prospective users, and people who see the potential in making everyday business simpler.</p></div><div className="pitch-ask-actions"><Link className="platform-page-cta dark" href="/#contact">Let’s talk SELLSPACE <ArrowUpRight size={17}/></Link><Link className="pitch-ask-secondary" href="/#partners">See partnership opportunities <ArrowRight size={15}/></Link></div></div></Reveal>
    </section>
    <footer className="platform-page-footer platform-page-wrap"><Link className="platform-page-footer-brand" href="/">SELLSPACE <span>COMMERCE, SIMPLIFIED</span></Link><Link href="/policies">Trust & policies <ArrowUpRight size={15}/></Link><Link href="/">Return to homepage <ArrowUpRight size={15}/></Link></footer>
  </main>;
}
