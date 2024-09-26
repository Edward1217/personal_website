import React from "react";

const About = () => {
  return (
    <section className="about bg-gray-100 py-12" id="about">
      <header className="section-heading text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Why Hello There!</h1>
      </header>
      <div className="about-contents container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        {/* About Information */}
        <div className="about-info bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4 text-lg text-gray-700">
            I take pride in honing my craft and tackling challenging problems.
            Naturally curious, I love to explore the beauty of the world around
            me. I'm also passionate about volunteering and connecting with new
            people. Outside of work, I enjoy traveling, hiking and photography.
          </p>

          <div className="about-personal-info space-y-2 text-gray-600">
            <div>
              <span className="font-bold">Email: </span>m932012@gmail.com
            </div>
            <div>
              <span className="font-bold">Location: </span>Stockton, CA
            </div>
          </div>

          {/* Social Media Links */}
          <div className="social-media flex space-x-4 mt-6">
            <a
              href="https://www.linkedin.com/in/hui-yu-chen-tw/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <i className="fa-brands fa-linkedin-in text-2xl"></i>
            </a>
            <a
              href="https://github.com/nolliechyTW"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:text-gray-900"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href="https://public.tableau.com/app/profile/nollie.chen"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              <i className="fa-solid fa-square-poll-vertical text-2xl"></i>
            </a>
            <a
              href="https://medium.com/@nolliechy-exploring"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:text-gray-900"
            >
              <i className="fa-brands fa-medium text-2xl"></i>
            </a>
          </div>
        </div>

        {/* About Experience */}
        <div className="about-experience grid grid-cols-1 gap-6">
          {/* Experience Box 1 */}
          <div className="experience-box flex items-center bg-white p-6 rounded-lg shadow-md">
            <span className="icon text-blue-500 mr-4">
              <i className="fa-solid fa-briefcase text-3xl"></i>
            </span>
            <div className="experience-container">
              <span className="experience-desc">
                <h2 className="text-xl font-bold text-gray-700">2 Years+</h2>
                <p className="text-gray-600">of Experience</p>
              </span>
            </div>
          </div>

          {/* Experience Box 2 */}
          {/* <div className="experience-box flex items-center bg-white p-6 rounded-lg shadow-md">
            <span className="icon text-yellow-500 mr-4">
              <i className="fa-solid fa-award text-3xl"></i>
            </span>
            <div className="experience-container">
              <span className="experience-desc">
                <h2 className="text-xl font-bold text-gray-700">5 Times</h2>
                <p className="text-gray-600">on the Dean's List in college</p>
              </span>
            </div>
          </div> */}

          {/* Experience Box 3 */}
          <div className="experience-box flex items-center bg-white p-6 rounded-lg shadow-md">
            <span className="icon text-purple-500 mr-4">
              <i className="fa-solid fa-wand-magic-sparkles text-3xl"></i>
            </span>
            <div className="experience-container">
              <span className="experience-desc">
                <h2 className="text-xl font-bold text-gray-700">
                  10+ Projects
                </h2>
                <p className="text-gray-600">Completed</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
