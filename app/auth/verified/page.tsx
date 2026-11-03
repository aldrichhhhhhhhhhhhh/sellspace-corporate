type VerificationPageProps = {
  searchParams: Promise<{
    error?: string;
    error_code?: string;
    error_description?: string;
  }>;
};

export const metadata = {
  title: 'Welcome to SELLSPACE',
  description: 'Your SELLSPACE email verification and getting-started guide.',
  robots: { index: false, follow: false },
};

export default async function VerificationPage({ searchParams }: VerificationPageProps) {
  const params = await searchParams;
  const hasError = Boolean(params.error || params.error_code || params.error_description);

  return (
    <>
      <style>{`
        .verification-page {
          --emerald: #087f68;
          --dark: #101c19;
          --text: #24332e;
          --muted: #718078;
          --surface: #ffffff;
          --background: #f4f7f5;
          min-height: 100vh;
          background: var(--background);
          color: var(--text);
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          line-height: 1.6;
        }
        .verification-page * { box-sizing: border-box; }
        .verification-container { width: min(100% - 32px, 960px); margin: 24px auto 60px; }
        .confirmation { background: var(--dark); color: white; border-radius: 24px; padding: 38px 20px 22px; text-align: center; }
        .checkmark { width: 70px; height: 70px; margin: 0 auto 12px; border-radius: 50%; background: var(--emerald); display: grid; place-items: center; font-size: 38px; }
        .checkmark.error { background: #a34e3e; }
        .confirmation h1 { font-size: clamp(23px, 4vw, 30px); margin: 0 0 8px; }
        .confirmation p { color: #b5c7bf; margin: 0; }
        .confirmation-divider { height: 1px; background: #35483f; margin: 22px 0; }
        .confirmation h2 { font-size: 21px; margin: 0 0 10px; }
        .footer-note { font-size: 13px; color: #91a69e; margin-top: 30px; }
        .verification-section { padding: 55px 12px 15px; }
        .verification-eyebrow { color: var(--emerald); font-size: 12px; font-weight: 800; letter-spacing: 2px; margin-bottom: 10px; }
        .verification-section h2 { font-size: clamp(25px, 4vw, 34px); letter-spacing: -1px; margin: 0 0 14px; color: var(--dark); }
        .section-description { color: var(--muted); max-width: 680px; margin: 0; }
        .verification-cards, .role-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 25px; }
        .verification-card { background: var(--surface); border: 1px solid #e6ece8; border-radius: 18px; padding: 25px; }
        .card-number { color: var(--emerald); font-size: 13px; font-weight: 800; margin-bottom: 12px; }
        .verification-card h3 { color: var(--dark); font-size: 19px; margin: 0 0 8px; }
        .verification-card p, .role p { color: var(--muted); font-size: 14px; margin: 0; }
        .role { padding: 24px; border-radius: 18px; background: white; border: 1px solid #e6ece8; }
        .role h3 { color: var(--emerald); margin: 0 0 8px; }
        .visit { margin-top: 55px; padding: 38px 24px; border-radius: 22px; background: var(--dark); color: white; text-align: center; }
        .visit h2 { font-size: 27px; margin: 0 0 10px; color: white; }
        .visit p { color: #b5c7bf; margin: 0 0 18px; }
        .visit a { color: #65d3b4; font-weight: 700; text-decoration: none; overflow-wrap: anywhere; }
        .visit a:hover { text-decoration: underline; }
        .verification-footer { padding: 35px 10px 10px; text-align: center; color: #84948c; font-size: 13px; }
        .verification-footer p { margin: 4px 0; }
        @media (max-width: 620px) {
          .verification-cards, .role-list { grid-template-columns: 1fr; }
          .confirmation { padding: 32px 16px 20px; }
          .verification-section { padding-top: 42px; }
        }
      `}
      </style>

      <main className="verification-page">
        <div className="verification-container">
          <section className="confirmation" aria-live="polite">
            <div className={'checkmark' + (hasError ? ' error' : '')} aria-hidden="true">
              {hasError ? '!' : '✓'}
            </div>

            <h1>{hasError ? 'Email verification could not be completed.' : 'Email confirmed and verified.'}</h1>
            <p>
              {hasError
                ? 'This verification link may have expired or already been used. Please return to SELLSPACE and request a new verification email.'
                : 'Your email address has been successfully verified.'}
            </p>

            <div className="confirmation-divider" />
            <h2>{hasError ? 'Let’s get you back on track.' : 'Welcome to SELLSPACE.'}</h2>
            <p>
              {hasError
                ? 'You can try again by requesting a fresh confirmation email.'
                : 'Please continue to sign in to SELLSPACE.'}
            </p>
            <div className="footer-note">SELLSPACE · A better space to buy, sell, and grow.</div>
          </section>

          <section className="verification-section">
            <div className="verification-eyebrow">GET TO KNOW US</div>
            <h2>What is SELLSPACE?</h2>
            <p className="section-description">
              SELLSPACE is an e-commerce marketplace designed to bring
              buyers and sellers together in one accessible space.
              Discover products, explore opportunities, and build your
              business through a simpler marketplace experience.
            </p>
          </section>

          <section className="verification-section">
            <div className="verification-eyebrow">YOUR NEXT STEPS</div>
            <h2>Getting started</h2>
            <p className="section-description">
              Your SELLSPACE journey starts here. Get familiar with
              the marketplace and make the most of your account.
            </p>
            <div className="verification-cards">
              <article className="verification-card">
                <div className="card-number">01 / EXPLORE</div>
                <h3>Discover the marketplace</h3>
                <p>Browse available products, discover new sellers, and explore what the marketplace has to offer.</p>
              </article>
              <article className="verification-card">
                <div className="card-number">02 / PERSONALIZE</div>
                <h3>Set up your account</h3>
                <p>Complete your profile and prepare your account for your buying or selling journey.</p>
              </article>
              <article className="verification-card">
                <div className="card-number">03 / CONNECT</div>
                <h3>Start engaging</h3>
                <p>Find products that interest you or introduce your own products to potential customers.</p>
              </article>
              <article className="verification-card">
                <div className="card-number">04 / GROW</div>
                <h3>Make things happen</h3>
                <p>Build connections, discover opportunities, and grow with the SELLSPACE community.</p>
              </article>
            </div>
          </section>

          <section className="verification-section">
            <div className="verification-eyebrow">ONE MARKETPLACE. TWO ROLES.</div>
            <h2>How will you use SELLSPACE?</h2>
            <p className="section-description">
              Whether you're looking for something or building
              something of your own, SELLSPACE gives you a place
              to participate in the marketplace.
            </p>
            <div className="role-list">
              <article className="role">
                <h3>I'm here to buy.</h3>
                <p>Explore products, discover sellers, compare your options, and find what you're looking for.</p>
              </article>
              <article className="role">
                <h3>I'm here to sell.</h3>
                <p>Showcase your products, reach potential buyers, and establish your presence in the marketplace.</p>
              </article>
            </div>
          </section>

          <section className="visit">
            <div className="verification-eyebrow">YOUR MARKETPLACE AWAITS</div>
            <h2>There's more to discover.</h2>
            <p>Visit SELLSPACE and explore what we're building.</p>
            <a href="https://sellspace-corporate.vercel.app/" target="_blank" rel="noopener noreferrer">
              sellspace-corporate.vercel.app
            </a>
          </section>

          <footer className="verification-footer">
            <strong>SELLSPACE</strong>
            <p>A better space to buy, sell, and grow.</p>
            <p>© 2026 SELLSPACE. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </>
  );
}
