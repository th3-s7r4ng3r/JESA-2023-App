import { useState, useEffect } from "react";
import "../css/Carousel.css";

const Carousel = () => {
  //declaring the state variables
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagItems, setImagItems] = useState([]);
  const [clickedDirection, setClickedDirection] = useState("right" as any);

  //getting links and data of the images
  useEffect(() => {
    const readCarouselFile = async () => {
      try {
        const carouselContent = await fetch("./data/carousel.json");
        const carouselContentText = await carouselContent.json();
        setImagItems(carouselContentText);
      } catch (error) {
        console.error(error);
      }
    };
    readCarouselFile();
  }, []);

  //handling the previous and next button actions
  const handlePrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setClickedDirection("left");
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imagItems.length - 1 : prevIndex - 1
      );
    }
  };
  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setClickedDirection("right");
      setCurrentIndex((prevIndex) =>
        prevIndex === imagItems.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Auto-scroll to the next item every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imagItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    // Clear the interval when the currentIndex changes
    return () => clearInterval(interval);
  }, [currentIndex, imagItems.length]);

  //handling the transition of the images
  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 750);

    return () => {
      clearTimeout(transitionTimeout);
      setIsTransitioning(true);
    };
  }, [currentIndex]);

  //setting the selected item
  const currentItem = imagItems[currentIndex];

  return (
    imagItems.length !== 0 && (
      <div className="carousel-image-holder">
        <img
          src={currentItem["link"]}
          alt={currentItem["description"]}
          className={
            isTransitioning
              ? clickedDirection == "right"
                ? "carousel-image transitioning-right"
                : "carousel-image transitioning-left"
              : "carousel-image"
          }
        />
        <button
          onClick={handleNext}
          className="fa fa-angle-right prev-btn"
        ></button>
        <button
          onClick={handlePrevious}
          className="fa fa-angle-left next-btn"
        ></button>
        <a href="#about" className="scroll-btn">
          Scroll Down
        </a>
      </div>
    )
  );
};

export default Carousel;
