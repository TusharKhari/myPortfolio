const portfolioData = {

  skills: [
    {
      title: "Mobile & Flutter Development",
      icon: "smartphone",
      color: "cyan",
      description:
        "Architecting production-ready, cross-platform mobile apps for iOS, Android, and macOS.",
      technologies: [
        "Flutter",
        "Dart",
        "BLoC",
        "GetX",
        "Provider",
        "RESTful APIs",
        "Google Maps",
        "Firebase FCM",
        "Socket.io",
        "Stripe"
      ]
    },

    {
      title: "Software Engineering & Architecture",
      icon: "cpu",
      color: "teal",
      description:
        "Writing scalable, maintainable software adhering to clean design patterns and algorithmic rigor.",
      technologies: [
        "C++",
        "Java",
        "Dart",
        "JavaScript (Node.js)",
        "Clean Architecture",
        "DDD",
        "SOLID Principles",
        "MVC",
        "Singleton Pattern",
        "SDLC & Agile"
      ]
    },

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
      title: "Machine Learning & AI",
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
        "Transfer Learning",
        "FastAPI",
        "SHAP"
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
      title: "Algorithms & Developer Tools",
      icon: "terminal",
      color: "teal",
      description:
        "Rigorous algorithmic problem solving and production-oriented workflows.",
      technologies: [
        "LeetCode (300+)",
        "DSA & Algorithms",
        "VS Code",
        "Android Studio",
        "Xcode",
        "Git",
        "Docker",
        "Postman",
        "Figma",
        "Jira CI/CD",
        "MySQL Workbench"
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
      role: "Flutter Developer",
      company: "Quantum IT Innovation",
      location: "Remote / India",
      period: "Sept 2023 – March 2024",
      type: "Mobile Engineering",
      achievements: [
        {
          metric: "50+ Screens",
          text:
            "Designed and developed Meinhaus home repair marketplace comprising 50+ animated screens and 50+ API endpoints connecting homeowners directly with qualified contractors."
        },
        {
          metric: "Real-Time",
          text:
            "Implemented real-time chat supporting media, PDFs and WhatsApp-style status ticks, secure Stripe payments, and cost-optimized Google Maps address autocomplete."
        },
        {
          metric: "Socket.io",
          text:
            "Engineered driver trip dispatching and real-time live location tracking via Socket.io for the Trucker logistics platform."
        },
        {
          metric: "Auth & Cloud",
          text:
            "Built trust features including Google/Apple login, phone/email verification, FCM notifications, and seamless customer support channels."
        }
      ]
    },

    {
      role: "Flutter Developer",
      company: "GAMEON Technologies Private Limited",
      location: "India",
      period: "Nov 2022 – May 2023",
      type: "Mobile Engineering",
      achievements: [
        {
          metric: "Book My Game",
          text:
            "Developed intuitive mobile application enabling sports enthusiasts to search and seamlessly book cricket grounds and match time slots."
        },
        {
          metric: "Search & UX",
          text:
            "Implemented dynamic search filters, time-slot selection logic, and polished mobile UI flows based on user preferences."
        }
      ]
    },

    {
      role: "Frontend Engineering Lead",
      company: "MITRA Fintech",
      location: "India",
      period: "August 2022",
      type: "Mobile Engineering / Leadership",
      achievements: [
        {
          metric: "Lead",
          text:
            "Selected over more experienced developers to lead the frontend engineering team for an on-demand transportation (Uber-like) application."
        },
        {
          metric: "Architecture",
          text:
            "Drove client architecture, map-based route visualization, real-time trip coordination, and state management conventions."
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
      category: "MOBILE APP / FLUTTER",
      title: "Weather App (DDD & BLoC)",
      description:
        "Architected with Domain-Driven Design (DDD) and BLoC state management. Integrates OpenWeather API, Dio networking with Pretty Dio Logger, GetIt dependency injection, Hive local storage, auto_route, geolocator, Lottie animations, and Firebase Authentication.",
      technologies: [
        "Flutter",
        "Dart",
        "BLoC",
        "DDD",
        "Dio",
        "Hive DB",
        "AutoRoute",
        "Firebase Auth",
        "Lottie"
      ],
      icon: "cloud-sun",
      github: "https://github.com/TusharKhari"
    },

    {
      category: "ENTERPRISE MOBILE",
      title: "Meinhaus & Trucker Mobile Platforms",
      description:
        "Comprehensive Flutter applications with 50+ screens and 50+ endpoints. Features real-time multimedia chat with delivery ticks, Stripe checkout, cost-optimized Google Maps autocomplete, and Socket.io driver GPS live tracking.",
      technologies: [
        "Flutter",
        "Dart",
        "Socket.io",
        "Stripe",
        "Google Maps API",
        "Firebase FCM",
        "REST APIs"
      ],
      icon: "smartphone",
      github: "https://github.com/TusharKhari"
    },

    {
      category: "FULL-STACK MOBILE",
      title: "Amazon Mobile E-Commerce",
      description:
        "Full-featured mobile e-commerce clone built with Flutter and Node.js/Express backend. Includes complete shopping flows, product catalogs, cart state management, and user authentication.",
      technologies: [
        "Flutter",
        "Node.js",
        "Express",
        "RESTful APIs",
        "State Management",
        "MongoDB / SQL"
      ],
      icon: "shopping-bag",
      github: "https://github.com/TusharKhari"
    },

    {
      category: "SOCIAL MOBILE",
      title: "Instagram Mobile Cloud App",
      description:
        "Rich social photo-sharing application replicating core Instagram experiences. Features Firebase Authentication, Cloud Firestore real-time feeds, post uploads, comments, likes, and push notifications.",
      technologies: [
        "Flutter",
        "Firebase Auth",
        "Cloud Firestore",
        "Firebase Storage",
        "FCM"
      ],
      icon: "camera",
      github: "https://github.com/TusharKhari"
    },

    {
      category: "MACHINE LEARNING",
      title: "AI4I Predictive Maintenance System",
      description:
        "Production-ready ML system forecasting industrial equipment failure from real-time telemetry. Features XGBoost classification, SHAP operational risk explainability, and an interactive Streamlit monitoring dashboard.",
      technologies: [
        "Python",
        "XGBoost",
        "Scikit-learn",
        "FastAPI",
        "Streamlit",
        "SHAP",
        "PostgreSQL"
      ],
      icon: "activity",
      github: "https://predictivemaintenanceconsole-sgmntdcathmhurbtet2u4s.streamlit.app/"
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

  ],

  currentlyBuilding: [
    "Enterprise Flutter Mobile Architecture with Clean DDD & Offline-First Sync.",
    "LLM powered RAG System with near zero hallucination."
  ]

};
