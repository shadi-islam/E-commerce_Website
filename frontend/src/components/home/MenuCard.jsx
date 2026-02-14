import "./MenuCard.css";

export default function MenuCard({ title, description, price, image, tag }) {
  return (
    <article className="menucard">
      <img src={image} alt={title} />
      <div className="menucard-body">
        {tag && <span>{tag}</span>}
        <h3>{title}</h3>
        <p>{description}</p>
        <strong>${price.toFixed(2)}</strong>
      </div>
    </article>
  );
}
