import "../css/CheckIn.css";
import AttendeesList from "./AttendeesList";

const CheckIn = () => {
  return (
    <div className="ap-check-in-section">
      {/* form section */}
      <div className="ap-form">
        <div className="ap-inputs-area">
          <div className="ap-input-container">
            <label>Name</label>
            <input
              type="text"
              //   onChange={}
            ></input>
          </div>
          <div className="ap-input-container">
            <label>Contact No</label>
            <input
              type="text"
              value={""}
              //   onChange={}
              placeholder="+947XXXXXXXX"
            ></input>
          </div>
          <div className="ap-input-container">
            <label>Associated Award</label>
            <input
              type="text"
              value={""}
              //   onChange={}
            ></input>
          </div>

          <div className="ap-input-container">
            <label>Category</label>
            <input
              type="text"
              value={""}
              //   onChange={}
            ></input>
          </div>
        </div>
        <div className="ap-button-area">
          <button className="ap-form-btn">Mark as Attended</button>
          <button className="ap-form-btn">Clear</button>
        </div>
      </div>

      {/* attendees list section */}
      <div className="ap-attendees-list">
        <AttendeesList />
      </div>
    </div>
  );
};

export default CheckIn;
