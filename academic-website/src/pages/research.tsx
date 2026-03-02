import React from "react";
import Layout from "../components/Layout";
import {
  personalInfo,
  researchVision,
  researchThemes,
} from "../data/siteConfig";

/**
 * Research page: narrative structure — vision + current research themes.
 * Each theme: problem context, what we do, figure, 1–2 related paper links.
 */
const ResearchPage = () => {
  return (
    <Layout title={`Research | ${personalInfo.name}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Research</h1>

        {/* Section 1 — Research Vision */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Research Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {researchVision.map((vision, index) => (
              <p
                className="text-gray-700 text-lg leading-relaxed mb-4"
                key={index}
              >
                {vision}
              </p>
            ))}
          </p>
        </section>

        {/* Section 2 — Current Research Themes */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Current Research Themes
          </h2>
          <div className="space-y-10">
            {researchThemes.map((theme) => (
              <article
                key={theme.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="md:grid md:grid-cols-12">
                  <div className="md:col-span-5 bg-gray-50 p-5 md:p-6">
                    <a
                      href={theme.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      title="Open figure in new tab"
                    >
                      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="flex h-[260px] items-center justify-center md:h-[320px]">
                          <img
                            src={theme.image}
                            alt={`Figure for ${theme.title}`}
                            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Text panel */}
                  <div className="md:col-span-7 p-6 md:p-7">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      {theme.title}
                    </h3>

                    {/* 更像论文摘要的排版：分段、行距稍大 */}
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {theme.problemContext}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {theme.whatWeDo}
                    </p>

                    {theme.papers.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {theme.papers.map((paper) => (
                          <a
                            key={paper.url}
                            href={paper.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-blue-700 transition hover:border-blue-200 hover:bg-blue-50"
                          >
                            {paper.label}
                            <span aria-hidden>↗</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResearchPage;
