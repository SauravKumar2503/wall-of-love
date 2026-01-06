import { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewsList";

function ProductPage() {
  const product = {
    id: "product-1",
    name: "Premium Headphones",
    price: "₹2,999",
    description:
      "High-quality wireless headphones with noise cancellation."
  };

  const [refresh, setRefresh] = useState(0);

  return (
    <div className="product-page">
      {/* Product Info */}
      <div className="product-box">
        <h1>{product.name}</h1>
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>

      {/* Reviews Section */}
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

export default ProductPage;
