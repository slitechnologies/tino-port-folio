import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TechOrbit from '../components/TechOrbit';
import { ArrowRight, Code, Server, Cpu, Database, Cloud, Zap } from 'lucide-react';
import HolographicCodeShowcase from '../components/HolographicCodeShowcase';

interface TechDetail {
  icon: React.ReactNode;
  description: string;
  projects: number;
  experience: string;
}

const techDetails: Record<string, TechDetail> = {
  React: {
    icon: <Code size={20} />,
    description: 'Modern frontend architecture with TypeScript, hooks, and optimized rendering',
    projects: 12,
    experience: '2 years'
  },
  Spring: {
    icon: <Server size={20} />,
    description: 'Enterprise microservices, REST APIs, and Spring Security implementations',
    projects: 8,
    experience: '4 years'
  },
  Python: {
    icon: <Cpu size={20} />,
    description: 'Data pipelines, machine learning systems, and automation scripts',
    projects: 15,
    experience: '3 years'
  },
  AWS: {
    icon: <Cloud size={20} />,
    description: 'Cloud infrastructure, serverless architecture, and DevOps pipelines',
    projects: 10,
    experience: '2 years'
  },
  K8s: {
    icon: <Zap size={20} />,
    description: 'Container orchestration, deployment strategies, and cluster management',
    projects: 6,
    experience: '2 years'
  },
  PostgreSQL: {
    icon: <Database size={20} />,
    description: 'Relational databases, query optimization, and data modeling',
    projects: 20,
    experience: '5 years'
  },
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeTech, setActiveTech] = useState<string>('React');
  const techKeys = Object.keys(techDetails);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <TechOrbit />

      <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 -z-5" />

      <div className="fixed inset-0 -z-10 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                             linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* ======== ADD HEADSHOT HERE ======== */}
  <div className="absolute top-4 right-4 z-20 hidden md:block">
    <div className="relative group">
      <div className="w-16 h-16 rounded-full border-2 border-blue-400/30 overflow-hidden shadow-lg shadow-blue-500/20">
        <img 
          src="/images/profile_1.jpg" 
          alt="Tinodashe - Full Stack Architect"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      {/* Glow effect on hover */}
      <div className="absolute -inset-1 rounded-full bg-blue-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>
  {/* ======== END HEADSHOT ======== */}
  
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6 group hover:border-blue-500/50 transition-all cursor-pointer">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse group-hover:animate-none" />
            Tino's Portfolio Website
            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* MAIN CONTENT GRID WITH OPTION 4 LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* LEFT COLUMN - Main content (2/3 width on desktop) */}
          <div className="lg:col-span-2">
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-6 sm:mb-8">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white animate-gradient">
                  ENGINEER
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mt-2 sm:mt-4 animate-gradient">
                  ARCHITECT
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-cyan-300 mt-2 sm:mt-4 animate-gradient">
                  INNOVATE
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-lg leading-relaxed">
                I'm <span className="font-bold text-blue-300">Tinodashe</span> — building resilient systems at scale.
                Founder of <span className="font-bold text-cyan-300">Sharp Turn Technologies</span>.
                This portfolio uses <span className="text-yellow-300">WebGL</span> and <span className="text-purple-300">Three.js</span>.
              </p>

              <div className="mb-8 sm:mb-10 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/10">
                    {techDetails[activeTech]?.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-300">{activeTech}</h3>
                    <div className="flex gap-4 text-sm text-gray-400">
                      <span>{techDetails[activeTech]?.projects} projects</span>
                      <span>•</span>
                      <span>{techDetails[activeTech]?.experience}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  {techDetails[activeTech]?.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {techKeys.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => setActiveTech(tech)}
                      onMouseEnter={() => setActiveTech(tech)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeTech === tech
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
                {[
                  {
                    value: '5+',
                    label: 'Years',
                    color: 'text-blue-400',
                    detail: 'Full-stack expertise',
                    icon: '🎯'
                  },
                  {
                    value: '10+',
                    label: 'Projects',
                    color: 'text-purple-400',
                    detail: 'Production systems',
                    icon: '🚀'
                  },
                  {
                    value: '100%',
                    label: 'Commitment',
                    color: 'text-green-400',
                    detail: 'Client satisfaction',
                    icon: '⭐'
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all duration-300 group cursor-pointer hover:scale-105"
                  >
                    <div className="text-lg sm:text-2xl font-bold mb-1 flex items-center gap-2">
                      <span>{stat.icon}</span>
                      <span className={stat.color}>
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                    <div className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {stat.detail}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/projects')}
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <span>Explore Interactive Projects</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:shadow-lg"
                >
                  Request Technical Demo
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Holographic code card (1/3 width on desktop) */}
          <div className="lg:col-span-1">
            <div className="relative h-[300px] sm:h-[350px] lg:h-[450px] rounded-xl lg:rounded-2xl overflow-hidden border border-white/20 bg-black/40 backdrop-blur-sm group">
              
              {/* Your image background - Now subtle */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                style={{ backgroundImage: "url('/images/profile.jpg')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
              </div>
              
              {/* Holographic overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
              
              {/* Holographic Code Showcase */}
              <div className="absolute inset-0 p-2 sm:p-3">
                <div className="h-full border border-white/20 rounded-lg lg:rounded-xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-gray-900/40 via-black/50 to-gray-900/40">
                  <HolographicCodeShowcase />
                </div>
              </div>
              
              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-center">
                  <p className="text-xs text-cyan-300 font-mono">
                    {/* Holographic Code Showcase.tsx */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES SECTION (Below the main grid) */}
        <div className="mt-20 sm:mt-32 grid md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: '🎮',
              title: 'Real-time 3D',
              description: 'WebGL-powered interactive visualization',
              gradient: 'from-blue-500/10 to-blue-900/5'
            },
            {
              icon: '⚡',
              title: '60 FPS Physics',
              description: 'Smooth animations with Three.js',
              gradient: 'from-purple-500/10 to-purple-900/5'
            },
            {
              icon: '🔗',
              title: 'Mouse Reactive',
              description: 'Hover & click interactions',
              gradient: 'from-cyan-500/10 to-cyan-900/5'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105`}
            >
              <div className="text-2xl sm:text-3xl mb-3">{feature.icon}</div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* SCROLL INDICATOR */}
        <div className="mt-12 sm:mt-20 text-center">
          <div className="text-gray-500 text-sm mb-2 animate-pulse">Scroll for more</div>
          <div className="flex justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent" />
          </div>
        </div>
      </div>

      {/* BOTTOM GRADIENT FADE */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none -z-5" />
    </div>
  );
};

export default Home;