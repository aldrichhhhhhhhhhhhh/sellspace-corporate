import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Compass, Flag, Lightbulb, Users, Target, Clapperboard, Code2, Palette, Package, Megaphone } from 'lucide-react';
import { Header } from '@/components/header';
import { Reveal } from '@/components/reveal';
import { roadmap } from '@/content/roadmap';

export const metadata: Metadata = {
  title: 'Our Journey | SELLSPACE',
  description: 'Meet the people, principles, and evolving roadmap behind SELLSPACE.',
};

const team = [
  {
    name: 'Gino Gambino Cabello',
    role: 'Chief Marketing Officer',
    shortRole: 'CMO',
    initials: 'GC',
    number: '01',
    icon: Megaphone,
    color: 'mint',
    intro: 'Shapes how SELLSPACE is positioned, understood, and introduced to the people it aims to serve.',
    responsibilities: ['Develop marketing direction, brand positioning, and go-to-market plans.', 'Understand target audiences and communicate their needs to the team.', 'Plan campaigns, outreach, and early community-building activities.', 'Track marketing experiments and share learnings that can improve our approach.'],
  },
  {
    name: 'Brent Kherwin Utlang Shi',
    role: 'Chief Content Officer',
    shortRole: 'CCO · CONTENT',
    initials: 'BS',
    number: '02',
    icon: Clapperboard,
    color: 'sand',
    intro: 'Leads the content direction and makes the SELLSPACE story clear, consistent, and useful.',
    responsibilities: ['Set content strategy and editorial standards across company channels.', 'Develop messaging, storytelling, and content plans for product and brand updates.', 'Coordinate content calendars and keep public communication consistent.', 'Help translate product ideas into clear explanations for buyers, sellers, and partners.'],
  },
  {
    name: 'Karl Aldrich Uy',
    role: 'Chief Technology Officer',
    shortRole: 'CTO',
    initials: 'KU',
    number: '03',
    icon: Code2,
    color: 'dark',
    intro: 'Owns technical direction and engineering decisions behind the SELLSPACE digital experience.',
    responsibilities: ['Lead technical architecture, implementation, and engineering priorities.', 'Maintain code quality, reliability, security-minded practices, and deployment workflows.', 'Turn product requirements into feasible technical plans and working software.', 'Evaluate tools and technical trade-offs while keeping the corporate website and mobile app workstreams distinct.'],
  },
  {
    name: 'Barachiel Belgar',
    role: 'Chief Creative Officer',
    shortRole: 'CCO · CREATIVE',
    initials: 'BB',
    number: '04',
    icon: Palette,
    color: 'lilac',
    intro: 'Guides creative direction so the brand and product experience feel distinctive, coherent, and human.',
    responsibilities: ['Shape visual identity, creative concepts, and the overall brand expression.', 'Help establish design principles for visual consistency across touchpoints.', 'Collaborate on campaign concepts, storytelling visuals, and creative assets.', 'Review creative work for clarity, originality, accessibility, and fit with the brand.'],
  },
  {
    name: 'Eduardo Gabriel Baquir',
    role: 'Chief Product Officer',
    shortRole: 'CPO',
    initials: 'EB',
    number: '05',
    icon: Package,
    color: 'blue',
    intro: 'Connects user needs, product priorities, and delivery into a clear product direction.',
    responsibilities: ['Define product priorities around real buyer and seller problems.', 'Translate feedback and research into product requirements and user journeys.', 'Coordinate the product roadmap, scope, and trade-offs with the team.', 'Help validate concepts with users and assess whether proposed features solve meaningful problems.'],
  },
];

export default function JourneyPage() {
  return (
    <main className="topic-page journey-page" id="top">
      <Header />
      <section className="journey-masthead">
        <div className="section-wrap journey-masthead-grid">
          <div className="journey-masthead-copy">
            <Link href="/" className="policy-back"><ArrowLeft size={15} /> Back to homepage</Link>
            <p className="eyebrow"><span className="journey-live-dot" /> SELLSPACE / OUR JOURNEY</p>
            <h1>Built by people.<br /><em>Moved by possibility.</em></h1>
            <p className="topic-lead">Every meaningful company starts with a question, a team willing to work on it, and the discipline to learn as they go. This is our story in progress.</p>
            <div className="journey-masthead-actions">
              <Link href="#people" className="journey-action-primary">Meet the team <ArrowUpRight size={16} /></Link>
              <Link href="#roadmap" className="journey-action-secondary">Explore the roadmap <span>↓</span></Link>
            </div>
          </div>
          <div className="journey-orbit-stage" aria-label="Abstract animated illustration representing the SELLSPACE team and journey">
            <div className="journey-orbit orbit-a" />
            <div className="journey-orbit orbit-b" />
            <div className="journey-orbit orbit-c" />
            <div className="journey-stage-label stage-label-top">A WORK IN PROGRESS <span>●</span></div>
            <div className="journey-stage-core"><span className="journey-core-mark">S</span><small>SELLSPACE</small><b>Everyday<br />commerce.</b></div>
            <div className="journey-float-card float-card-one"><span className="float-card-icon"><Lightbulb size={15} /></span><div><small>THE IDEA</small><b>Make it simpler</b></div></div>
            <div className="journey-float-card float-card-two"><span className="float-card-icon"><Users size={15} /></span><div><small>THE PEOPLE</small><b>Build together</b></div></div>
            <div className="journey-float-card float-card-three"><span className="float-card-icon"><Flag size={15} /></span><div><small>THE DIRECTION</small><b>Earn the next step</b></div></div>
            <div className="journey-stage-label stage-label-bottom">01 — INTENTION <span>02 — EXECUTION</span></div>
          </div>
        </div>
        <div className="journey-masthead-bottom section-wrap"><span>AN EARLY-STAGE COMMERCE INITIATIVE</span><span>INTENTION → EXPERIMENT → LEARNING</span></div>
      </section>

      <section className="journey-story-section section-wrap">
        <div className="journey-section-heading">
          <div><p className="eyebrow">01 / THE STORY</p><h2>A practical question.<br /><em>A bigger possibility.</em></h2></div>
          <p>Can everyday commerce feel simpler for the people doing the work? SELLSPACE is being developed around that question—exploring how product discovery and seller operations might feel clearer, more connected, and easier to manage.</p>
        </div>
        <div className="journey-story-cards">
          <Reveal><article className="journey-story-card"><span>01</span><Lightbulb size={20} /><h3>Start with the friction</h3><p>Look closely at the everyday tasks that waste time, create confusion, or make commerce harder than it needs to be.</p></article></Reveal>
          <Reveal><article className="journey-story-card"><span>02</span><Target size={20} /><h3>Build for real needs</h3><p>Prioritize clear workflows and useful experiences over complexity for complexity’s sake.</p></article></Reveal>
          <Reveal><article className="journey-story-card"><span>03</span><Compass size={20} /><h3>Learn before claiming</h3><p>Use conversations, experiments, and feedback to decide what deserves to be built next.</p></article></Reveal>
        </div>
      </section>

      <section className="journey-team-section" id="people">
        <div className="section-wrap">
          <div className="journey-section-heading journey-team-heading">
            <div><p className="eyebrow">02 / THE PEOPLE</p><h2>The people behind<br /><em>SELLSPACE.</em></h2></div>
            <p>A team is more than a list of titles. It is a set of responsibilities, decisions, and people doing the work together. Here’s how each leadership role contributes to the direction of SELLSPACE.</p>
          </div>
          <div className="journey-team-note"><span className="journey-team-note-mark">i</span><p>Responsibilities below describe the intended scope of each role and may evolve as the company and team develop.</p></div>
          <div className="journey-team-grid">
            {team.map((member) => {
              const Icon = member.icon;
              return (
                <Reveal key={member.number}>
                  <article className={`journey-person-card person-${member.color}`}>
                    <div className="journey-person-top"><span className="journey-person-number">{member.number} / LEADERSHIP</span><span className="journey-person-icon"><Icon size={17} /></span></div>
                    <div className="journey-person-avatar" aria-hidden="true"><span>{member.initials}</span><i /><b /></div>
                    <p className="journey-person-role">{member.shortRole} <span>·</span> {member.role}</p>
                    <h3>{member.name}</h3>
                    <p className="journey-person-intro">{member.intro}</p>
                    <div className="journey-person-divider" />
                    <p className="journey-person-responsibility-label">KEY RESPONSIBILITIES</p>
                    <ul>{member.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="journey-roadmap-section section-wrap" id="roadmap">
        <div className="journey-section-heading">
          <div><p className="eyebrow">03 / THE ROAD AHEAD</p><h2>Milestones, not<br /><em>made-up deadlines.</em></h2></div>
          <p>These are planning themes, not promises of launch dates or claims that milestones are complete. We’ll adapt as we learn more about user needs, team capacity, and what we can reliably deliver.</p>
        </div>
        <div className="journey-roadmap">
          <div className="journey-roadmap-rail"><span>NOW</span><i /><span>NEXT</span><i /><span>THEN</span><i /><span>FUTURE</span></div>
          <div className="journey-roadmap-items">
            {roadmap.map((item, i) => (
              <Reveal key={item.phase}>
                <article className="journey-roadmap-row">
                  <div className="journey-roadmap-phase">{item.phase || String(i + 1).padStart(2, '0')}</div>
                  <div className="journey-roadmap-copy"><span>{item.status}</span><h3>{item.title}</h3><p>{item.body}</p></div>
                  <div className="journey-roadmap-symbol" aria-hidden="true">{i === 0 ? '↗' : i === 1 ? '✳' : i === 2 ? '◎' : '✦'}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-future-section">
        <div className="section-wrap journey-future-grid">
          <div><p className="eyebrow">04 / WHAT THE FUTURE HOLDS</p><h2>Grow with purpose.<br /><em>Not just features.</em></h2></div>
          <div className="journey-future-copy"><p>Our longer-term direction is to make everyday commerce more connected: better ways to discover products, clearer seller operations, and thoughtful tools that help businesses make progress.</p><p>The future should be shaped by evidence, not assumptions. We intend to listen, test, improve, and expand only when a capability has a clear reason to exist.</p><Link href="/platform" className="journey-action-primary">Explore the platform <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      <section className="journey-theory-section section-wrap" id="business-theory">
        <div className="journey-theory-mark"><Package size={23} /></div>
        <div><p className="eyebrow">05 / OUR BUSINESS THEORY</p><h2>Better discovery.<br /><em>Clearer daily work.</em></h2><p>Our working theory is that commerce improves when buyers can discover products with confidence and sellers can manage the work behind each order without unnecessary complexity. We treat this as a hypothesis to test with people—not a result to claim before evidence.</p><Link href="/partners#small-business-support" className="text-link">Build the next chapter with us <ArrowUpRight size={15} /></Link></div>
      </section>

      <section className="topic-end journey-end">
        <div className="section-wrap"><p className="eyebrow">THE NEXT CHAPTER ISN’T WRITTEN YET</p><h2>Good ideas move forward<br />when <em>people build together.</em></h2><p className="topic-end-copy">Have a perspective, a question, or an interest in working with us? We’d like to hear from you.</p><div className="topic-end-links"><Link href="/partners">Partner with SELLSPACE <ArrowUpRight size={15} /></Link><Link href="/about">Learn about the company <ArrowUpRight size={15} /></Link><Link href="/#contact">Get in touch <ArrowUpRight size={15} /></Link></div></div>
      </section>
    </main>
  );
}
