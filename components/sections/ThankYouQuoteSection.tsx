import Link from "next/link";

export default function ThankYouQuoteSection() {
  return (
    <section className="thankyou-quote-section">
      <div className="container">
        <div className="quote-card">
          <div className="quote-avatar" />
          <div className="quote-content">
            <p>
              “Our commitment to building robust infrastructure in emerging
              regions is absolute. We look forward to engineering your success.”
            </p>
            <strong>Director of Operations</strong>
          </div>
        </div>

        <div className="thankyou-return-wrap">
          <Link href="/" className="primary-button return-button">
            ← Return to Main Console
          </Link>
        </div>
      </div>
    </section>
  );
}