import "./css/App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { useState, useEffect } from "react";
import AwardPage from "./components/AwardPage";

//main application
function App() {
  //storing details of each awards
  const [awardDetails, setAwardDetails] = useState([]);
  const [selectedAward, setSelectedAward] = useState(0);
  const [awardClickStatus, setAwardClickStatus] = useState(1);

  //reading from the data files
  useEffect(() => {
    const readAwardFile = async () => {
      try {
        const awardConent = await fetch("./data/award.json");
        const awardConentText = await awardConent.json();
        setAwardDetails(awardConentText);
      } catch (error) {
        console.error(error);
      }
    };
    readAwardFile();
  }, []);

  //handling clicking the buttons
  const handleNavHomeClick = () => {
    setAwardClickStatus(0);
  };
  const handleNavAwardsClick = () => {
    setAwardClickStatus(0);
  };
  const handleNavHallofFameClick = () => {
    setAwardClickStatus(0);
  };
  const handleAwardClick = (value: any) => {
    setSelectedAward(value);
  };

  return (
    awardDetails.length != 0 && (
      <>
        <Navigation />

        {awardClickStatus === 1 && (
          <AwardPage
            awardData={awardDetails}
            selectedAward={selectedAward}
            awardClickStatus={awardClickStatus}
          />
        )}
        {awardClickStatus === 0 && <HomePage awardsData={awardDetails} />}

        <Footer />
      </>
    )
  );
}

export default App;
