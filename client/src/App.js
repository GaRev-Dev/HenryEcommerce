import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import image1 from "./assets/images/slide1.jpeg";
import image2 from "./assets/images/slide2.png";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import BackgroundSlider from "react-background-slider";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import CardDetail from "./components/CardDetail/CardDetail";
import CardDetailContainer from "./components/CardDetailContainer/CardDetailContainer";

function App() {
  return (
    <Router>
      <NavBar />
      <header>
        <Home />
        <BackgroundSlider
          images={[image1, image2]}
          duration={5}
          transition={2}
        />
      </header>
      <main>
        <Routes>
          <Route exact path="/phone/:id" element={<CardDetailContainer />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route path="/" element={<CardsContainer />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
