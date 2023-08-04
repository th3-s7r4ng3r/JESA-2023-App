import "../css/AppliedAwardCard.css";

// declaring the applied award card component
const AppliedAwardCard = () => {
  return (
    <div className="applied-cards">
      <h2>Applied Awards</h2>
      <div className="applied-card-container">
        <div className="applied-card">
          <h3>Award Name</h3>
          <p>Registration Number</p>
          <div className="applied-card-reg-no">2018/CS/001</div>
        </div>
        <div className="applied-card">
          <h3>Award Name</h3>
          <p>Registration Number</p>
          <div className="applied-card-reg-no">2018/CS/001</div>
        </div>
      </div>
    </div>
  );
};

export default AppliedAwardCard;
