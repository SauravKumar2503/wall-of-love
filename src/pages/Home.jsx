import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div className="container">
      <h1>Our Products</h1>

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
