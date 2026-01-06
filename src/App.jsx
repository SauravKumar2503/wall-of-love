import WallOfLove from "./components/WallOfLove";

function App() {
  return (
    <div>
      <h1>Ecommerce Product Page</h1>
      <button className="cta">Add to Cart</button>

      {/* Trust Layer */}
      <WallOfLove />
    </div>
  );
}

export default App;
