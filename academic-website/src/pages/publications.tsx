import React from "react";
import Layout from "../components/Layout";
import { publications, personalInfo } from "../data/siteConfig";

const PublicationsPage = () => {
  // 按年份对论文进行分组
  const groupedByYear: { [year: number]: typeof publications } = {};
  publications.forEach((pub) => {
    if (!groupedByYear[pub.year]) {
      groupedByYear[pub.year] = [];
    }
    groupedByYear[pub.year].push(pub);
  });

  // 获取年份并降序排序
  const years = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  // 获取高亮论文
  const highlightedPublications = publications.filter(
    (pub) => pub.isHighlighted
  );

  // 获取文章链接
  const getPublicationLink = (pub: (typeof publications)[0]) => {
    if (pub.pdf) return pub.pdf;
    if (pub.doi) return `https://doi.org/${pub.doi}`;
    if (pub.arxiv) return `https://arxiv.org/abs/${pub.arxiv}`;
    return null;
  };

  return (
    <Layout title={`Publications | ${personalInfo.name}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Publications</h1>

        {highlightedPublications.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Featured Publications
            </h2>
            <div className="mb-10 space-y-6">
              {highlightedPublications.map((pub) => {
                const publicationLink = getPublicationLink(pub);

                return (
                  <div
                    key={pub.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden p-6 border-l-4 border-blue-500"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {publicationLink ? (
                        <a
                          href={publicationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition-colors"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h3>
                    <p className="text-gray-600 mb-2">{pub.authors}</p>
                    <p className="text-gray-500 mb-3">
                      <span className="font-medium">{pub.venue}</span>,{" "}
                      {pub.year}
                    </p>
                    {pub.abstract && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-1">
                          Abstract:
                        </h4>
                        <p className="text-gray-600 text-sm">{pub.abstract}</p>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm bg-blue-50 px-3 py-1 rounded-full"
                        >
                          DOI
                        </a>
                      )}
                      {pub.arxiv && (
                        <a
                          href={`https://arxiv.org/abs/${pub.arxiv}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm bg-blue-50 px-3 py-1 rounded-full"
                        >
                          arXiv
                        </a>
                      )}
                      {pub.pdf && (
                        <a
                          href={pub.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm bg-blue-50 px-3 py-1 rounded-full"
                        >
                          PDF
                        </a>
                      )}
                      {pub.code && (
                        <a
                          href={pub.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm bg-blue-50 px-3 py-1 rounded-full"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          All Publications
        </h2>

        <div className="space-y-8">
          {years.map((year) => (
            <div key={year}>
              <h3 className="text-xl font-bold text-gray-800 mb-3 border-b pb-1">
                {year}
              </h3>
              <div className="space-y-4">
                {groupedByYear[year].map((pub) => (
                  <div key={pub.id} className="pl-4 border-l-2 border-gray-200">
                    <p className="font-bold text-gray-800">{pub.title}</p>
                    <p className="text-gray-600 text-sm">{pub.authors}</p>
                    <p className="text-gray-500 text-sm italic mb-1">
                      {pub.venue}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-xs"
                        >
                          DOI
                        </a>
                      )}
                      {pub.arxiv && (
                        <a
                          href={`https://arxiv.org/abs/${pub.arxiv}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-xs"
                        >
                          arXiv
                        </a>
                      )}
                      {pub.pdf && (
                        <a
                          href={pub.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-xs"
                        >
                          PDF
                        </a>
                      )}
                      {pub.code && (
                        <a
                          href={pub.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-xs"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-10 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Google Scholar
          </h2>
          <p className="text-gray-600 mb-4">
            For a complete list of my publications and citation metrics, please
            visit my Google Scholar profile.
          </p>
          <a
            href={personalInfo.socialLinks.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out inline-flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 24a7 7 0 0 1-5.467-2.607 7.242 7.242 0 0 1-1.895-4.511c-.001-.844.21-1.666.618-2.385a7 7 0 0 1 5.428-3.554 6.866 6.866 0 0 1 1.932-.034 6.112 6.112 0 0 1 1.212.238l-.357.714c-.378-.124-.775-.204-1.177-.239a5.771 5.771 0 0 0-1.731.04 6 6 0 0 0-4.653 3.072 5.804 5.804 0 0 0-.532 2.044 6.257 6.257 0 0 0 1.636 3.899A6 6 0 0 0 12 23.001c1.591-.001 3.116-.642 4.243-1.773A6.025 6.025 0 0 0 18 17a5.886 5.886 0 0 0-2.585-4.888l.583-.566C17.92 12.962 19 15.010 19 17c0 1.858-.79 3.638-2.172 4.895-.195.164-.398.318-.609.46a7 7 0 0 1-4.219 1.644z"></path>
              <path d="M10 15.722h8v3H10z"></path>
              <path d="M21.75 4.27L11.746 0c-.4.703-2.2 3.85-4.05 7.11 0 0 2.309 1.669 4.704 1.669 1.525 0 2.836-.478 3.899-1.158l.004-.003 5.447-3.347z"></path>
              <path d="M7.693 7.11c-2.42 4.23-4.496 7.867-4.496 7.867 2.6.155 5.565-1.524 6.855-3.57h3.948v5H5v3h10v-8h-7.307z"></path>
            </svg>
            View Google Scholar Profile
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default PublicationsPage;
