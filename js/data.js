const portfolioData = {

  skills: [
    {
      title: "Data Analytics",
      icon: "bar-chart-3",
      color: "cyan",
      description:
        "Turning raw data into insights, KPIs and decision-ready dashboards.",
      technologies: [
        "Python",
        "SQL",
        "Pandas",
        "NumPy",
        "Power BI",
        "EDA"
      ]
    },

    {
      title: "Machine Learning",
      icon: "brain",
      color: "indigo",
      description:
        "Building predictive models and deep learning solutions.",
      technologies: [
        "Scikit-learn",
        "PyTorch",
        "TensorFlow",
        "YOLO",
        "CNN",
        "Transfer Learning"
      ]
    },

    {
      title: "Data Engineering",
      icon: "database",
      color: "sky",
      description:
        "Designing scalable pipelines, warehouses and analytical data layers.",
      technologies: [
        "PostgreSQL",
        "PySpark",
        "Databricks",
        "ETL",
        "Airflow",
        "Star Schema"
      ]
    },

    {
      title: "Tools & Cloud",
      icon: "terminal",
      color: "teal",
      description:
        "Building reproducible and production-oriented workflows.",
      technologies: [
        "Python",
        "SQL",
        "Docker",
        "Azure",
        "Git",
        "Streamlit"
      ]
    }
  ],


  experience: [

    {
      role: "Software Engineer",
      company: "ICS Group",
      location: "Chandigarh, India",
      period: "Jan 2024 – Dec 2024",

      type: "Software Engineering",

      achievements: [
        {
          metric: "20%",
          text:
            "Reduced data-processing bottlenecks through optimized Python, Pandas, NumPy and SQL pipelines."
        },

        {
          metric: "30%",
          text:
            "Improved multi-table relational query performance through SQL optimization."
        },

        {
          metric: "15%",
          text:
            "Improved operational accuracy by developing predictive machine learning models using Scikit-learn."
        }
      ]
    },

    {
      role: "Research — Privacy-Preserving Personalization",
      company: "Hochschule Aalen",
      location: "Aalen, Germany",
      period: "2025",

      type: "Research",

      achievements: [
        {
          metric: "30+",
          text:
            "Peer-reviewed papers analyzed through a systematic PRISMA literature review."
        },

        {
          metric: "3",
          text:
            "Privacy approaches evaluated: Federated Learning, Differential Privacy and Homomorphic Encryption."
        },

        {
          metric: "1.0",
          text:
            "Research grade achieved."
        }
      ]
    }

  ],


  projects: [

    {
  "category": "MACHINE LEARNING",
  "title": "AI4I Predictive Maintenance System",
  "description": "Production-ready ML system forecasting industrial equipment failure from real-time telemetry. Features XGBoost classification, SHAP operational risk explainability, and an interactive Streamlit monitoring dashboard.",
  "technologies": [
    "Python",
    "XGBoost",
    "Scikit-learn",
    "FastAPI",
    "Streamlit",
    "SHAP",
    "PostgreSQL"
  ],
  "icon": "activity",
  "github": "https://predictivemaintenanceconsole-sgmntdcathmhurbtet2u4s.streamlit.app/",
},

    {
      category: "DATA ENGINEERING",

      title: "Medallion Data Warehouse",

      description:
        "Designed a PostgreSQL-based modern data warehouse using Bronze, Silver and Gold layers. Integrated ERP and CRM data using dimensional modeling and star schemas for efficient analytical querying.",

      technologies: [
        "PostgreSQL",
        "ETL",
        "Star Schema",
        "Data Modeling"
      ],

      icon: "database",

      github: "https://github.com/TusharKhari/data-warehouse-b"
    },


    {
      category: "COMPUTER VISION",

      title: "Sensitive Data Detection",

      description:
        "Built a multimodal privacy system combining YOLO object detection, OCR and zero-shot classification to identify and redact sensitive personal information from images and video.",

      technologies: [
        "YOLO",
        "PyTorch",
        "BART-MNLI",
        "OCR",
        "Streamlit"
      ],

      icon: "scan-face",

      github: "https://github.com/TusharKhari/personal_data_detector_image_and_video"
    },


    {
      category: "ANALYTICS ENGINEERING",

      title: "Customer Segmentation",

      description:
        "Developed an end-to-end Databricks Lakehouse pipeline to identify behavioral customer segments and expose business KPIs through interactive Power BI dashboards.",

      technologies: [
        "Databricks",
        "PySpark",
        "Power BI",
        "SQL"
      ],

      icon: "users",

      github: "https://github.com/TusharKhari/customer-behavior-analysis"
    },


    {
      category: "DEEP LEARNING",

      title: "Deep Vision Classification",

      description:
        "Implemented and benchmarked custom CNN, VGG16 and ResNet architectures with data augmentation and hyperparameter optimization for image classification.",

      technologies: [
        "PyTorch",
        "CNN",
        "ResNet",
        "VGG16",
        "Transfer Learning"
      ],

      icon: "image",

      github: "https://github.com/TusharKhari/machine-learning-ex/tree/main/ex5"
    }

  ]

};
