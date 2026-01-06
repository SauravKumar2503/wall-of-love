import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div className="products-dark-wrapper">
      {/* Glow effects */}
      <div className="bg-glow left"></div>
      <div className="bg-glow right"></div>

      <div className="products-container">
        <header className="products-header">
          <h1>Our Products</h1>
          <p>Explore products loved by our customers</p>
        </header>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
