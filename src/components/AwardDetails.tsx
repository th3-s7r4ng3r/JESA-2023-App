import "../css/AwardDetails.css";

const AwardDetails = ({ currentAward }: any) => {
  return (
    <div className="award-card">
      <img
        src={currentAward.image}
        className="award-card-image"
        alt={currentAward.name}
      />
      <div className="award-details">
        <h1 className="award-card-title">{currentAward.name}</h1>
        <p className="award-card-description">{currentAward.description}</p>
        {currentAward.id === "4" && (
          <div className="innovator-class">
            <div className="award-tag">UGC Approved</div>
            <div className="become-partner">Become a partner</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AwardDetails;
