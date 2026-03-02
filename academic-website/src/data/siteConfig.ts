// siteConfig.ts - Central configuration file for the academic website

// Personal Information
export const personalInfo = {
  name: "Zheng Zheng",
  title: "PhD Student",
  department: "Department of Computer Science",
  institution: "University of Texas at Arlington",
  email: "zxz7934@mavs.uta.edu",
  address: {
    line: "Arlington, TX USA",
  },
  profileImage: "/profile.jpg",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/zheng-zheng-082420217/",
    github: "https://github.com/zz9tf",
    googleScholar:
      "https://scholar.google.com/citations?user=MeADnoMAAAAJ&hl=en",
  },
  homeBlurb:
    '\"Understanding how structured information and optimization dynamics shape learning systems.\"',
};

// CV/Resume Files (PDFs must live in public/; compile zhengzheng_phd_resume.tex → zhengzheng_phd_resume.pdf)
export const resumeFiles = {
  englishCV: "/zhengzheng_phd_resume.pdf",
  chineseResume: "/简历_郑铮.pdf",
};

// About Me Section
export const aboutMe = {
  paragraphs: [
    "Welcome to my academic website. I am a Ph.D. student in Computer Science at the University of Texas at Arlington, advised by Prof. Junzhou Huang. My research lies at the intersection of biomedical machine learning, multi-modal representation learning, and optimization dynamics. I am particularly interested in how information is injected, aligned, and optimized across heterogeneous modalities in complex learning systems.",
    "My recent work focuses on heterogeneous aligned fusion for survival prediction under missing modalities (MIDL), multi-modal computational pathology, and gradient conflict in multi-objective learning. I investigate how shared and task-specific parameter subspaces evolve during training, and how optimization dynamics affect representation stability in biomedical models.",
    "More broadly, I am interested in understanding how large models—such as protein foundation models and large language models—encode and transfer structured information. I aim to explore principled methods for information injection and unsupervised representation learning in foundation-scale systems.",
    "Previously, I worked on efficient deep learning architectures and recommendation systems, including a low-rank feature interaction method presented at ICML 2023. However, my current focus is on developing a deeper theoretical and empirical understanding of learning dynamics in multi-modal and multi-objective settings.",
  ],
};

// Research Interests
export const researchInterests = [
  "Multimodal Learning under Missing Modalities",
  "Computational Pathology & Biomedical AI",
  "Heterogeneous Aligned Fusion",
  "Multi-Objective Optimization & Gradient Conflict",
  "Information Injection in Foundation Models",
  "Representation Learning & Subspace Dynamics",
  "Large-Scale Protein & Language Models",
];

// News Items
export const newsItems = [
  {
    date: "2026",
    content:
      'Our paper "Heterogeneous Aligned Fusion for Survival Prediction with Missing Modalities" has been accepted to Medical Imaging with Deep Learning (MIDL 2026).',
  },
  {
    date: "January 2025",
    content:
      'Our paper "Multiple Abstraction Level Retrieve-Augment Generation" was released on arXiv.',
  },
  {
    date: "October 2023",
    content:
      'Our paper "FiBiNet++: Reducing Model Size by Low-Rank Feature Interaction Layer for CTR Prediction" was published at CIKM 2023.',
  },
  {
    date: "December 2023",
    content: "Completed M.S. in Computer Science at Brandeis University.",
  },
];

// Education
export const education = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "University of Texas at Arlington",
    period: "Aug. 2024 - Present",
    advisor: "Prof. Junzhou Huang",
    status: "Ph.D. Student",
  },
  {
    degree: "M.S. in Computer Science",
    institution: "Brandeis University",
    period: "Sep. 2021 - Dec. 2023",
  },
  {
    degree: "B.S. in Geology and Geophysics",
    institution: "Missouri University of Science and Technology",
    period: "Sep. 2019 - May 2021",
  },
  {
    degree: "B.E. in Resource Exploration Engineering",
    institution: "China University of Geosciences (Beijing)",
    period: "Sep. 2016 - May 2019",
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
  /** Direct link to paper (PDF, OpenReview, etc.). Used when no single doi/pdf/arxiv applies. */
  url?: string;
  /** e.g. "To appear" */
  status?: string;
  /** Short topic tags for display */
  tags?: string[];
  /** Optional pipeline/figure image path under public/ (e.g. /publications/xxx.png) */
  image?: string;
  isHighlighted?: boolean;
  abstract?: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "Heterogeneous Aligned Fusion for Survival Prediction with Missing Modalities",
    authors: "Zheng, Z.; Guo, Y.; Hu, X.; Miao, Y.; Ma, H.; Gao, J.; Huang, J.",
    venue: "Medical Imaging with Deep Learning (MIDL)",
    year: 2026,
    status: "To appear",
    url: "https://openreview.net/pdf?id=XjyK23sUkI",
    isHighlighted: true,
    abstract:
      "We study multimodal survival prediction under naturally missing modalities and propose a heterogeneous aligned fusion framework to improve robustness and cross-modality alignment.",
    tags: [
      "Multimodal Survival",
      "Missing Modalities",
      "Computational Pathology",
      "Fusion",
    ],
    image: "/publications/midl-fusion-pipeline.png",
  },

  {
    id: 2,
    title: "Multiple Abstraction Level Retrieve Augment Generation",
    authors: "Zheng, Z.; Ni, X.; Hong, P.",
    venue: "arXiv preprint",
    year: 2025,
    arxiv: "2501.16952",
    url: "https://arxiv.org/abs/2501.16952",
    isHighlighted: true,
    abstract:
      "We propose MAL-RAG, a retrieval-augmented generation framework that retrieves evidence at multiple abstraction levels (multi-sentence, paragraph, section, document) to mitigate context fragmentation and the 'lost-in-the-middle' effect in scientific QA.",
    tags: ["RAG", "Multi-level Retrieval", "Scientific QA"],
    image: "/publications/mal-rag-pipeline.png",
  },

  {
    id: 3,
    title:
      "FiBiNet++: Reducing Model Size by Low-Rank Feature Interaction Layer for CTR Prediction",
    authors: "Zhang, P.; Zheng, Z.; Zhang, J.",
    venue: "CIKM '23",
    year: 2023,
    doi: "10.1145/3583780.3615242",
    url: "https://dl.acm.org/doi/10.1145/3583780.3615242",
    isHighlighted: false, // 建议把“高亮”留给当前biomed主线
    abstract:
      "We introduce a low-rank feature interaction layer to compress FiBiNet-style CTR models, substantially reducing non-embedding parameters while maintaining competitive performance.",
    tags: ["Recommender Systems", "CTR Prediction", "Model Compression"],
    image: "/publications/fibinet-pipeline.png",
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

// Projects page (AI Engineer / systems focus)
export interface AIProjectArea {
  id: number;
  title: string;
  highlights: string[];
}

export const aiProjectAreas: AIProjectArea[] = [
  {
    id: 1,
    title: "RAG System Engineering",
    highlights: [
      "Data crawling and document ingestion",
      "GROBID parsing and structured extraction",
      "Embedding pipeline and retrieval",
      "Vector DB and indexing",
      "Evaluation framework (e.g. Ragas)",
    ],
  },
  {
    id: 2,
    title: "Large-scale Training Infrastructure",
    highlights: [
      "Multi-GPU training and distributed experiments",
      "Logging and experiment tracking",
      "Gradient wrapper and custom hooks",
      "Custom training loops and optimization",
    ],
  },
  {
    id: 3,
    title: "Recommender System Optimization",
    highlights: [
      "Low-rank feature interaction layers",
      "Performance benchmarking and ablation",
      "Model compression and efficiency",
    ],
  },
  {
    id: 4,
    title: "Biomedical Pipeline",
    highlights: [
      "WSI preprocessing and patch sampling",
      "Multimodal fusion pipelines",
      "Survival prediction system deployment",
    ],
  },
];

/** AI Engineering Skills (positioning, not resume-style list). */
export const aiEngineeringSkills = [
  "Large-scale model training (PyTorch, multi-GPU)",
  "Custom optimization strategies",
  "Multimodal data processing",
  "Model compression & efficiency",
  "Distributed experiment management",
  "End-to-end ML system deployment",
];

/** Short tagline for Projects page. */
export const projectsPageTagline =
  "AI Systems Engineer with research-level understanding of optimization and representation learning.";

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

/** Projects (1–2 strongest; kept short for CV. Main academic narrative is aiProjectAreas + researchProjects.) */
export const projects = [
  {
    title: "Multimodal QA system",
    period: "Nov. 2024",
    technologies: "LLM, Transformer, PaliGemma",
    highlights: [
      "Reproduced and analyzed multimodal vision-language models; fine-tuned on VQAv2 and ScienceQA.",
      "Tested image resolutions (224–896px) and integration of visual and textual components.",
    ],
  },
  {
    title: "Predicting Effective Arguments",
    link: "https://github.com/zz9tf/DL-Predicting-Effective-Arguments",
    period: "Mar. 2023",
    technologies: "RNN, LSTM, BERT, PyTorch",
    highlights: [
      "Trained RNN/LSTM/BERT models to classify argumentative elements in student essays.",
      "Ablation and grid search for optimal architecture; achieved best accuracy on benchmark.",
    ],
  },
];

/** Short technical skills tagline (5–8 keywords). Full list belongs in CV PDF. */
export const technicalSkills = [
  "PyTorch",
  "TensorFlow",
  "RAG & LLMs",
  "Multimodal ML",
  "Docker & AWS",
  "Python",
  "Recommendation Systems",
];

// Research page: vision + themes (narrative, "what I'm building")
export const researchVision =
  "I study learning dynamics in multimodal biomedical AI systems, seeking to understand how information is aligned, injected, and optimized under real-world heterogeneity—including missing or incomplete data. Grounded in biomedical intelligence, my work aims to uncover principles that naturally extend to the broader design of scalable AI systems, including large language models and intelligent agents.";

export interface ResearchThemePaper {
  label: string;
  url: string;
}

export interface ResearchTheme {
  id: number;
  title: string;
  /** 1 short paragraph: problem / motivation */
  problemContext: string;
  /** 1 short paragraph: what we do */
  whatWeDo: string;
  /** Figure or pipeline image path under public/ */
  image: string;
  /** 1–2 related paper links */
  papers: ResearchThemePaper[];
}

export const researchThemes: ResearchTheme[] = [
  {
    id: 1,
    title: "Multimodal Survival & Missing Modality Learning",
    problemContext:
      "Real-world biomedical data often has naturally missing modalities (e.g., one patient has imaging but no genomics). Standard fusion assumes all modalities are present and breaks under missingness. We need alignment and robustness that work when modalities are incomplete.",
    whatWeDo:
      "We build heterogeneous aligned fusion frameworks so that representations stay comparable across modalities and missing patterns. Our MIDL work focuses on survival prediction: we align modality-specific encoders and fuse with mechanisms that remain valid under missing modalities, improving both robustness and cross-modality consistency.",
    image: "/research-themes/multimodal-alignment.png",
    papers: [
      {
        label:
          "Heterogeneous Aligned Fusion for Survival Prediction (MIDL 2026)",
        url: "https://openreview.net/pdf?id=XjyK23sUkI",
      },
    ],
  },
  {
    id: 2,
    title: "Optimization Dynamics in Multi-Task Learning",
    problemContext:
      "Multi-task and multi-objective training often suffers from gradient conflict: objectives pull parameters in different directions. How shared vs. task-specific subspaces evolve, and how that affects representation stability, is still poorly understood.",
    whatWeDo:
      "We study optimization dynamics in multi-objective settings—how gradient conflict manifests, how parameter subspaces (shared vs. private) evolve during training, and how this affects representation quality in biomedical models. The goal is to design training and architecture choices that improve alignment and stability.",
    image: "/research-themes/optimization-dynamics.png",
    papers: [],
  },
  {
    id: 3,
    title: "Information Injection in Foundation Models",
    problemContext:
      "Foundation models (e.g., protein models, LLMs) encode huge amounts of structure. Injecting new information or aligning latent spaces in a principled way, especially without full supervision, remains an open challenge.",
    whatWeDo:
      "We work on how to inject and align information in foundation-scale systems: probing and influencing protein model representations, and understanding LLM latent space structure for unsupervised or light-touch alignment. The aim is more principled methods for information injection and representation learning at scale.",
    image: "/research-themes/information-injection.png",
    papers: [],
  },
];
