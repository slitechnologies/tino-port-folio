import React from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  Users, 
  Target, 
  Sparkles,
  Heart,
  Briefcase,
  Award,
  BookOpen,
  Zap
} from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { category: 'Backend Architecture', icon: <Server size={20} />, items: [
      'Spring Boot Microservices', 'Spring Cloud Gateway', 'Eureka Service Discovery',
      'Circuit Breaking (Resilience4j)', 'Rate Limiting & Redis', 'Message Queues (RabbitMQ)'
    ]},
    { category: 'Data & AI', icon: <Database size={20} />, items: [
      'Python (Django REST, FastAPI)', 'PyTorch & TensorFlow', 'PostgreSQL & MongoDB',
      'Redis Caching', 'Data Pipelines', 'Machine Learning Models'
    ]},
    { category: 'Frontend', icon: <Code size={20} />, items: [
      'React & TypeScript', 'Next.js Framework', 'Tailwind CSS',
      'State Management', 'Component Libraries', 'Progressive Web Apps'
    ]},
    { category: 'DevOps & Cloud', icon: <Cloud size={20} />, items: [
      'AWS & Kubernetes', 'Terraform & CloudFormation', 'Docker & Containerization',
      'CI/CD Pipelines', 'GitHub/GitLab Actions', 'Monitoring & Observability'
    ]},
  ];

  const principles = [
    { icon: <Heart size={20} />, title: 'Human-Centered Design', description: 'Building technology that solves real human problems with empathy.' },
    { icon: <Target size={20} />, title: 'Strategic Architecture', description: 'Designing systems that scale gracefully under pressure.' },
    { icon: <Sparkles size={20} />, title: 'Technical Excellence', description: 'Writing clean, maintainable code with modern best practices.' },
    { icon: <Users size={20} />, title: 'Collaborative Leadership', description: 'Mentoring teams and fostering inclusive engineering culture.' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
          <div className="max-w-5xl mx-auto">
            {/* Header with badge */}
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Full-Stack Architect • System Designer • Humanitarian Technologist
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600">
                  Architecting Systems
                </span>
                <span className="block text-gray-900 mt-2">
                  That Connect Humanity
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                I build resilient, scalable platforms that empower communities and 
                transform lives—starting with reconnecting families at{' '}
                <span className="font-bold text-blue-700">Sharp Turn Technologies</span>.
              </p>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-12 border border-gray-100">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Tinodashe Madzinga</h3>
                      <p className="text-gray-600">Founder & Lead Architect • Sharp Turn Technologies</p>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    I specialize in engineering <span className="font-bold text-blue-700">mission-critical systems</span> that handle millions of requests with 99.9% uptime. My work spans from microservice orchestration to AI-powered data pipelines, always with a focus on <span className="font-bold text-cyan-600">human impact</span>.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-700">
                    With a decade of experience across <span className="font-bold">backend architecture</span>, <span className="font-bold">cloud infrastructure</span>, and <span className="font-bold">team leadership</span>, I bring both technical depth and strategic vision to every project. I believe in building technology that's not just functional, but <span className="font-bold text-purple-600">transformative</span>.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-700">Experience</span>
                    </div>
                    <div className="text-3xl font-bold text-blue-700">5+ Years</div>
                    <p className="text-sm text-gray-600">Full-stack development</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-cyan-500" />
                      <span className="font-semibold text-gray-700">Projects</span>
                    </div>
                    <div className="text-3xl font-bold text-cyan-700">10+ Systems</div>
                    <p className="text-sm text-gray-600">Production deployments</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-purple-500" />
                      <span className="font-semibold text-gray-700">Mentorship</span>
                    </div>
                    <div className="text-3xl font-bold text-purple-700">15+ Teams</div>
                    <p className="text-sm text-gray-600">Engineering leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Technical <span className="text-blue-600">Excellence</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mastery across the full stack—from infrastructure to interface
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{skillGroup.category}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Engineering <span className="text-cyan-600">Philosophy</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide my technical decisions and team leadership
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-100 to-blue-100 w-fit mb-4 group-hover:scale-110 transition-transform">
                    {principle.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-gray-600 text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 sm:p-12 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-8 h-8" />
                <h3 className="text-2xl sm:text-3xl font-bold">The Mission</h3>
              </div>
              
              <p className="text-lg sm:text-xl leading-relaxed mb-6">
                Every line of code I write serves a greater purpose: to create technology that 
                <span className="font-bold"> connects people</span>, 
                <span className="font-bold"> solves real problems</span>, and 
                <span className="font-bold"> empowers communities</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                At <span className="font-bold">Sharp Turn Technologies</span>, we're redefining what's possible 
                in humanitarian tech—starting with reconnecting families separated by crisis. 
                This mission drives every architectural decision, every optimization, and every 
                line of code I write.
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-lg font-medium">
                  "Technology should serve humanity—not the other way around."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Let's Build Something <span className="text-blue-600">Meaningful</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you need a resilient backend system, a scalable platform, 
              or technical leadership for your team—I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all hover:scale-105"
              >
                Start a Conversation
              </a>
              <a 
                href="/projects" 
                className="px-8 py-4 bg-white text-gray-800 font-bold rounded-xl border-2 border-gray-300 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;