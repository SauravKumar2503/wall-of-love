import { getReviews, saveReviews } from "../utils/storage";
import ReviewCard from "./ReviewCard";

function ReviewsList({ productId }) {
  const reviews = getReviews().filter(
    (r) => r.productId === productId
  );

  const deleteReview = (id) => {
    const updated = getReviews().filter((r) => r.id !== id);
    saveReviews(updated);

    // force UI refresh (simple + safe)
    window.location.reload();
  };

  if (reviews.length === 0) {
    return <p style={{ color: "#bbb" }}>No reviews yet.</p>;
  }

  return (
    <div className="grid">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
          onDelete={deleteReview}
        />
      ))}
    </div>
  );
}

export default ReviewsList;
