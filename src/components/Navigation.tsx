import "../css/Navigation.css";
import { useState, useEffect } from "react";

// declaring navigation component
const Navigation = ({
  updateNavAwardClick,
  updateNavHomeClick,
  updateNavHallOfFameClick,
  updateRegistrationClick,
  currentRegistrationPageStatus,
}: any) => {
  //declaring the state variables
  const [regIsVisible, setRegIsVisible] = useState(false);

  //handling clicking the buttons
  const handleHomeClick = () => {
    updateNavHomeClick();
  };
  const handleAwardsClick = () => {
    updateNavAwardClick();
  };
  const handleHallOfFameClick = () => {
    updateNavHallOfFameClick();
  };
  const handleRegistrationClick = () => {
    updateRegistrationClick();
  };

  //displaying register button when scroll down 600px
  const updateregIsVisible = () => {
    const scrollTop = document.documentElement.scrollTop;
    setRegIsVisible(scrollTop > 600);
  };
  // adding event listener to the window to check if the user has scrolled down 400px
  useEffect(() => {
    window.addEventListener("scroll", updateregIsVisible);
    return () => {
      window.removeEventListener("scroll", updateregIsVisible);
    };
  }, []);

  // rendering the navigation bar
  return (
    <>
      <div
        // move the nav bar left except when the registration page is visible
        className={`header ${
          regIsVisible && currentRegistrationPageStatus === 0 ? "nav-move" : ""
        }`}
      >
        <div className="nav-bar">
          <a className="nav-btn" href="#home" onClick={handleHomeClick}>
            Home
          </a>
          <a className="nav-btn" href="#awards" onClick={handleAwardsClick}>
            Awards
          </a>
          <a
            className="nav-btn"
            href="#hall-of-fame"
            onClick={handleHallOfFameClick}
          >
            Hall of Fame
          </a>
          <a
            // registration button visible except when the registration page is visible
            className={`reg-nav-btn ${
              regIsVisible && currentRegistrationPageStatus === 0
                ? "show-reg-btn"
                : ""
            }`}
            href="#registration"
            onClick={handleRegistrationClick}
          >
            JESA'23
          </a>
        </div>
      </div>
      {/* Spacer for the nav bar */}
      <div className="spacer" id="home"></div>
    </>
  );
};

export default Navigation;
