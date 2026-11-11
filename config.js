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
    bio: "Data Science Lead with 8 years of experience across Retail, Telco, Finance, and Insurance, translating between business stakeholders and technical teams. Take data platforms and ML products from kick-off to production, own the roadmap that gets them adopted, and build practical AI applications including agentic assistants and AI-assisted engineering workflows."
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
        {
          main: "Led a team of 7 to deliver:",
          sub: [
            "C360 Feature Store: Launched v1 in 2.5 months with an initial team of 3, delivering 2,000+ features using data from 8+ Vingroup P&Ls.",
            "AI signals: Age and gender prediction, household profiling, engagement scoring, and affluence/income ranking.",
            "Vinhomes lead scoring: Ranked customers by likelihood of buying a home (AUC > 0.85)."
          ]
        },
        "Standardized the development process using AI agent skills for scaffolding, code review, and documentation."
      ]
    },
    {
      company: "Blueinfo JSC",
      position: "Data Team Lead",
      duration: "Aug 2024 – Apr 2026",
      location: "Ha Noi, Vietnam",
      achievements: [
        "Led a team of 3 (Analysts, Engineers, Scientists) in an Agile delivery model.",
        "Defined project scope with partners and designed the technical solutions.",
        {
          main: "Delivered projects:",
          sub: [
            "Built telco-based credit and propensity models for Vietnam and Laos (credit Gini 52–55%, propensity Gini 65–70%), with >70% uplift when combined with the partner's model.",
            "Improved a financial institution’s model Gini by 30–40%.",
            "Led merchant lending lead generation for a logistics partner, from eligibility and targeting to loan performance analysis.",
            "Prototyped Nutri, a multi-agent AI assistant for personalized meal planning."
          ]
        },
        "Built an ML platform for feature pipelines, model training, deployment, and monitoring, with automated CI/CD."
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
            "Customer propensity models for cross-sell campaigns.",
            "Early churn prediction to reduce lapse rates.",
            "Automated claim for operational efficiency.",
            "Agent clustering and leadership potential prediction models."
          ]
        },
        "Promoted adoption of AI/ML across departments through internal workshops and training initiatives.",
        "Utilized SHAP, conformal prediction, and graph analysis for model explainability and advanced analytics.",
        "Collaborated with the Data Engineering team to build a scalable data warehouse, ensuring robust data pipelines to support analytics and machine learning workflows."
      ]
    },
    {
      company: "CIC Data Jsc",
      position: "Data Scientist / Analyst",
      duration: "Aug 2020 – Jun 2022",
      location: "Ho Chi Minh City, Vietnam",
      achievements: [
        "Designed and implemented lead scoring models with Gini scores of 64–70%, improving campaign targeting efficiency.",
        "Extracted community features from telecom data using GraphFrames, DBScan, and KMeans.",
        "Deployed optimization algorithms (Ortools) to maximize LeadGen ROI while minimizing operational costs.",
        "Standardized operations and performance monitoring for Mortgage LeadGen services with telco partners.",
        "Delivered ad-hoc analyses and A/B testing frameworks to guide data-informed decision-making."
      ]
    },
    {
      company: "SIFT AG VN",
      position: "Machine Learning Engineer",
      duration: "Oct 2018 – Jul 2020",
      location: "Ho Chi Minh City, Vietnam",
      achievements: [
        "Built demand and price forecasting models for fertilizer products globally and domestically, achieving MAPE < 1%.",
        "Built end-to-end ML pipelines in Alteryx for DFS Group's sales forecasting, from data processing to AutoML with Champion-Challenger model selection.",
        "Solved Market Basket Analysis and Store Clustering challenges for retail clients.",
        "Collaborated with BI Developers to build dashboards and data storytelling from ML outputs.",
        "Teaching assistant and curriculum designer for specialized consultant training courses."
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
      name: "English"
    },
  ]
};

// Make the config available globally
window.portfolioConfig = portfolioConfig;
