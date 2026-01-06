import { useState } from "react";
import { getReviews, saveReviews } from "../utils/storage";

function ReviewForm({ productId, onNewReview }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);

  const submit = () => {
    if (!name || !content) return;

    const review = {
      id: Date.now(),
      productId,
      name,
      content,
      rating,
      createdAt: new Date().toLocaleDateString()
    };

    saveReviews([review, ...getReviews()]);
    onNewReview();

    setName("");
    setContent("");
  };

  return (
    <div className="review-form">
      <h3>Write a Review</h3>

      <input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Your experience"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <select onChange={(e) => setRating(e.target.value)}>
        <option value="5">⭐⭐⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
      </select>

      <button onClick={submit}>Submit Review</button>
    </div>
  );
}

export default ReviewForm;
