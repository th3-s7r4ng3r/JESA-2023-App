import "../css/AttendancePage.css";
import CheckIn from "./CheckIn";
import Filters from "./Filters";

const AttendancePage = () => {
  //defining state variables

  return (
    <div className="attendance-page">
      {/* heading section */}
      <div className="ap-heading">
        <div className="ap-title">
          <h1>JESA 2023</h1>
          <h2>
            <span>Attendance</span>Marking System
          </h2>
        </div>

        {/* search section */}
        <div className="search-bar">
          <input
            type="text"
            // onChange={}
            placeholder="Search an attendee"
            className="search-box"
          ></input>
          {/* TODO: Add clear btn to search */}
          <i className="fa fa-search"></i>
        </div>
      </div>

      {/* Check in section */}
      <div className="ap-body">
        {/* filtering component */}
        <Filters />
        <CheckIn />
      </div>
    </div>
  );
};

export default AttendancePage;
