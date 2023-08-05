import "../css/Navigation.css";
import { useState, useEffect } from "react";

// declaring navigation component
const Navigation = ({
  updateNavAwardClick,
  updateNavHomeClick,
  updateNavHallOfFameClick,
  updateRegistrationClick,
  updateJesa23Click,
  currentRegistrationPageStatus,
  isRegistrationClosed = 1,
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
  const handleJesa23Click = () => {
    updateJesa23Click();
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
        // also hides the register button when registration date is passed
        className={`header ${
          regIsVisible && currentRegistrationPageStatus === 0
            ? isRegistrationClosed === 0
              ? "nav-move"
              : "closed-nav-move"
            : ""
        }`}
      >
        <div className="nav-bar">
          <a className="nav-btn" onClick={handleHomeClick}>
            Home
          </a>
          <a className="nav-btn" onClick={handleAwardsClick}>
            Awards
          </a>
          <a className="nav-btn" onClick={handleHallOfFameClick}>
            Hall of Fame
          </a>
        </div>

        {/* Registration button visible except when the registration page is visible */}
        {/* also hides the register button when registration date is passed then display jesa23 button*/}
        {isRegistrationClosed === 0 ? (
          <a
            className={`reg-nav-btn ${
              regIsVisible && currentRegistrationPageStatus === 0
                ? "show-reg-btn"
                : ""
            }`}
            onClick={handleRegistrationClick}
          >
            Register for JESA'23
          </a>
        ) : (
          <a
            className={`jesa23-nav-btn ${
              regIsVisible && currentRegistrationPageStatus === 0
                ? "show-jesa23-btn"
                : ""
            }`}
            onClick={handleJesa23Click}
          >
            Check JESA'23 Registration
          </a>
        )}
      </div>
      {/* Spacer for the nav bar */}
      <div className="spacer" id="home"></div>
    </>
  );
};

export default Navigation;
