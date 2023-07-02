import "../css/RegistrationPage.css";

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <h1>JESA'23 Registration</h1>
      <div className="reg-page-description">
        <img src="./images/jesa23-logo.png" alt="JESA'23 Logo" />
        <div>
          <p>
            Challenges that we don't accept become our limits So don't let your
            nervousness limit you
          </p>
          <p>
            The most elegant award ceremony ever organized Is awaiting your
            arrival !
          </p>
        </div>
      </div>
      <h3>
        Registrations will be closed on <span>30th of July</span>
      </h3>
      <div className="reg-page-form-links">
        <div className="reg-link-section">
          <h2>USJ Undergrads</h2>
          <p>Compete againt all the JESA awards</p>
          <a
            href="https://forms.gle/HkYRdbzjn1dE3TLr5"
            target="_blank"
            className="jesa-reg-btn"
          >
            REGISTER HERE
          </a>
        </div>
        <div className="reg-link-section">
          <h2>Other Undergrads</h2>
          <p>Compete againts the Best Innovator award</p>
          <a target="_blank" className="jesa-reg-btn disable-btn">
            COMING SOON
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
