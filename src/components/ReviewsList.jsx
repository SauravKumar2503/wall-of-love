import { getReviews } from "../utils/storage";
import ReviewCard from "./ReviewCard";

function ReviewsList({ productId, refresh }) {
  const reviews = getReviews().filter(
    (r) => r.productId === productId
  );

  if (reviews.length === 0) {
    return <p>No reviews yet for this product.</p>;
  }

  return (
    <div className="grid">
      {reviews.map((r) => (
        <ReviewCard key={r.id} review={r} />
      ))}
    </div>
  );
}

export default ReviewsList;
