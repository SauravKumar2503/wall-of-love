import { useState } from "react";
import { getReviews, saveReviews, logout } from "../utils/storage";

function AdminDashboard({ onLogout }) {
  const [reviews, setReviews] = useState(getReviews());
  const [reply, setReply] = useState({});

  const sendReply = (id) => {
    const updated = reviews.map((r) =>
      r.id === id
        ? {
            ...r,
            adminReply: {
              message: reply[id],
              repliedAt: new Date().toLocaleDateString()
            }
          }
        : r
    );

    saveReviews(updated);
    setReviews(updated);
    setReply({});
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {reviews.map((r) => (
        <div className="card" key={r.id}>
          <strong>{r.name}</strong>
          <p>{r.content}</p>

          {r.video && <video src={r.video} controls width="100%" />}

          {r.adminReply ? (
            <div className="admin-reply">
              <p>{r.adminReply.message}</p>
            </div>
          ) : (
            <>
              <textarea
                placeholder="Reply to user"
                value={reply[r.id] || ""}
                onChange={(e) =>
                  setReply({ ...reply, [r.id]: e.target.value })
                }
              />
              <button onClick={() => sendReply(r.id)}>Reply</button>
            </>
          )}
        </div>
      ))}

      <button onClick={() => { logout(); onLogout(); }}>
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
