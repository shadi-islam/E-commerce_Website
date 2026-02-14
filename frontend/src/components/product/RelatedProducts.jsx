import ProductGrid from "./ProductGrid";
import "./RelatedProducts.css";

const fallbackRelated = [
  {
    id: "r1",
    name: "Wireless Earbuds",
    category: "Audio",
    price: 79.99,
    inStock: true,
    stockCount: 24,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "r2",
    name: "Portable Speaker",
    category: "Audio",
    price: 59.5,
    inStock: true,
    stockCount: 12,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=500&q=80",
  },
];

export default function RelatedProducts({ products = fallbackRelated }) {
  return (
    <section className="relatedproducts">
      <h3>Related Products</h3>
      <ProductGrid products={products} />
    </section>
  );
}
