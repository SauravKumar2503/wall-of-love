import { useState } from "react";
import testimonials from "../data/testimonials";
import LoveCard from "./LoveCard";
import FilterBar from "./FilterBar";

function WallOfLove() {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? testimonials
      : testimonials.filter((item) => item.source === filter);

  return (
    <section className="wall">
      <h2>❤️ Wall of Love</h2>
      <p>Real stories from real customers</p>

      <FilterBar active={filter} setActive={setFilter} />

      <div className="grid">
        {filteredData.map((item) => (
          <LoveCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default WallOfLove;
