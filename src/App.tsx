import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./css/App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NotFoundPage from "./components/NotFoundPage";
import Loading from "./components/Loading";

//lazy loading the components
const LazyHomePage = React.lazy(() => import("./components/HomePage"));
const LazyAwardPage = React.lazy(() => import("./components/AwardPage"));
const LazyHallofFame = React.lazy(() => import("./components/HallofFame"));
const LazyRegistrationPage = React.lazy(
  () => import("./components/RegistrationPage")
);
const LazyInvitationPage = React.lazy(
  () => import("./components/InvitationPage")
);

//main application
function App() {
  //storing details of each awards
  const [awardDetails, setAwardDetails] = useState([]);
  const [selectedAward, setSelectedAward] = useState(0);
  const [registrationClosed, setRegistrationClosed] = useState(0);

  //reading from the data files
  useEffect(() => {
    const readAwardFile = async () => {
      try {
        const awardConent = await fetch("/data/award.json");
        const awardConentText = await awardConent.json();
        setAwardDetails(awardConentText);
      } catch (error) {
        console.error(error);
      }
    };
    readAwardFile();
  }, []);

  //chekcing if the registration date is passed and updating the state
  useEffect(() => {
    const closingDate = new Date("2023-07-31");
    const todayDate = new Date();
    // automatically close the registration
    if (todayDate > closingDate) setRegistrationClosed(1);
  }, []);

  //handling animation with buttons
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //handling clicking on an award
  const handleAwardClick = (value: any) => {
    setSelectedAward(value);
    scrollToTop();
  };

  //render the main application
  return (
    awardDetails.length != 0 && (
      <>
        {/* always display the navigation bar */}
        <Navigation
          getToTop={scrollToTop}
          isRegistrationClosed={registrationClosed}
        />

        {/* using react router dom to handle the routes */}
        <Routes>
          {/* display home page */}
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyHomePage
                  awardsData={awardDetails}
                  isRegistrationClosed={registrationClosed}
                  getToTop={scrollToTop}
                  updateEachAwardClick={handleAwardClick}
                />
              </React.Suspense>
            }
          />
          {/* display hall of fame page */}
          <Route
            path="/hall-of-fame"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyHallofFame />
              </React.Suspense>
            }
          />
          {/* display registration page */}
          <Route
            path="/registration"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyRegistrationPage
                  isRegistrationClosed={registrationClosed}
                />
              </React.Suspense>
            }
          />
          {/* display Awards page with the selected award */}
          <Route
            path="/award/:award"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyAwardPage
                  awardData={awardDetails}
                  selectedAward={selectedAward}
                />
              </React.Suspense>
            }
          />
          <Route
            path="/invitation"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyInvitationPage />
              </React.Suspense>
            }
          />
          {/* <Route path="/loading" element={<Loading />} /> */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* Always display the footer and scroll to top */}
        <ScrollToTop />
        <Footer />
      </>
    )
  );
}

export default App;
