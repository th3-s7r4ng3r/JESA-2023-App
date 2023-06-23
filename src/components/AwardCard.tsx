import "../css/AwardCard.css";

const AwardCard = ({ award }: any) => {
  return (
    <div className="awd-card">
      <img className="awd-card-image" src={award.image} alt={award.name} />
      <div className="awd-card-title">{award.name}</div>
      {award.id === "7" && <div className="awd-besa">07 Awards</div>}
    </div>
  );
};

export default AwardCard;
