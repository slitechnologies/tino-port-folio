// src/pages/Contact.tsx
import React from 'react';
import ResumeDownload from '../components/ResumeDownload';

const Contact: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-slate-100 text-gray-800 font-sans px-6 py-20">
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Let’s Connect</h2>
        <p className="text-lg text-gray-700 mb-10">
          Whether you're hiring, collaborating, or exploring humanitarian tech, I’d love to hear from you.
          Reach out and let’s build something meaningful together.
        </p>

        <div className="grid gap-6 md:grid-cols-2 text-left">
          <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Email</h3>
            <p className="text-gray-700 mb-2">superlightintellex@gmail.com</p>
            <a
              href="mailto:superlightintellex@gmail.com"
              className="text-blue-600 hover:underline text-sm"
            >
              Send a message →
            </a>
          </div>

          <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">LinkedIn</h3>
            <p className="text-gray-700 mb-2">linkedin.com/in/tinodashe-kayenie</p>
            <a
              href="https://www.linkedin.com/in/tinodashe-kayenie-a24954117"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              Visit profile →
            </a>
          </div>

          <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">GitHub</h3>
            <p className="text-gray-700 mb-2">github.com/slitechnologies</p>
            <a
              href="https://github.com/slitechnologies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              Explore repos →
            </a>
          </div>

          <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">WhatsApp</h3>
            <p className="text-gray-700 mb-2">+263 773 598 539</p>
            <a
              href="https://wa.me/263779598539"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              Start chat →
            </a>
          </div>
        </div>

        <div className="mt-12">
  <ResumeDownload />
</div>

      </section>
    </main>
  );
};

export default Contact;
