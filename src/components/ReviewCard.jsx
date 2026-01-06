function ReviewCard({ review, onDelete }) {
  return (
    <div className="card">
      <strong>{review.name}</strong>

      <p style={{ marginTop: "6px" }}>
        “{review.content}”
      </p>

      <small style={{ display: "block", marginTop: "6px", color: "#aaa" }}>
        {review.createdAt}
      </small>

      {/* DELETE BUTTON */}
      <button
        className="delete-btn"
        onClick={() => onDelete(review.id)}
      >
        Delete Review
      </button>
    </div>
  );
}

export default ReviewCard;
