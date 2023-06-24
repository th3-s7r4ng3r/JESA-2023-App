import "../css/AwardDetails.css";

const AwardDetails = ({
  currentAward,
  isFromAwardPage = 0,
  awardData = 0,
}: any) => {
  return (
    // Award details section
    <div className="award-card">
      {/* Selecting effects based on the section currently in */}
      <img
        src={currentAward.image}
        className={
          isFromAwardPage === 0
            ? "award-card-image"
            : "award-card-image-award-page"
        }
        alt={currentAward.name}
      />
      <div className="row">
        <div className="award-details">
          <h1 className="award-card-title">{currentAward.name}</h1>
          <p className="award-card-description">{currentAward.description}</p>
          {/* Display exclusive section for best innovation award */}
          {currentAward.id === "4" && (
            <div className="innovator-class">
              <div className="award-tag">UGC Approved</div>
              {isFromAwardPage == 0 && (
                <div className="become-partner">Become a partner</div>
              )}
            </div>
          )}
        </div>

        {/* Previous Partners section */}
        {isFromAwardPage === 1 &&
          // Displaying previous partners section for all awards except best innovation and BESA awards
          currentAward.id !== "4" &&
          currentAward.id !== "7" && (
            <div className="prev-partners">
              <h2>Platinum Partners</h2>
              <div className="prev-partner-container">
                <div className="prev-partner">
                  <img
                    src={currentAward.plat2020}
                    alt="Previous Partner 2020"
                  />
                  <div className="prev-partner-year">2020</div>
                </div>
                <div className="prev-partner">
                  <img
                    src={currentAward.plat2021}
                    alt="Previous Partner 2021"
                  />
                  <div className="prev-partner-year">2021</div>
                </div>
                <div className="prev-partner">
                  <img
                    src={currentAward.plat2022}
                    alt="Previous Partner 2022"
                  />
                  <div className="prev-partner-year">2022</div>
                </div>
              </div>
            </div>
          )}

        {/* Displaying faculty names */}
        <div className="faculty-names">
          {currentAward.id === "7" &&
            awardData.map(
              (award: any) =>
                award.id > 7 && (
                  <a href={"#" + award.id} className="faculty-tag">
                    {award.description}
                  </a>
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default AwardDetails;
