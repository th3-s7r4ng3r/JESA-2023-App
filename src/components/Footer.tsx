import "../css/Footer.css";

// declaring the footer component
const Footer = () => {
  return (
    <>
      <div className="footer">
        <img
          src="./images/footer-image-white.png"
          alt="footer logo"
          className="footer-image"
        />
        {/* Displaying contact details */}
        <div className="contact-us">
          <h3>Contact Us</h3>
          <div className="contacts">
            <p>
              <p>For More Details</p>
              <b>Naveen T Hewage</b> : 071 176 6662
              <br />
              <b>Induwara Gamage</b> : 071 893 8256
            </p>
          </div>
        </div>
      </div>
      {/* declaring the copyright section */}
      <h4 className="copyright">
        {/* CSDS section */}
        <div className="csds">
          &#169; 2023 Career Skills Development Society
        </div>
        {/* Author section */}
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/vinura-gallage/"
          target="_blank"
          className="copyright-links"
        >
          Vinura Gallage
        </a>{" "}
        in <span className="copyright-heart">&#10084;</span> with React |
        Open-sourced @
        <a
          href="https://github.com/th3-s7r4ng3r/JESA-2023-App"
          target="_blank"
          className="copyright-links"
        >
          GitHub
        </a>
      </h4>
    </>
  );
};

export default Footer;
