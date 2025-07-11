import React from "react";

import hero from "../assets/hero.png";

const Home = () => {
  return (
    <div >
      <section id="home" className="bg-blue-500 py-16 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text Section */}
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Grow <span className="text-orange-400">Your</span> <br /> Business With Us
            </h1>
            <p className="text-lg mb-4 leading-relaxed">
              Aakash Labs combines technology with business intelligence to
              catalyze change and deliver data-driven results. We’re a dynamic
              team of passionate people with technical, creative & digital
              expertise.
            </p>
            <p className="text-base italic mb-6">
              Where technology meets marketing
            </p>
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
              Get Free Consultation
            </button>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={hero}
              alt="Hero Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-stretch gap-12 px-6 md:px-20 py-16 bg-gray-50">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
            Our experienced team is committed to grow your business with online
            leads, calls, conversion, and revenue.
          </h1>

          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <img
                src="https://aakashlabs.com/_nuxt/img/we.76fe506.svg"
                className="w-12 h-12 mt-1"
              />
              <div>
                <h2 className="text-lg font-semibold text-blue-700">
                  WHO WE ARE
                </h2>
                <p className="text-gray-600">
                  A unique blend of creative, editorial, digital and technical
                  experts obsessed with getting quantifiable results.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <img
                src="https://aakashlabs.com/_nuxt/img/approved.7a97414.svg"
                className="w-12 h-12 mt-1"
              />
              <div>
                <h2 className="text-lg font-semibold text-blue-700">
                  WHAT WE DO
                </h2>
                <p className="text-gray-600">
                  Converge at the intersection of technology and human behavior.
                  We capitalize on the perks of data-driven marketing.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <img
                src="https://aakashlabs.com/_nuxt/img/value.3be8bbf.svg"
                className="w-12 h-12 mt-1"
              />
              <div>
                <h2 className="text-lg font-semibold text-blue-700">
                  WHY DO WE DO IT
                </h2>
                <p className="text-gray-600">
                  Passion for excellence drives us. Curiosity keeps us alive.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 h-full flex">
          <img
            src="https://aakashlabs.com/_nuxt/img/WhatweDo.4a238bb.jpeg"
            alt="What we do"
            className="w-full h-[450px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
