import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import ReviewForm from "../components/ReviewForm";
import ReviewsList from "../components/ReviewsList";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [refresh, setRefresh] = useState(0);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container">
      <Link to="/">← Back to products</Link>

      <div className="product-box">
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>

      <section className="reviews">
        <h2>Customer Reviews ❤️</h2>

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
  );
}

export default ProductDetail;
