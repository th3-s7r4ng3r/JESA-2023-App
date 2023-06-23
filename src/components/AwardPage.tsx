import "../css/AwardPage.css";
import AwardDetails from "./AwardDetails";
import DefaultPartner from "./DefaultPartner";

const AwardPage = ({ selectedAward, awardData, awardClickStatus }: any) => {
  return (
    <div className="award-page">
      {/* Award description */}
      <AwardDetails
        currentAward={awardData[selectedAward]}
        isFromAwardPage={awardClickStatus}
      />

      <div className="current-partners">
        {/* Default partner section */}
        <h1 className="partner-title">2023</h1>
        {selectedAward < 7 && (
          <DefaultPartner selectedAward={selectedAward} awardData={awardData} />
        )}

        {/* Partner section for BESA */}

        {/* Inviting for paterns */}
        <h2 className="partner-footer">
          You have been proposed to be an honorable partner of JESA ‘23
        </h2>
      </div>
    </div>
  );
};

export default AwardPage;
