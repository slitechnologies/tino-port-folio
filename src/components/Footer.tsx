import React from 'react';
import { Heart, Code, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitLab',
      url: 'https://gitlab.com/slitechnologies1',
      icon: 'M4.918 1.192L8 8.5l3.082-7.308c.224-.532.6-.484.832 0L15 8.5l3.082-7.308c.226-.533.6-.484.832 0L22.5 8.5 19.418 1.192c-.224-.532-.6-.484-.832 0L15 8.5l-3.082-7.308c-.226-.533-.6-.484-.832 0L8 8.5 4.918 1.192c-.224-.532-.6-.484-.832 0L0 8.5l3.082-7.308c.226-.533.6-.484.832 0zM0 8.5l4.582 10.816c.224.532.6.484.832 0L8 15.5l2.586 3.816c.226.532.6.484.832 0L15 15.5l2.586 3.816c.226.532.6.484.832 0L22.5 8.5 18.918 1.192c-.224-.532-.6-.484-.832 0L15 8.5l-3.082-7.308c-.226-.533-.6-.484-.832 0L8 8.5 4.918 1.192c-.224-.532-.6-.484-.832 0z'
    },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/tinodashe-kayenie-a24954117', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'Twitter', url: 'https://twitter.com/@TKayenie', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
    { name: 'GitHub', url: 'https://gitHub.com/slitechnologies', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
    { name: 'Email', url: 'mailto:tkayenie@gmail.com', icon: 'M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: 'public/Tino_Kay_Resume.pdf' },
    { name: 'Blog', path: '/blog' },
  ];

  const techStack = ['React', 'TypeScript', 'Terraform', 'Spring Boot', 'Python', 'AWS', 'PostgreSQL', 'Docker'];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 pt-12 pb-8 mt-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute -top-10 left-1/4 w-20 h-20 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -top-10 right-1/4 w-20 h-20 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Code className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Tinodashe.dev</h3>
                <p className="text-sm text-slate-400">Full-Stack Architect</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Building resilient systems that scale. Empowering reconnection through
              thoughtful architecture and precision engineering.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span>Made with passion in {currentYear}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-slate-800">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-slate-400 hover:text-blue-400 transition-colors py-1.5 hover:translate-x-1 duration-200 flex items-center gap-2 group"
                >
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-slate-800">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-all hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-slate-800/30 border border-slate-700 rounded-xl hover:bg-slate-800/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-110"
                aria-label={`Visit ${social.name} profile`}
              >
                <svg
                  className="w-6 h-6 fill-slate-400 group-hover:fill-blue-400 transition-colors"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={social.icon} />
                </svg>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded whitespace-nowrap">
                    {social.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

        {/* Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-400">
              © {currentYear} Tinodashe Madzinga. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Founder of Sharp Turn Technologies • Empowering digital transformation
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="/privacy"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-500 text-sm">
              v1.0 • Last updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="mt-8 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105 font-medium group"
          >
            <span>Start a Conversation</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
