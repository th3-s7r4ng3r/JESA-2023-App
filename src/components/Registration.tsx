import "../css/Registration.css";

// declaring registration component
const Registration = ({ handleClick }: any) => {
  return (
    <div className="registration-section" id="registration">
      <h1>JESA'23</h1>
      <div className="registration">
        <div className="registration-text">
          <p>
            Are you looking forward to being honoured for your accomplishments?
            <br />
            This is your moment to make history!{" "}
          </p>
          <p>
            <b>
              The most elegant award ceremony ever organized is awaiting your
              arrival!
            </b>
          </p>
        </div>
        <div className="registration-links">
          <button className="registration-btn" onClick={handleClick}>
            REGISTER NOW
          </button>
          <h4>Registrations will be closed on 30th of July</h4>
        </div>
      </div>
    </div>
  );
};

export default Registration;
