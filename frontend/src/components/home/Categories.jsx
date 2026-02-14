import "./Categories.css";

const defaultCategories = ["Electronics", "Fashion", "Home", "Beauty", "Sports", "Books"];

export default function Categories({ categories = defaultCategories }) {
  return (
    <section className="categories">
      <header>
        <p>Browse</p>
        <h2>Popular Categories</h2>
      </header>

      <div className="categories-list">
        {categories.map((category) => (
          <button type="button" key={category}>
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
