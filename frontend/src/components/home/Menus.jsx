import MenuCard from "./MenuCard";
import "./Menus.css";

const defaultItems = [
  {
    id: "m1",
    title: "Wireless Earbuds",
    description: "Noise cancellation with 30-hour battery life.",
    price: 79.99,
    tag: "Top Pick",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "m2",
    title: "Smart Watch",
    description: "Health tracking, GPS, and premium steel frame.",
    price: 129,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "m3",
    title: "Portable Speaker",
    description: "Water-resistant speaker with deep bass and Bluetooth 5.3.",
    price: 59.5,
    tag: "Sale",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=500&q=80",
  },
];

export default function Menus({ items = defaultItems }) {
  return (
    <section className="menus">
      <header>
        <p>Featured</p>
        <h2>Trending Products</h2>
      </header>
      <div className="menus-grid">
        {items.map((item) => (
          <MenuCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
