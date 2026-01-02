# DeltaFlow - AI Development Agency Website
## Complete Development & Content Strategy Guide

> **Business Model**: AI development agency that builds custom AI solutions, provides business automation, and develops AI tools for clients.  
> **Goal**: Create a compelling, story-driven website that converts visitors into clients.

---

## 📋 Table of Contents

1. [Business Understanding](#business-understanding)
2. [Content Strategy & Storytelling](#content-strategy--storytelling)
3. [UX Flow & User Journey](#ux-flow--user-journey)
4. [Page Structure](#page-structure)
5. [Component Architecture](#component-architecture)
6. [Data Architecture](#data-architecture)
7. [Technical Stack](#technical-stack)
8. [Design System](#design-system)
9. [Animation Guidelines](#animation-guidelines)
10. [Development Workflow](#development-workflow)
11. [Deployment](#deployment)

---

## 🎯 Business Understanding

### What DeltaFlow Does
**DeltaFlow is an AI development agency** that:
- ✅ Develops custom AI products for clients
- ✅ Provides business automation solutions
- ✅ Builds AI-powered tools and software
- ✅ Engineers intelligent systems for enterprises

### What DeltaFlow Does NOT Do
- ❌ Sell SaaS products
- ❌ Conduct academic research
- ❌ Offer off-the-shelf solutions

### Target Audience
- **Primary**: CTOs, VPs of Engineering, Product Managers
- **Secondary**: Founders, Business Owners
- **Pain Points**: Need custom AI solutions, struggling with automation, want to leverage AI but don't have in-house expertise

### Value Proposition
**"We transform your business with custom AI solutions - from concept to deployment."**

---

## 📖 Content Strategy & Storytelling

### The Narrative Arc

**Problem → Solution → Transformation**

#### 1. **Hook** (Hero Section)
- Identify the visitor's pain point
- Create emotional connection
- Promise transformation

#### 2. **Credibility** (Trust Indicators)
- Showcase expertise
- Display client logos
- Highlight results

#### 3. **Services** (What We Offer)
- Clear, benefit-focused service descriptions
- Real-world use cases
- Tangible outcomes

#### 4. **Proof** (Case Studies)
- Real projects you've built
- Specific results achieved
- Client testimonials

#### 5. **Process** (How We Work)
- Demystify the engagement
- Build confidence
- Remove friction

#### 6. **Call-to-Action**
- Clear next steps
- Low barrier to entry
- Multiple contact options

---

### Content Principles

1. **Benefits Over Features**
   - ❌ "We use GPT-4 and LangChain"
   - ✅ "Cut customer service costs by 60% with AI"

2. **Specific Over Generic**
   - ❌ "We build AI solutions"
   - ✅ "We built an AI assistant that processes 10K support tickets daily"

3. **Results-Driven**
   - Every statement should tie to business outcomes
   - Use metrics, percentages, dollar amounts

4. **Human-Centered**
   - Avoid jargon unless necessary
   - Use "you" and "your business"
   - Tell stories, not specs

---

### Messaging Framework

**Homepage Headline Options:**
1. "Custom AI Solutions That Transform Your Business"
2. "We Build AI Products That Actually Work"
3. "Enterprise AI Development, From Concept to Deployment"
4. "Your AI Development Partner for Business Innovation"

**Subheadline**:
"Expert AI engineers who build custom automation solutions, intelligent tools, and machine learning systems for forward-thinking companies."

**Service Descriptions** (Example):

```markdown
### Business Process Automation
**The Challenge**: Your team spends hours on repetitive tasks
**Our Solution**: Intelligent automation that handles routine work 24/7
**The Result**: 70% time savings, fewer errors, happier employees

**What We Build**:
- Document processing systems
- Automated data entry and validation
- Intelligent email routing
- Custom workflow automation

**Recent Success**: Built an invoice processing system that reduced processing time from 3 days to 3 hours for a Fortune 500 client.
```

---

## 🗺️ UX Flow & User Journey

### Primary User Journey

```
Landing → 
  Learn (Services) → 
    Believe (Portfolio) → 
      Understand (Process) → 
        Trust (About) → 
          Act (Contact)
```

### Secondary Journeys

**Quick Decision Makers**:
```
Hero → Services → Contact
```

**Researchers**:
```
Hero → Services → Portfolio → Process → About → Contact
```

**Technical Evaluators**:
```
Services → Portfolio → Approach/Tech Stack → Contact
```

---

### Page Flow Logic

**Home Page 30-Second Test**:
Can a visitor understand in 30 seconds:
1. What you do?
2. Who it's for?
3. Why choose you?
4. What to do next?

**Services Page Goal**:
Make visitors say "That's exactly what I need" for at least one service

**Portfolio Page Goal**:
Make visitors think "If they did that, they can do mine"

**Contact Page Goal**:
Remove all friction from starting a conversation

---

## 📄 Page Structure

### Updated Site Architecture

```
/
├── Home                    (Hero, Services Overview, Portfolio Highlights, CTA)
├── Services               
│   ├── /services          (All services overview)
│   ├── /services/ai-development
│   ├── /services/business-automation
│   └── /services/ai-consulting
├── Portfolio              
│   └── /work              (Case studies & projects)
├── Process                
│   └── /how-we-work       (Your methodology)
├── Company
│   ├── /about             (Team, story, values)
│   └── /careers           (Optional - if hiring)
├── /faq                   (Frequently asked questions)
└── /contact               (Get started form)
```

**Total Pages**: 7-9 pages (lean and focused)

---

## 🏗️ Component Architecture

### Layout Components

```typescript
components/
├── layout/
│   ├── Navigation.tsx         // Main nav with services dropdown
│   ├── Footer.tsx             // Company info, quick links
│   ├── PageHeader.tsx         // Reusable page hero
│   └── CTABanner.tsx          // Conversion-focused CTAs
```

### Section Components (Reusable Page Blocks)

```typescript
components/sections/
├── Hero.tsx                   // Homepage hero with rotating value props
├── ServiceGrid.tsx            // 3-col service cards
├── PortfolioShowcase.tsx      // Featured work with filters
├── ProcessTimeline.tsx        // How we work (step-by-step)
├── Stats.tsx                  // Achievement counters
├── Testimonials.tsx           // Client quotes carousel
├── ClientLogos.tsx            // Logo cloud / marquee
├── TechStack.tsx              // Technologies we use
└── ContactCTA.tsx             // Final conversion section
```

### UI Components (Design System)

```typescript
components/ui/
├── Button.tsx                 // Primary, secondary, outline
├── Card.tsx                   // Service cards, blog cards
├── Badge.tsx                  // Tags, labels
├── Input.tsx                  // Form fields
├── Textarea.tsx
├── Select.tsx
└── [shadcn/ui components]     // Additional as needed
```

### Animation Components

```typescript
components/animations/
├── FadeIn.tsx                 // Fade in on scroll
├── SlideUp.tsx                // Slide up reveal
├── StaggerChildren.tsx        // Sequential animations
└── CountUp.tsx                // Number counter animation
```

---

## 💾 Data Architecture

### Centralized Data Management

**All static content in**: `lib/data.js`

This approach allows:
- ✅ Easy content updates without touching code
- ✅ Future API integration (just swap the import)
- ✅ Centralized content management
- ✅ Type-safe with JSDoc or TypeScript

### Data Structure

**`lib/data.js`**:

```javascript
// ======================
// SITE CONFIGURATION
// ======================
export const siteConfig = {
  name: "DeltaFlow",
  tagline: "Synchronizing Intelligence with Business",
  description: "Custom AI development agency building intelligent solutions for forward-thinking companies",
  url: "https://deltaflow.ai",
  email: "contact@deltaflow.ai",
  phone: "+1 (555) 123-4567",
  address: {
    city: "San Francisco",
    state: "CA",
    country: "United States"
  },
  social: {
    linkedin: "https://linkedin.com/company/deltaflow",
    twitter: "https://twitter.com/deltaflow",
    github: "https://github.com/deltaflow"
  }
};

// ======================
// NAVIGATION
// ======================
export const navigation = {
  main: [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/work" },
    { name: "Process", href: "/how-we-work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ],
  services: [
    {
      name: "AI Product Development",
      href: "/services/ai-development",
      description: "Custom AI solutions from concept to deployment"
    },
    {
      name: "Business Automation",
      href: "/services/business-automation",
      description: "Intelligent process automation that scales"
    },
    {
      name: "AI Consulting",
      href: "/services/ai-consulting",
      description: "Strategic guidance for AI adoption"
    }
  ]
};

// ======================
// SERVICES
// ======================
export const services = [
  {
    id: "ai-development",
    name: "AI Product Development",
    slug: "ai-development",
    tagline: "From Concept to Production AI",
    description: "We build custom AI products tailored to your business needs",
    longDescription: "Our team of AI engineers designs, develops, and deploys production-ready AI systems. From NLP applications to computer vision solutions, we handle the entire development lifecycle.",
    
    icon: "Cpu", // Lucide icon name
    
    benefits: [
      "End-to-end AI product development",
      "Custom model training and fine-tuning",
      "Production deployment and MLOps",
      "Ongoing support and optimization"
    ],
    
    useCases: [
      {
        title: "Intelligent Document Processing",
        description: "Extract and process data from unstructured documents with 95%+ accuracy"
      },
      {
        title: "Conversational AI",
        description: "Custom chatbots and virtual assistants that understand context"
      },
      {
        title: "Predictive Analytics",
        description: "ML models that forecast trends and optimize decision-making"
      }
    ],
    
    process: [
      "Discovery & Requirements",
      "Architecture Design",
      "Model Development",
      "Integration & Testing",
      "Deployment & Monitoring"
    ],
    
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "AWS SageMaker"],
    
    cta: {
      text: "Discuss Your AI Project",
      href: "/contact?service=ai-development"
    }
  },
  
  {
    id: "business-automation",
    name: "Business Process Automation",
    slug: "business-automation",
    tagline: "Automate What Matters",
    description: "Intelligent automation that eliminates repetitive work",
    longDescription: "We design and implement custom automation solutions that integrate AI with your existing workflows, reducing manual effort and improving accuracy.",
    
    icon: "Workflow",
    
    benefits: [
      "70% reduction in manual processing time",
      "Near-zero error rates",
      "24/7 automated operations",
      "Seamless integration with existing systems"
    ],
    
    useCases: [
      {
        title: "Invoice Processing",
        description: "Automated data extraction, validation, and entry"
      },
      {
        title: "Customer Support Automation",
        description: "AI-powered ticket routing and response generation"
      },
      {
        title: "Data Pipeline Automation",
        description: "Intelligent ETL processes with anomaly detection"
      }
    ],
    
    process: [
      "Process Analysis",
      "Automation Strategy",
      "Solution Development",
      "Integration",
      "Training & Handoff"
    ],
    
    technologies: ["Python", "FastAPI", "Celery", "Apache Airflow", "RPA Tools", "Custom APIs"],
    
    cta: {
      text: "Explore Automation Solutions",
      href: "/contact?service=automation"
    }
  },
  
  {
    id: "ai-consulting",
    name: "AI Strategy & Consulting",
    slug: "ai-consulting",
    tagline: "Navigate Your AI Journey",
    description: "Expert guidance for successful AI implementation",
    longDescription: "We help organizations develop AI strategies, assess feasibility, and create roadmaps for successful AI adoption.",
    
    icon: "Lightbulb",
    
    benefits: [
      "Clear AI roadmap aligned with business goals",
      "Feasibility assessment and ROI analysis",
      "Technology stack recommendations",
      "Implementation best practices"
    ],
    
    useCases: [
      {
        title: "AI Readiness Assessment",
        description: "Evaluate your data, infrastructure, and organizational readiness"
      },
      {
        title: "Custom AI Strategy",
        description: "Develop a phased implementation plan"
      },
      {
        title: "Technical Due Diligence",
        description: "Review AI vendors or evaluate acquisition targets"
      }
    ],
    
    process: [
      "Current State Analysis",
      "Opportunity Identification",
      "Strategy Development",
      "Roadmap Creation",
      "Implementation Support"
    ],
    
    technologies: ["Business Analysis", "Technical Architecture", "Change Management"],
    
    cta: {
      text: "Schedule a Consultation",
      href: "/contact?service=consulting"
    }
  }
];

// ======================
// PORTFOLIO / CASE STUDIES
// ======================
export const portfolio = [
  {
    id: "fintech-fraud-detection",
    title: "Real-Time Fraud Detection System",
    client: "Major FinTech Company",
    industry: "Financial Services",
    
    challenge: "Client was losing $2M annually to fraudulent transactions with a 40% false positive rate causing customer friction.",
    
    solution: "Built a custom ML model using ensemble methods that analyzes transaction patterns in real-time with 99.5% accuracy.",
    
    results: [
      { metric: "99.5%", label: "Fraud Detection Accuracy" },
      { metric: "$1.8M", label: "Annual Savings" },
      { metric: "85%", label: "Reduction in False Positives" },
      { metric: "<100ms", label: "Response Time" }
    ],
    
    technologies: ["Python", "TensorFlow", "Apache Kafka", "Redis", "AWS"],
    
    testimonial: {
      quote: "DeltaFlow's solution transformed our fraud prevention. The accuracy is incredible and our customers are much happier.",
      author: "VP of Engineering",
      company: "FinTech Client"
    },
    
    image: "/images/portfolio/fraud-detection.jpg",
    featured: true
  },
  
  {
    id: "healthcare-automation",
    title: "Medical Records Processing Automation",
    client: "Healthcare Provider Network",
    industry: "Healthcare",
    
    challenge: "Manual processing of patient records was taking 5-7 days per case, creating bottlenecks in patient care.",
    
    solution: "Developed an AI-powered document processing system with HIPAA-compliant infrastructure that extracts and validates medical data.",
    
    results: [
      { metric: "95%", label: "Processing Time Reduction" },
      { metric: "4 hours", label: "Average Processing Time" },
      { metric: "98%", label: "Data Accuracy" },
      { metric: "HIPAA", label: "Compliant" }
    ],
    
    technologies: ["Python", "spaCy", "Azure ML", "FastAPI", "PostgreSQL"],
    
    testimonial: {
      quote: "This system has been transformative for our operations. Patients get faster service and our staff can focus on care.",
      author: "Chief Medical Officer",
      company: "Healthcare Network"
    },
    
    image: "/images/portfolio/healthcare.jpg",
    featured: true
  },
  
  {
    id: "ecommerce-recommendations",
    title: "Personalized Product Recommendation Engine",
    client: "E-Commerce Retailer",
    industry: "Retail",
    
    challenge: "Generic product recommendations were resulting in low conversion rates and poor customer engagement.",
    
    solution: "Built a custom recommendation engine using collaborative filtering and deep learning that personalizes product suggestions in real-time.",
    
    results: [
      { metric: "42%", label: "Increase in Conversion Rate" },
      { metric: "68%", label: "Higher Average Order Value" },
      { metric: "3.2x", label: "Engagement Improvement" },
      { metric: "Real-time", label: "Personalization" }
    ],
    
    technologies: ["Python", "PyTorch", "FastAPI", "Redis", "GCP"],
    
    testimonial: {
      quote: "The ROI was clear within the first month. Our customers love the personalized experience.",
      author: "Head of Product",
      company: "E-Commerce Client"
    },
    
    image: "/images/portfolio/ecommerce.jpg",
    featured: false
  }
];

// ======================
// PROCESS / HOW WE WORK
// ======================
export const process = {
  headline: "Our proven process for delivering successful AI projects",
  description: "We follow a structured approach that ensures your AI solution is built right, on time, and delivers real business value.",
  
  phases: [
    {
      number: "01",
      name: "Discovery",
      duration: "1-2 weeks",
      description: "We start by deeply understanding your business, challenges, and goals",
      activities: [
        "Stakeholder interviews",
        "Process analysis",
        "Data assessment",
        "Feasibility study",
        "Success metrics definition"
      ],
      deliverables: [
        "Project scope document",
        "Technical feasibility report",
        "Preliminary timeline and budget"
      ]
    },
    {
      number: "02",
      name: "Design",
      duration: "2-3 weeks",
      description: "We architect the solution and create detailed technical specifications",
      activities: [
        "Solution architecture design",
        "Data pipeline planning",
        "Model selection and approach",
        "Integration strategy",
        "Security and compliance review"
      ],
      deliverables: [
        "Technical architecture document",
        "Detailed project plan",
        "Wireframes/mockups (if applicable)",
        "Development roadmap"
      ]
    },
    {
      number: "03",
      name: "Development",
      duration: "6-12 weeks",
      description: "Our engineers build, train, and refine your AI solution",
      activities: [
        "Data preparation and cleaning",
        "Model development and training",
        "API and integration development",
        "Testing and quality assurance",
        "Performance optimization"
      ],
      deliverables: [
        "Trained AI models",
        "Production-ready codebase",
        "API documentation",
        "Test results and metrics"
      ]
    },
    {
      number: "04",
      name: "Deployment",
      duration: "1-2 weeks",
      description: "We deploy your solution to production with proper monitoring",
      activities: [
        "Production environment setup",
        "Deployment automation",
        "Monitoring and alerting",
        "Performance tuning",
        "Team training"
      ],
      deliverables: [
        "Live production system",
        "Monitoring dashboards",
        "Documentation",
        "Training materials"
      ]
    },
    {
      number: "05",
      name: "Support",
      duration: "Ongoing",
      description: "We provide ongoing support, maintenance, and optimization",
      activities: [
        "Performance monitoring",
        "Model retraining",
        "Bug fixes and updates",
        "Feature enhancements",
        "Technical support"
      ],
      deliverables: [
        "Monthly performance reports",
        "Model updates",
        "System improvements",
        "Dedicated support channel"
      ]
    }
  ]
};

// ======================
// ABOUT / COMPANY
// ======================
export const company = {
  story: {
    headline: "We build AI that works",
    paragraphs: [
      "DeltaFlow was founded with a simple mission: make enterprise-grade AI accessible to every business. We saw too many companies struggling to implement AI effectively - either lacking the technical expertise or getting stuck with generic solutions that didn't fit their needs.",
      "Our team of AI engineers and consultants brings deep expertise in machine learning, automation, and software development. We've built AI systems for Fortune 500 companies and fast-growing startups alike.",
      "Today, we're proud to be the AI development partner for companies across finance, healthcare, retail, and technology. Every project we take on is an opportunity to solve real problems with intelligent solutions."
    ]
  },
  
  values: [
    {
      icon: "Target",
      title: "Results-Driven",
      description: "We measure success by business outcomes, not technical metrics"
    },
    {
      icon: "Shield",
      title: "Quality First",
      description: "Every solution we build meets production-grade standards"
    },
    {
      icon: "Users",
      title: "Partnership",
      description: "We're your long-term AI development partner, not just a vendor"
    },
    {
      icon: "Zap",
      title: "Innovation",
      description: "We stay at the forefront of AI technology and best practices"
    }
  ],
  
  team: {
    headline: "World-class AI engineers",
    description: "Our team combines deep technical expertise with business acumen",
    size: "25+ engineers",
    locations: ["San Francisco", "New York", "Remote"],
    expertise: [
      "Machine Learning Engineers",
      "AI Researchers",
      "Full-Stack Developers",
      "DevOps Engineers",
      "Product Managers"
    ]
  },
  
  stats: [
    { value: "50+", label: "AI Projects Delivered" },
    { value: "25+", label: "Expert Engineers" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "$10M+", label: "Client ROI Generated" }
  ]
};

// ======================
// TESTIMONIALS
// ======================
export const testimonials = [
  {
    quote: "DeltaFlow transformed our operations. The AI system they built processes in hours what used to take days.",
    author: "Sarah Chen",
    title: "CTO",
    company: "TechCorp",
    image: "/images/testimonials/sarah.jpg"
  },
  {
    quote: "Working with DeltaFlow was seamless. They understood our business and delivered exactly what we needed.",
    author: "Michael Rodriguez",
    title: "VP Engineering",
    company: "FinanceHub",
    image: "/images/testimonials/michael.jpg"
  },
  {
    quote: "The ROI was clear within months. This is the AI partner every company needs.",
    author: "Emily Watson",
    title: "Head of Product",
    company: "RetailCo",
    image: "/images/testimonials/emily.jpg"
  }
];

// ======================
// CLIENT LOGOS
// ======================
export const clients = [
  { name: "TechCorp", logo: "/images/clients/techcorp.svg" },
  { name: "FinanceHub", logo: "/images/clients/financehub.svg" },
  { name: "RetailCo", logo: "/images/clients/retailco.svg" },
  { name: "HealthPlus", logo: "/images/clients/healthplus.svg" },
  { name: "DataFlow", logo: "/images/clients/dataflow.svg" },
  { name: "AutoMate", logo: "/images/clients/automate.svg" }
];

// ======================
// FAQ
// ======================
export const faqs = [
  {
    id: "project-timeline",
    category: "General",
    question: "How long does a typical AI project take?",
    answer: "Most projects take 10-16 weeks from kickoff to deployment. This includes discovery (1-2 weeks), design (2-3 weeks), development (6-12 weeks), and deployment (1-2 weeks). We provide a detailed timeline during discovery."
  },
  {
    id: "pricing",
    category: "General",
    question: "What's the investment range for an AI project?",
    answer: "Projects typically range from $75K to $500K+ depending on complexity. We provide a detailed proposal with fixed pricing after the discovery phase."
  },
  {
    id: "company-size",
    category: "General",
    question: "Do you work with startups or only enterprises?",
    answer: "We work with both. Our sweet spot is companies with 50-5000 employees, but we evaluate each project individually based on business impact and technical fit."
  },
  {
    id: "post-deployment",
    category: "Process",
    question: "What happens after deployment?",
    answer: "We offer ongoing support packages that include monitoring, maintenance, model retraining, and feature enhancements. Many clients choose annual support contracts."
  },
  {
    id: "data-science-team",
    category: "Technical",
    question: "Do we need our own data science team?",
    answer: "No. We can handle the entire project independently. However, we integrate seamlessly with your existing engineering and product teams."
  },
  {
    id: "technologies",
    category: "Technical",
    question: "What technologies do you use?",
    answer: "We're technology-agnostic and choose the best tools for each project. Common stack: Python, TensorFlow/PyTorch, FastAPI, React, AWS/GCP/Azure. We document everything clearly."
  },
  {
    id: "data-requirements",
    category: "Technical",
    question: "How much data do we need for an AI project?",
    answer: "It depends on the project. For custom ML models, typically 10K+ labeled examples. For LLM-based solutions, we can work with smaller datasets using fine-tuning and prompt engineering. We assess data requirements during discovery."
  },
  {
    id: "ownership",
    category: "Legal",
    question: "Who owns the code and models?",
    answer: "You do. All code, models, and intellectual property developed for your project belongs to you. We sign IP assignment agreements as part of our standard contracts."
  },
  {
    id: "security-compliance",
    category: "Security",
    question: "Are your solutions secure and compliant?",
    answer: "Yes. We follow security best practices and can build HIPAA, SOC2, and GDPR-compliant solutions. We perform security audits and can work within your compliance requirements."
  },
  {
    id: "maintenance",
    category: "Process",
    question: "Do you provide ongoing maintenance?",
    answer: "Yes. We offer flexible support packages including 24/7 monitoring, model retraining, bug fixes, and feature updates. Support can be hourly, monthly retainer, or annual contracts."
  },
  {
    id: "guarantees",
    category: "General",
    question: "Do you guarantee specific accuracy or performance?",
    answer: "We set realistic performance targets during discovery based on your data and requirements. While we can't guarantee specific metrics before seeing your data, we don't consider a project complete until agreed-upon benchmarks are met."
  },
  {
    id: "payment-terms",
    category: "Business",
    question: "What are your payment terms?",
    answer: "Typically 30% upfront, 40% at halfway milestone, and 30% upon deployment. For longer projects, we can arrange monthly billing. We're flexible and can accommodate your procurement process."
  },
  {
    id: "location",
    category: "General",
    question: "Do you work with remote clients?",
    answer: "Absolutely. We work with clients globally and are experienced with remote collaboration. We adapt our communication schedule to your timezone."
  },
  {
    id: "nda",
    category: "Legal",
    question: "Can you sign an NDA?",
    answer: "Yes, we regularly work under NDAs and can sign yours or provide ours. We take confidentiality seriously and all team members sign confidentiality agreements."
  },
  {
    id: "demo",
    category: "Process",
    question: "Can we see a demo before committing?",
    answer: "During the discovery phase, we often build a proof-of-concept or prototype to validate the approach. This helps ensure the solution will work before full development begins."
  }
];

export const faqCategories = [
  { id: "all", name: "All Questions" },
  { id: "general", name: "General" },
  { id: "process", name: "Process" },
  { id: "technical", name: "Technical" },
  { id: "business", name: "Business" },
  { id: "legal", name: "Legal" },
  { id: "security", name: "Security" }
];

// ======================
// CONTACT FORM
// ======================
export const contactForm = {
  serviceOptions: [
    { value: "ai-development", label: "AI Product Development" },
    { value: "business-automation", label: "Business Automation" },
    { value: "ai-consulting", label: "AI Consulting" },
    { value: "not-sure", label: "Not Sure - Need Guidance" }
  ],
  
  budgetOptions: [
    { value: "under-100k", label: "Under $100K" },
    { value: "100k-250k", label: "$100K - $250K" },
    { value: "250k-500k", label: "$250K - $500K" },
    { value: "500k-plus", label: "$500K+" },
    { value: "not-sure", label: "Not Sure" }
  ],
  
  timelineOptions: [
    { value: "urgent", label: "< 1 month" },
    { value: "normal", label: "1-3 months" },
    { value: "flexible", label: "3-6 months" },
    { value: "exploring", label: "Just Exploring" }
  ]
};
```

---

## 🛠️ Technical Stack

### Core Framework
```json
{
  "framework": "Next.js 16.x",
  "react": "React 19+",
  "language": "TypeScript 5.x",
  "rendering": "SSG with ISR"
}
```

### Styling & Design
```json
{
  "css": "Tailwind CSS 4.x",
  "animations": "Framer Motion 12.x",
  "icons": "Lucide React",
  "fonts": "Google Fonts (Inter + Poppins)"
}
```

### Additional Libraries
- **next-seo** - SEO management
- **react-hook-form** - Form handling
- **zod** - Form validation
- **react-intersection-observer** - Scroll animations
- **clsx** + **tailwind-merge** - Class utilities

---

## 🎨 Design System

### Color Palette
```css
/* Primary - Trust & Growth */
--brand-green: #16A34A;
--brand-dark-green: #0F3D2E;

/* Accent - Energy & Action */
--brand-red: #DC2626;

/* Neutrals */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-900: #0B0B0B;
```

### Typography
- **Headings**: Poppins (600, 700)
- **Body**: Inter (400, 500, 600)
- **Scale**: Fluid typography with clamp()

### Spacing
- **Base**: 8px grid system
- **Sections**: 80-120px vertical padding
- **Content**: Max-width 1280px

---

## 🎬 Animation Guidelines

### Principles
1. **Purposeful** - Enhance understanding
2. **Performant** - 60fps minimum
3. **Subtle** - Don't distract
4. **Delightful** - Add personality

### Standard Animations
```typescript
// Scroll reveals
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Number counters (for stats)
// Card hover effects
// CTA pulses
// Logo marquee scroll
```

---

## 📄 Detailed Page Specifications

### 1. Home Page (`app/page.tsx`)

**Goal**: Make visitors understand what you do and want to contact you in <30 seconds

#### Sections:

**Hero**
```typescript
<Hero
  headline="Custom AI Solutions That Transform Your Business"
  subheadline="We build intelligent automation and AI-powered products for forward-thinking companies."
  primaryCTA="Start Your Project"
  secondaryCTA="View Our Work"
  visualType="animated-gradient" // or subtle tech illustration
/>
```

**Trust Bar**
```typescript
<ClientLogos 
  headline="Trusted by leading companies"
  logos={clients}
  animated={true}
/>
```

**Services Overview** (3-Column)
```typescript
<ServiceGrid
  headline="How We Can Help"
  description="We bring AI expertise to solve your toughest business challenges"
  services={services.map(s => ({
    icon: s.icon,
    title: s.name,
    description: s.description,
    link: `/services/${s.slug}`
  }))}
/>
```

**Featured Work** (2-3 highlight cards)
```typescript
<PortfolioShowcase
  headline="Results That Matter"
  description="Real projects, measurable impact"
  projects={portfolio.filter(p => p.featured)}
  cta="View All Projects"
/>
```

**Stats**
```typescript
<Stats
  headline="Delivering Excellence"
  stats={company.stats}
  animated={true} // Count-up animation
/>
```

**Process Teaser**
```typescript
<ProcessOverview
  headline="How We Work"
  description="A proven process that delivers results"
  phases={process.phases.slice(0, 3)} // Show first 3
  cta="See Full Process"
/>
```

**Final CTA**
```typescript
<ContactCTA
  headline="Ready to Transform Your Business with AI?"
  description="Let's discuss your project and how we can help"
  primaryCTA="Schedule a Call"
  secondaryCTA="Send Us a Message"
/>
```

---

### 2. Services Overview (`app/services/page.tsx`)

**Goal**: Help visitors self-identify their need

#### Sections:

**Header**
```typescript
<PageHeader
  headline="Services"
  subheadline="Comprehensive AI development solutions for your business"
/>
```

**Service Cards** (Detailed 3-column)
```typescript
{services.map(service => (
  <ServiceCard
    icon={service.icon}
    title={service.name}
    tagline={service.tagline}
    description={service.longDescription}
    benefits={service.benefits}
    cta={`Learn More →`}
    href={`/services/${service.slug}`}
  />
))}
```

**Why Choose Us**
```typescript
<ValueProps
  headline="Why Work With DeltaFlow"
  values={company.values}
/>
```

**CTA**

---

### 3. Individual Service Pages (`app/services/[slug]/page.tsx`)

**Goal**: Deep-dive into specific service, address objections, drive conversion

**Dynamic routing** using `data.js`

#### Sections:

**Hero**
- Service name
- Tagline
- Quick description
- Primary CTA

**The Challenge** (Problem section)
- What pain points this solves
- Business impact of inaction

**Our Approach**
- How we solve it
- What makes us different

**What We Build** (Use Cases)
```typescript
<UseCaseGrid useCases={service.useCases} />
```

**Process**
```typescript
<ProcessTimeline phases={service.process} />
```

**Technologies**
```typescript
<TechStack 
  headline="Technologies We Use"
  technologies={service.technologies}
/>
```

**Related Work**
```typescript
<RelatedPortfolio 
  projects={portfolio.filter(p => p.industry matches service)}
/>
```

**Get Started CTA**

---

### 4. Portfolio/Work (`app/work/page.tsx`)

**Goal**: Build credibility and help visitors see "if they can do that, they can do mine"

#### Sections:

**Header**
```typescript
<PageHeader
  headline="Our Work"
  subheadline="Real projects, measurable results"
/>
```

**Filter** (Optional)
```typescript
<PortfolioFilter 
  filters={["All", "AI Development", "Automation", "Consulting"]}
/>
```

**Case Study Grid**
```typescript
{portfolio.map(project => (
  <CaseStudyCard
    title={project.title}
    industry={project.industry}
    challenge={project.challenge}
    results={project.results}
    image={project.image}
    technologies={project.technologies}
  />
))}
```

**Each Card Shows**:
- Project title
- Industry
- Challenge (1 sentence)
- Results (4 key metrics)
- Technologies used
- "Read Full Story" CTA

**Testimonials**
```typescript
<Testimonials testimonials={testimonials} />
```

**CTA**

---

### 5. How We Work (`app/how-we-work/page.tsx`)

**Goal**: Build confidence in your process, remove uncertainty

#### Sections:

**Header**
```typescript
<PageHeader
  headline={process.headline}
  subheadline={process.description}
/>
```

**Process Timeline**
```typescript
<ProcessTimeline 
  phases={process.phases}
  showDetails={true} // Full details
/>
```

**Each Phase Shows**:
- Phase number and name
- Duration
- Description
- Activities (bullet list)
- Deliverables (bullet list)

**What to Expect Section**
- Communication cadence
- Tools we use
- Your team's involvement

**FAQ**
```typescript
<FAQ questions={faqs.filter(q => q.category === 'process')} />
```

**CTA**

---

### 6. About (`app/about/page.tsx`)

**Goal**: Build trust through transparency

#### Sections:

**Header**
```typescript
<PageHeader
  headline="About DeltaFlow"
  subheadline={company.story.headline}
/>
```

**Story**
```typescript
<StorySection paragraphs={company.story.paragraphs} />
```

**Values**
```typescript
<ValuesGrid values={company.values} />
```

**Team**
```typescript
<TeamSection
  headline={company.team.headline}
  description={company.team.description}
  stats={{
    size: company.team.size,
    locations: company.team.locations
  }}
/>
```

**Stats**
```typescript
<Stats stats={company.stats} />
```

**CTA: Join Us / Work With Us**

---

### 7. FAQ Page (`app/faq/page.tsx`)

**Goal**: Answer common questions, remove objections, build trust

#### Sections:

**Header**
```typescript
<PageHeader
  headline="Frequently Asked Questions"
  subheadline="Everything you need to know about working with DeltaFlow"
/>
```

**Category Filter**
```typescript
<CategoryTabs 
  categories={faqCategories}
  activeCategory={selectedCategory}
  onChange={setSelectedCategory}
/>
```

**FAQ Accordion**
```typescript
<FAQAccordion
  faqs={selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category.toLowerCase() === selectedCategory)
  }
  searchable={true}
/>
```

**Each FAQ Item**:
- Question (clickable to expand)
- Detailed answer
- Smooth expand/collapse animation
- Search highlighting (if searched)

**Search Functionality**
```typescript
<SearchBar 
  placeholder="Search questions..."
  onSearch={handleSearch}
/>
```

**Still Have Questions Section**
```typescript
<CTABanner
  headline="Still have questions?"
  description="We're here to help. Schedule a call with our team."
  primaryCTA="Schedule a Call"
  secondaryCTA="Send Us a Message"
/>
```

**Related Links**
- Link to Process page
- Link to Portfolio
- Link to Contact

---

### 8. Contact (`app/contact/page.tsx`)

**Goal**: Make it EASY to start a conversation, qualify leads

#### Sections:

**Header**
```typescript
<PageHeader
  headline="Let's Build Something Great"
  subheadline="Tell us about your project and we'll get back to you within 24 hours"
/>
```

**Contact Form**
```typescript
<ContactForm
  fields={[
    { name: "fullName", label: "Full Name *", type: "text" },
    { name: "email", label: "Work Email *", type: "email" },
    { name: "company", label: "Company *", type: "text" },
    { name: "service", label: "Interested In *", type: "select", options: contactForm.serviceOptions },
    { name: "budget", label: "Budget Range", type: "select", options: contactForm.budgetOptions },
    { name: "timeline", label: "Timeline", type: "select", options: contactForm.timelineOptions },
    { name: "message", label: "Tell Us About Your Project *", type: "textarea" }
  ]}
  submitText="Send Message"
  onSubmit={async (data) => {
    // API route: /api/contact
    // Send to email / CRM
  }}
/>
```

**Alternative Contact Methods**
- Email: contact@deltaflow.ai
- Phone: +1 (555) 123-4567
- Schedule a call (Calendly embed)

**Office Locations** (if applicable)

**FAQ**
```typescript
<FAQ questions={faqs} />
```

---

## 🔄 Development Workflow

### Phase 1: Setup (Day 1)
```bash
# Initialize Next.js 16 project
npx create-next-app@latest deltaflow-frontend --typescript --tailwind --app

# Install dependencies
npm install framer-motion lucide-react
npm install react-hook-form zod @hookform/resolvers
npm install next-seo react-intersection-observer
npm install clsx tailwind-merge

# Optional: shadcn/ui
npx shadcn-ui@latest init
```

### Phase 2: Foundation (Day 1-2)
1. Set up `lib/data.js` with all content
2. Create design tokens in `app/globals.css`
3. Configure `tailwind.config.ts`
4. Build layout components (Nav, Footer)

### Phase 3: Core Pages (Day 3-6)
1. Home page
2. Services overview
3. Portfolio
4. Contact

### Phase 4: Secondary Pages (Day 7-9)
1. Individual service pages
2. How We Work
3. About
4. FAQ page

### Phase 5: Polish (Day 10-12)
1. Animations
2. Micro-interactions
3. Responsive design
4. Performance optimization

### Phase 6: Content & SEO (Day 13-14)
1. Fill in all content from `data.js`
2. SEO meta tags
3. Structured data
4. Sitemap

### Phase 7: Deploy (Day 15)
1. Vercel deployment
2. Analytics setup
3. Form backend
4. Final testing

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Environment Variables
```.env.local
# Site
NEXT_PUBLIC_SITE_URL=https://deltaflow.ai

# Contact Form (choose one)
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxx
# OR use API route with email service

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📝 Success Criteria

✅ 30-second test passed (visitors understand what you do)  
✅ Clear value proposition on every page  
✅ Strong calls-to-action throughout  
✅ Mobile-responsive (perfect on all devices)  
✅ Lighthouse score >95  
✅ Fast load times (<2s)  
✅ SEO optimized  
✅ Contact form working  
✅ All content in `data.js`  
✅ Animations smooth (60fps)  

---

**Version**: 3.0  
**Framework**: Next.js 16  
**Business Model**: AI Development Agency  
**Last Updated**: 2026-01-02

---

> **Next Steps**: 
> 1. Review and approve this structure
> 2. Fill in specific content for `lib/data.js`
> 3. Begin Phase 1 implementation
