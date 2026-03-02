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
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">
            Projects
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            {projectsPageTagline}
          </p>
        </header>

        <div className="space-y-14">
          {aiProjectAreas.map((area) => (
            <section key={area.id} className="group">
              <h2 className="text-lg font-medium text-gray-900 mb-4 pl-4 border-l-2 border-gray-300 group-hover:border-blue-400 transition-colors">
                {area.title}
              </h2>
              <ul className="space-y-3">
                {area.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-600 text-[15px] leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-blue-400 shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-16 pt-12 border-t border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-5 pl-4 border-l-2 border-gray-300">
            AI Engineering Skills
          </h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600 text-[15px]">
            {aiEngineeringSkills.map((skill, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-blue-400">·</span>
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
