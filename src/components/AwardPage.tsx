import "../css/AwardPage.css";
import AwardDetails from "./AwardDetails";
import BesaPartners from "./BesaPartners";
import DefaultPartner from "./DefaultPartner";

const AwardPage = ({ selectedAward, awardData, awardClickStatus }: any) => {
  return (
    <div className="award-page">
      {/* Award description */}
      <AwardDetails
        currentAward={awardData[selectedAward]}
        isFromAwardPage={awardClickStatus}
        awardData={awardData}
      />

      <div className="current-partners">
        {/* Default partner section */}
        {selectedAward < 7 && (
          <DefaultPartner selectedAward={selectedAward} awardData={awardData} />
        )}

        {/* Partner section for BESA */}
        {selectedAward === "7" &&
          awardData.map(
            (award: any) =>
              award.id > 7 && (
                <BesaPartners selectedAward={award} awardid={award.id} />
              )
          )}

        {/* Inviting for paterns */}
        <h2 className="partner-footer">
          You have been proposed to be an honorable partner of JESA ‘23
        </h2>
      </div>
    </div>
  );
};

export default AwardPage;
