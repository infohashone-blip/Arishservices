import { Briefcase, Landmark, GraduationCap, Laptop, Users, Rocket } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  expandedDescription?: string;
  whoWeServe?: string;
  keyOfferings?: string[];
  notableProjects?: string[];
  iconName: "PFM" | "Policy" | "Training" | "IT" | "Consulting" | "Startup";
}

export interface TeamMember {
  name: string;
  role: string;
  category: "national" | "board";
  photoUrl?: string;
  linkedInUrl?: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
}

export const CORE_SERVICES: Service[] = [
  {
    id: "pfm",
    title: "Public Financial Management (PFM)",
    tagline: "Strengthening Public Resources for Better Governance",
    shortDescription: "PFM advisory and consulting services, NPSAS implementation, internal control system development, audit irregularity manuals, treasury management, debt management, and performance audits for public institutions and local governments.",
    expandedDescription: "Arish Services provides comprehensive Public Financial Management consulting to government entities, development partners, and public institutions. With combined experience from former Financial Comptroller General officials and chartered accountants, we help design, implement, and strengthen PFM systems that ensure transparency, accountability, and optimal resource utilization.",
    whoWeServe: "Ministries, provincial governments, local municipalities, public enterprises, development agencies, and donor-funded projects.",
    keyOfferings: [
      "NPSAS (Nepal Public Sector Accounting Standards) implementation and training",
      "Internal control system development and manual preparation",
      "Audit irregularity resolution and performance audit support",
      "Treasury management and debt management advisory",
      "Financial statement preparation under NFRS for public entities",
      "Development of asset management manuals and procurement guidelines",
      "Budget release monitoring and expenditure tracking systems"
    ],
    notableProjects: [
      "NPSAS implementation at federal and province ministries",
      "Internal control system at Province and Local government",
      "Audit irregularities manual Development projects",
      "Assets management manual for Provincial government"
    ],
    iconName: "PFM"
  },
  {
    id: "policy",
    title: "Policy & Research",
    tagline: "Evidence-Based Policy for Sustainable Development",
    shortDescription: "Policy reform advisory, national strategy drafting (Industry Policy, Water Resources Policy, Carbon Reduction Frameworks), climate adaptation planning, and independent program evaluations.",
    expandedDescription: "Arish Services supports governments, international development partners, and institutions in formulating, reviewing, and reforming policies that drive national progress. Our research team combines qualitative and quantitative methods to generate actionable insights, while our policy experts ensure recommendations are practical, legally sound, and aligned with national priorities.",
    whoWeServe: "Government ministries, parliamentary committees, international donors (GIZ, EU, SDC, Gopa), and industry associations.",
    keyOfferings: [
      "National policy drafting and strategic framework development",
      "Policy review and gap analysis",
      "Climate change adaptation and mitigation policy support",
      "Program evaluations and impact assessments",
      "Independent performance audits of public institutions",
      "Socio-economic research and baseline studies",
      "Stakeholder consultations and policy dialogue facilitation"
    ],
    iconName: "Policy"
  },
  {
    id: "training",
    title: "Training & Capacity Building",
    tagline: "Empowering Teams Through Knowledge",
    shortDescription: "Capacity building training related to PFM sector, NFRS standards training, procurement and financial reporting workshops, governance capacity programs, and tailored training for provincial and local government staff.",
    expandedDescription: "Sustainable transformation requires skilled people. Arish Services designs and delivers practical, results-oriented training programs that build capacity at individual, team, and institutional levels. Our trainers combine technical expertise with adult learning principles to ensure knowledge is retained and applied.",
    whoWeServe: "Government agencies, development projects, private companies, NGOs, and academic institutions.",
    keyOfferings: [
      "NFRS (Nepal Financial Reporting Standards) training for accountants and auditors",
      "Procurement and financial reporting workshops for government staff",
      "PFM fundamentals for local elected officials and administrators",
      "Internal audit and risk management training",
      "Customized organizational development programs",
      "Training of Trainers (TOT) for institutional sustainability",
      "Digital literacy and software usage workshops"
    ],
    iconName: "Training"
  }
];

export const EXTENDED_SERVICES: Service[] = [
  {
    id: "it-data",
    title: "IT & Data Management",
    tagline: "Digital Solutions That Drive Efficiency",
    shortDescription: "Custom software development, Data analytics, CRM and sales tracking platforms, Android mobile apps, networking, cloud services, and IoT solutions.",
    expandedDescription: "We bridge the gap between finance and technology by delivering custom software, data management systems, and cloud solutions tailored to Nepali organizations. Our IT team develops scalable, user-friendly platforms that automate processes, track performance, and generate actionable insights – all while integrating seamlessly with your existing financial systems.",
    whoWeServe: "Private companies, cooperatives, development projects, educational institutions, and retail businesses.",
    keyOfferings: [
      "Custom software development (CRM, ERP, project management tools)",
      "Sales tracking and marketing automation platforms",
      "E-commerce solutions with Android mobile applications",
      "Cloud services and networking infrastructure setup",
      "Data analytics and business intelligence dashboards",
      "IoT solutions for monitoring and asset tracking",
      "Website development and hosting services"
    ],
    iconName: "IT"
  },
  {
    id: "consulting-outsourcing",
    title: "Consulting & Outsourcing",
    tagline: "Strategic Advisory, Seamless Execution",
    shortDescription: "Project accounting, financial advisory, procurement consulting (including manual preparation), and outsourcing support for national and international associations.",
    expandedDescription: "When you need expert financial or operational support – without long-term overhead – Arish Services delivers. We provide project-based consulting, outsourced accounting, and procurement advisory to public and private clients. Our team integrates with your existing operations to fill gaps, manage workloads, and ensure compliance.",
    whoWeServe: "Donor-funded projects, infrastructure programs, manufacturing companies, trading firms, and cooperatives.",
    keyOfferings: [
      "Project accounting and financial management support",
      "Procurement consulting (including manual preparation and technical documents)",
      "Outsourced CFO and accounting services",
      "Tax planning and compliance advisory",
      "Financial due diligence for investments or acquisitions",
      "Business process re-engineering",
      "Advisory for public-private partnerships (PPP)"
    ],
    iconName: "Consulting"
  },
  {
    id: "startup-support",
    title: "Startup Support",
    tagline: "From Idea to Enterprise – We Help You Launch Right",
    shortDescription: "Business planning, financial modeling, registration assistance, compliance setup, bookkeeping systems, and digital tools tailored for early-stage ventures. We guide Nepali startups through legal, financial, and technological foundations so you can focus on growth.",
    expandedDescription: "Launching a business in Nepal comes with unique challenges – complex registrations, unfamiliar compliance requirements, and the need for affordable systems. Arish Services provides end-to-end startup support to help founders build a compliant, scalable, and investor-ready foundation without breaking the bank.",
    whoWeServe: "Tech startups, small manufacturing units, service-based businesses, cooperatives, women-led enterprises, and social enterprises.",
    keyOfferings: [
      "Business registration assistance (Company Registrar, PAN/VAT, municipal licenses)",
      "Financial system setup (accounting software, bookkeeping frameworks, invoicing)",
      "Business planning and financial modeling (feasibility studies, break-even analysis, cash flow projections)",
      "Tax registration and compliance guidance",
      "Affordable digital tools (CRM, basic website, sales tracking)",
      "Fundraising support (pitch deck review, financial documentation for loans/investors)",
      "Compliance calendar and annual filing reminders"
    ],
    iconName: "Startup"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  // National Experts
  {
    name: "Saroj Suryabanshi",
    role: "National Expert",
    category: "national",
    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyov5XDuU0aD2NeHPfdLBO6r5_rm3ZU-gf7w&s"
  },
  {
    name: "Damodar Subedi",
    role: "PFM Advisor",
    category: "national",
    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSo48yUuhcOCHqZ73xyG4TJH8m7nhkXk7yw&s",
    linkedInUrl: "https://np.linkedin.com/in/damodar-subedi-52b920b4"
  },
  {
    name: "Prabhat Khatri",
    role: "Financial Advisor",
    category: "national",
    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUSYlXv4QXqgOQXgSkoMne96dgVOWuGwyrQ&s"
  },
  {
    name: "Surendra Wagle",
    role: "IT Advisor",
    category: "national",
    photoUrl: "https://avatars.githubusercontent.com/u/66151391?v=4"
  },
  {
    name: "Suresh Regmi",
    role: "National PFM Consultant",
    category: "national",
    photoUrl: "https://i.pinimg.com/280x280_RS/4e/03/6c/4e036c6b5d11601294b56be9dabb9b93.jpg"
  },
  // Board Members
  {
    name: "Ritika Shakya",
    role: "Director",
    category: "board",
    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7z7i1gH83vn-lJ70f4NM1IfAbg8Kla-jOw&s"
  },
  {
    name: "Sharada Shrestha",
    role: "Director",
    category: "board",
    photoUrl: "https://sahayogicollege.edu.np/wp-content/uploads/2025/06/Sarada-pic.jpg"
  }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    id: "eu",
    name: "European Union (EU)",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY9rCbRG1cXTKkUs0Zd4nKlCui3ur_XuxZYsBIOTjhAHy_5135ACBjXUE&s=10"
  },
  {
    id: "plgsp",
    name: "PLGSP (Provincial and Local Governance Support Program)",
    logoUrl: "https://sthaniya.gov.np/demo/sites/default/files/2022-12/plgsp%20mofaga_0.png"
  },
  {
    id: "bhimdutta",
    name: "Bhimdutta Municipality",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSulzJjwziQGIMLlFxw1ZbGKpowI4smmj8yoQ&s"
  },
  {
    id: "giz",
    name: "GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit)",
    logoUrl: "https://pod-ic.org/wp-content/uploads/2019/10/P12.png"
  },
  {
    id: "ssf",
    name: "Social Security Fund (SSF)",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJLRFPmIDaX5WwdfEiug4b1uOZHuFn3vqZ4SmflSCWLQ4Wtms31wcetf-&s=10"
  },
  {
    id: "patan",
    name: "Patan Museum",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4RlDKft9feVHSgpk4ncM40z93cTEVXJDaQ&s"
  }
];

export const WHY_CHOOSE_US_KEYS = [
  "Combined leadership experience in PFM and governance",
  "Proven track record with government, donors, and private sector",
  "Top national expert network for localized best practices",
  "End-to-end solutions: policy → systems → training → evaluation",
  "Registered, insured, and fully tax-compliant in Nepal",
  "Strong focus on climate adaptation, digital tools, and local capacity"
];

export const WHY_CHOOSE_US_DETAILS = [
  {
    number: "01",
    title: "Deep Domain Expertise",
    paragraph: "Our core team includes former Financial Comptroller General officials, tax administrators, chartered accountants, and IT architects who have shaped national policies."
  },
  {
    number: "02",
    title: "Proven Implementation Record",
    paragraph: "From NPSAS rollout in the Ministry of Education to policy drafting for the Ministry of Industry - we deliver measurable, real-world outcomes."
  },
  {
    number: "03",
    title: "Integrated Approach",
    paragraph: "We combine finance, technology, and governance - not siloed services. This ensures your software aligns with financial regulations, and training matches your policy."
  },
  {
    number: "04",
    title: "Commitment to Local Capacity",
    paragraph: "Every project includes intensive knowledge transfer and hands-on training for local staff, securing system sustainability long after our engagement."
  },
  {
    number: "05",
    title: "Global Standards, National Context",
    paragraph: "Our national expert pool helps benchmark projects against international best practices while remaining deeply rooted in Nepal's legal and operational realities."
  }
];

export const MISSION_PILLARS = [
  {
    id: "pfm-pillar",
    title: "Strengthen Public Financial Management",
    subtitle: "Mission Pillar 1",
    paragraph: "Arish Services is committed to transforming how public funds are managed across Nepal's federal, provincial, and local governments. We believe that when public money is managed transparently and efficiently, citizens receive better roads, schools, hospitals, and services. Our team - which includes former Financial Comptroller General officials, chartered accountants, and PFM specialists - works directly with government entities to implement Nepal Public Sector Accounting Standards (NPSAS), develop internal control manuals, resolve audit irregularities, and strengthen treasury and debt management systems. We don't just deliver reports and leave. We sit with local officials, understand their unique constraints, and co-create systems that are practical, sustainable, and audit-ready. From a rural municipality struggling with basic bookkeeping to a provincial ministry needing full NPSAS compliance, our PFM work ensures that every rupee is accounted for and every process is transparent. We measure our success not by the thickness of the manuals we produce, but by the improvement in audit scores, the reduction in financial leakages, and the confidence that local officials gain in managing public resources."
  },
  {
    id: "digital-pillar",
    title: "Drive Digital Innovation",
    subtitle: "Mission Pillar 2",
    paragraph: "In a world where data drives decisions, Arish Services ensures that Nepali organizations - whether government offices, private companies, or development projects - are not left behind. We design and deliver custom software, data management systems, and IT solutions that solve real operational problems, not just technological ones. Our team of software developers, data analysts, and IT architects builds platforms that integrate seamlessly with existing financial systems, automate repetitive tasks, and provide real-time dashboards for decision-making. From CRM systems for dairy companies to sales tracking software for beverage distributors, from Babalshop e-commerce platforms with Android mobile apps to cloud networking for municipal offices - we tailor every solution to the client's budget, technical capacity, and growth stage. We also prioritize knowledge transfer: when we deploy software, we train your staff to use it, maintain it, and eventually improve it. Our goal is not to make you dependent on us, but to make you confident in your own digital capabilities. We believe technology should simplify, not complicate - and every line of code we write serves that principle."
  },
  {
    id: "training-pillar",
    title: "Build Capacity Through Training",
    subtitle: "Mission Pillar 3",
    paragraph: "Arish Services knows that sustainable transformation does not come from consultants or software alone - it comes from people. That is why training and capacity building sit at the heart of our mission. We do not simply hand over a manual and walk away. We design and deliver practical, hands-on training programs that equip government officials, accountants, project managers, and business owners with the skills they need to excel. Our training portfolio includes NFRS (Nepal Financial Reporting Standards) for professional accountants, procurement and financial reporting workshops for local government staff, PFM fundamentals for elected officials, and customized organizational development programs for private companies. We use adult learning principles - case studies, real-world exercises, group problem-solving - to ensure knowledge is not just heard but retained and applied. We also offer Training of Trainers (TOT) programs so that organizations can build internal capacity long after our engagement ends. Whether we are training a team of 10 in a Kathmandu boardroom or 200 municipal staff across seven provinces, our commitment is the same: every participant leaves more confident, more capable, and more committed to excellence than when they arrived."
  },
  {
    id: "policy-pillar",
    title: "Shape Evidence-Based Policy",
    subtitle: "Mission Pillar 4",
    paragraph: "Arish Services believes that good policy changes lives - but only when it is grounded in evidence, shaped by local realities, and designed for implementation. Our policy and research practice supports governments, development partners, and industry associations in drafting, reviewing, and reforming policies that drive national progress. We do not work in ivory towers. Our policy experts go to the field - talking to farmers about irrigation policy, to factory owners about industry regulations, to municipal officials about climate adaptation - and bring those voices to the policy table. We conduct rigorous research, baseline studies, and impact evaluations using both quantitative and qualitative methods. We facilitate stakeholder consultations that include the powerful and the marginalized. And then we draft policies, strategies, and legal frameworks that are practical, inclusive, and aligned with Nepal's national priorities and international commitments. Recent examples include drafting the National Industry Policy for the Ministry of Industry (with GIZ-ISF-EU support), reviewing national water resources and irrigation policies for Emerging Markets International, and providing policy support for carbon reduction initiatives to Deloitte Global. Our mission is to ensure that Nepal's policies are not just words on paper - but actionable roadmaps for a better future."
  },
  {
    id: "startup-pillar",
    title: "Nurture Nepal's Startup Ecosystem",
    subtitle: "Mission Pillar 5",
    paragraph: "Arish Services is deeply committed to nurturing Nepal's next generation of entrepreneurs. We know that launching a business in Nepal comes with unique challenges - complex registrations, unfamiliar compliance requirements, limited access to affordable financial and digital systems, and the overwhelming feeling of not knowing where to start. That is why we created our Startup Support service. Our mission is to lower the barriers to entry so that founders can focus on what matters most: building great products, serving customers, and creating jobs. We offer end-to-end support - from business registration assistance (Company Registrar, PAN/VAT, municipal licenses) to financial system setup (accounting software, bookkeeping frameworks, invoicing), from business planning and financial modeling to tax registration and compliance guidance. We also provide affordable digital tools - basic websites, CRM systems, sales tracking platforms - that give startups a professional presence without breaking the bank. For founders seeking funding, we help organize financial records, review pitch decks, and prepare documentation for loans or investor due diligence. We offer fixed-fee packages designed for early-stage budgets, and we assign a dedicated CA or IT specialist to guide each startup through the critical first 12 months. Our mission is to see a thriving, diverse, and compliant startup ecosystem in Nepal - and we are proud to be the partner that helps founders take their first confident steps."
  }
];
