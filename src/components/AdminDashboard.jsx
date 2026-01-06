import { useState } from "react";
import { getReviews, saveReviews, logout } from "../utils/storage";

function AdminDashboard({ onLogout }) {
  const [reviews, setReviews] = useState(getReviews());
  const [reply, setReply] = useState({});

  const sendReply = (id) => {
    const updated = reviews.map((r) =>
      r.id === id
        ? { ...r, adminReply: { message: reply[id], repliedAt: new Date().toDateString() } }
        : r
    );
    saveReviews(updated);
    setReviews(updated);
  };

  return (
    <>
      <h2>Admin Dashboard</h2>
      {reviews.map((r) => (
        <div className="card" key={r.id}>
          <p>{r.content}</p>
          {!r.adminReply && (
            <>
              <textarea onChange={(e) => setReply({ ...reply, [r.id]: e.target.value })} />
              <button onClick={() => sendReply(r.id)}>Reply</button>
            </>
          )}
        </div>
      ))}
      <button onClick={() => { logout(); onLogout(); }}>Logout</button>
    </>
  );
}

export default AdminDashboard;
