function TestimonialCard({ item }) {
  return (
    <div className="card">
      <strong>{item.name}</strong>
      {item.video ? <video src={item.video} controls /> : <p>“{item.content}”</p>}

      {item.adminReply && (
        <div className="admin-reply">
          <strong>Admin:</strong> {item.adminReply.message}
        </div>
      )}
    </div>
  );
}

export default TestimonialCard;
