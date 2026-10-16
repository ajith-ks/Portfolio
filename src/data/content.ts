export const content = {
  "metaDescription": "Automation Engineer with 7 years of experience in enterprise automation, workflow optimization, systems integration, ServiceNow, IGNIO, Active Directory, Python, PowerShell and data engineering.",
  "fullName": "Ajith KS",
  "headline": "Automation Engineer",
  "services": [
    "Workflow Automation & Process Orchestration",
    "Systems Integration & API Engineering",
    "Data Engineering & Analytics"
  ],
  "education": [
    {
      "degree": "MSc IT",
      "year": "2022 – 2025",
      "institution": "Centre for Distance and Online Education, Bharathiar University"
    },
    {
      "degree": "PG Program in Data Engineering",
      "year": "2022 – 2023",
      "institution": "Great Learning"
    },
    {
      "degree": "BCA",
      "year": "2014 – 2017",
      "institution": "AJK College of Arts and Science"
    }
  ],
  "pageTitle": "Ajith KS | Automation Engineer | Process Automation & Data Engineering",
  "certifications": [
    {
      "link": "https://learn.microsoft.com/api/credentials/share/en-us/iajithks/43195CB85A673428?sharingId=A33981803E5738CE",
      "issuer": "Microsoft",
      "name": "Azure Data Fundamentals"
    },
    {
      "link": "https://learn.microsoft.com/api/credentials/share/en-us/iajithks/B7EAB246AB7589A7?sharingId=A33981803E5738CE",
      "issuer": "Microsoft",
      "name": "Azure Fundamentals"
    },
    {
      "link": "https://coursera.org/share/ae12b5dfbaaf814e90872e0ed6573d7e",
      "issuer": "Coursera",
      "name": "Google IT Automation with Python"
    },
    {
      "link": "https://www.hrduniversity.org/certificates/eoyg8kjyvy",
      "issuer": "HRD University",
      "name": "Certified Business Analysis Professional"
    },
    {
      "link": "certificates/complete-business-analytics-certification.pdf",
      "issuer": "CoachX",
      "name": "Complete Business Analytics Certification Program"
    }
  ],
  "shortBio": "Building intelligent workflows that connect people, systems and data. 7+ years specializing in enterprise automation, workflow optimization and systems integration.",
  "footer": {
    "brand": "AJITH KS",
    "tagline": "Automation Engineer — Workflow Automation • Systems Integration • Data Engineering",
    "copyright": "© 2026 Ajith KS. All rights reserved."
  },
  "skills": [
    {
      "tags": [
        "Python",
        "PowerShell",
        "Groovy",
        "VBA Macros",
        "REST API",
        "Workflow Automation",
        "ServiceNow",
        "IGNIO",
        "Power Automate",
        "Apache POI",
        "ETL Automation"
      ],
      "category": "Automation & Development"
    },
    {
      "tags": [
        "Unix/Linux",
        "Active Directory",
        "Cloud Automation",
        "ServiceNow",
        "NetIQ IDM",
        "Database Management",
        "API Integration",
        "System Orchestration"
      ],
      "category": "Systems & Infrastructure"
    },
    {
      "tags": [
        "Business Process Mapping",
        "Process Optimization",
        "Workflow Design",
        "Requirement Gathering",
        "Fit-Gap Analysis",
        "UAT Testing",
        "Stakeholder Management",
        "Documentation"
      ],
      "category": "Process Analysis & Engineering"
    },
    {
      "tags": [
        "SQL",
        "MySQL",
        "PostgreSQL",
        "ETL",
        "Pandas",
        "NumPy",
        "Power BI",
        "Tableau",
        "Data Modeling",
        "Predictive Analytics",
        "KPI Tracking"
      ],
      "category": "Data Engineering & Analytics"
    }
  ],
  "contact": {
    "email": "imajithks@gmail.com",
    "linkedin": "https://www.linkedin.com/in/iajithks",
    "phone": "+91 9995516020",
    "github": "https://github.com/ajith-ks"
  },
  "resumeLink": "resume/Ajith_KS_Automation_Engineer_Resume.pdf",
  "projects": [
    {
      "title": "Identity Lifecycle Audit & Compliance Automation",
      "category": "Identity Automation",
      "description": "Automated monitoring and reconciliation of employee onboarding and offboarding activities across SuccessFactors, NetIQ IDM, Active Directory and ServiceNow.",
      "tags": [
        "IGNIO",
        "SuccessFactors",
        "NetIQ IDM",
        "Active Directory",
        "ServiceNow"
      ],
      "id": "identity-lifecycle",
      "highlight": "Cross-system visibility",
      "caseStudy": {
        "overview": "<p>An automated identity lifecycle monitoring solution built to provide a consolidated view of employee onboarding and offboarding activities across multiple enterprise systems.</p>",
        "challenge": "<p>Employee onboarding and offboarding information originates in SuccessFactors and flows through NetIQ IDM to downstream systems such as Active Directory and ServiceNow.</p>\n<p>Failures could occur at different stages:</p>\n<ul>\n<li>User account creation could fail.</li>\n<li>IDM could create the account but the status might not be updated back to SuccessFactors.</li>\n<li>A user could exist in one system but be missing from another.</li>\n<li>Offboarding/disablement could fail.</li>\n<li>Stakeholders had no consolidated view of onboarding and offboarding status.</li>\n</ul>",
        "solution": "<p>Built an IGNIO workflow that performs daily reconciliation across the connected systems.</p>",
        "howItWorks": "<pre class=\"modal-workflow-diagram\">SuccessFactors\n      ↓\nDaily Onboarding / Offboarding Users\n      ↓\n     IGNIO\n      ↓\n ┌────┼────────┐\n ↓    ↓        ↓\nIDM   AD    ServiceNow\n └────┼────────┘\n      ↓\nStatus Reconciliation\n      ↓\nConsolidated Excel Report\n      ↓\nStakeholders</pre>\n<p class=\"modal-workflow-desc\">The workflow retrieves daily onboarding and offboarding users from SuccessFactors, checks their corresponding status in IDM, Active Directory and ServiceNow, consolidates the results and distributes the report to stakeholders through email.</p>",
        "contribution": "<ul>\n<li>Designed the automation workflow.</li>\n<li>Integrated data from multiple enterprise applications.</li>\n<li>Implemented cross-system status validation.</li>\n<li>Built the consolidated reporting process.</li>\n<li>Automated stakeholder communication through email.</li>\n</ul>",
        "outcome": "Improved visibility of identity lifecycle activities and enabled stakeholders to quickly identify inconsistencies and failed provisioning/offboarding activities."
      }
    },
    {
      "title": "Privileged Server Access Provisioning",
      "category": "Infrastructure Automation",
      "description": "Automated provisioning of privileged server access through ServiceNow, IGNIO and Active Directory.",
      "tags": [
        "ServiceNow",
        "IGNIO",
        "Active Directory",
        "Privileged Access"
      ],
      "id": "server-access",
      "highlight": "Zero manual intervention",
      "caseStudy": {
        "overview": "<p>An end-to-end automation workflow for provisioning privileged access to servers based on approved ServiceNow requests.</p>",
        "challenge": "<p>Users request access to specific servers through ServiceNow.</p>\n<p>Provisioning the access requires multiple steps, including privileged-account creation, identification of the correct Active Directory groups and assignment of the user to the appropriate administrator groups.</p>\n<p>Performing these activities manually increases processing effort and the possibility of incorrect group assignment.</p>",
        "solution": "<p>Built an IGNIO workflow to automate the complete access-provisioning process.</p>",
        "howItWorks": "<pre class=\"modal-workflow-diagram\">ServiceNow Request\n       ↓\n     Approval\n       ↓\n   IGNIO Queue\n       ↓\nCheck Privileged Account\n       ↓\nCreate if Required\n       ↓\nIdentify Requested Server\n       ↓\nIdentify Applicable Privileged AD Groups\n       ↓\nIdentify Server Administrator Groups\n       ↓\nAdd User to Required Groups\n       ↓\nUpdate ServiceNow</pre>",
        "contribution": "<ul>\n<li>Designed the end-to-end provisioning workflow.</li>\n<li>Implemented privileged-account existence checks.</li>\n<li>Automated privileged-account creation.</li>\n<li>Developed logic to identify applicable AD groups.</li>\n<li>Identified administrator groups for the requested server.</li>\n<li>Automated group membership assignment.</li>\n<li>Automated ServiceNow ticket updates.</li>\n</ul>",
        "outcome": "Standardized privileged server-access provisioning while reducing manual identity and Active Directory administration."
      }
    },
    {
      "title": "Shared Mailbox Lifecycle Automation",
      "category": "Workflow Automation",
      "description": "End-to-end automation of shared mailbox requests from ServiceNow approval through execution and ticket closure.",
      "tags": [
        "IGNIO",
        "ServiceNow",
        "Exchange Online",
        "PowerShell",
        "Groovy"
      ],
      "id": "shared-mailbox",
      "highlight": "85% time reduction",
      "caseStudy": {
        "overview": "<p>An enterprise automation solution for managing shared mailbox requests through ServiceNow and automating the corresponding mailbox operations.</p>",
        "challenge": "<p>Users raise ServiceNow requests for shared mailbox activities such as:</p>\n<ul>\n<li>Creating a shared mailbox</li>\n<li>Adding users</li>\n<li>Removing users</li>\n</ul>\n<p>Once approved, these requests had to be manually processed by the operations team.</p>",
        "solution": "<p>Built an IGNIO workflow that automatically processes approved ServiceNow requests and performs the required mailbox operation.</p>",
        "howItWorks": "<pre class=\"modal-workflow-diagram\">User\n ↓\nServiceNow Request\n ↓\nApproval\n ↓\nIGNIO Assignment Group\n ↓\nFetch Request Details\n ↓\nIdentify Request Type\n ↓\nExecute Mailbox Operation\n ↓\nUpdate ServiceNow</pre>",
        "contribution": "<ul>\n<li>Designed the end-to-end automation workflow.</li>\n<li>Integrated ServiceNow with IGNIO.</li>\n<li>Implemented request-data extraction.</li>\n<li>Developed logic to identify the requested operation.</li>\n<li>Automated mailbox operations.</li>\n<li>Automated ServiceNow status updates.</li>\n</ul>",
        "outcome": "The solution processes <strong>200+ mailbox operations monthly</strong>, reduced processing time by <strong>85%</strong>, and achieved <strong>zero errors within the stated scope</strong>."
      }
    },
    {
      "title": "Automation Execution Intelligence Dashboard",
      "category": "Data Engineering & Analytics",
      "description": "A centralized reporting and analytics solution that transforms automation execution data into actionable operational insights.",
      "tags": [
        "IGNIO",
        "PostgreSQL",
        "SQL",
        "Power BI",
        "REST API"
      ],
      "id": "execution-dashboard",
      "highlight": "Real-time business insights",
      "caseStudy": {
        "overview": "<p>A data-driven reporting solution developed to provide centralized visibility into automation execution, workload, KPIs, incidents and requests.</p>",
        "challenge": "<p>Automation execution information was distributed across different data sources, making it difficult to obtain a consolidated view of automation performance and operational metrics.</p>",
        "solution": "<p>Designed an IGNIO workflow that processes execution data, integrates ServiceNow information and structures the data in PostgreSQL for Power BI reporting.</p>\n<p class=\"modal-sub-heading\">Data Model</p>\n<p>The solution uses six PostgreSQL tables:</p>\n<ul>\n<li>Use Case Master</li>\n<li>Monthly Volume</li>\n<li>KPI</li>\n<li>Workitem Cleaned</li>\n<li>Incident</li>\n<li>Request</li>\n</ul>",
        "howItWorks": "<pre class=\"modal-workflow-diagram\">              IGNIO\n                │\n        ┌───────┴───────┐\n        ↓               ↓\n   PostgreSQL       ServiceNow\n        │               │\n        └───────┬───────┘\n                ↓\n          SQL / Groovy\n                ↓\n       Consolidated Dataset\n                ↓\n             Power BI\n                ↓\n      Operational Insights</pre>",
        "contribution": "<ul>\n<li>Designed the data-processing workflow.</li>\n<li>Structured the PostgreSQL reporting tables.</li>\n<li>Developed SQL/Groovy processing logic.</li>\n<li>Processed JSON-based automation execution data.</li>\n<li>Integrated ServiceNow information through REST APIs.</li>\n<li>Prepared the consolidated dataset for Power BI reporting.</li>\n</ul>",
        "outcome": "Created a centralized view of automation execution and operational metrics, enabling stakeholders to analyze workload, KPIs, incidents and requests through Power BI."
      }
    },
    {
      "title": "Microsoft License Reclamation Automation",
      "category": "Infrastructure Automation",
      "description": "Automatically identifies inactive users and reclaims Microsoft licenses based on the organization's 60-day usage policy.",
      "tags": [
        "IGNIO",
        "Microsoft 365",
        "License Management",
        "Automation"
      ],
      "id": "license-reclamation",
      "highlight": "60-day policy automation",
      "caseStudy": {
        "overview": "<p>An automated license-management solution developed to optimize the use of limited Microsoft application licenses.</p>\n<p class=\"modal-sub-heading\">Applications</p>\n<ul>\n<li>Microsoft Copilot</li>\n<li>Microsoft Project</li>\n<li>Microsoft Visio</li>\n</ul>",
        "challenge": "<p>The organization had a limited number of licenses.</p>\n<p>When the available quota was exhausted, administrators had to manually identify users who were no longer using the applications and reclaim their licenses.</p>",
        "solution": "<p>Built an IGNIO workflow to automatically identify inactive users and revoke their licenses based on the organization's <strong>60-day inactivity policy</strong>.</p>",
        "howItWorks": "<pre class=\"modal-workflow-diagram\">Licensed Users\n      ↓\nCheck Application Usage\n      ↓\n60-Day Inactivity Check\n      ↓\nIdentify Inactive Users\n      ↓\nRevoke License\n      ↓\nGenerate Status Report\n      ↓\nStakeholders</pre>",
        "contribution": "<ul>\n<li>Designed the license-reclamation workflow.</li>\n<li>Implemented inactivity-based identification.</li>\n<li>Automated license revocation.</li>\n<li>Built status reporting.</li>\n<li>Automated stakeholder notification.</li>\n</ul>",
        "outcome": "Reduced manual license-management effort and helped improve utilization of limited application licenses."
      }
    },
    {
      "title": "Privileged Account Offboarding & Cleanup",
      "category": "Identity Automation",
      "description": "Automated identification and remediation of privileged accounts that require additional action during employee offboarding.",
      "tags": [
        "IGNIO",
        "NetIQ IDM",
        "Active Directory"
      ],
      "id": "privileged-offboarding",
      "highlight": "Zero security gaps",
      "caseStudy": {
        "overview": "<p>An automation solution designed to address privileged-account exceptions during employee offboarding.</p>",
        "challenge": "<p>NetIQ IDM handles the standard offboarding process by disabling user accounts and moving them to the appropriate Disabled OU.</p>\n<p>However, privileged/admin accounts could create exceptions where the expected action was not completed.</p>\n<p>This created a security and compliance concern because privileged accounts could remain active after the associated employee had been offboarded.</p>",
        "solution": "<p>Built an IGNIO workflow that performs a daily check of offboarded users and identifies associated privileged accounts requiring remediation.</p>",
        "howItWorks": "<pre class=\"modal-workflow-diagram\">Offboarded Users\n      ↓\n     IGNIO\n      ↓\nCheck for Privileged Accounts\n      ↓\nPrivileged Account Found?\n      ↓\nDisable Account\n      ↓\nMove to Disabled OU\n      ↓\nGenerate Status Report\n      ↓\nStakeholders</pre>",
        "contribution": "<ul>\n<li>Designed the daily monitoring workflow.</li>\n<li>Implemented privileged-account identification.</li>\n<li>Automated Active Directory disablement.</li>\n<li>Automated movement to the Disabled OU.</li>\n<li>Built daily status reporting.</li>\n</ul>",
        "outcome": "Automated an additional security control around privileged accounts during employee offboarding and reduced dependency on manual remediation."
      }
    },
    {
      "title": "Birthright Access Provisioning Automation",
      "category": "Identity Automation",
      "description": "Automatically provisions predefined Active Directory access based on an employee's type.",
      "tags": [
        "IGNIO",
        "Active Directory",
        "Identity Automation"
      ],
      "id": "birthright-access",
      "highlight": "Role-based provisioning",
      "caseStudy": {
        "overview": "<p>An automated access-provisioning workflow designed to provide users with their predefined birthright access based on employee classification.</p>",
        "challenge": "<p>Different employee types require different baseline access.</p>\n<p>Manually identifying the correct Active Directory group and adding users could introduce delays and inconsistencies.</p>",
        "solution": "<p>Built an IGNIO workflow that determines the appropriate birthright access based on the user's employee type and provisions the required Active Directory group membership.</p>",
        "howItWorks": "<pre class=\"modal-workflow-diagram\">User / Employee Information\n          ↓\n    Identify Employee Type\n          ↓\n    Determine Birthright Access\n          ↓\n    Identify AD Group\n          ↓\n    Add User to AD Group</pre>",
        "contribution": "<ul>\n<li>Designed the provisioning workflow.</li>\n<li>Implemented employee-type-based decision logic.</li>\n<li>Identified the appropriate AD groups.</li>\n<li>Automated group membership provisioning.</li>\n</ul>",
        "outcome": "Standardized and automated baseline access provisioning based on employee type."
      }
    },
    {
      "title": "Distribution List Lifecycle Automation",
      "category": "Workflow Automation",
      "description": "Automated processing of approved ServiceNow distribution list requests through IGNIO.",
      "tags": [
        "IGNIO",
        "ServiceNow",
        "Exchange Online",
        "PowerShell"
      ],
      "id": "distribution-list",
      "highlight": "Full audit trail",
      "caseStudy": {
        "overview": "<p>An automation solution developed to streamline distribution list management through ServiceNow and IGNIO.</p>",
        "challenge": "<p>Distribution list requests are submitted through ServiceNow and require processing after approval.</p>\n<p>Manual processing requires the operations team to review the request, determine the required action and execute it.</p>",
        "solution": "<p>Built an IGNIO workflow that automatically receives approved requests, extracts the request details, determines the required operation and executes the corresponding distribution list action.</p>",
        "howItWorks": "<pre class=\"modal-workflow-diagram\">User\n ↓\nServiceNow Request\n ↓\nApproval\n ↓\nIGNIO Assignment Group\n ↓\nFetch Request Details\n ↓\nIdentify Operation\n ↓\nExecute Distribution List Action\n ↓\nUpdate ServiceNow</pre>",
        "contribution": "<ul>\n<li>Designed the automation workflow.</li>\n<li>Integrated ServiceNow request processing with IGNIO.</li>\n<li>Implemented request classification.</li>\n<li>Automated distribution list operations.</li>\n<li>Automated ServiceNow updates.</li>\n</ul>",
        "outcome": "Reduced manual intervention and standardized the processing of distribution list requests with improved traceability through ServiceNow."
      }
    }
  ],
  "aboutParagraphs": [
    "I specialize in understanding business processes, identifying repetitive and error-prone activities, and transforming them into scalable automated workflows. My work spans identity management, ServiceNow, Active Directory, Microsoft platforms, system integration, reporting automation and data engineering.",
    "With 7+ years at Tata Consultancy Services, I've designed and delivered enterprise-grade automation solutions that have saved 15+ hours of manual effort weekly, managed access for 1000+ users, and achieved 99% data accuracy in business reporting."
  ],
  "experience": [
    {
      "dates": "01/2019 – Present",
      "bullets": [
        "Process Automation: Led automation initiatives using Groovy scripting and API integrations, reducing manual effort by 15+ hours weekly.",
        "Workflow Optimization: Orchestrated automated workflows for incident management, user access provisioning, and reporting, cutting processing time by 40%.",
        "Systems Integration: Engineered automation solutions integrating multiple systems through REST APIs, ensuring seamless data flow across platforms.",
        "ServiceNow Automation: Enhanced ServiceNow integrations and built custom automation scripts, improving incident and service-request processing efficiency by 30%.",
        "User Access Automation: Systematized security protocols by automating user access and permissions management for over 1000+ users using Active Directory and NetIQ IDM.",
        "Reporting Automation: Built automated reporting using SQL, Groovy, and Excel, reducing manual report-generation time by 80%.",
        "Cross-functional Collaboration: Collaborated across teams to gather requirements, design solutions, and implement process improvements aligned with business objectives.",
        "Data Validation: Engineered automated data validation checks using SQL and Groovy, ensuring 99% data accuracy for business reporting."
      ],
      "company": "Tata Consultancy Services",
      "role": "Automation Engineer / System Engineer",
      "location": "Bangalore"
    }
  ],
  "hero": {
    "greeting": "Hello",
    "name": "I'm Ajith KS",
    "title": "Automation Engineer",
    "description": "Building intelligent workflows that connect people, systems and data. 7+ years specializing in enterprise automation, workflow optimization and systems integration.",
    "ctaWork": "View My Work",
    "ctaContact": "Get In Touch",
    "ctaResume": "Download Resume"
  },
  "marquee": [
    "Python",
    "PowerShell",
    "Groovy",
    "SQL",
    "REST APIs",
    "IGNIO",
    "ServiceNow",
    "Active Directory",
    "Power BI",
    "PostgreSQL",
    "Exchange Online",
    "NetIQ IDM"
  ],
  "about": {
    "eyebrow": "About Me",
    "heading": "Turning Manual Processes Into Automated Workflows",
    "services": [
      "Workflow Automation & Process Orchestration",
      "Systems Integration & API Engineering",
      "Data Engineering & Analytics"
    ],
    "highlights": {
      "eyebrow": "Professional Highlights",
      "heading": "Impact at a Glance",
      "stats": [
        {
          "value": 7,
          "suffix": "+",
          "label": "Years of Experience"
        },
        {
          "value": 15,
          "suffix": "+",
          "label": "Hours Manual Effort Saved / Week"
        },
        {
          "value": 1000,
          "suffix": "+",
          "label": "Users Managed Through Automation"
        },
        {
          "value": 40,
          "suffix": "%",
          "label": "Processing Time Reduction"
        },
        {
          "value": 80,
          "suffix": "%",
          "label": "Reporting Effort Reduction"
        },
        {
          "value": 99,
          "suffix": "%",
          "label": "Data Accuracy"
        }
      ]
    }
  },
  "skillsSection": {
    "eyebrow": "Skills & Technologies",
    "heading": "Technical Arsenal"
  },
  "experienceSection": {
    "eyebrow": "Professional Experience",
    "heading": "Where I've Made an Impact"
  },
  "projectsSection": {
    "eyebrow": "Featured Projects",
    "heading": "Enterprise Automation in Action",
    "subtitle": "Real business problems solved through intelligent automation, systems integration, and data-driven workflows.",
    "moreEyebrow": "More Projects",
    "moreHeading": "More Automation Projects"
  },
  "expertise": {
    "eyebrow": "Automation Expertise",
    "heading": "What I Automate",
    "items": [
      {
        "name": "Identity Automation",
        "description": "Employee onboarding, offboarding, privileged access and Active Directory automation."
      },
      {
        "name": "Workflow Automation",
        "description": "ServiceNow-driven request fulfillment and enterprise workflow automation."
      },
      {
        "name": "Systems Integration",
        "description": "REST API and multi-system integrations ensuring seamless data flow."
      },
      {
        "name": "Infrastructure Automation",
        "description": "Active Directory, Exchange Online, Microsoft 365 and server-access automation."
      },
      {
        "name": "Reporting Automation",
        "description": "Automated data extraction, validation, Excel reporting and Power BI dashboards."
      },
      {
        "name": "Data Engineering & Analytics",
        "description": "SQL, ETL, PostgreSQL, Python and data analytics for business intelligence."
      }
    ]
  },
  "educationSection": {
    "eyebrow": "Academic Background",
    "heading": "Education"
  },
  "certificationsSection": {
    "eyebrow": "Certifications",
    "heading": "Verified Credentials",
    "viewCertificateLabel": "View Certificate →"
  },
  "contactSection": {
    "eyebrow": "Let's Connect",
    "heading": "Have a process worth automating?",
    "subtitle": "Let's connect and talk about automation, workflow optimization, systems integration and data engineering.",
    "form": {
      "nameLabel": "Name",
      "namePlaceholder": "Your name",
      "emailLabel": "Email",
      "emailPlaceholder": "your@email.com",
      "messageLabel": "Message",
      "messagePlaceholder": "Tell me about your project...",
      "submitLabel": "Submit"
    }
  }
} as const;

export type Content = typeof content;
