import "../css/DefaultPartner.css";

// Declaring component for new partners except for BESA
const DefaultPartner = ({ selectedAward, awardData }: any) => {
  return (
    <div className="default-partners">
      <h2 className="partner-subtitle">Who will be the partners of</h2>
      <h1 className="partner-title">2023</h1>
      <div className="partner-cont">
        <div className="partner gold">
          <h2 className="partner-types">Gold</h2>
          <img src={awardData[selectedAward].gold2023} alt="Gold Partner" />
        </div>
        <div className="partner platinum">
          <h2 className="partner-types">Platinum</h2>
          <img src={awardData[selectedAward].plat2023} alt="Platinum Partner" />
        </div>
        <div className="partner silver">
          <h2 className="partner-types">Silver</h2>
          <img src={awardData[selectedAward].silv2023} alt="Silver Partner" />
        </div>
      </div>
    </div>
  );
};

export default DefaultPartner;
