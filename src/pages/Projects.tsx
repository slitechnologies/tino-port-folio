import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Code,  
  Cpu, 
  Users, 
  Zap, 
  Award,
  Globe,
  ChevronRight,
  Sparkles,
  BookOpen,
  TrendingUp
} from 'lucide-react';

type Project = {
  title: string;
  role: string;
  description: string;
  techStack: string[];
  impact: string;
  github?: string;
  demo?: string;
  status: 'live' | 'archived' | 'active';
  complexity: number; // 1-5
  icon: string;
  color: string;
};

const projects: Project[] = [
  {
    title: 'Find Your Keen',
    role: 'Founder & Full-Stack Architect',
    description:
      'A humanitarian platform reconnecting separated families through AI-powered matching, searchable profiles, and emotional storytelling. Built with microservices, real-time notifications, and secure document verification.',
    techStack: ['React', 'TypeScript', 'Spring Boot', 'Redis', 'PostgreSQL', 'AWS', 'Docker', 'WebSocket'],
    impact:
      'Enabled 47+ family reconnections, processed 1,200+ profiles with 99.9% uptime. Built trust through warm UX and scalable architecture handling 10K+ monthly users.',
    github: 'https://github.com/slitechnologies/find-your-keen',
    demo: 'https://find-your-keen.netlify.app',
    status: 'live',
    complexity: 5,
    icon: '👨‍👩‍👧‍👦',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Spring Cloud Gateway API Router',
    role: 'Backend Systems Engineer',
    description:
      'Centralized routing layer for 15+ microservices featuring intelligent load balancing, Redis-based rate limiting, Resilience4j circuit breaking, and real-time monitoring with Grafana dashboards.',
    techStack: ['Spring Boot', 'Spring Cloud Gateway', 'Redis', 'Resilience4j', 'Kubernetes', 'Prometheus', 'Grafana'],
    impact:
      'Reduced latency by 40%, improved system resilience from 95% to 99.5% uptime, and scaled to handle 50K RPM across distributed services.',
    github: 'https://gitlab.com/slitechnologies1/telemedy',
    status: 'active',
    complexity: 4,
    icon: '🌐',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'AI/ML Deployment Pipeline',
    role: 'ML Engineer & API Developer',
    description:
      'End-to-end ML pipeline for training PyTorch models with automated deployment via FastAPI. Features A/B testing, model versioning, and CI/CD integration with automated rollback capabilities.',
    techStack: ['PyTorch', 'FastAPI', 'Docker', 'GitHub Actions', 'MLflow', 'S3', 'Celery'],
    impact:
      'Reduced deployment time from days to hours, enabled real-time inference with <100ms latency, and improved model accuracy by 15% through automated retraining.',
    github: 'https://github.com/slitechnologies/ml-projects',
    demo: '#',
    status: 'archived',
    complexity: 4,
    icon: '🤖',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'School Website ',
    role: 'Full-Stack Developer',
    description:
      'Real-time analytics platform tracking reconnection success metrics, user engagement, and geographical patterns. Features interactive maps, predictive analytics, and automated reporting.',
    techStack: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Netlify'],
    impact:
      'Provided data-driven insights improving match success rate by 35%, enabled stakeholders to make informed decisions with real-time dashboards.',
    github: 'https://github.com/slitechnologies/passmore-academy',
    demo: 'https://passmore-academy.netlify.app',
    status: 'active',
    complexity: 3,
    icon: '📊',
    color: 'from-orange-500 to-red-500'
  }
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filters = [
    { key: 'all', label: 'All Projects', icon: '✨', count: projects.length },
    { key: 'live', label: 'Live Production', icon: '🚀', count: projects.filter(p => p.status === 'live').length },
    { key: 'active', label: 'Active Development', icon: '⚡', count: projects.filter(p => p.status === 'active').length },
    { key: 'complex', label: 'High Complexity', icon: '🎯', count: projects.filter(p => p.complexity >= 4).length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'complex'
    ? projects.filter(p => p.complexity >= 4)
    : projects.filter(p => p.status === activeFilter);

  const getComplexityStars = (complexity: number) => {
    return '★'.repeat(complexity) + '☆'.repeat(5 - complexity);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
                <Sparkles size={14} />
                Production-Grade Systems • Real Impact • Open Source
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600">
                  Engineering Portfolio
                </span>
                <span className="block text-gray-900 mt-2">
                  That Creates Real Change
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From humanitarian platforms to enterprise systems—each project demonstrates 
                scalable architecture, clean code, and measurable impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { value: projects.length, label: 'Production Projects', icon: <Code className="w-5 h-5" /> },
                { value: '10K+', label: 'Monthly Users', icon: <Users className="w-5 h-5" /> },
                { value: '99.9%', label: 'System Uptime', icon: <Zap className="w-5 h-5" /> },
                { value: '47+', label: 'Families Reconnected', icon: <Award className="w-5 h-5" /> },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Filters */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeFilter === filter.key
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <span>{filter.icon}</span>
                    {filter.label}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activeFilter === filter.key 
                        ? 'bg-white/20' 
                        : 'bg-gray-100'
                    }`}>
                      {filter.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-6 lg:grid-cols-2">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Card */}
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Header with gradient */}
                    <div className={`relative h-2 bg-gradient-to-r ${project.color}`}>
                      <div className="absolute -top-6 left-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-2xl shadow-lg`}>
                          {project.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 pt-8">
                      {/* Title & Status */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              project.status === 'live' 
                                ? 'bg-green-100 text-green-800' 
                                : project.status === 'active'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {project.status === 'live' ? '🚀 Live' : '⚡ Active'}
                            </span>
                            <span className="text-xs text-gray-500">
                              {getComplexityStars(project.complexity)}
                            </span>
                          </div>
                        </div>
                        
                        {hoveredProject === index && (
                          <div className="animate-pulse">
                            <ChevronRight className="w-5 h-5 text-blue-500" />
                          </div>
                        )}
                      </div>
                      
                      {/* Role */}
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <BookOpen className="w-4 h-4" />
                        <span className="font-medium">{project.role}</span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Cpu className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">Tech Stack</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Impact */}
                      <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
                        <div className="flex items-start gap-2">
                          <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div>
                            <div className="text-sm font-medium text-blue-900 mb-1">Measured Impact</div>
                            <p className="text-sm text-blue-800">{project.impact}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Links */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors text-sm font-medium"
                            >
                              <Github className="w-4 h-4" />
                              View Code
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </a>
                          )}
                        </div>
                        
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                          Case Study
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Want to See More Technical Details?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Each project includes architecture diagrams, code samples, performance metrics, 
                  and lessons learned. Available upon request for serious collaborations.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all hover:scale-105"
                >
                  <Globe className="w-5 h-5" />
                  Request Technical Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;