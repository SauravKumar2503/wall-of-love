function LoveCard({ item }) {
  return (
    <div className="card">
      <img src={item.avatar} alt={item.name} className="avatar" />

      <div>
        <h4>{item.name}</h4>
        <span className="source">{item.source}</span>
        <p>{item.content}</p>
        <div className="rating">⭐ {item.rating}/5</div>
      </div>
    </div>
  );
}

export default LoveCard;
