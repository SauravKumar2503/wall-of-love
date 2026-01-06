import { getReviews, saveReviews } from "../utils/storage";
import products from "../data/products";

function WallOfLove() {
  const reviews = getReviews();

  // helper: get product name from productId
  const getProductName = (productId) => {
    const product = products.find((p) => p.id === productId);
    return product ? product.name : "Unknown Product";
  };

  const deleteReview = (id) => {
    const updated = getReviews().filter((r) => r.id !== id);
    saveReviews(updated);
    window.location.reload();
  };

  return (
    <div className="wall-wrapper">
      {/* Glow */}
      <div className="bg-glow left"></div>
      <div className="bg-glow right"></div>

      {/* Header */}
      <header className="wall-header">
        <h1>Wall of Love</h1>
        <p>The kind words that keep us building.</p>
      </header>

      {/* Reviews */}
      <div className="wall-grid">
        {reviews.map((r) => (
          <div key={r.id} className="wall-card">
            {/* User */}
            <div className="wall-user">
              <div className="avatar">
                {r.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <strong>{r.name}</strong>
                <span>Verified Customer</span>
              </div>
            </div>

            {/* Product badge */}
            <div className="product-badge">
              For: {getProductName(r.productId)}
            </div>

            {/* Review */}
            <p className="wall-text">“{r.content}”</p>

            {/* Delete */}
            <button
              className="delete-btn"
              onClick={() => deleteReview(r.id)}
            >
              Delete Review
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WallOfLove;
