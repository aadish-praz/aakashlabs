import React from "react";

import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"; 

const Sociallinks = () => {
  return (
    <footer id="social" className="bg-sky-50 text-black rounded-t-[8%] pt-10 px-6 md:px-20 pb-6 ">
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-6 px-5">
        {/* Logo & Description */}
        <section className="mb-8 md:mb-0 w-1/4">
          <img src="https://aakashlabs.com/_nuxt/img/logo.556e083.png" alt="logo" className="w-28 mb-4" />
          <p className="text-sm leading-relaxed mb-4">
            AakashLabs implements advanced digital technologies in areas that
            are crucial to meeting your business objectives. Connect with us for
            details.
          </p>
          <div>
            <p className="text-sm mb-1">info@aakashlabs.com</p>
            <p className="text-sm">01-4530196</p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-8 md:mb-0">
          <h2 className="text-blue-900 text-lg font-semibold mb-3">
            QUICK LINKS
          </h2>
          <p className="text-sm mb-2">Our Expertise</p>
          <p className="text-sm mb-2">Case Studies</p>
          <p className="text-sm mb-2"><a href="#contact">Contact Us</a></p>
        </section>

        {/* About */}
        <section className="mb-8 md:mb-0">
          <h2 className="text-blue-900 text-lg font-semibold mb-3">ABOUT</h2>
          <p className="text-sm mb-2"><a href="#about">About Us</a></p>
          <p className="text-sm mb-2"><a href="#team">Team</a></p>
          <p className="text-sm mb-2">Career</p>
          <p className="text-sm mb-2">Blog</p>
        </section>

        {/* Social Icons */}
        <section>
          <h2 className="text-blue-900 text-lg font-semibold mb-3">
            Get Connected
          </h2>
          <div >
            <ul className="flex gap-4">
                <li><a href="https://www.facebook.com/AakashLabs" target="_blank"> <Facebook  className="border-blue-700cursor-pointer hover:text-blue-600" /></a></li>
                <li><a href="https://www.instagram.com/aakash.labs/" target="_blank"> <Instagram className="cursor-pointer hover:text-pink-600" /></a></li>
                <li><a href="https://www.linkedin.com/company/aakashlabs/?originalSubdomain=np" target="_blank"><Linkedin className="cursor-pointer hover:text-blue-700" /></a></li>
                <li><a href="https://api.whatsapp.com/send/?phone=9779801903810&text&type=phone_number&app_absent=0" target="_blank"> <MessageCircle className="cursor-pointer hover:text-green-500" /></a></li>

            </ul>
           
          </div>
        </section>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-sm text-center text-gray-600">
        &copy; {new Date().getFullYear()} Aakash Labs. All rights reserved.
      </div>
    </footer>
  );
};

export default Sociallinks;