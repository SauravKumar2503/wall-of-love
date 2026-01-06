import { useState } from "react";
import VideoRecorder from "./VideoRecorder";
import { getReviews, saveReviews } from "../utils/storage";

function ReviewForm({ user, onUpdate }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("Review");
  const [video, setVideo] = useState(null);

  const submit = () => {
    const review = {
      id: Date.now(),
      name: user.name,
      source,
      content: text,
      video,
      rating: 5,
      adminReply: null
    };

    const updated = [review, ...getReviews()];
    saveReviews(updated);
    onUpdate(updated);

    setText("");
    setVideo(null);
  };

  return (
    <div className="review-form">
      <h3>Post a Review</h3>

      <select onChange={(e) => setSource(e.target.value)}>
        <option>Review</option>
        <option>Instagram</option>
        <option>Twitter</option>
        <option>Video</option>
      </select>

      {source !== "Video" && (
        <textarea
          placeholder="Write your review"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}

      {source === "Video" && <VideoRecorder onSave={setVideo} />}

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default ReviewForm;
