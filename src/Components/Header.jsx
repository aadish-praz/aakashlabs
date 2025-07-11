import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full shadow-md p-4 px-8 flex items-center justify-between bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <a href="#home"><img src="https://aakashlabs.com/_nuxt/img/logo.556e083.png" alt="Logo" className="h-10 w-auto" /></a>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
        <Link to ="/" className="hover:text-blue-600 transition"><strong>Home</strong></Link>
        <Link to="/aboutus" className="hover:text-blue-600 transition"><strong>About us</strong></Link>
        <Link to="/ourteam" className="hover:text-blue-600 transition"><strong>Our Team</strong></Link>
        <Link to="/testimonials" className="hover:text-blue-600 transition"><strong>Testimonials</strong></Link>
        <Link to="/additionalpage" className="hover:text-blue-600 transition"><strong>Random Page</strong></Link>
      </nav>

      {/* Contact Button */}
      <div className="hidden md:flex bg-blue-600 text-white rounded-[16px]">
        <Button><Link to="/contact">Contact Us</Link></Button>
      </div>
    </header>
  );
};

export default Header;
