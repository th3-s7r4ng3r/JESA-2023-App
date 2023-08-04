import "../css/AfterRegistration.css";
import RegistrationDetails from "./RegistrationDetails";

// declaring the after registration component
const AfterRegistration = () => {
  return (
    <div className="ar-section">
      {/* Heading section */}
      <div className="ar-headings">
        <h1>JESA'23</h1>
        <div className="ar-description">
          <img src="./images/jesa23-logo.png" alt="JESA 2023 Logo" />
          <div className="ar-subtext">
            <h3>
              Check your registrations for JESA'23 and get your Registration
              Numbers!
            </h3>
            <div className="ar-check-container">
              <input
                type="text"
                placeholder="Your contact number"
                id="contact-no"
              />
              <button className="ar-check-btn">Check</button>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Details Section */}
      <RegistrationDetails />

      <h3 className="ar-footer-text">
        Something is wrong? Reach us from below!
      </h3>
    </div>
  );
};

export default AfterRegistration;
