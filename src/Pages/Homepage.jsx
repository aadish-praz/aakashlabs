import Aboutus from "@/Components/Aboutus";
import ContactForm from "@/Components/ContactForm";
import Header from "@/Components/Header";
import Home from "@/Components/Home";
import OurTeam from "@/Components/OurTeam";
import Slider from "@/Components/Slider";
import Sociallinks from "@/Components/Sociallinks";

import React from "react";
import { Toaster } from "sonner";

const Homepage = () => {
  return (
    <>
      <div className="bg-gray-50">
        <Home />
        <Aboutus />
        <OurTeam />
        <Slider />
        <Toaster position="top-center" />
        <ContactForm />
      </div>
    </>
  );
};

export default Homepage;
