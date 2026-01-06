import { useEffect, useState } from "react";
import { getReviews } from "../utils/storage";
import WallHero from "./WallHero";
import TestimonialCard from "./TestimonialCard";
import FilterBar from "./FilterBar";
import LayoutSwitcher from "./LayoutSwitcher";

function WallOfLove({ refresh }) {
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState("All");
  const [layout, setLayout] = useState("grid");

  useEffect(() => {
    setReviews(getReviews());
  }, [refresh]);

  const filtered =
    filter === "All" ? reviews : reviews.filter((r) => r.source === filter);

  return (
    <>
      <WallHero count={reviews.length} />
      <FilterBar active={filter} setActive={setFilter} />
      <LayoutSwitcher layout={layout} setLayout={setLayout} />

      <div className={layout === "grid" ? "grid" : "list"}>
        {filtered.map((r) => (
          <TestimonialCard key={r.id} item={r} />
        ))}
      </div>
    </>
  );
}

export default WallOfLove;
