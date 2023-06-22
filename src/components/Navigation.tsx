import "../css/Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="header">
        <div className="nav-bar">
          <a className="nav-btn" href="#home">
            Home
          </a>
          <a className="nav-btn" href="#awards">
            Awards
          </a>
          <a className="nav-btn" href="hall-of-fame">
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
