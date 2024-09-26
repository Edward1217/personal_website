import React from "react";

const experiences = [
  {
    role: "AI Computer Vision Software Engineering Intern",
    company: "Transcoder System",
    duration: "June 2024 - September 2024",
    description: [
      "Conducted data preprocessing and augmentation techniques to enhance model performance.",
      "Implemented video classification model to classify dog's body and tail postures using deep learningtechniques.",
      "Executed various scripts to label, filter, and clean data sources.",
      "Achieved 95% accuracy on the validation set, outperforming existing approaches by 4%.",
    ],
  },
  {
    role: "International Sales Manager",
    company: "BAI SHA TECHNOLOGY",
    duration: "October 2017 - July 2022",
    description: [
      "Led market research by Google Analytics and built in-house databases for customer relationship management and saved 20-30% time of gathering relevant market data.",
      "Designed and implemented A/B experiments for products to improve 10% sales and revenues.",
      "Utilized B2B e-commerce platforms like Alibaba.com and Taiwantrade to increase 10 -15 % product sales and increase 20% customer base.",
      "Created SEO campaign for company website and Improved web rankings from page 3 to Top 5 for 10 major keywords in Google and Alibaba.com.",
    ],
  },
  {
    role: "International Sales Representative",
    company: "AIF global logistics",
    duration: "October 2015 - September 2017",
    description: [
      "Led CRM tools into the company's customer management system and Increased 20% sales conversion rate",
      "Built out the data and reporting infrastructure from the ground up using Excel and SQL to provide real-time insights and save 20% cost of data analyzation and management.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-gray-700">
                {experience.role}
              </h3>
              <p className="text-gray-600 font-medium mb-2">
                {experience.company}
              </p>
              <p className="text-gray-500 mb-4">{experience.duration}</p>
              <ul className="list-disc list-inside space-y-2">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
