import React from "react";
import "./App.css";
import "./index.css";

import Homepage from "./Pages/Homepage";
import Sociallinks from "./Components/Sociallinks";
import Header from "./Components/Header";
import AdditionalPage from "./Pages/AdditionalPage";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import OurTeam from "./Components/OurTeam";
import Slider from "./Components/Slider";
import ContactForm from "./Components/ContactForm";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/testimonials" element={<Slider />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/additionalpage" element={<AdditionalPage />} />
      </Routes>
      <Sociallinks />
    </>
  );
}

export default App;
