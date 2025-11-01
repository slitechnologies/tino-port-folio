import React from 'react';

const About: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans px-6 py-16">
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          About Me
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          I’m Tinodashe—a backend developer, system architect, and founder of <strong>Sharp Turn Technologies</strong>, a humanitarian platform reconnecting separated families. I specialize in building resilient, scalable systems using microservice architecture, cloud-native tools, and modern DevOps practices.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          My expertise spans <strong>Spring Boot</strong> (microservices, routing, load balancing, rate limiting, circuit breaking), <strong>Python</strong> (Django REST, FastAPI, PyTorch), and <strong>React + TypeScript</strong> for intuitive UI/UX. I architect full-stack solutions with empathy, precision, and purpose.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          I’m deeply involved in every layer of the software lifecycle—from infrastructure as code with <strong>Terraform</strong> and <strong>CloudFormation</strong>, to configuration with <strong>Ansible</strong>, to CI/CD pipelines with <strong>GitHub Actions</strong> and <strong>GitLab CI</strong>. My database fluency includes <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, <strong>Redis</strong>, and <strong>MySQL Workbench</strong>.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Whether I’m coding in <strong>PyCharm</strong>, <strong>VS Code</strong>, or <strong>IntelliJ</strong>, I bring strategic rigor and humanitarian values to every project. My mission is to build technology that matters—scalable, maintainable, and emotionally resonant.
        </p>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Core Skills</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <li>Spring Boot & Microservices</li>
            <li>Spring Cloud Gateway</li>
            <li>Eureka Discovery</li>
            <li>Redis & Rate Limiting</li>
            <li>Resilience4j Circuit Breaking</li>
            <li>Django REST & FastAPI</li>
            <li>PyTorch (AI/ML)</li>
            <li>React & TypeScript</li>
            <li>Terraform & CloudFormation</li>
            <li>Ansible</li>
            <li>Docker & CI/CD</li>
            <li>PostgreSQL, MongoDB, Redis</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About;
