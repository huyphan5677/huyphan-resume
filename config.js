const portfolioConfig = {
  personal: {
    name: "Phan Minh Huy",
    title: "Data Scientist",
    email: "huyphan5677@gmail.com",
    phone: "0356 046 970",
    location: "Ha Noi, Vietnam",
    website: "",
    linkedin: "https://www.linkedin.com/in/huy-phan-270014111/",
    github: "",
    bio: "Senior Data Scientist with 7 years of experience delivering end-to-end data science solutions across the insurance, telecommunications, and retail sectors. Experienced in leading projects from problem definition through to production deployment, with a strong focus on aligning analytical outcomes with business strategy. Combines deep statistical expertise with a practical, results-driven approach to uncover insights and drive impactful decisions."
  },

  skills: {
    technical: [
      "Python",
      "Spark",
      "SQL",
      "ML/DL",
      "MLOps",
      "Optimization"
    ],
    soft: [
      "Data Strategy",
      "Stakeholder Management",
      "Agile/Scrum Management",
      "Cross-functional Collaboration",
    ]
  },

  experience: [
    {
      company: "Blueinfo Jsc",
      position: "Data Team Lead",
      duration: "Aug 2024 – Present",
      location: "Ha Noi, Vietnam",
      achievements: [
        "Led a data team (Analysts, Engineers, Scientists) using Agile methodologies to deliver ML solutions aligned with business goals",
        "Established the team's OKRs, ensuring alignment between technical roadmaps and company strategic objectives",
        "Mentored juniors on best practices, fostering skill growth and enhancing team velocity through structured knowledge sharing",
        "Served as primary technical point of contact for external partners, including problem scoping, solution design, presenting and reporting to partner BOD",
        "Implemented MLOps practices: Collaborated with DevOps for server infrastructure and setup environments for model deployment, monitoring, and maintenance",
        {
          main: "Delivered projects:",
          sub: [
            "VNPT Project: Built a Telco-based Credit score for thin-file customers (Gini 55%), delivering a >70% performance uplift when combined with the partner's internal model",
            "Unitel Laos market: Developed models for unbanked segments using proxy labeling and transfer learning-inspired techniques, achieving Gini 52%, established A/B testing roadmap",
            "Propensity score (Gini: 70%) to enhance campaign targeting",
            "Location verification score to enhance partner operational accuracy",
            "Logistic regression optimization for a financial institution: Achieved 30-40% Gini uplift over existing models",
          ]
        },
        {
          main: "Designed and implemented a ML platform",
          sub: [
            "Data stack: Data pipelines, feature store, data quality controls",
            "Model stack: training pipeline with reproducibility and automation",
            "Deployment stack: scheduling, model monitoring, and alerts",
            "CI/CD pipeline: designed and implemented a workflow for automated deployment and version control"
          ]
        },
      ]
    },
    {
      company: "Prudential Vietnam Assurance",
      position: "Senior Data Scientist",
      duration: "Nov 2022 – Aug 2024",
      location: "Ho Chi Minh City, Vietnam",
      achievements: [
        {
          main: "Delivered multiple predictive models driving strategic business outcomes:",
          sub: [
            "Customer propensity models for cross-sell campaigns",
            "Early churn prediction to reduce lapse rates",
            "Automated claim for operational efficiency",
            "Agent clustering and leadership potential prediction models"
          ]
        },
        "Promoted adoption of AI/ML across departments through internal workshops and training initiatives",
        "Utilized SHAP, conformal prediction, and graph analysis for model explainability and advanced analytics",
        "Collaborated with the Data Engineering team to build a scalable data warehouse, ensuring robust data pipelines to support analytics and machine learning workflows"
      ]
    },
    {
      company: "CIC Data Jsc",
      position: "Data Scientist / Analyst",
      duration: "Aug 2020 – Jun 2022",
      location: "Ho Chi Minh City, Vietnam",
      achievements: [
        "Designed and implemented lead scoring models with Gini scores of 64–70%, improving campaign targeting efficiency",
        "Extracted community features from telecom data using GraphFrames, DBScan, and KMeans",
        "Deployed optimization algorithms (Ortools) to maximize LeadGen ROI while minimizing operational costs",
        "Standardized operations and performance monitoring for Mortgage LeadGen services with teleco partners",
        "Delivered ad-hoc analyses and A/B testing frameworks to guide data-informed decision-making"
      ]
    },
    {
      company: "SIFT AG VN",
      position: "Machine Learning Engineer",
      duration: "Oct 2018 – Jul 2020",
      location: "Ho Chi Minh City, Vietnam",
      achievements: [
        "Built demand and price forecasting models for fertilizer products globally and domestically",
        "Solved Market Basket Analysis and Store Clustering challenges for retail clients",
        "Developed automated ML pipelines in Alteryx for forecasting and sales prediction (DFS Group)",
      ]
    }
  ],

  education: [
    {
      institution: "Ho Chi Minh University of Science",
      degree: "Master of Data Science",
      duration: "Completed 2025",
      location: "Ho Chi Minh City, Vietnam",
    },
    {
      institution: "Ho Chi Minh City University of Technology",
      degree: "Bachelor of Industrial Systems Engineering",
      duration: "2015 – 2019",
      location: "Ho Chi Minh City, Vietnam",
    }
  ],

  languages: [
    {
      name: "English",
      level: "TOEIC 665"
    },
  ]
};

// Make the config available globally
window.portfolioConfig = portfolioConfig;
