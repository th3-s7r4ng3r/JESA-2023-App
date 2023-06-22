import "../css/HomePage.css";
import Carousel from "./Carousel";

const HomePage = () => {
  return (
    <div className="container" id="home">
      <Carousel />

      <div className="description" id="about">
        <img
          src="./images/jesa-logo.png"
          alt="Jesa Logo"
          className="description-logo"
        />
        <div className="description-text">
          <h1 className="description-title"> What is JESA?</h1>
          <p>
            JESA (J'pura Employability Skills Awards), the ultimate platform for
            honoring the accomplishments of young talents. With{" "}
            <b>13 prestigious awards</b> exclusively dedicated to undergraduates
            of the University of Sri Jayewardenepura, and a new special award
            open to students from other universities, JESA sets a remarkable
            standard for recognition.
          </p>
          <p>
            Organized by the Career Skills Development Society of the
            University, this highly regarded award ceremony, initiated in 2015,
            continues to captivate audiences. Join us this year to witness the
            expansion of the JESA legacy, as talented undergraduates from
            diverse institutions compete for the coveted Best Innovator Award.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
