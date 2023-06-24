import "../css/HallofFame.css";
import { useState, useEffect } from "react";

const HallofFame = () => {
  //storing details of hall of fame
  const [hallOfFameDetails, setHallOfFameDetails] = useState([]);

  //reading from the data files
  useEffect(() => {
    const readHallOfFameFile = async () => {
      try {
        const hallOfFameContent = await fetch("./data/hall-of-fame.json");
        const hallOfFameContentText = await hallOfFameContent.json();
        setHallOfFameDetails(hallOfFameContentText);
      } catch (error) {
        console.error(error);
      }
    };
    readHallOfFameFile();
  }, []);

  //render the Hall of Fame section
  return (
    <>
      <div className="hof-container" id="hall-of-fame">
        <h1>Hall of Fame</h1>
        <p className="hof-description">
          The legacy of JESA is an enduring testament to the celebration of
          young talents and their exceptional achievements. Over the years, this
          prestigious platform has become synonymous with excellence and
          recognition, showcasing the remarkable skills and capabilities of
          undergraduates from the University of Sri Jayewardenepura and beyond
        </p>
        <div className="hof-row">
          {/* display avaiable hall of fame years */}
          {hallOfFameDetails.map((item: any) => (
            <a
              href={"#" + item.id}
              className={item.image !== "" ? "hof-tag" : "hof-tag-disable"}
              key={item.id}
            >
              {item.year}
            </a>
          ))}
        </div>
        {/* Looping through the years */}
        {hallOfFameDetails.length !== 0 &&
          hallOfFameDetails.map(
            (item: any) =>
              item.image !== "" && (
                <div className="hof-section" id={item.id}>
                  <h2>{item.year}</h2>
                  <img
                    src={item.image}
                    alt={"Hall of Fame " + item.year}
                    className="hof-image"
                  />
                </div>
              )
          )}
      </div>
    </>
  );
};

export default HallofFame;
