import "./PrivacyPolicy.css";
export default function PrivacyPolicy() {
  return (
    <section className="legal-page">
      <h1>Privacy Policy</h1>
      <p>
        We collect only the data required to process orders, improve site performance, and
        support your account experience.
      </p>
      <div className="legal-card">
        <h3>What we store</h3>
        <p>Account details, shipping data, order history, and basic usage analytics.</p>
        <h3>How we use it</h3>
        <p>To fulfill purchases, provide support, and personalize recommendations.</p>
      </div>
    </section>
  );
}
