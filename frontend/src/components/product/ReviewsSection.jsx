import "./ReviewsSection.css";

const defaultReviews = [
  { id: 1, name: "Rina Patel", rating: 5, text: "Great quality and fast delivery." },
  { id: 2, name: "Marcus Lee", rating: 4, text: "Product feels premium, battery is solid." },
];

export default function ReviewsSection({ reviews = defaultReviews }) {
  return (
    <section className="reviewssection">
      <h3>Customer Reviews</h3>
      <div className="reviews-list">
        {reviews.map((review) => (
          <article key={review.id}>
            <div className="reviews-head">
              <strong>{review.name}</strong>
              <span>{"*".repeat(review.rating)}</span>
            </div>
            <p>{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
