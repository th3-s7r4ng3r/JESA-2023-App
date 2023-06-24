import "../css/ScrollToTop.css";
import { useState, useEffect } from "react";

// declaring scroll to top button's functionality
const ScrollToTop = () => {
  //declaring the state variables
  const [isVisible, setIsVisible] = useState(false);

  // displaying the scroll to top button when the user scrolls down 400px
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setIsVisible(scrollTop > 400);
  };

  // scrolling to the top of the page when the user clicks the button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // adding event listener to the window to check if the user has scrolled down 400px
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // rendering the scroll to top button
  return (
    <div
      className={`scroll-to-top ${isVisible ? "show" : "hide"}`}
      onClick={scrollToTop}
    >
      <i className="fa fa-chevron-up"></i>
    </div>
  );
};

export default ScrollToTop;
