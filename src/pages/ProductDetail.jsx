import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import ReviewForm from "../components/ReviewForm";
import ReviewsList from "../components/ReviewsList";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [refresh, setRefresh] = useState(0);

  if (!product) {
    return <h2 style={{ color: "white", padding: "40px" }}>Product not found</h2>;
  }

  return (
    <div className="product-dark-wrapper">
      {/* Glow effects */}
      <div className="bg-glow left"></div>
      <div className="bg-glow right"></div>

      <div className="product-container">
        {/* Product Card */}
        <div className="product-glass-card">
          <img src={product.image} alt={product.name} />

          <div className="product-content">
            <h1>{product.name}</h1>
            <p className="price">{product.price}</p>
            <p className="desc">{product.description}</p>

            <button className="primary-btn">Add to Cart</button>
          </div>
        </div>

        {/* Reviews */}
        <section className="reviews-section">
          <h2>Customer Reviews</h2>

          <ReviewForm
            productId={product.id}
            onNewReview={() => setRefresh((r) => r + 1)}
          />

          <ReviewsList
            productId={product.id}
            refresh={refresh}
          />
        </section>
      </div>
    </div>
  );
}

export default ProductDetail;
