import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-slate-100 text-gray-800 font-sans">
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
          Architecting Resilient Systems<br />
          With Heart and Precision
        </h2>
        <p className="text-lg md:text-xl max-w-2xl text-gray-700 mb-10">
          I’m Tinodashe—a FullStack developer, system architect, and founder of <strong>Sharp Turn Technologies</strong>. I build scalable, mission-driven platforms using Spring Boot, Python, React, and DevOps tools.
        </p>
        <div className="flex gap-4">
          <a
            href="/projects"
            className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="border border-blue-700 text-blue-700 px-6 py-3 rounded-md hover:bg-blue-100 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
