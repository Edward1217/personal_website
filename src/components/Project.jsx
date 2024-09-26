import React from "react";

const projects = [
  {
    title: "Real Estate App",
    description:
      "A weather forecasting app developed using the MERN stack, allowing customers to post information about houses for sale or rent.",
    link: "https://github.com/Edward1217/mean-estate",
  },
  {
    title: "Restaurant Reservation Website",
    description:
      "A full-stack for Restaurant Reservation website using React, Node.js, and MongoDB. Supports user authentication and online Reservation.",
    link: "https://github.com/Edward1217/Web_Development_Comp227",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills, built using React and Tailwind CSS.",
    link: "https://github.com/YourGitHub/portfolio-website",
  },
  {
    title: "AI Dermatologist: Skin Scanner",
    description:
      "AI Dermatologist: Skin Scanner Skill: Uses computer vision and machine learning to analyze skin conditions from images.Function: Scans and detects skin abnormalities, offering insights and recommendations.",
    link: "https://github.com/Edward1217/ClearSkin",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#146C94] mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6">{project.description}</p>
              </div>
              <div className="p-6 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#D8C4B6] text-[#146C94] hover:bg-[#1e90ff] hover:text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
