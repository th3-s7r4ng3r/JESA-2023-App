import "../css/AttendeesList.css";

const AttendeesList = () => {
  return (
    <div className="ap-list-card">
      <div className="apc-title">Award Name</div>
      <div className="apc-subsection">
        <div className="apc-subtitle">Nominees</div>
        <div className="apc-attendee">
          <div className="ap-status apc-active"></div>Attendee Name
        </div>
        <div className="apc-attendee">
          <div className="ap-status"></div>
        </div>
        <div className="apc-attendee">
          <div className="ap-status"></div>Attendee Name
        </div>
      </div>
      <div className="apc-subsection">
        <div className="apc-subtitle">Judge Panel</div>
        <div className="apc-attendee">
          <div className="ap-status"></div>Attendee Name
        </div>
        <div className="apc-attendee">
          <div className="ap-status apc-active"></div>Attendee Name
        </div>
        <div className="apc-attendee">
          <div className="ap-status apc-active"></div>Attendee Name
        </div>
      </div>
    </div>
  );
};

export default AttendeesList;
