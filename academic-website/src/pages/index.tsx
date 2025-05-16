import Image from "next/image";
import Layout from "../components/Layout";
import {
  personalInfo,
  aboutMe,
  researchInterests,
  newsItems,
} from "../data/siteConfig";

export default function Home() {
  return (
    <Layout title={`${personalInfo.name} | Home`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
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
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                {personalInfo.name}
              </h1>
              <p className="text-center text-gray-600 mb-4">
                {personalInfo.title}
              </p>
              <p className="text-center text-gray-600 mb-4">
                {personalInfo.department}
              </p>
              <p className="text-center text-gray-600">
                {personalInfo.institution}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Contact Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span className="text-gray-600">{personalInfo.email}</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span className="text-gray-600">{personalInfo.phone}</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span className="text-gray-600">
                    {personalInfo.address.line1}
                    <br />
                    {personalInfo.address.line2}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
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

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
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

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
