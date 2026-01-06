function LoveCard({ item }) {
  return (
    <div className="card">
      <strong>{item.name}</strong>
      <p>{item.content}</p>

      {item.video && <video src={item.video} controls width="100%" />}

      {item.adminReply && (
        <div className="admin-reply">
          <strong>Admin reply:</strong>
          <p>{item.adminReply.message}</p>
          <small>{item.adminReply.repliedAt}</small>
        </div>
      )}
    </div>
  );
}

export default LoveCard;
