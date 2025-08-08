export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "job-finder-app",
    title: "Job Finder App",
    category: "Mobile App",
    shortDescription: "A modern job search application designed to connect job seekers with employers efficiently.",
    description: [
      "The Job Finder App is a comprehensive mobile application designed to streamline the job search process. It provides an intuitive interface for job seekers to discover opportunities that match their skills and preferences.",
      "The app features a smart matching algorithm that analyzes user profiles and job requirements to suggest the most relevant positions. Users can easily filter jobs by location, industry, experience level, and salary range.",
      "For employers, the platform offers tools to post job listings, review applications, and communicate with potential candidates directly through the app.",
    ],
    features: [
      "Personalized job recommendations based on user skills and preferences",
      "Real-time notifications for new job postings and application updates",
      "In-app messaging system for direct communication between employers and candidates",
      "Resume builder with templates and formatting tools",
      "Interview scheduling and calendar integration",
      "Detailed analytics for job seekers to track their application progress",
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "AWS", "Firebase"],
    coverImage: "/placeholder.svg?height=400&width=800",
    thumbnailImage: "/placeholder.svg?height=200&width=300",
    gallery: [
      { url: "/placeholder.svg?height=200&width=300", caption: "Home Screen with Job Recommendations" },
      { url: "/placeholder.svg?height=200&width=300", caption: "Job Detail View" },
      { url: "/placeholder.svg?height=200&width=300", caption: "User Profile and Skills" },
      { url: "/placeholder.svg?height=200&width=300", caption: "Application Tracking Dashboard" },
    ],
    timeline: "3 months (Q2 2023)",
    role: "Lead Product Designer",
    liveUrl: "https://example.com/job-finder",
    githubUrl: "https://github.com/example/job-finder",
    relatedProjects: [
      {
        slug: "finance-dashboard",
        title: "Finance Dashboard",
        category: "Web Application",
        image: "/placeholder.svg?height=64&width=64",
      },
      {
        slug: "ecommerce-redesign",
        title: "E-Commerce Redesign",
        category: "UX Case Study",
        image: "/placeholder.svg?height=64&width=64",
      },
    ],
  },
  {
    id: 2,
    slug: "finance-dashboard",
    title: "Finance Dashboard",
    category: "Web Application",
    shortDescription:
      "A comprehensive financial management dashboard for tracking investments, expenses, and financial goals.",
    description: [
      "The Finance Dashboard is a powerful web application designed to help users manage their personal finances in one centralized location. It provides real-time insights into spending patterns, investment performance, and progress toward financial goals.",
      "The dashboard features interactive charts and visualizations that make complex financial data easy to understand at a glance. Users can connect multiple accounts, categorize transactions automatically, and receive personalized recommendations to improve their financial health.",
      "The application was designed with a focus on security, using bank-level encryption and authentication protocols to protect sensitive financial information.",
    ],
    features: [
      "Account aggregation from multiple financial institutions",
      "Automated transaction categorization and tagging",
      "Budget creation and expense tracking",
      "Investment portfolio analysis and performance metrics",
      "Goal setting with progress tracking",
      "Customizable reports and data exports",
      "Financial insights and recommendations",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Plaid API", "PostgreSQL", "Vite"],
    coverImage: "/placeholder.svg?height=400&width=800",
    thumbnailImage: "/placeholder.svg?height=200&width=300",
    gallery: [
      { url: "/placeholder.svg?height=200&width=300", caption: "Main Dashboard Overview" },
      { url: "/placeholder.svg?height=200&width=300", caption: "Expense Analysis" },
      { url: "/placeholder.svg?height=200&width=300", caption: "Investment Portfolio" },
      { url: "/placeholder.svg?height=200&width=300", caption: "Financial Goals Tracker" },
    ],
    timeline: "4 months (Q3-Q4 2022)",
    role: "UX/UI Designer & Frontend Developer",
    liveUrl: "https://example.com/finance-dashboard",
    githubUrl: "https://github.com/example/finance-dashboard",
    relatedProjects: [
      {
        slug: "job-finder-app",
        title: "Job Finder App",
        category: "Mobile App",
        image: "/placeholder.svg?height=64&width=64",
      },
      {
        slug: "ecommerce-redesign",
        title: "E-Commerce Redesign",
        category: "UX Case Study",
        image: "/placeholder.svg?height=64&width=64",
      },
    ],
  },
  {
    id: 3,
    slug: "ecommerce-redesign",
    title: "E-Commerce Redesign",
    category: "UX Case Study",
    shortDescription:
      "A complete redesign of an e-commerce platform focused on improving user experience and conversion rates.",
    description: [
      "This project involved a comprehensive redesign of an established e-commerce platform that was struggling with user engagement and conversion rates. The goal was to create a more intuitive, visually appealing shopping experience that would drive sales and customer satisfaction.",
      "The redesign process began with extensive user research, including interviews, surveys, and usability testing of the existing platform. This research revealed key pain points in the customer journey, such as a complicated checkout process and difficulty finding products.",
      "Based on these insights, I developed a new information architecture and user flow that simplified navigation and streamlined the purchase process. The visual design was updated with a clean, modern aesthetic that highlighted product imagery and created a consistent brand experience across all touchpoints.",
    ],
    features: [
      "Simplified product navigation and filtering system",
      "Redesigned product detail pages with enhanced imagery and information",
      "Streamlined checkout process reducing steps by 40%",
      "Personalized product recommendations based on browsing history",
      "Mobile-first responsive design",
      "Improved search functionality with predictive suggestions",
      "Enhanced wishlist and saved items functionality",
    ],
    technologies: ["Figma", "Adobe XD", "HTML/CSS", "JavaScript", "Shopify", "Hotjar", "Google Analytics"],
    coverImage: "/placeholder.svg?height=400&width=800",
    thumbnailImage: "/placeholder.svg?height=200&width=300",
    gallery: [
      { url: "/placeholder.svg?height=200&width=300", caption: "Homepage Design" },
      { url: "/placeholder.svg?height=200&width=300", caption: "Product Category Page" },
      { url: "/placeholder.svg?height=200&width=300", caption: "Product Detail Page" },
      { url: "/placeholder.svg?height=200&width=300", caption: "Checkout Process" },
    ],
    client: "Fashion Retailer Inc.",
    timeline: "6 months (Q1-Q2 2022)",
    role: "Lead UX Designer",
    liveUrl: "https://example.com/fashion-retailer",
    relatedProjects: [
      {
        slug: "job-finder-app",
        title: "Job Finder App",
        category: "Mobile App",
        image: "/placeholder.svg?height=64&width=64",
      },
      {
        slug: "finance-dashboard",
        title: "Finance Dashboard",
        category: "Web Application",
        image: "/placeholder.svg?height=64&width=64",
      },
    ],
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
