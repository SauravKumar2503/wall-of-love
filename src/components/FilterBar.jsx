function FilterBar({ active, setActive }) {
  const filters = ["All", "Instagram", "Twitter", "Video", "Review"];

  return (
    <div className="filters">
      {filters.map((filter) => (
        <button
          key={filter}
          className={active === filter ? "active" : ""}
          onClick={() => setActive(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
