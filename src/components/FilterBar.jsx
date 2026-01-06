function FilterBar({ active, setActive }) {
  const filters = ["All", "Review", "Instagram", "Twitter", "Video"];
  return (
    <div className="filters">
      {filters.map((f) => (
        <button key={f} onClick={() => setActive(f)} className={active === f ? "active" : ""}>
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
