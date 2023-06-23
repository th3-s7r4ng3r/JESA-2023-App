import "../css/AwardCard.css";

const AwardCard = () => {
  return (
    <div className="awd-card">
      <img
        className="awd-card-image"
        src="/images/awards/best-leader.png"
        alt="best leader award"
      />
      <div className="awd-card-title">Best Leader</div>
    </div>
  );
};

export default AwardCard;
