// siteConfig.ts - Central configuration file for the academic website

// Personal Information
export const personalInfo = {
  name: "Zheng Zheng",
  title: "Visiting Research Scientist",
  department: "Department of Computer Science",
  institution: "Brandeis University",
  email: "zhengzheng@brandeis.edu",
  phone: "573-202-1823",
  address: {
    line1: "829 South Ave.",
    line2: "Plainfield, NJ, 07062",
  },
  profileImage: "/profile-placeholder.jpg",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/zheng-zheng-082420217/",
    github: "https://github.com/zz9tf",
    googleScholar:
      "https://scholar.google.com/citations?user=7qqGJ1AAAAAJ&hl=en&oi=sra",
  },
};

// CV/Resume Files
export const resumeFiles = {
  englishCV: "/Zheng_Zheng_phd_CV.pdf",
  chineseResume: "/简历_郑铮.pdf",
};

// About Me Section
export const aboutMe = {
  paragraphs: [
    "Welcome to my academic website! I am a Visiting Research Scientist in the Department of Computer Science at Brandeis University. My research focuses on large language models, deep learning, and retrieval-augmented generation systems.",
    "I received my M.S. in Computer Science from Brandeis University in 2023, where I worked on developing novel algorithms for deep learning and natural language processing. I also hold a B.S. in Geology and Geophysics from Missouri University of Science and Technology.",
    "My current research projects include designing multiple abstraction level systems for retrieval-augmented generation and optimizing recommendation systems with innovative techniques like the Low Rank Layer method.",
  ],
};

// Research Interests
export const researchInterests = [
  "Large Language Models",
  "Retrieval-Augmented Generation (RAG)",
  "Deep Learning",
  "Recommender Systems",
  "Natural Language Processing",
  "Multimodal Machine Learning",
  "Full-Stack Application Development",
];

// News Items
export const newsItems = [
  {
    date: "January 2025",
    content:
      'Our paper "Multiple Abstraction Level Retrieve Augment Generation" has been published on arXiv.',
  },
  {
    date: "April 2024",
    content:
      "Started as a Visiting Research Scientist at Brandeis University working on RAG systems.",
  },
  {
    date: "October 2023",
    content:
      'Our paper "FiBiNet++: Reducing model size by low rank feature interaction layer for CTR prediction" has been published at CIKM\' 23.',
  },
  {
    date: "December 2023",
    content:
      "Completed Master's degree in Computer Science at Brandeis University.",
  },
];

// Education
export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Brandeis University",
    period: "Sep. 2021 - Dec. 2023",
    gpa: "3.8/4.0",
    courses:
      "Deep Learning, Fundamentals of Natural Language Processing, Data Structures and the Fundamentals of Computing, Advanced Programming Techniques in Java, Discrete Structures, Theory of Computation, 3-D Animation, Operating Systems",
  },
  {
    degree: "Bachelor of Science in Geology and Geophysics",
    institution: "Missouri University of Science and Technology",
    period: "Sep. 2019 - May 2021",
    gpa: "4.0/4.0",
    courses: "Computational Geophysics, Discrete Math, Global Tectonics",
  },
  {
    degree: "Bachelor of Engineering",
    institution: "China University of Geosciences (Beijing)",
    period: "Sep. 2016 - May 2019",
    major: "Resource Exploration Engineering (Energy)",
  },
];

// Publications
export interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi?: string;
  pdf?: string;
  code?: string;
  arxiv?: string;
  isHighlighted?: boolean;
  abstract?: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title: "Multiple Abstraction Level Retrieve Augment Generation",
    authors: "Zheng, Z., Ni, X., & Hong, P.",
    venue: "arXiv preprint",
    year: 2025,
    arxiv: "2501.16952",
    isHighlighted: true,
    abstract:
      "This paper proposes a novel multi-scale Retrieval-Augmented Generation (RAG) algorithm that addresses problems like 'lost in the middle' and incomplete semantic context. The approach organizes documents into hierarchical nodes across multiple abstraction levels, enhancing RAG performance by 25.7% compared to traditional sentence splitter methods.",
  },
  {
    id: 2,
    title:
      "FiBiNet++: Reducing model size by low rank feature interaction layer for CTR prediction",
    authors: "Zhang, P., Zheng, Z., & Zhang, J.",
    venue:
      "Proceedings of the 32nd ACM International Conference on Information and Knowledge Management (CIKM)",
    year: 2023,
    doi: "10.1145/3583780.3615242",
    isHighlighted: true,
    abstract:
      "This paper introduces FiBiNet++, an optimized version of the FiBiNet recommendation system model. By implementing an innovative Low Rank Layer and transforming element-wise Hadamard product into an inner product method, we significantly reduced the model size by 12-16x while improving performance over state-of-the-art models.",
  },
];

// Research Projects
export interface ResearchProject {
  id: number;
  title: string;
  description: string;
  image: string;
  team: string[];
  funding: string;
  period: string;
  highlights: string[];
}

export const researchProjects: ResearchProject[] = [
  {
    id: 1,
    title: "MAL RAG: Multiple Abstraction Level Retrieval-Augmented Generation",
    description:
      "This project focuses on developing a novel multi-scale Retrieval-Augmented Generation (RAG) algorithm that addresses key challenges in existing RAG systems. We propose a hierarchical approach that organizes documents into structured, multi-level nodes, significantly improving the quality and relevance of retrieved context for language model augmentation.",
    image: "/research-project-1.jpg",
    team: [
      "Zheng Zheng (Visiting Research Scientist)",
      "Xinyi Ni",
      "Prof. Pengyu Hong (PI)",
    ],
    funding: "Brandeis University",
    period: "April 2024 - Present",
    highlights: [
      "Designed and implemented an end-to-end RAG system pipeline encompassing data gathering, preprocessing, extraction, model deployment, and performance evaluation",
      "Collected and curated 8,000+ documents using advanced web scraping techniques and GROBID for structured parsing",
      "Created a hierarchical node structure across four abstract levels to enhance semantic context retrieval",
      "Employed Linq-Embed-Mistral for semantic splitting and Vicuna-13B with MapReduce for content distillation",
      "Improved answer correctness by 25.7% compared to traditional RAG methods based on Ragas evaluation metrics",
    ],
  },
  {
    id: 2,
    title: "FiBiNet++: Optimizing Recommendation Systems",
    description:
      "This research focuses on optimizing recommendation system models by reducing computational complexity while maintaining or improving performance. We specifically targeted the FiBiNet architecture, introducing innovations that significantly reduced model size and enhanced training efficiency.",
    image: "/research-project-2.jpg",
    team: [
      "Pengtao Zhang (PI)",
      "Zheng Zheng (Research Fellow)",
      "Junlin Zhang",
    ],
    funding: "Industry Collaboration",
    period: "2022 - 2023",
    highlights: [
      "Designed an innovative 'Low Rank Layer' to replace standard matrix operations in the feature interaction layer",
      "Transformed element-wise Hadamard product operations into more efficient inner product methods",
      "Enhanced the 'squeeze' step in the SENet structure through strategic data point grouping",
      "Conducted comprehensive benchmarking against multiple state-of-the-art models including DNN, DeepFM, xDeepFM, DCN, and others",
      "Achieved 12-16x reduction in model size with significant improvements in training and inference efficiency (37.5-81.03%)",
    ],
  },
  {
    id: 3,
    title: "Multimodal Question Answering Systems",
    description:
      "This project involved the reproduction and analysis of multimodal vision-language models, with a focus on understanding the integration of visual and textual components for effective question answering. By exploring different image resolutions and model configurations, we gained insights into optimizing multimodal systems for various applications.",
    image: "/research-project-3.jpg",
    team: ["Zheng Zheng"],
    funding: "Academic Project",
    period: "November 2024",
    highlights: [
      "Reproduced and analyzed the architecture of multimodal vision-language models like PaliGemma",
      "Fine-tuned models on benchmark datasets including VQAv2 and ScienceQA",
      "Tested different image resolutions (224px, 448px, and 896px) to optimize visual processing",
      "Developed a better understanding of how visual and textual components integrate in multimodal systems",
    ],
  },
];

// Teaching Experience
export const teachingExperience = [
  {
    institution: "Brandeis Computer Science Department",
    role: "Teaching Assistant with Prof. Timothy J. Hickey",
    period: "Sep. 2022 - May 2023",
    courses: [
      "COSI-10A: Introduction to Problem Solving in Python - Fall 2022 & Summer 2023",
      "COSI-153A: Mobile Application Development - Summer 2023",
      "COSI-29A: Discrete Structures - Fall 2023",
    ],
  },
];

// Projects
export const projects = [
  {
    title: "Hire Me Now",
    link: "https://hiremenow-ai.com",
    period: "Mar. 2023",
    technologies:
      "Docker, AWS, MERN stack, Django, Nginx, Certbot, Stripe, RESTful, LLM model",
    highlights: [
      "Designed and developed a full-stack website powered by LLM models aimed at assisting employees in their job search competition, utilizing Django framework, and MERN stack (MongoDB, Express.js, React, Node.js)",
      "Built Express and Django microservices with serverless REST API. The Django implemented with PEP8 code style",
      "Architected a React frontend with Redux, Google Authentication and Stripe API to forbid 100% unauthorized access and enhance data status management",
      "Configured Nginx and Certbot with SSL-certification to facilitate communications between different services",
      "Containerized the entire system using Docker and developed shell scripts to automate installation and deployment",
      "Deployed the whole system on the AWS EC2 service and incorporated a domain name using GoDaddy and Route 53",
    ],
  },
  {
    title: "Multimodal QA system",
    period: "Nov. 2024",
    technologies: "LLM, Transformer, CNN, Decoder",
    highlights: [
      "Reproduced and analyzed the multimodal vision-language model, exploring its architecture and understanding the integration of visual and textual components for vision-language tasks.",
      "Fine-tuned the model on question answering benchmark VQAv2 and ScienceQA, achieving state-of-the-art results across various benchmarks.",
      "Implemented and tested the multimodal pre-training process for PaliGemma, experimenting with different image resolutions (224px, 448px, and 896px) to optimize performance for high-resolution image tasks.",
    ],
  },
  {
    title: "Predicting Effective Arguments",
    link: "https://github.com/zz9tf/DL-Predicting-Effective-Arguments",
    period: "Mar. 2023",
    technologies: "RNN, GRU, LSTM, Bert, Pytorch, Matplotlib",
    highlights: [
      "Preprocess datasets into Torchtext data iterators, including steps such as lowercasing, removing stopwords, performing stemming and lemmatization, and handling out-of-vocabulary (OOV) words.",
      "Designed and trained various neural network models, including RNN, LSTM, GRU, and BERT, to classify argumentative elements within essays written by U.S. students.",
      "Conducted an ablation study combined with a grid search to systematically evaluate model performance, achieving the lowest loss and highest accuracy across different architectures.",
    ],
  },
];

// Technical Skills
export const technicalSkills = {
  languages:
    "Python, Java, HTML/CSS, JavaScript, TypeScript, R, C, SQL, Shell Script, Latex, Go",
  devTools:
    "Docker, AWS, Git, MongoDB, Nginx, Redis, MySQL, Cloudflare, nodemon, firebase, Google OAuth, Stripe",
  frameworks:
    "SpringBoot, SpringCloud, React, Django, Node.js, GraphQL, Pytorch, Tensorflow, Pandas, Numpy, babel.js, bootstrap, Redux",
  aiMachineLearning: [
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "PyTorch & TensorFlow",
    "Natural Language Processing",
    "Deep Learning Architecture Design",
    "Recommendation Systems",
  ],
  developmentDeployment: [
    "Full-Stack Web Development",
    "Docker Containerization",
    "AWS Cloud Services",
    "Microservices Architecture",
    "Database Design",
    "RESTful APIs",
  ],
};

// Research Overview
export const researchOverview = {
  description:
    "My research lies at the intersection of large language models, deep learning, and practical AI applications. I am particularly interested in:",
  interests: [
    "Retrieval-Augmented Generation (RAG) systems",
    "Multi-level information extraction and summarization",
    "Recommendation systems optimization",
    "Multimodal learning approaches",
  ],
  currentFocus:
    'Currently, my focus is on developing improved methods for knowledge retrieval and integration with large language models, addressing challenges like the "lost in the middle" phenomenon and incomplete semantic context in traditional RAG systems.',
};
