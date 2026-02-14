import "./Shop.css";
import { useMemo, useState } from "react";
import Pagination from "../../components/product/Pagination";
import ProductFilters from "../../components/product/ProductFilters";
import ProductGrid from "../../components/product/ProductGrid";
import SearchBar from "../../components/product/SearchBar";
import SortDropdown from "../../components/product/SortDropdown";
import { useAppContext } from "../../context/AppContext";

const pageSize = 3;

export default function Shop() {
  const { products, toggleWishlist, isWishlisted, addToCart } = useAppContext();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const result = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      return matchesSearch && matchesBrand;
    });

    if (sort === "price_low") return [...result].sort((a, b) => a.price - b.price);
    if (sort === "price_high") return [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [products, search, selectedBrands, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const toggleBrand = (brand) => {
    setPage(1);
    setSelectedBrands((current) =>
      current.includes(brand) ? current.filter((item) => item !== brand) : [...current, brand]
    );
  };

  return (
    <section className="shop-page">
      <header className="shop-header">
        <h1>Shop</h1>
        <p>Browse curated products with smart filtering and sorting.</p>
      </header>

      <div className="shop-toolbar">
        <SearchBar value={search} onChange={setSearch} />
        <SortDropdown value={sort} onChange={setSort} />
      </div>

      <div className="shop-grid">
        <ProductFilters selected={selectedBrands} onToggle={toggleBrand} />
        <div className="shop-results">
          <ProductGrid
            products={paged}
            isWishlisted={isWishlisted}
            onToggleWishlist={toggleWishlist}
            onAddToCart={(product) => addToCart(product, 1)}
          />
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </div>
    </section>
  );
}
