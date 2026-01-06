function FilterBar({ active, setActive }) {
  const filters = ["All", "Instagram", "Twitter", "Video", "Review"];

  return (
    <div className="filters">
      {filters.map((f) => (
        <button
          key={f}
          className={`filter-btn ${active === f ? "active" : ""}`}
          onClick={() => setActive(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
