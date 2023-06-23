import "../css/AwardPage.css";
import AwardDetails from "./AwardDetails";

const AwardPage = ({ selectedAward = 0, awardData }: any) => {
  return (
    <div className="award-page">
      <AwardDetails currentAward={awardData[selectedAward]} />
    </div>
  );
};

export default AwardPage;
