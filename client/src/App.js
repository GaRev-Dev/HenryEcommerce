import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import image1 from "./assets/images/slide1.jpg";
import image2 from "./assets/images/slide2.jpg";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import BackgroundSlider from "react-background-slider";

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
        <Routes></Routes>
      </header>
      <main></main>
    </Router>
  );
}

export default App;
