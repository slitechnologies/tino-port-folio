import React from 'react';

type Project = {
  title: string;
  role: string;
  description: string;
  techStack: string[];
  impact: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: 'Find Your Keen',
    role: 'Founder & Full-Stack Architect',
    description:
      'A humanitarian platform reconnecting separated families through searchable profiles, admin tools, and emotional storytelling.',
    techStack: ['React', 'TypeScript', 'Spring Boot', 'Redis', 'Netlify'],
    impact:
      'Enabled dozens of reconnections and built trust through warm UX and scalable architecture.',
    github: 'https://github.com/slitechnologies/find-your-keen',
    demo: 'https://find-your-keen.netlify.app',
  },
  {
    title: 'Spring Cloud Gateway API Router',
    role: 'Backend Developer',
    description:
      'Centralized routing for microservices using Spring Cloud Gateway, Eureka, Redis rate limiting, and Resilience4j circuit breaking.',
    techStack: ['Spring Boot', 'Spring Cloud Gateway', 'Redis', 'Resilience4j'],
    impact:
      'Improved system resilience and scalability across distributed services.',
  },
  {
    title: 'AI/ML Deployment Pipeline',
    role: 'ML Engineer & API Developer',
    description:
      'Trained and deployed PyTorch models via FastAPI, with Dockerized endpoints and CI/CD integration.',
    techStack: ['PyTorch', 'FastAPI', 'Docker', 'GitHub Actions'],
    impact:
      'Reduced deployment time and enabled real-time inference for production-grade ML models.',
  },
];

const Projects: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-800 font-sans px-6 py-16">
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Role:</strong> {project.role}
              </p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mb-4">
                <strong>Tech Stack:</strong>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                <strong>Impact:</strong> {project.impact}
              </p>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline text-sm"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline text-sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
