import "../css/AwardPage.css";
import AwardDetails from "./AwardDetails";
import BesaPartners from "./BesaPartners";
import DefaultPartner from "./DefaultPartner";

const AwardPage = ({ selectedAward, awardData }: any) => {
  return (
    <div className="award-page">
      {/* Award description */}
      <AwardDetails
        currentAward={awardData[selectedAward]}
        awardData={awardData}
      />

      {/* Partner section */}
      <div className="current-partners">
        {/* Default partner section (NOT for BESA award)*/}
        {awardData[selectedAward].name !== "BESA" && (
          <DefaultPartner selectedAward={selectedAward} awardData={awardData} />
        )}

        {/* Partner section only for BESA */}
        {awardData[selectedAward].name === "BESA" &&
          awardData.map(
            (award: any) =>
              award.id > 7 &&
              award.name === "BESA" && (
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
