import React from "react";
import Layout from "../components/Layout";
import {
  personalInfo,
  resumeFiles,
  education,
  researchProjects,
  publications,
  teachingExperience,
  projects,
  technicalSkills,
} from "../data/siteConfig";

const CVPage = () => {
  return (
    <Layout title={`Curriculum Vitae | ${personalInfo.name}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Curriculum Vitae</h1>
          <div className="flex gap-3">
            <a
              href={resumeFiles.englishCV}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              English CV
            </a>
            <a
              href={resumeFiles.chineseResume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              中文简历
            </a>
          </div>
        </div>

        <div className="space-y-10">
          {/* 教育背景 */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-gray-800">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500">{edu.period}</p>
                  {edu.gpa && (
                    <p className="text-gray-600 mt-1">GPA: {edu.gpa}</p>
                  )}
                  {edu.courses && (
                    <p className="text-gray-600">
                      Relevant Courses: {edu.courses}
                    </p>
                  )}
                  {edu.major && (
                    <p className="text-gray-600 mt-1">Major: {edu.major}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 工作经历 */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Research Experience
            </h2>
            <div className="space-y-4">
              {researchProjects.map((project, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.team.find((member) =>
                      member.includes("Zheng Zheng")
                    )
                      ? project.team
                          .find((member) => member.includes("Zheng Zheng"))
                          ?.split("(")[1]
                          ?.split(")")[0] || ""
                      : "Research Fellow"}
                  </p>
                  <p className="text-gray-500">{project.period}</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Teaching Experience */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Teaching Experience
            </h2>
            <div className="space-y-4">
              {teachingExperience.map((exp, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-gray-800">
                    {exp.institution}
                  </h3>
                  <p className="text-gray-600">{exp.role}</p>
                  <p className="text-gray-500">{exp.period}</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    {exp.courses.map((course, cIndex) => (
                      <li key={cIndex}>{course}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-gray-800">
                    {project.title}{" "}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        (
                        {project.link.includes("github")
                          ? "github"
                          : "live website"}
                        )
                      </a>
                    )}
                  </h3>
                  <p className="text-gray-500">{project.period}</p>
                  <p className="text-gray-600 italic">{project.technologies}</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Publications
            </h2>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div key={index}>
                  <p className="text-gray-600">
                    {pub.authors
                      .replace("Zheng, Z.", "<strong>Zheng Zheng</strong>")
                      .replace(/<strong>.*?<\/strong>/g, (match) =>
                        match.replace(", ", "")
                      )}
                    . {pub.title}. In <em>{pub.venue}</em>, {pub.year}.{" "}
                    {pub.arxiv && (
                      <a
                        href={`https://arxiv.org/abs/${pub.arxiv}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        arXiv:{pub.arxiv}
                      </a>
                    )}
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        DOI
                      </a>
                    )}
                    .
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Technical Skills
            </h2>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Languages:</strong> {technicalSkills.languages}
              </p>
              <p className="text-gray-600">
                <strong>Dev Tools:</strong> {technicalSkills.devTools}
              </p>
              <p className="text-gray-600">
                <strong>Frameworks:</strong> {technicalSkills.frameworks}
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CVPage;
