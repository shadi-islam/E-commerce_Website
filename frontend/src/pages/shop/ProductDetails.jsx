import "./ProductDetails.css";
import { Navigate, useParams } from "react-router-dom";
import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";
import RelatedProducts from "../../components/product/RelatedProducts";
import ReviewsSection from "../../components/product/ReviewsSection";
import { useAppContext } from "../../context/AppContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { products, addToCart, toggleWishlist, isWishlisted } = useAppContext();
  const product = products.find((entry) => entry.id === id);
  const related = products.filter((entry) => entry.id !== id).slice(0, 2);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <section className="productdetails-page">
      <div className="productdetails-main">
        <ProductGallery
          alt={product.name}
          images={[
            product.image,
            product.image,
            product.image,
          ]}
        />
        <ProductInfo
          id={product.id}
          name={product.name}
          description={product.description}
          category={product.category}
          price={product.price}
          image={product.image}
          stockCount={product.stockCount}
          isWishlisted={isWishlisted(product.id)}
          onToggleWishlist={() => toggleWishlist(product)}
          onAddToCart={addToCart}
        />
      </div>
      <ReviewsSection />
      <RelatedProducts products={related} />
    </section>
  );
}
