import { ArrowLeft, ArrowRight, ArrowUpRight, Bell, Check, ChevronRight, CircleHelp, ClipboardList, Package, Search, ShoppingBag, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Reveal } from '@/components/reveal';

const attention = [
  { id: 'SS-2084', title: 'Confirm payment', detail: 'Mika Home · ₱1,280', tag: 'Needs review', tone: 'amber' },
  { id: 'SS-2081', title: 'Prepare order', detail: 'Daily Goods · 3 items', tag: 'To process', tone: 'green' },
  { id: 'SS-2079', title: 'Update stock count', detail: 'Canvas Tote · Low stock', tag: 'Product', tone: 'neutral' },
];

const orders = [
  { id: '#SS-2084', customer: 'Mika Home', amount: '₱1,280', status: 'Needs review', tone: 'amber' },
  { id: '#SS-2083', customer: 'Studio Sunday', amount: '₱860', status: 'Processing', tone: 'green' },
  { id: '#SS-2082', customer: 'Daily Goods', amount: '₱2,140', status: 'Ready to ship', tone: 'blue' },
];

export default function SellerWorkspacePage() {
  return <main id="top" className="seller-preview-page">
    <Header />
    <section className="seller-preview-hero">
      <div className="seller-preview-wrap">
        <Reveal><Link className="seller-preview-back" href="/"><ArrowLeft size={15}/> Back to SELLSPACE</Link></Reveal>
        <div className="seller-preview-hero-grid">
          <div className="seller-preview-copy">
            <Reveal><p className="eyebrow"><span className="seller-preview-dot"/> SELLER WORKSPACE / PRODUCT PREVIEW</p></Reveal>
            <Reveal delay={0.06}><h1>See what matters.<br/>Keep business <em>moving.</em></h1></Reveal>
            <Reveal delay={0.12}><p className="seller-preview-lead">A clearer way to see what needs attention, keep orders moving, and manage products—without fighting a patchwork of tools.</p></Reveal>
            <Reveal delay={0.17}><div className="seller-preview-actions"><a className="seller-preview-primary" href="#workspace">Explore the workspace <ArrowRight size={16}/></a><Link className="seller-preview-secondary" href="/#contact">Talk with us <ArrowUpRight size={15}/></Link></div></Reveal>
            <Reveal delay={0.22}><div className="seller-preview-trust"><span><Check size={14}/> Focused on everyday seller tasks</span><span><CircleHelp size={14}/> Early product direction</span></div></Reveal>
          </div>
          <Reveal className="seller-preview-art" delay={0.12}>
            <div className="seller-preview-halo"/>
            <div className="seller-preview-desktop">
              <div className="sp-window-bar"><span className="sp-window-dots"><i/><i/><i/></span><span>SELLSPACE / WORKSPACE CONCEPT</span><span className="sp-window-status">ILLUSTRATIVE</span></div>
              <div className="sp-workspace">
                <aside className="sp-sidebar"><div className="sp-mini-brand"><span>S</span> SELLSPACE</div><small>WORKSPACE</small><span className="selected"><ShoppingBag size={13}/> Overview</span><span><ClipboardList size={13}/> Orders</span><span><Package size={13}/> Products</span><div className="sp-sidebar-bottom">YOUR BUSINESS, IN VIEW</div></aside>
                <div className="sp-main">
                  <div className="sp-welcome"><div><small>MONDAY · YOUR WORKSPACE</small><h3>Good morning.</h3><p>Here’s what could use your attention.</p></div><span className="sp-search"><Search size={12}/> Search</span></div>
                  <div className="sp-summary"><div><small>NEEDS ATTENTION</small><b>03</b><span>Items to review</span></div><div><small>OPEN ORDERS</small><b>18</b><span>Across your workflow</span></div><div><small>PRODUCTS</small><b>64</b><span>In your catalog</span></div></div>
                  <div className="sp-list-head"><b>Priority queue</b><span>VIEW ALL ↗</span></div>
                  {attention.map((item) => <div className="sp-attention-row" key={item.id}><span className={'sp-attention-icon ' + item.tone}><Bell size={13}/></span><span className="sp-attention-text"><b>{item.title}</b><small>{item.detail}</small></span><span className={'sp-pill ' + item.tone}>{item.tag}</span><ChevronRight size={14}/></div>)}
                </div>
              </div>
            </div>
            <div className="sp-float-note"><span className="sp-float-note-icon"><Sparkles size={15}/></span><span><b>Clear next steps</b><small>Less searching. More doing.</small></span><span className="sp-note-check"><Check size={12}/></span></div>
            <div className="sp-art-caption">SELLSPACE / WORKSPACE CONCEPT · NOT LIVE PRODUCT UI</div>
          </Reveal>
        </div>
        <div className="seller-preview-footline"><span>01 / SEE WHAT NEEDS ATTENTION</span><span>02 / KEEP ORDERS MOVING</span><span>03 / MANAGE PRODUCTS</span></div>
      </div>
    </section>

    <section id="workspace" className="seller-preview-workspace seller-preview-wrap">
      <Reveal><p className="eyebrow">01 / SELLER VIEW · DAILY OPERATIONS</p><div className="seller-preview-section-head"><h2>One considered space<br/>for the <em>everyday work.</em></h2><p>For sellers: a practical home for priorities, orders, and products. This illustrative workspace shows the direction we’re exploring—not a claim that every screen or workflow is already available.</p></div></Reveal>
      <div className="seller-preview-showcase">
        <Reveal className="seller-preview-board">
          <div className="sp-board-top"><span>SELLSPACE / DAILY OPERATIONS</span><span>CONCEPT 02</span></div>
          <div className="sp-board-heading"><div><small>YOUR BUSINESS AT A GLANCE</small><h3>Keep the day in motion.</h3></div><span className="sp-date-chip">Today⌄</span></div>
          <div className="sp-board-stats"><div><span>Needs attention</span><b>03 <i>items</i></b><small>Start with what matters most</small></div><div><span>Orders in progress</span><b>18 <i>orders</i></b><small>See the next step at a glance</small></div><div><span>Product catalog</span><b>64 <i>products</i></b><small>Keep essentials organized</small></div></div>
          <div className="sp-orders-title"><b>Order flow</b><span>Illustrative sample data</span></div>
          <div className="sp-orders-table"><div className="sp-order-head"><span>ORDER</span><span>CUSTOMER</span><span>AMOUNT</span><span>STATUS</span></div>{orders.map(order=><div className="sp-order-line" key={order.id}><b>{order.id}</b><span>{order.customer}</span><strong>{order.amount}</strong><span className={'sp-pill ' + order.tone}>{order.status}</span></div>)}</div>
          <div className="sp-board-bottom"><span><i/> WORKSPACE CONCEPT</span><span>DESIGNED AROUND THE WORK <ArrowUpRight size={13}/></span></div>
        </Reveal>
        <Reveal className="seller-phone-stage" delay={0.12}>
          <div className="seller-phone-orbit seller-phone-orbit-one"/><div className="seller-phone-orbit seller-phone-orbit-two"/>
          <div className="seller-phone-label"><span>SELLER VIEW / MOBILE</span><b>Your shop, wherever<br/>the day takes you.</b><p>Quick visibility into orders and tasks that may need attention.</p></div>
          <div className="seller-phone">
            <div className="seller-phone-island"/>
            <div className="seller-phone-screen">
              <div className="seller-phone-status"><span>9:41</span><span>••• ▰</span></div>
              <div className="seller-phone-brand"><span className="seller-phone-mark">S</span><span>SELLSPACE<small>YOUR BUSINESS SPACE</small></span><Bell size={15}/></div>
              <div className="seller-phone-greeting"><small>MONDAY, OCTOBER 20</small><h3>Good morning.</h3><p>Let’s keep things moving.</p></div>
              <div className="seller-phone-attention"><span className="phone-section-label">NEEDS YOUR ATTENTION <i>03</i></span><div><span className="phone-task-icon amber"><Bell size={12}/></span><span><b>Payment to confirm</b><small>Order #SS-2084</small></span><ChevronRight size={13}/></div><div><span className="phone-task-icon green"><Package size={12}/></span><span><b>Stock running low</b><small>Canvas Tote</small></span><ChevronRight size={13}/></div></div>
              <div className="seller-phone-orders"><span className="phone-section-label">RECENT ORDERS <i>VIEW ALL ↗</i></span><div><span className="phone-order-avatar">MH</span><span><b>Mika Home</b><small>#SS-2084 · 2 items</small></span><strong>₱1,280</strong></div><div><span className="phone-order-avatar alt">SS</span><span><b>Studio Sunday</b><small>#SS-2083 · 1 item</small></span><strong>₱860</strong></div></div>
              <div className="seller-phone-nav"><span className="active"><ShoppingBag size={14}/>Home</span><span><ClipboardList size={14}/>Orders</span><span><Package size={14}/>Products</span><span><CircleHelp size={14}/>More</span></div>
            </div>
          </div>
          <div className="seller-phone-float"><span><Check size={13}/></span><b>Designed for the day-to-day.</b></div>
          <p className="seller-phone-disclaimer">MOBILE UI CONCEPT · ILLUSTRATIVE ONLY</p>
        </Reveal>
      </div>
    </section>

    
    <section className="buyer-preview-section">
      <div className="seller-preview-wrap">
        <Reveal><p className="eyebrow">02 / BUYER VIEW · DISCOVERY + SHOPPING</p><div className="buyer-preview-heading"><div><h2>Find your next<br/><em>everyday favorite.</em></h2></div><p>For buyers: a more inviting way to discover products, browse a marketplace, explore short-form product videos, and move through checkout. This direction follows the mobile app reference you shared.</p></div></Reveal>
        <div className="buyer-preview-grid">
          <Reveal className="buyer-preview-copy">
            <span className="buyer-preview-kicker">THE SHOPPING SIDE</span>
            <h3>Made for the people<br/>on the other side<br/>of every order.</h3>
            <p>SELLSPACE is being shaped around both sides of commerce. Buyers should have a clear path from discovery to product details and checkout—without losing the simple, everyday feel.</p>
            <div className="buyer-preview-features"><span><i>01</i><b>Explore products</b><small>Browse a marketplace and product picks.</small></span><span><i>02</i><b>Discover through video</b><small>A Shorts-style feed for product discovery.</small></span><span><i>03</i><b>Shop with clarity</b><small>Product details and a focused checkout flow.</small></span></div>
            <p className="buyer-preview-disclaimer">BUYER MOBILE UI CONCEPT · ILLUSTRATIVE ONLY</p>
          </Reveal>
          <Reveal className="buyer-phone-stage" delay={0.12}>
            <div className="buyer-phone-orbit buyer-phone-orbit-one"/><div className="buyer-phone-orbit buyer-phone-orbit-two"/>
            <div className="buyer-phone">
              <div className="buyer-phone-island"/>
              <div className="buyer-phone-screen">
                <div className="buyer-phone-status"><span>9:41</span><span>••• ▰</span></div>
                <div className="buyer-phone-top"><span className="buyer-phone-brandmark">S</span><b>SELLSPACE<small>YOUR SPACE.</small></b><span className="buyer-phone-bag"><ShoppingBag size={15}/></span></div>
                <div className="buyer-phone-search"><Search size={12}/><span>Search products, shops...</span><span className="buyer-search-filter">☷</span></div>
                <div className="buyer-phone-market"><div><small>MARKETPLACE</small><h4>Good finds.<br/><em>Better shopping.</em></h4><p>Discover something useful.</p></div><span className="buyer-market-flower">✳</span></div>
                <div className="buyer-phone-cats"><span className="chosen">For you</span><span>Fashion</span><span>Home</span><span>Tech</span></div>
                <div className="buyer-phone-picks"><div className="buyer-phone-section-title"><b>Picked for you</b><span>SEE ALL ↗</span></div><div className="buyer-product-grid"><div className="buyer-product"><div className="buyer-product-image tote"><span>SS</span><ShoppingBag size={26}/></div><b>Everyday Tote Bag</b><strong>₱499</strong><small>Everyday Goods</small></div><div className="buyer-product"><div className="buyer-product-image bottle"><span>NEW</span><Package size={25}/></div><b>Daily Bottle</b><strong>₱350</strong><small>Good Things Co.</small></div></div></div>
                <div className="buyer-phone-nav"><span className="active"><ShoppingBag size={14}/>Home</span><span><Search size={14}/>Explore</span><span className="buyer-shorts">▶<small>Shorts</small></span><span><CircleHelp size={14}/>Profile</span></div>
              </div>
            </div>
            <div className="buyer-phone-float"><span><Check size={13}/></span><b>Discover. Decide. Done.</b></div>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="seller-preview-principles">
      <div className="seller-preview-wrap"><Reveal><p className="eyebrow light-eyebrow">BUILT AROUND THREE EVERYDAY NEEDS</p><div className="seller-preview-principle-grid"><article><span>01 / ATTENTION</span><h3>Know where to start.</h3><p>Surface the items that may need a decision, follow-up, or next step.</p></article><article><span>02 / ORDERS</span><h3>Keep things moving.</h3><p>Make order status and progress easier to follow from one view to the next.</p></article><article><span>03 / PRODUCTS</span><h3>Stay in control.</h3><p>Keep products and basic catalog work organized without adding unnecessary friction.</p></article></div></Reveal></div>
    </section>

    <section className="seller-preview-end seller-preview-wrap"><Reveal><p className="eyebrow">THE NEXT STEP</p><div><h2>Useful by design.<br/><em>Shaped by real sellers.</em></h2><p>We’re developing SELLSPACE with a focus on everyday business needs. We want to learn from sellers, test the right workflows, and earn the right to build more.</p><Link className="seller-preview-primary" href="/#contact">Help shape SELLSPACE <ArrowUpRight size={16}/></Link></div></Reveal></section>
    <footer className="seller-preview-footer seller-preview-wrap"><Link href="/" className="seller-preview-footer-brand">SELLSPACE <span>COMMERCE, SIMPLIFIED</span></Link><span>ILLUSTRATIVE PRODUCT DIRECTION</span><Link href="/platform">Read the broader platform thesis <ArrowRight size={14}/></Link></footer>
  </main>;
}
