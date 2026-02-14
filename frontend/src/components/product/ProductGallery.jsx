import { useState } from "react";
import "./ProductGallery.css";

const defaultImages = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80",
];

export default function ProductGallery({ images = defaultImages, alt = "Product" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="productgallery">
      <img src={images[activeIndex]} alt={alt} className="productgallery-main" />
      <div className="productgallery-thumbs">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <img src={image} alt={`${alt} ${index + 1}`} />
          </button>
        ))}
      </div>
    </section>
  );
}
