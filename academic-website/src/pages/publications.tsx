import React from "react";
import Layout from "../components/Layout";
import { publications, personalInfo } from "../data/siteConfig";

/** Primary source for a paper: label + url (arXiv, DOI, or venue link). No PDF. */
function getSource(
  pub: (typeof publications)[0]
): { label: string; url: string } | null {
  if (pub.arxiv)
    return {
      label: "arXiv",
      url: `https://arxiv.org/abs/${pub.arxiv}`,
    };
  if (pub.doi)
    return {
      label: "DOI",
      url: `https://doi.org/${pub.doi}`,
    };
  if (pub.url)
    return {
      label: "Paper",
      url: pub.url,
    };
  return null;
}

/**
 * Publications page: minimal layout.
 * Title with source (arXiv/DOI/Paper) on the right; authors, venue; abstract. No PDF.
 */
const PublicationsPage = () => {
  return (
    <Layout title={`Publications | ${personalInfo.name}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Publications</h1>

        <ul className="space-y-8">
          {publications.map((pub) => {
            const source = getSource(pub);

            return (
              <li
                key={pub.id}
                className="pb-8 last:pb-0 border-b border-gray-100 last:border-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  <h2 className="text-lg font-semibold text-gray-900 leading-snug min-w-0">
                    {source ? (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h2>
                  {source && (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                    >
                      {source.label}
                    </a>
                  )}
                </div>
                <p className="text-gray-600 text-sm mt-1">{pub.authors}</p>
                <p className="text-gray-500 text-sm italic mt-0.5">
                  {pub.venue}, {pub.year}
                  {pub.status ? ` (${pub.status})` : ""}
                </p>
                {pub.code && (
                  <a
                    href={pub.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-blue-600 hover:text-blue-800"
                  >
                    Code
                  </a>
                )}
                {pub.abstract && (
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {pub.abstract}
                  </p>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-3">
            For a complete list and citation metrics, see my Google Scholar
            profile.
          </p>
          <a
            href={personalInfo.socialLinks.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Google Scholar →
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default PublicationsPage;
