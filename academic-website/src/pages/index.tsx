import Image from "next/image";
import Layout from "../components/Layout";
import {
  personalInfo,
  homeBlurb,
  aboutMe,
  researchInterests,
  newsItems,
} from "../data/siteConfig";

export default function Home() {
  return (
    <Layout title={`${personalInfo.name} | Home`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48 rounded-full overflow-hidden">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                {personalInfo.name}
              </h1>
              <p className="text-center text-gray-600 mb-1">
                {personalInfo.title}
              </p>
              <p className="text-center text-gray-600 mb-1">
                {personalInfo.department}
              </p>
              <p className="text-center text-gray-600 mb-3">
                {personalInfo.institution}
              </p>

              <p className="text-center text-sm text-gray-600 mt-4 leading-relaxed italic">
                {personalInfo.homeBlurb}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-800 hover:text-gray-600"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gray-800 shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-600"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 shrink-0 mt-0.5"
                    fill="#0A66C2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-600"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-700 shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 24a7 7 0 0 1-5.467-2.607 7.242 7.242 0 0 1-1.895-4.511c-.001-.844.21-1.666.618-2.385a7 7 0 0 1 5.428-3.554 6.866 6.866 0 0 1 1.932-.034 6.112 6.112 0 0 1 1.212.238l-.357.714c-.378-.124-.775-.204-1.177-.239a5.771 5.771 0 0 0-1.731.04 6 6 0 0 0-4.653 3.072 5.804 5.804 0 0 0-.532 2.044 6.257 6.257 0 0 0 1.636 3.899A6 6 0 0 0 12 23.001c1.591-.001 3.116-.642 4.243-1.773A6.025 6.025 0 0 0 18 17a5.886 5.886 0 0 0-2.585-4.888l.583-.566C17.92 12.962 19 15.010 19 17c0 1.858-.79 3.638-2.172 4.895-.195.164-.398.318-.609.46a7 7 0 0 1-4.219 1.644z" />
                    <path d="M10 15.722h8v3H10z" />
                    <path d="M21.75 4.27L11.746 0c-.4.703-2.2 3.85-4.05 7.11 0 0 2.309 1.669 4.704 1.669 1.525 0 2.836-.478 3.899-1.158l.004-.003 5.447-3.347z" />
                    <path d="M7.693 7.11c-2.42 4.23-4.496 7.867-4.496 7.867 2.6.155 5.565-1.524 6.855-3.57h3.948v5H5v3h10v-8h-7.307z" />
                  </svg>
                  <a
                    href={personalInfo.socialLinks.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-600"
                  >
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          {/* <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {homeBlurb}
          </p> */}
          <div className="bg-white rounded-lg overflow-hidden mb-6">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                About Me
              </h2>
              {aboutMe.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden mb-6">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Research Interests
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {researchInterests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Recent News
              </h2>
              <div className="space-y-4">
                {newsItems.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
