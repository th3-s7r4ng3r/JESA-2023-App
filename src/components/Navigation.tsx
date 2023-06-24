import "../css/Navigation.css";

const Navigation = ({
  updateNavAwardClick,
  updateNavHomeClick,
  updateNavHallOfFameClick,
}: any) => {
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

  return (
    <>
      <div className="header">
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
        </div>
      </div>
      {/* Spacer for the nav bar */}
      <div className="spacer" id="home"></div>
    </>
  );
};

export default Navigation;
