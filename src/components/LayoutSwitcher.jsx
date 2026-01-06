function LayoutSwitcher({ layout, setLayout }) {
  return (
    <div className="layout">
      <button onClick={() => setLayout("grid")}>Grid</button>
      <button onClick={() => setLayout("list")}>List</button>
    </div>
  );
}

export default LayoutSwitcher;
