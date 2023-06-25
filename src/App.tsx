import "./css/App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { useState, useEffect } from "react";
import AwardPage from "./components/AwardPage";
import ScrollToTop from "./components/ScrollToTop";
import HallofFame from "./components/HallofFame";

//main application
function App() {
  //storing details of each awards
  const [awardDetails, setAwardDetails] = useState([]);
  const [selectedAward, setSelectedAward] = useState(0);
  const [awardClickStatus, setAwardClickStatus] = useState(0);
  const [hallOfFameStatus, setHallOfFameStatus] = useState(0);

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

  //handling animation with buttons
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //making sure that the awards section is loaded before scrolling
  const scrollToAwards = () => {
    setTimeout(() => {
      const awardsSection = document.getElementById("awards");
      if (awardsSection != null)
        awardsSection.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  //handling clicking the buttons
  const handleNavHomeClick = () => {
    setAwardClickStatus(0);
    setHallOfFameStatus(0);
    scrollToTop();
  };
  const handleNavAwardsClick = () => {
    setAwardClickStatus(0);
    setHallOfFameStatus(0);
    scrollToAwards();
  };
  const handleNavHallofFameClick = () => {
    setAwardClickStatus(0);
    setHallOfFameStatus(1);
    scrollToTop();
  };
  const handleAwardClick = (value: any) => {
    setSelectedAward(value);
    setHallOfFameStatus(0);
    setAwardClickStatus(1);
    scrollToTop();
  };

  //render the main application
  return (
    awardDetails.length != 0 && (
      <>
        {/* always display the navigation bar */}
        <Navigation
          updateNavAwardClick={handleNavAwardsClick}
          updateNavHomeClick={handleNavHomeClick}
          updateNavHallOfFameClick={handleNavHallofFameClick}
        />

        {/* display Home page of the app */}
        {awardClickStatus === 0 && hallOfFameStatus === 0 && (
          <HomePage
            awardsData={awardDetails}
            updateEachAwardClick={handleAwardClick}
          />
        )}

        {/* display Awards page with the selected award */}
        {awardClickStatus === 1 && hallOfFameStatus === 0 && (
          <AwardPage
            awardData={awardDetails}
            selectedAward={selectedAward}
            awardClickStatus={awardClickStatus}
          />
        )}

        {/* display Hall of Fame page */}
        {hallOfFameStatus === 1 && <HallofFame />}

        {/* Always display the footer and scroll to top */}
        <ScrollToTop />
        <Footer />
      </>
    )
  );
}

export default App;
