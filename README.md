# React Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features smooth animations, dark theme, and easy content management through JSON configuration.

## Features

- ⚡ **Fast Development**: Built with Vite for lightning-fast development and builds
- 🎨 **Modern Design**: Dark theme with gradient accents and smooth animations
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🎭 **Smooth Animations**: Intersection Observer-based animations with customizable settings
- 📝 **Easy Content Management**: Update content through JSON files without touching code
- 🧩 **Component-Based**: Modular React components with TypeScript
- 🎯 **Accessible**: Built with accessibility best practices
- 🚀 **Performance Optimized**: Lazy loading and optimized assets

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons
- **Framer Motion** - Animations (via custom implementation)

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Content Management

All content is managed through JSON files in the `src/data/` directory:

### Personal Information (`src/data/portfolio-data.json`)

Update your personal details, contact information, experience, skills, and more:

\`\`\`json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "location": "Your Location",
    "email": "your.email@example.com",
    "avatar": "/path/to/your/avatar.jpg"
  }
}
\`\`\`

### Projects (`src/lib/projects.ts`)

Add or modify your projects:

\`\`\`typescript
{
  id: 1,
  slug: "project-slug",
  title: "Project Title",
  category: "Project Category",
  description: ["Project description paragraphs..."],
  technologies: ["React", "TypeScript", "etc"],
  coverImage: "/path/to/cover.jpg",
  liveUrl: "https://project-url.com"
}
\`\`\`

## Customization

### Colors and Theme

Modify the color scheme in `tailwind.config.js` and `src/index.css`:

\`\`\`css
:root {
  --primary: 186 100% 50%; /* Cyan */
  --secondary: 240 5% 10%; /* Dark gray */
  /* Add more custom colors */
}
\`\`\`

### Animations

Customize animation settings through the Animation Context or disable them entirely:

\`\`\`typescript
// In src/contexts/animation-context.tsx
const defaultSettings = {
  duration: 700,
  delay: 100,
  easing: "ease-out",
  intensity: 0.5,
  enabled: true
}
\`\`\`

### Components

All components are in `src/components/` and can be customized:

- `src/components/ui/` - Base UI components
- `src/components/` - Page-specific components

## Building for Production

\`\`\`bash
npm run build
# or
yarn build
# or
pnpm build
\`\`\`

The built files will be in the `dist/` directory, ready for deployment.

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## Project Structure

\`\`\`
src/
├── components/          # React components
│   ├── ui/             # Base UI components
│   └── ...             # Feature components
├── contexts/           # React contexts
├── data/              # JSON data files
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and data
├── pages/             # Page components
└── main.tsx           # App entry point
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

# Portfolio Website with JSON Content Management

This portfolio website is designed to be easily customizable through a JSON data file. This allows you to update your content without having to modify the codebase directly.

## How to Update Content

All content is stored in the `data/portfolio-data.json` file. You can edit this file to update the information displayed on your portfolio website.

### Structure of the JSON File

The JSON file is organized into several sections:

1. **Meta**: Contains metadata about the website, such as the title and description.
2. **Personal**: Contains personal information like name, title, location, contact details, and social media links.
3. **About**: Contains information about yourself, including bio, professional focus, languages, and interests.
4. **Navigation**: Contains the navigation menu items.
5. **Experience**: Contains your work experience details.
6. **Credentials**: Contains your certifications, education, and skills.
7. **Technical Skills**: Contains your technical skills categorized by type.

### Updating Specific Sections

#### Personal Information

\`\`\`json
"personal": {
  "name": "Your Name",
  "title": "Your Title",
  "location": "Your Location",
  "avatar": "/path/to/your/avatar.png",
  "email": "your.email@example.com",
  "phone": "Your Phone Number",
  "workingHours": "Your Working Hours",
  "availableForWork": true,
  "badges": ["Badge 1", "Badge 2", "Badge 3"],
  "social": [
    {
      "platform": "GitHub",
      "url": "https://github.com/yourusername",
      "icon": "Github"
    },
    // Add more social links as needed
  ]
}
\`\`\`

#### About Information

\`\`\`json
"about": {
  "bio": "Your bio text here...",
  "focus": [
    "Focus point 1",
    "Focus point 2",
    "Focus point 3"
  ],
  "languages": [
    {
      "name": "Language Name",
      "proficiency": "Proficiency Level",
      "level": 100,
      "flag": "🏳️"
    },
    // Add more languages as needed
  ],
  "interests": [
    "Interest 1",
    "Interest 2",
    // Add more interests as needed
  ]
}
\`\`\`

#### Experience

\`\`\`json
"experience": [
  {
    "title": "Job Title",
    "company": "Company Name",
    "period": "Employment Period",
    "description": "Job description...",
    "achievements": [
      "Achievement 1",
      "Achievement 2",
      // Add more achievements as needed
    ],
    "technologies": ["Technology 1", "Technology 2"]
  },
  // Add more experiences as needed
]
\`\`\`

#### Credentials

\`\`\`json
"credentials": {
  "certifications": [
    {
      "name": "Certification Name",
      "issuer": "Issuer Name",
      "date": "Issue Date",
      "logo": "/path/to/logo.png"
    },
    // Add more certifications as needed
  ],
  "education": [
    {
      "degree": "Degree Name",
      "institution": "Institution Name",
      "year": "Year Range",
      "logo": "/path/to/logo.png"
    },
    // Add more education entries as needed
  ],
  "skills": [
    "Skill 1",
    "Skill 2",
    // Add more skills as needed
  ]
}
\`\`\`

#### Technical Skills

\`\`\`json
"technicalSkills": {
  "design": [
    "Design Skill 1",
    "Design Skill 2",
    // Add more design skills as needed
  ],
  "development": [
    "Development Skill 1",
    "Development Skill 2",
    // Add more development skills as needed
  ],
  "uxMethods": [
    "UX Method 1",
    "UX Method 2",
    // Add more UX methods as needed
  ],
  "softSkills": [
    "Soft Skill 1",
    "Soft Skill 2",
    // Add more soft skills as needed
  ]
}
\`\`\`

## Adding Images

To add or update images:

1. Place your image files in the `public` directory.
2. Update the paths in the JSON file to point to your new images.

## Projects

Projects are managed separately in the `lib/projects.ts` file. You can update this file to add, remove, or modify projects.

## Development

To run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

This refactoring allows users to update all content through the JSON file without modifying the codebase. The components now dynamically read from this data source, making content updates easier and more manageable.
