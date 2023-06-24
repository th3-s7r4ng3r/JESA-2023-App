import "../css/BesaPartners.css";

const BesaPartners = ({ selectedAward, awardid }: any) => {
  return (
    <div className="besa-partners" id={awardid}>
      <h2 className="faculty-name">{selectedAward.description}</h2>
      <div className="besa-partner-container">
        {/* Previous besa platinum partners section */}
        <div className="prev-besa-partners">
          <h2 className="prev-besa-plat-partners">
            Previous Platinum Partners
          </h2>
          <div className="prev-besa-partners-list">
            <div className="prev-besa-partner">
              <img src={selectedAward.plat2020} alt="Platinum Partner 2020" />
              <h3>2020</h3>
            </div>
            <div className="prev-besa-partner">
              <img src={selectedAward.plat2021} alt="Platinum Partner 2021" />
              <h3>2021</h3>
            </div>
            <div className="prev-besa-partner">
              <img src={selectedAward.plat2022} alt="Platinum Partner 2022" />
              <h3>2022</h3>
            </div>
          </div>
        </div>
        {/* Current Besa partners section */}
        <div className="current-besa-partners">
          <h1>2023</h1>
          <div className="current-besa-partners-list">
            <div className="current-besa-partner besa-gold">
              <img src={selectedAward.gold2023} alt="Gold Partner 2023" />
              <h3 className="gold-text">Gold</h3>
            </div>
            <div className="current-besa-partner besa-platinum">
              <img src={selectedAward.plat2023} alt="Platinum Partner 2023" />
              <h3 className="platinum-text">Platinum</h3>
            </div>
            <div className="current-besa-partner besa-silver">
              <img src={selectedAward.silv2023} alt="Silver Partner 2023" />
              <h3 className="silver-text">Silver</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BesaPartners;
