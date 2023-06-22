import { useState, useEffect } from "react";
import "../css/Carousel.css";

const Carousel = () => {
  //storing links and data of the images
  const items = [
    { id: 1, link: "./images/carousel/image1.png", description: "Image 01" },
    { id: 2, link: "./images/carousel/image2.png", description: "Image 02" },
    { id: 3, link: "./images/carousel/image3.png", description: "Image 03" },
  ];

  //declaring the state variables
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  //handling the previous and next button actions
  const handlePrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    }
  };
  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Auto-scroll to the next item every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    // Clear the interval when the currentIndex changes
    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  //handling the transition of the images
  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => {
      clearTimeout(transitionTimeout);
      setIsTransitioning(true);
    };
  }, [currentIndex]);

  //setting the selected item
  const currentItem = items[currentIndex];

  return (
    <div className="carousel-image-holder">
      <img
        src={currentItem.link}
        alt={currentItem.description}
        className={
          isTransitioning ? "carousel-image transitioning" : "carousel-image"
        }
      />
      <button
        onClick={handlePrevious}
        className="fa fa-angle-right prev-btn"
      ></button>
      <button
        onClick={handleNext}
        className="fa fa-angle-left next-btn"
      ></button>
      <a href="#about" className="scroll-btn">
        Scroll Down
      </a>
    </div>
  );
};

export default Carousel;
