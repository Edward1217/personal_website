import React from "react";
import myPhoto from "./images/profile.png";
const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100"
      id="home"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4">
        {/* Hero Text Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
          <h3 className="text-gray-600 text-lg">My name is</h3>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Chi Hao (Edward) Tu
          </h1>

          <div className="mt-4">
            <div className="text-lg text-gray-600">I'm a</div>
            <div className="text-2xl font-semibold text-gray-900">
              Web Developer
            </div>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">
            I am currently pursuing a Master's degree in Computer Science at
            University of the Pacific.
          </p>

          <a
            href="https://drive.google.com/file/d/1LJP4ZWQU2ob_XEcdrGFY9lWHrgVHt9D3/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition-all">
              Download CV
            </button>
          </a>
        </div>

        {/* Hero Image Section */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end">
          <div className="w-64 lg:w-80">
            <img
              src={myPhoto}
              alt="edward"
              className="w-full object-cover rounded-full shadow-md"
            />
          </div>

          {/* Tech Skills Images */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
