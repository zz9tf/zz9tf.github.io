import React from "react";
import Layout from "../components/Layout";
import {
  personalInfo,
  aiProjectAreas,
  aiEngineeringSkills,
  projectsPageTagline,
} from "../data/siteConfig";

/**
 * Projects page: AI Engineer / systems focus.
 * Presents as Applied AI Engineer / Research Engineer / ML Systems Engineer.
 */
const ProjectsPage = () => {
  return (
    <Layout title={`Projects | ${personalInfo.name}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Projects</h1>
        <p className="text-gray-600 text-lg mb-10">{projectsPageTagline}</p>

        <div className="space-y-8">
          {aiProjectAreas.map((area) => (
            <section
              key={area.id}
              className="bg-white rounded-lg border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  {area.title}
                </h2>
                <ul className="space-y-2">
                  {area.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 text-sm flex items-start gap-2"
                    >
                      <span className="text-blue-500 shrink-0 mt-0.5">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            AI Engineering Skills
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600 text-sm">
            {aiEngineeringSkills.map((skill, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-500 shrink-0">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
