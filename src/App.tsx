import "./css/App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AwardCard from "./components/AwardCard";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <>
      <Navigation />

      <HomePage />

      <Footer />
    </>
  );
};

export default App;
