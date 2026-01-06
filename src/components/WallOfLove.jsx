import { useEffect, useState } from "react";
import LoveCard from "./LoveCard";
import { getReviews } from "../utils/storage";

function WallOfLove({ refresh }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(getReviews());
  }, [refresh]);

  return (
    <div>
      <h2>Wall of Love ❤️</h2>
      <div className="grid">
        {reviews.map((r) => (
          <LoveCard key={r.id} item={r} />
        ))}
      </div>
    </div>
  );
}

export default WallOfLove;
