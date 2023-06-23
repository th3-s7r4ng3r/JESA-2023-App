import "../css/AwardDetails.css";

const AwardDetails = () => {
  return (
    <div className="award-card">
      <img
        src="./images/awards/best-innovator.png"
        className="award-card-image"
        alt="award image"
      />
      <div className="award-details">
        <h1 className="award-card-title">Best Innovator</h1>
        <p className="award-card-description">
          Dedicated to motivating young inventors and this year onwards it’s
          open to brilliant young innovators from other universities too. The
          ability of a competitor to do an invention successfully and
          implementation to fit the task is conferred as well.
        </p>
        <div className="award-tag">UGC Approved</div>
      </div>
    </div>
  );
};

export default AwardDetails;
