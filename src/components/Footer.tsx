import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-gray-600 text-center py-6 mt-12">
      <p className="text-sm">
        Built with ❤️ by Tinodashe — Empowering reconnection through resilient systems.
      </p>
      <p className="text-xs mt-2">© {new Date().getFullYear()} Tinodashe.dev. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

