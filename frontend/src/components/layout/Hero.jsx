import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p>Fresh arrivals this week</p>
        <h1>Smart picks for your everyday lifestyle</h1>
        <span>Discover curated collections with fast delivery and secure checkout.</span>
      </div>
      <div className="hero-card">
        <h3>Weekend Deal</h3>
        <p>Up to 30% off on audio and wearable devices.</p>
      </div>
    </section>
  );
}
