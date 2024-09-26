import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Expert" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Python", level: "Advanced" },
    { name: "SQL", level: "Advanced" },
    { name: "Git", level: "Advanced" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Data Analysis", level: "Advanced" },
  ];

  return (
    <section id="skills" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Skills</h2>
          <p className="text-gray-600 mt-4">
            A summary of my technical skills and proficiency levels.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{skill.level}</p>
              <div className="w-full bg-gray-200 rounded-full mt-4">
                <div
                  className={`h-2 rounded-full ${
                    skill.level === "Expert"
                      ? "bg-green-500 w-full"
                      : skill.level === "Advanced"
                      ? "bg-yellow-500 w-3/4"
                      : "bg-red-500 w-1/2"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
