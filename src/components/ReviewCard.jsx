function ReviewCard({ review }) {
  return (
    <div className="card">
      <strong>{review.name}</strong>
      <p>“{review.content}”</p>
      <div className="meta">
        ⭐ {review.rating} • {review.createdAt}
      </div>
    </div>
  );
}

export default ReviewCard;
