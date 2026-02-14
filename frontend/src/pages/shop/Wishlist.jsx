import "./Wishlist.css";
import WishlistGrid from "../../components/wishlist/WishlistGrid";
import { useAppContext } from "../../context/AppContext";

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist, moveWishlistItemToCart } = useAppContext();

  return (
    <section className="wishlist-page">
      <header>
        <p>Account</p>
        <h1>Wishlist</h1>
      </header>

      <WishlistGrid
        items={wishlistItems}
        onRemove={removeFromWishlist}
        onMoveToCart={moveWishlistItemToCart}
      />
    </section>
  );
}
