// src/components/Resume/Resume.js
import React from "react";

const Resume = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Hi, I'm David!
              </h2>
              <p className="text-lg mb-4">
                I'm a Software Engineer based in Palo Alto,
                CA
              </p>
              <p className="text-sm mb-4">
                I like building scalable and reliable web
                applications, and currently tinkering with
                LLMs to build innovative programs.
              </p>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter text-gray-400 hover:text-blue-500"></i>
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github text-gray-400 hover:text-gray-600"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin text-gray-400 hover:text-blue-500"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">
                Resume
              </h4>
              <p className="mb-4">
                I recently graduated with a B.A in
                Information Science concentrating on Data
                Science at Cornell University, with a
                passion for combining technology and data.
              </p>
              <p className="mb-4">
                Experienced in full-stack web development,
                including projects like Pulse Music App.
              </p>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">
                Skills
              </h4>
              <ul className="mb-4">
                <li>JavaScript (React, Node.js)</li>
                <li>Python, Java</li>
                <li>HTML/CSS, Tailwind CSS</li>
                <li>MySQL, MongoDB</li>
              </ul>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">
                Education
              </h4>
              <p className="mb-4">
                Cornell University, Information Science, May
                2024
              </p>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">
                Experience
              </h4>
              <p className="mb-4">
                Software Engineer Intern @ Blue Mountain
              </p>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">
                Projects
              </h4>
              <ul className="mb-4">
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
              </ul>
            </div>
            <a
              href="/path/to/your/resume.pdf"
              className="text-blue-500 hover:underline"
            >
              Resume PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
