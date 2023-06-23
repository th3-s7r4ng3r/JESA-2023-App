import "./css/App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { useState, useEffect } from "react";

//main application
function App() {
  //storing details of each awards
  const [awardDetails, setAwardDetails] = useState([]);

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

  return (
    awardDetails.length != 0 && (
      <>
        <Navigation />

        <HomePage awardsData={awardDetails} />

        <Footer />
      </>
    )
  );
}

export default App;
