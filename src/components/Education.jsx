import React from "react";

const Education = () => {
  return (
    <section className="education bg-gray-100 py-12" id="education">
      <header className="section-heading text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">EDUCATION</h1>
      </header>
      <div className="education-contents container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        {/* Degree 1 */}
        <div className="degree-box bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Master's in Computer Science
          </h2>
          <h3 className="text-xl text-gray-600 mb-4">
            University of the Pacific
          </h3>
          <p className="text-gray-600">2023 - 2024</p>
          <p className="text-gray-500 mt-4">
            Coursework includes Data Structures, Algorithms, Web Development,
            Machine Learning, Deep Learning,and Full Stack Development.
          </p>
        </div>

        {/* Degree 2 */}
        <div className="degree-box bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Bachelor's in English and Finance
          </h2>
          <h3 className="text-xl text-gray-600 mb-4">Tamkang University</h3>
          <p className="text-gray-600">2010 - 2014</p>
          <p className="text-gray-500 mt-4">
            Focused on financial markets, investment strategies, and financial
            analysis. Developed an understanding of data-driven decision-making
            through analytics.
          </p>
        </div>

        {/* Degree 3 */}
        <div className="degree-box bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Online Courses
          </h2>
          <h3 className="text-xl text-gray-600 mb-4">
            Udemy, Coursera, Codecademy
          </h3>
          <p className="text-gray-600">Ongoing</p>
          <p className="text-gray-500 mt-4">
            Supplementary learning in Full Stack Development, Data Science, and
            Machine Learning. Completed courses in React, Node.js, Python, and
            Pytorch.
          </p>
        </div>

        {/* Additional Info */}
        <div className="degree-box bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Certifications
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Google Data Analytics Professional Certificate</li>
            <li>IBM Data Science Professional Certificate</li>
            <li>React Front To Back (Udemy)</li>
            <li>Full Stack Web Developer (Coursera)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
