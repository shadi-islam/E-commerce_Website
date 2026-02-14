import "./Testimonial.css";

const reviews = [
  {
    id: 1,
    name: "Rina Patel",
    text: "Fast delivery, clean checkout, and product quality exceeded expectations.",
  },
  {
    id: 2,
    name: "Marcus Lee",
    text: "The product pages are clear, and support solved my issue in minutes.",
  },
];

export default function Testimonial() {
  return (
    <section className="testimonial">
      <header>
        <p>Reviews</p>
        <h2>What Customers Say</h2>
      </header>
      <div className="testimonial-grid">
        {reviews.map((review) => (
          <article key={review.id}>
            <p>"{review.text}"</p>
            <strong>{review.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
