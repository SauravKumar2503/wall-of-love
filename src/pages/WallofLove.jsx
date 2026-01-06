import { getReviews, saveReviews } from "../utils/storage";

function WallOfLove() {
  const reviews = getReviews();

  const deleteReview = (id) => {
    const updated = getReviews().filter((r) => r.id !== id);
    saveReviews(updated);
    window.location.reload(); 
  };

  return (
    <div className="wall-wrapper">
      {/* Glow effects */}
      <div className="bg-glow left"></div>
      <div className="bg-glow right"></div>

      {/* Header */}
      <header className="wall-header">
        <h1>Wall of Love</h1>
        <p>The kind words that keep us building.</p>
      </header>

      {/* Testimonials */}
      <div className="wall-grid">
        {reviews.map((r) => (
          <div key={r.id} className="wall-card">
            <div className="wall-user">
              <div className="avatar">
                {r.name.charAt(0).toUpperCase()}
              </div>

              <div>
                <strong>{r.name}</strong>
                <span>Verified Customer</span>
              </div>
            </div>

            <p className="wall-text">“{r.content}”</p>

            {/* DELETE BUTTON */}
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
