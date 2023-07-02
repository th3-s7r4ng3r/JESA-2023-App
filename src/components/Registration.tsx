import "../css/Registration.css";

// declaring registration component
const Registration = ({ handleClick, isRegistrationClosed = 1 }: any) => {
  // rendering registration component
  return (
    <div className="registration-section" id="jesa23">
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
        {/* Only display registration page */}
        <div className="registration-links">
          {/* Display each button if the registration date is closed */}
          {isRegistrationClosed === 0 ? (
            <button className="registration-btn" onClick={handleClick}>
              REGISTER NOW
            </button>
          ) : (
            <button className="registration-btn reg-closed">
              Registration Closed
            </button>
          )}
          <h4>
            Registrations{isRegistrationClosed === 0 ? " will be " : " were "}
            closed on 30th of July
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Registration;
