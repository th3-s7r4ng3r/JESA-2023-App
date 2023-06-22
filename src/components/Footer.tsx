import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img
          src="./images/footer-image.png"
          alt="footer logo"
          className="footer-image"
        />
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
      <h4 className="copyright">
        &#169; 2023 Career Skills Development Society | Made in{" "}
        <span>&#10084;</span> with React | Open-sourced @
        <a
          href="https://github.com/th3-s7r4ng3r/JESA-2023-App"
          target="_blank"
          className="github"
        >
          GitHub
        </a>
      </h4>
    </>
  );
};

export default Footer;
