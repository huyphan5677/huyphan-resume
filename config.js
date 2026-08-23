const portfolioConfig = {
  personal: {
    name: "Phan Minh Huy",
    title: "Data Science Lead",
    email: "huyphan5677@gmail.com",
    phone: "0356 046 970",
    location: "Ha Noi, Vietnam",
    website: "",
    linkedin: "https://www.linkedin.com/in/huy-phan-270014111/",
    github: "",
    bio: "Data Science Lead with 8 years of experience bridging business strategy and technical execution across Retail, Telco, Finance, and Insurance. Track record of taking data platforms and ML products from zero to production, defining data and AI roadmaps, and leading cross-functional teams. Experienced in stakeholder management up to BOD level, driving adoption of data products, and building practical AI applications including agentic assistants and AI-assisted engineering workflows."
  },

  skills: {
    technical: [
      "Python",
      "Spark",
      "SQL",
      "ML/DL",
      "MLOps",
      "LangGraph/LangChain",
      "LLM Applications",
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
      company: "Vinsmart Future",
      position: "Expert, Data Science",
      duration: "May 2026 – Present",
      location: "Ha Noi, Vietnam",
      achievements: [
        "Own the C360 Feature Store in the group's centralized data function, consuming integrated data from 8+ Vingroup P&Ls to serve data science and analytics use cases",
        {
          main: "Led a team of 3 to deliver C360 v1 from kick-off to go-live in 2.5 months:",
          sub: [
            "2,000+ curated features governed under Databricks Unity Catalog, processing billions of records (optimized to run within 1 hour at full scale)",
            "Built the core framework, then standardized the feature development lifecycle with AI agent skills for scaffolding, code review, and documentation",
            "Defined the roadmap for the serving layer (API and file-based delivery) and the initial use-case pipeline for onboarding consumers"
          ]
        },
        "Built a lead scoring model for Vinhomes ranking existing Vingroup customers by home-purchase propensity (AUC > 85%)"
      ]
    },
    {
      company: "Blueinfo Jsc",
      position: "Data Team Lead",
      duration: "Aug 2024 – Apr 2026",
      location: "Ha Noi, Vietnam",
      achievements: [
        "Led a team of 3 (Analysts, Engineers, Scientists) in an Agile delivery model",
        "Established the team's OKRs aligned with company objectives",
        "Primary technical contact for external partners: problem scoping, solution design, and presenting to partner BOD",
        "Defined MLOps infrastructure requirements provisioned by DevOps",
        {
          main: "Delivered projects:",
          sub: [
            "Built Telco-based Credit Score models for thin-file customers (Gini 55%), delivering a >70% performance uplift when combined with the partner's internal model",
            "Propensity score (Gini: 70%) to enhance campaign targeting",
            "Location verification score to enhance partner operational accuracy",
            "Logistic regression optimization for a financial institution: Achieved 30-40% Gini uplift over existing models",
            "Laos market: Developed Credit Score model for unbanked segments by combining e‑wallet and telco data using proxy labeling and transfer learning-inspired techniques, achieving Gini 52%, established A/B testing roadmap",
            "Built Nutri, a multi-agent AI nutrition assistant prototype with tool orchestration for profile management, calorie-needs estimation, personalized meal-plan generation, and grocery/inventory workflows",
            "Merchant lending LeadGen for a logistics partner: owned the end-to-end flow — data processing, eligibility criteria defined with the FI, campaign targeting, and in-app loan performance analysis"
          ]
        },
        {
          main: "Designed and implemented an ML platform:",
          sub: [
            "Data stack: Data pipelines, feature store, data quality controls",
            "Model stack: training pipeline with reproducibility and automation",
            "Deployment stack: scheduling, model monitoring, and alerts",
            "CI/CD pipeline: designed and implemented a workflow for automated deployment and version control"
          ]
        },
        {
          main: "Tools/Technologies:",
          sub: [
            "Spark (distributed processing), Airflow (orchestration), MLflow (experiment & registry), Great Expectations (data quality), DataHub (metadata & lineage), FastAPI (batch prediction access), Grafana (monitoring), Git-based CI/CD"
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
        "Standardized operations and performance monitoring for Mortgage LeadGen services with telco partners",
        "Delivered ad-hoc analyses and A/B testing frameworks to guide data-informed decision-making"
      ]
    },
    {
      company: "SIFT AG VN",
      position: "Machine Learning Engineer",
      duration: "Oct 2018 – Jul 2020",
      location: "Ho Chi Minh City, Vietnam",
      achievements: [
        "Built demand and price forecasting models for fertilizer products globally and domestically, achieving MAPE < 1%",
        "Built end-to-end ML pipelines in Alteryx — from data processing to AutoML with Champion-Challenger model selection — for sales forecasting (DFS Group)",
        "Solved Market Basket Analysis and Store Clustering challenges for retail clients",
        "Collaborated with BI Developers to build dashboards and data storytelling from ML outputs",
        "Teaching assistant and curriculum designer for specialized consultant training courses"
    ]
    }
  ],

  education: [
    {
        institution: "Hanoi University of Science and Technology",
        degree: "Generative AI Engineer Program",
        duration: "2025 – Present",
        location: "Ha Noi, Vietnam",
    },
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
