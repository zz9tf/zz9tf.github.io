import React from "react";
import Layout from "../components/Layout";
import {
  researchProjects,
  personalInfo,
  researchOverview,
  technicalSkills,
} from "../data/siteConfig";

const ResearchPage = () => {
  return (
    <Layout title={`Research | ${personalInfo.name}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Research</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Research Overview
          </h2>
          <p className="text-gray-600 mb-4">{researchOverview.description}</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
            {researchOverview.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
          <p className="text-gray-600">{researchOverview.currentFocus}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Research Projects
        </h2>

        <div className="space-y-10">
          {researchProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="md:grid md:grid-cols-3">
                <div className="md:col-span-1 relative h-48 md:h-full min-h-[200px]">
                  <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Project Image</span>
                  </div>
                </div>
                <div className="p-6 md:col-span-2">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Key Highlights
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                      {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Research Team
                      </h4>
                      <ul className="list-disc pl-5 text-gray-600 text-sm">
                        {project.team.map((member, index) => (
                          <li key={index}>{member}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Funding Source
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {project.funding}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Project Period
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {project.period}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-10 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                AI & Machine Learning
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                {technicalSkills.aiMachineLearning.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Development & Deployment
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                {technicalSkills.developmentDeployment.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResearchPage;
