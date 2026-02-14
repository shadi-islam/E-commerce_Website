import "./Pagination.css";

export default function Pagination({ page = 1, totalPages = 1, onChange }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <nav className="pagination" aria-label="Pagination">
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          className={pageNumber === page ? "active" : ""}
          onClick={() => onChange?.(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </nav>
  );
}
