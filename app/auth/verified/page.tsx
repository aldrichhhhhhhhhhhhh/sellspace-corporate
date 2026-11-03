import Link from 'next/link';

type VerificationPageProps = {
  searchParams: Promise<{
    error?: string;
    error_code?: string;
    error_description?: string;
  }>;
};

export const metadata = {
  title: 'Email verification — SELLSPACE',
  description: 'Confirm your SELLSPACE email address.',
  robots: { index: false, follow: false },
};

export default async function VerificationPage({ searchParams }: VerificationPageProps) {
  const params = await searchParams;
  const hasError = Boolean(params.error || params.error_code || params.error_description);

  return (
    <main
      style={{
        minHeight: '100svh',
        display: 'grid',
        placeItems: 'center',
        padding: '32px 20px',
        background: '#F4F5F2',
        color: '#111613',
        fontFamily: "'DM Sans', Arial, sans-serif",
      }}
    >
      <section
        style={{
          width: 'min(100%, 520px)',
          padding: 'clamp(30px, 7vw, 58px)',
          background: '#FFFFFF',
          border: '1px solid #DDE3DE',
          boxShadow: '0 24px 70px rgba(17, 35, 26, 0.07)',
          textAlign: 'center',
        }}
      >
        <Link
          href="/"
          aria-label="SELLSPACE home"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 9,
            marginBottom: 48,
            color: '#111613',
            fontSize: 21,
            fontWeight: 700,
            letterSpacing: '-0.06em',
            textDecoration: 'none',
          }}
        >
          SELL<span style={{ color: '#087F68' }}>SPACE</span>
        </Link>

        <div
          aria-hidden="true"
          style={{
            width: 64,
            height: 64,
            display: 'grid',
            placeItems: 'center',
            margin: '0 auto 25px',
            borderRadius: '50%',
            background: hasError ? '#F8EDEA' : '#E5F1EB',
            color: hasError ? '#A34E3E' : '#087F68',
            fontSize: 29,
            fontWeight: 500,
          }}
        >
          {hasError ? '!' : '✓'}
        </div>

        <p
          style={{
            margin: '0 0 13px',
            color: '#718078',
            fontFamily: "'DM Mono', monospace",
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          {hasError ? 'VERIFICATION NOT COMPLETED' : 'SELLSPACE ACCOUNT'}
        </p>

        <h1
          style={{
            margin: '0 0 17px',
            fontSize: 'clamp(32px, 7vw, 43px)',
            lineHeight: 1.08,
            letterSpacing: '-0.065em',
            fontWeight: 600,
          }}
        >
          {hasError ? 'This link needs attention.' : 'You’re all set.'}
        </h1>

        <p
          style={{
            margin: '0 auto',
            maxWidth: 370,
            color: '#68736C',
            fontSize: 14,
            lineHeight: 1.85,
          }}
        >
          {hasError
            ? 'This confirmation link may have expired or already been used. Return to SELLSPACE and request a new verification email.'
            : 'Your email confirmation has been processed. You can now return to the SELLSPACE app and sign in with your account.'}
        </p>

        <Link
          href="/"
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 18,
            marginTop: 32,
            padding: '15px 20px',
            background: '#087F68',
            color: '#FFFFFF',
            fontSize: 12,
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          BACK TO SELLSPACE <span aria-hidden="true">↗</span>
        </Link>

        <p
          style={{
            margin: '32px 0 0',
            paddingTop: 20,
            borderTop: '1px solid #E8ECE8',
            color: '#9AA39D',
            fontSize: 10,
            lineHeight: 1.7,
          }}
        >
          A better space to buy, sell, and grow.
        </p>
      </section>
    </main>
  );
}
