import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Compass, HeartHandshake, Layers3, Target } from 'lucide-react';
import { Header } from '@/components/header';
import { Reveal } from '@/components/reveal';
import { company } from '@/content/company';

export const metadata: Metadata = {
  title: 'About SELLSPACE',
  description: 'What SELLSPACE is, who it is for, and the principles behind our everyday commerce platform.',
};

const topics = [
  {
    id: 'what-is-sellspace',
    n: '01',
    title: 'What is SELLSPACE?',
    body: 'SELLSPACE is being developed as a modern digital commerce experience designed to help people discover products and help sellers manage the everyday work behind their businesses. We want the experience to feel clear, connected, and practical—not complicated for the sake of complexity.',
    icon: Layers3,
  },
  {
    id: 'company',
    n: '02',
    title: 'Our mission, vision & principles',
    body: 'Our mission is to make everyday commerce simpler through clear, useful digital experiences. Our vision is a world where starting, managing, and growing through commerce feels more accessible to everyone. We believe useful beats impressive, simplicity should still be capable, and product decisions should start with real needs.',
    icon: Target,
  },
  {
    id: 'who-its-for',
    n: '03',
    title: 'Who it’s for',
    body: 'We are shaping SELLSPACE with everyday sellers and buyers in mind—especially people and small businesses who need essential commerce tasks to feel easier to understand and manage. The experience should help buyers find useful products while giving sellers a clearer view of their work.',
    icon: HeartHandshake,
  },
  {
    id: 'business-theory',
    n: '04',
    title: 'Our business theory',
    body: 'Our working theory is simple: if discovery is clearer for buyers and daily operations are easier for sellers, commerce can feel more approachable on both sides. We intend to test that theory through real conversations, product experiments, and feedback before treating it as proven.',
    icon: Compass,
  },
];

export default function AboutPage() {
  return (
    <main className="topic-page" id="top">
      <Header />
      <section className="topic-hero section-wrap">
        <Link href="/" className="policy-back">
          <ArrowLeft size={15} /> Back to homepage
        </Link>
        <p className="eyebrow">SELLSPACE / ABOUT THE COMPANY</p>
        <h1>Everyday commerce,<br /><em>made more human.</em></h1>
        <p className="topic-lead">The idea, the people we want to serve, and the principles guiding what we build.</p>
      </section>

      <section className="topic-sections section-wrap">
        {topics.map((topic) => {
          const Icon = topic.icon;
          return (
            <Reveal key={topic.id}>
              <article id={topic.id} className="topic-card">
                <div className="topic-card-index">{topic.n} / THE IDEA</div>
                <div className="topic-card-main">
                  <span className="topic-icon"><Icon size={20} /></span>
                  <h2>{topic.title}</h2>
                  <p>{topic.body}</p>
                  {topic.id === 'company' && (
                    <div className="topic-mvv">
                      <div><small>MISSION</small><p>{company.mission}</p></div>
                      <div><small>VISION</small><p>{company.vision}</p></div>
                      {company.values.map((value) => (
                        <div key={value.number}>
                          <small>PRINCIPLE {value.number}</small>
                          <p><b>{value.title}</b> {value.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <a href="#top" className="topic-card-link" aria-label={`Back to top from ${topic.title}`}>
                  <ArrowUpRight size={18} />
                </a>
              </article>
            </Reveal>
          );
        })}
      </section>

      <section className="topic-end">
        <div className="section-wrap">
          <p className="eyebrow">CONTINUE EXPLORING</p>
          <h2>Ideas become real<br />through <em>the work.</em></h2>
          <div className="topic-end-links">
            <Link href="/journey">Our journey <ArrowUpRight size={15} /></Link>
            <Link href="/platform">Explore the platform <ArrowUpRight size={15} /></Link>
            <Link href="/partners">Build with us <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
