function ReviewCard({ review }) {
  return (
    <div className="card">
      <strong>{review.name}</strong>
      <p>“{review.content}”</p>
      <small>⭐ {review.rating} • {review.createdAt}</small>
    </div>
  );
}

export default ReviewCard;
