import "../css/Navigation.css";

const Navigation = () => {
  return (
    <div className="header">
      <div className="nav-bar">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Awards</button>
        <button className="nav-btn" id="hall-of-fame">
          Hall of Fame
        </button>
      </div>
    </div>
  );
};

export default Navigation;
