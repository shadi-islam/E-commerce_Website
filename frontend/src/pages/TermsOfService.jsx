import "./TermsOfService.css";
export default function TermsOfService() {
  return (
    <section className="legal-page">
      <h1>Terms of Service</h1>
      <p>
        By using ShopNova, you agree to follow platform rules, provide accurate account
        information, and comply with payment and return policies.
      </p>
      <div className="legal-card">
        <h3>Orders and payments</h3>
        <p>All orders are subject to stock availability and payment verification.</p>
        <h3>Returns</h3>
        <p>Eligible products can be returned within 30 days, based on item condition.</p>
      </div>
    </section>
  );
}
